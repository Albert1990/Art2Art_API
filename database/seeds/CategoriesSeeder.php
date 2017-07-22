<?php

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cat1 = Category::create([
            'name_en' => 'cat1',
            'name_ar' => 'صنف١',
        ]);

        $cat2 = Category::create([
            'name_en' => 'cat2',
            'name_ar' => 'صنف٢',
        ]);
    }
}
