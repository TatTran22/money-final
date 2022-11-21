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
        $userWallets = Auth::user()->getWallets()->get();
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
                'amount' => ['required', 'numeric'],
                'currency' => ['required', 'string', 'max:3', 'min:3'],
            ]);
            $data['user_id'] = Auth::id();
            $data['icon_url'] = $request->input('icon_url');

            Wallet::create($data);

            return redirect('/wallets');
    }
}
