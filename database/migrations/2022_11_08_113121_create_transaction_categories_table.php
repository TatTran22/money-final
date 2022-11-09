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
        Schema::create('transaction_categories', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->foreignUuid('user_id')->index()->references('uuid')->on('users')->onDelete('cascade');
            $table->uuid('parent_id')->nullable();
            $table->string('name', 40);
            $table->string('type', 20)->default('expense');
            $table->string('slug', 40)->index();
            $table->string('description', 255)->nullable();
            $table->string('icon_url')->nullable();
            $table->foreignUuid('target_wallet_id')->nullable()->comment('chỉ định wallet có thể sử dụng category này')->references('uuid')->on('wallets')->onDelete('set null');
            $table->foreignUuid('target_user_id')->nullable()->comment('chỉ định user có thể sử dụng category này')->references('uuid')->on('users')->onDelete('set null');
            $table->timestamps();

            $table->unique(['user_id', 'slug']);
        });

        Schema::table('transaction_categories', function (Blueprint $table) {
            $table->foreign('parent_id')->references('uuid')->on('transaction_categories')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaction_categories');
    }
};
