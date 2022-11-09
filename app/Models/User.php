<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\NewAccessToken;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'nickname',
        'email',
        'email_verified_at',
        'password',
        'password_changed_at',
        'avatar_url',
        'gender',
        'birthday',
        'nationality_code'
    ];

    protected $primaryKey = 'uuid';
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' => 'datetime',
    ];

    /**
     * Create a new personal access token for the user.
     *
     * @param string $name
     * @param array $abilities
     * @param string|null $ip_address
     * @param string|null $user_agent
     * @return NewAccessToken
     */
    public function createToken(string $name, array $abilities = ['*'], string $ip_address = null, string $user_agent = null): NewAccessToken
    {
        $token = $this->tokens()->create([
            'name' => $name,
            'token' => hash('sha256', $plainTextToken = Str::random(40)),
            'user_agent' => $user_agent,
            'ip_address' => $ip_address,
            'expires_at' => Carbon::now()->addMinutes(Config::get('sanctum.expiration', 1400)),
        ]);

        return new NewAccessToken($token, $token->getKey() . '|' . $plainTextToken);
    }

    /**
     * @return HasMany
     */
    public function getWallets(): HasMany
    {
        return $this->hasMany(Wallet::class, 'user_id', 'id');
    }

    /**
     * @return HasMany
     */
    public function getTransactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'user_id', 'id');
    }

    /**
     * @return HasMany
     */
    public function getCategories(): HasMany
    {
        return $this->hasMany(TransactionCategory::class, 'user_id', 'id');
    }
}
