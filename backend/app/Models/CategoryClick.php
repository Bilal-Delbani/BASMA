<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryClick extends Model {
    use HasFactory;
    protected $fillable = ['category_id', 'user_id'];

    public function category() {
        return $this->belongsTo(Category::class);
    }
}
