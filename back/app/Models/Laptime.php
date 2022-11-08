<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laptime extends Model
{
    protected $table = 'laptimes';
    protected $fillable = ["Pilote", "Circuit", "Temps", "Voiture"];
    use HasFactory;
}
