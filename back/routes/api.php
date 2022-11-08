<?php

use App\Http\Controllers\LaptimeController;
use App\Http\Resources\LaptimeResource;
use App\Models\Laptime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/laptimes", function() {
    return LaptimeResource::collection(Laptime::all());
});

Route::get('/laptime/{id}', function($id){
    return new LaptimeResource(Laptime::findOrFail($id));
});

Route::put('/laptime/{id}', [LaptimeController::class, 'update']);
Route::delete('/laptime/{id}', [LaptimeController::class, 'destroy']);
Route::post('/laptime' , [LaptimeController::class, 'store']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});