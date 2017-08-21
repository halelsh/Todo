<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $guarded = ["id"];
//    protected $table = 'todos';
//    protected $fillable = ['completed', 'content'];

    public static function getAllUserTodos($id)
    {
        return Self::where('user_id', '=', $id)->get();
    }
}
