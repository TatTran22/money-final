<?php

use App\Http\Controllers\WalletController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('wallets', [WalletController::class, 'index'])
        ->name('wallets');
});
