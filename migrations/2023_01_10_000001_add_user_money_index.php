<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
<<<<<<< HEAD
        $schema->table('flusers', function(Blueprint $table){
=======
        $schema->table('users', function(Blueprint $table){
>>>>>>> fdace4123fa929de0fac6bdb1e341dbeb65ba253
            $table->index('money');
        });
    },
    'down' => function (Builder $schema) {
        
    },
];
