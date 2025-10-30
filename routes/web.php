<?php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
})->name("home");

Route::view("/login", "auth.login")->middleware("guest")->name("auth.login");
Route::post("/login", LoginController::class)->middleware("guest");

Route::view("/register", "auth.register")->middleware("guest")->name("register");
Route::post("/register", RegisterController::class)->middleware("guest");

Route::get("/logout", [UserController::class, "logout"])->name("auth.logout")->middleware("auth");
Route::get("/user/{id}", [UserController::class, "index"])->middleware("auth");