<?php

namespace App\Service;

use DateTime;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

abstract class AbstractService
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Entity management
     */
    public function createEntity($request, $entity, $form)
    {
        return $this->createOrUpdateAnEntity($request, $entity, $form);
    }

    public function updateEntity($request, $entity, $form)
    {
        return $this->createOrUpdateAnEntity($request, $entity, $form, true);
    }

    private function createOrUpdateAnEntity($request, $entity, $form, $isUpdate = false)
    {
        $requestData = $this->processRequestBeforeSaving($request);

        $form->handleRequest($request);
        $form->submit($requestData);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$isUpdate) {
                $this->entityManager->persist($entity);
            }
            
            $this->entityManager->flush();

            return true;
        }
        
        return false;
    }

    public function deleteEntity($entity)
    {
        $this->entityManager->remove($entity);
        $this->entityManager->flush();
    }

    public function setNewEntityRecordTimestamp($record)
    {
        $record->setCreatedAt(new DateTimeImmutable('now'));
        $record->setUpdatedAt(new DateTime('now'));

        return $record;
    }

    /**
     * Http exceptions
     */
    public function throwBadRequestHttpException($customErrorMessage = null)
    {
        throw new BadRequestHttpException($customErrorMessage ?? 'Bad Request: Missing or malformed parameters');
    }

    public function throwNotFoundEntityHttpException($customErrorMessage = null)
    {
        throw new NotFoundHttpException($customErrorMessage ?? 'Entity not found');
    }

    /**
     * Files management
     */
    public function createFile($folderPath, $fileName, $fileContent)
    {
        $filesystem = new Filesystem();

        if (!$filesystem->exists($folderPath)) {
            $filesystem->mkdir($folderPath);
        }

        $filePath = $folderPath . '/' . $fileName;

        $filesystem->dumpFile($filePath, $fileContent);
    }

    public function renameFile($oldFilePath, $newFilePath)
    {
        $filesystem = new Filesystem();
        
        if ($oldFilePath !== $newFilePath) {
            $filesystem->rename($oldFilePath, $newFilePath);
        }
    }

    /**
     * Git related methods
     */
    public function doAGitCommit($message)
    {
        exec("git add --a && git commit -m '" . $message .  "'");
    }

    /**
     * Utils
     */
    public function formatNumber($value, $locale = "fr_FR")
    {
        setlocale(LC_NUMERIC, $locale);
        return number_format($value, 0, ',', ' ');
    }
    
    public function processRequestBeforeSaving($request)
    {
        /**
         * Get $requestData as array
         */
        $requestData = json_decode($request->getContent(), true);

        /**
         * Transform keys into snake case, then remove those having _id suffix
         */
        return array_reduce(
            array_keys($requestData),
            function ($result, $key) use ($requestData) {
                $snakeCaseKey = strtolower(preg_replace('/(?<!^)[A-Z]/', '_$0', $key));

                if (strpos($snakeCaseKey, '_id') !== false) {
                    $snakeCaseKey = str_replace('_id', '', $snakeCaseKey);
                }

                $result[$snakeCaseKey] = $requestData[$key];

                return $result;
            },
            []
        );
    }

    public function getOptionValueByItsId($optionsArray, $id)
    {
        return array_reduce($optionsArray, function ($carry, $item) use ($id) {
            return $carry !== null ? $carry : ($item['id'] === $id ? $item['value'] : null);
        }, null);
    }
}
