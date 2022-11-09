<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->foreignUuid('user_id')->index()->references('uuid')->on('users')->onDelete('cascade');
            $table->foreignUuid('wallet_id')->index()->references('uuid')->on('wallets')->onDelete('cascade');
            $table->foreignUuid('category_id')->index()->nullable()->references('uuid')->on('transaction_categories')->onDelete('set null');
            $table->string('name', 40)->nullable();
            $table->string('description', 255)->nullable();
            $table->decimal('amount', 12, 2)->default(0);
            $table->string('currency', 3)->default('USD');
            $table->timestamp('time_executed')->nullable();
            $table->foreignUuid('with_user_id')->nullable()->comment('user đối tác')->references('uuid')->on('users')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
};
