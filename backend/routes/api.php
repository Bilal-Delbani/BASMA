<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

use app\Http\Controllers\Auth;
use App\Http\Controllers\API\JWTAuthController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\CategoryClickController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('register', [JWTAuthController::class, 'register']);
    Route::post('login', [JWTAuthController::class, 'login']);
    Route::post('logout', [JWTAuthController::class, 'logout']);
    Route::post('categories/{slug}/click', [CategoryClickController::class, 'store']);
    Route::get('categories/analytics/{period}', [CategoryClickController::class, 'analytics']);
    Route::post('refresh', [JWTAuthController::class, 'refresh']);
});

