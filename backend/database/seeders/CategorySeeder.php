<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder {
    public function run(): void {
        $categories = [
            ['name_en' => 'News', 'name_ar' => 'أخبار', 'slug' => 'news'],
            ['name_en' => 'Economy', 'name_ar' => 'اقتصاد', 'slug' => 'economy'],
            ['name_en' => 'Sports', 'name_ar' => 'رياضة', 'slug' => 'sports'],
            ['name_en' => 'Videos and Images', 'name_ar' => 'فيديو وصور', 'slug' => 'videos'],
            ['name_en' => 'Culture', 'name_ar' => 'ثقافة', 'slug' => 'culture'],
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(['slug' => $category['slug']], $category);
        }
    }
}

