<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\CategoryClick;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class CategoryClickController extends Controller {
    
    // Store a click event
    public function store(Request $request, $slug) {
        $category = Category::where('slug', $slug)->firstOrFail();

        $user = auth()->user(); 

        if(!$user){
            return response()->json(['error' => 'Unauthorized User'], 401);
        }

        CategoryClick::create([
            'category_id' => $category->id,
            'user_id' => $request->id,
        ]);

        return response()->json(['message' => 'Click recorded successfully'], 201);
    }

    // Get click analytics
    public function analytics(Request $request, $period) {       
        $periods = [
            '24hours' => Carbon::now()->subHours(24),
            'week' => Carbon::now()->subWeek(),
            'month' => Carbon::now()->subMonth(),
            'year' => Carbon::now()->subYear(),
        ];

        if (!isset($periods[$period])) {
            return response()->json(['error' => 'Invalid period'], 400);
        }

        $fromDate = $periods[$period];

        $news = $request->input('news', []);

        $categories = Category::all();  // Fetch all categories

        $data = $categories->map(function ($category) use ($fromDate, $news) {
            // Get the total clicks
            $totalClicks = $category->totalClicks()->where('created_at', '>=', $fromDate)->count();

            // Get the unique clicks (distinct by user_id)
            $uniqueClicks = $category->totalClicks()
                ->where('created_at', '>=', $fromDate)
                ->distinct('user_id')  // Count only distinct user_id
                ->count('user_id');

            return [
                'info' => isset($news[$category->id - 1]) ? $news[$category->id - 1] : $category->name_en,
                'total_clicks' => $totalClicks,
                'unique_clicks' => $uniqueClicks,
            ];
        });

        $sortedData = $data->sortByDesc('total_clicks')->values();

        return response()->json($sortedData);
    }
}
