<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Set extends Model
{
    protected $table = 'sets';

    public function words()
    {
        return $this->hasMany(Word::class);
    }
}
