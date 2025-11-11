<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SetController;

Route::get("/api/get/set/{id}", [SetController::class, "get"]);
Route::get("/api/get/set/words/{id}", [SetController::class, "get_words"]);