<?php

namespace App\Service;

use App\Repository\PageExampleRepository;
use Doctrine\ORM\EntityManagerInterface;

class PageExampleService extends AbstractService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private PageExampleRepository $pageExampleRepository,
    ) {
        parent::__construct($entityManager);
    }

    public function getSummary()
    {
        $allPageExamples = $this->pageExampleRepository->findAll();

        return [
            [
                'slug' => 'total',
                'label' => 'Total',
                'value' => count($allPageExamples)
            ]
        ];
    }

    public function getAll()
    {
        $pageExamples = $this->pageExampleRepository->findBy([], ['created_at' => 'DESC']);

        return array_map(function ($pageExample) {
            return $this->buildSingleForTheFrontend($pageExample);
        }, $pageExamples);
    }

    public function buildSingleForTheFrontend($pageExample)
    {
        return [
            'id' => $pageExample->getId(),
            
        ];
    }

    public function getOptions()
    {
        $allPageExamples = $this->pageExampleRepository->findAll();

        return array_map(fn ($pageExample) => [
            'id' => $pageExample->getId(),
            'value' => $pageExample->getName()
        ], $allPageExamples);
    }
}
