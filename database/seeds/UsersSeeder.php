<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user1 = User::create([
            'name' => 'admin',
            'email' => 'samer.shatta@gmail.com',
            'password' => bcrypt('123456'),
            'country_id' => 760, // Syria
            'birthday' => \Carbon\Carbon::now(),
            'is_verified' => true,
            'is_active' => true,
            'gender' => \App\Http\Enums\Gender::MALE,
            'phone' => '+96176309032',
            'age' => 26
        ]);
    }
}
