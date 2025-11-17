<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// SPA fallback route - catch all routes and serve the React app
// This MUST be at the end of the file so it doesn't override other routes
// It allows React Router to handle client-side routing and enables
// deep linking (e.g., direct navigation to /about works correctly)
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');

// Note: To disable SPA routing and revert to Laravel-only routing,
// remove or comment out the above route and replace with specific routes as needed.
