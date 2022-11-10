<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WalletController extends Controller
{
    /**
     * Show the confirm password view.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $userWallets = Wallet::query()->where('user_id', Auth::id())->get();
        return Inertia::render('Wallets/Wallets', ['userWallets' => $userWallets]);
    }

    /**
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
            $data = $request->validate([
                'name' => ['required', 'string', 'max:40'],
                'type' => ['required', 'string', 'max:20'],
                'description' => ['required', 'string', 'max:255'],
                'amount' => ['required', 'numeric'],
                'currency' => ['required', 'string', 'max:3', 'min:3'],
            ]);
            $data['user_id'] = Auth::id();
            $data['icon_url'] = $request->input('icon_url');

            $wallet = Wallet::query()->updateOrCreate([
                'type' => $data['type'],
                'user_id' => $data['user_id'],
                'currency' => $data['currency']
            ], $data);

    }
}
