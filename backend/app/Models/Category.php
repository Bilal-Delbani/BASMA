<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    use HasFactory;
    protected $fillable = ['name_en', 'name_ar', 'slug'];

    public function totalClicks() {
        return $this->hasMany(CategoryClick::class);
    }
    public function uniqueClicks() {
        return $this->hasMany(CategoryClick::class)->whereNotNull('user_id');
    }
}
