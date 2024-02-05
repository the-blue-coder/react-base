<?php

namespace App\Controller;

use App\Entity\PageExample;
use App\Form\PageExampleType;
use App\Service\PageExampleService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/page-example')]
class PageExampleController extends AbstractController
{
    public function __construct(
        private PageExampleService $pageExampleService
    ) {}

    #[Route('/summary', name: 'app_api_page_example_summary', methods: ['GET'])]
    public function summary(): JsonResponse
    {
        $pageExamplesSummary = $this->pageExampleService->getSummary();

        return $this->json([
            'status' => 'success',
            'pageExamplesSummary' => $pageExamplesSummary
        ], JsonResponse::HTTP_OK);
    }

    #[Route('/', name: 'app_api_page_example_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $pageExamples = $this->pageExampleService->getAll();

        return $this->json([
            'status' => 'success',
            'pageExamples' => $pageExamples
        ], JsonResponse::HTTP_OK);
    }

    #[Route('/{id}', name: 'app_api_page_example_show', methods: ['GET'], requirements: ['id' => '\d+'])]
    public function show(PageExample $pageExample): JsonResponse
    {
        $pageExample = $this->pageExampleService->buildSingleForTheFrontend($pageExample);

        return $this->json([
            'status' => 'success',
            'pageExample' => $pageExample
        ], JsonResponse::HTTP_OK);
    }

    #[Route('/new', name: 'app_api_page_example_new', methods: ['POST'])]
    public function new(Request $request): JsonResponse
    {
        $pageExample = new PageExample();
        $form = $this->createForm(PageExampleType::class, $pageExample);

        $created = $this->pageExampleService->createEntity($request, $pageExample, $form);

        if ($created) {
            return $this->json([
                'status' => 'success'
            ], JsonResponse::HTTP_OK);
        }

        return $this->json([
            'status' => 'failure',
            'message' => 'There\'s error in your form request'
        ], JsonResponse::HTTP_BAD_REQUEST);
    }

    #[Route('/{id}/edit', name: 'app_api_page_example_edit', methods: ['POST'], requirements: ['id' => '\d+'])]
    public function edit(Request $request, PageExample $pageExample): JsonResponse
    {
        $form = $this->createForm(PageExampleType::class, $pageExample);

        $updated = $this->pageExampleService->updateEntity($request, $pageExample, $form);

        if ($updated) {
            return $this->json([
                'status' => 'success'
            ], JsonResponse::HTTP_OK);
        }

        return $this->json([
            'status' => 'failure',
            'message' => 'There\'s error in your form request'
        ], JsonResponse::HTTP_BAD_REQUEST);
    }

    #[Route('/{id}', name: 'app_api_page_example_delete', methods: ['DELETE'], requirements: ['id' => '\d+'])]
    public function delete(PageExample $pageExample): JsonResponse
    {
        $this->pageExampleService->deleteEntity($pageExample);

        return $this->json([
            'status' => 'success'
        ], JsonResponse::HTTP_OK);
    }

    #[Route('/option', name: 'app_api_page_example_options', methods: ['GET'])]
    public function options(): JsonResponse
    {
        $pageExamplesOptions = $this->pageExampleService->getOptions();

        return $this->json([
            'status' => 'success',
            'pageExamplesOptions' => $pageExamplesOptions
        ], JsonResponse::HTTP_OK);
    }
}
