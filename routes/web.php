<?php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SetsController;
use App\Http\Controllers\StudyController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
})->name("home");

Route::view("/login", "auth.login")->middleware("guest")->name("login");
Route::post("/login", LoginController::class)->middleware("guest");

Route::view("/register", "auth.register")->middleware("guest")->name("register");
Route::post("/register", RegisterController::class)->middleware("guest");

Route::get("/logout", [UserController::class, "logout"])->name("logout")->middleware("auth");
Route::get("/user/{id}", [UserController::class, "index"])->middleware("auth");

Route::controller(SetsController::class)->middleware("auth")->group(function () {
    Route::get("/set/{id}", "index")->name("sets.index");
    Route::get("/sets", "all")->name("sets.all");
});

Route::controller(StudyController::class)->middleware("auth")->group(function () {
    Route::get("/study/{study_id}", "index")->name("study.index");
});