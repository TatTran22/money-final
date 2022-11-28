<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Wallet extends Model
{
    use HasFactory, HasUuids;
    public const WALLET_TYPE = [0 => 'bank', 1 => 'cash', 2 => 'credit_card', 3 => 'loan', 4 => 'assets', 5 => 'investment'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'user_id',
        'type',
        'description',
        'amount',
        'currency',
        'icon_url'
    ];

    protected $attributes = [
        'type' => self::WALLET_TYPE[1],
        'currency' => 'USD',
    ];

    protected $primaryKey = 'uuid';

    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'uuid');
    }

    /**
     * @return HasMany
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class, 'budget_id', 'uuid');
    }
}
