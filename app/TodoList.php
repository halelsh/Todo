<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class TodoList extends Model
{
    protected $table = 'lists';
    protected $guarded = ["id"];

    public static function getAllUserLists($id)
    {
        if (Auth::id() == $id) {
            return Self::where('user_id', '=', $id)->get();
        }
        return -1;
    }
}
