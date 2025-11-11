<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SetController;

Route::middleware(['auth:sanctum'])->get('api/user', function (Request $request) {
    return $request->user();
});

Route::get("api/get/set/{id}", [SetController::class, "get"]);
Route::get("api/get/set/words/{id}", [SetController::class, "get_words"]);