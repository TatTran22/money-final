<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid()->primary();
            $table->string('first_name', 40)->nullable();
            $table->string('last_name', 40)->nullable();
            $table->string('nickname', 40)->nullable()->unique();
            $table->string('email')->unique()->comment('Email address for login');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->timestamp('password_changed_at')->nullable();
            $table->string('avatar_url')->nullable()->comment('User avatar url');
            $table->string('gender', 20)->nullable();
            $table->date('birthday')->nullable()->comment('User birthday');
            $table->string('nationality_code', 2)->nullable()->comment('User nationality');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
