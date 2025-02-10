<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class NewsClicksService
{
    public function getNewsClicksData()
    {
        $apiUrl = 'http://127.0.0.1:8000/api/auth/categories/analytics/24hours'; // Adjust this if needed

        $response = Http::withToken(env('JWT_SECRET'))->get($apiUrl);

        if ($response->failed()) {
            throw new \Exception("Failed to fetch news clicks data.");
        }

        return $response->json();
    }
}
