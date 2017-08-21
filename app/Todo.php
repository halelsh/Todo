<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Todo extends Model
{
    protected $guarded = ["id"];
//    protected $table = 'todos';
//    protected $fillable = ['completed', 'content'];

    public static function getTodosByList($id)
    {
        $user_list_id = TodoList::find($id);
        if (Auth::id() == $user_list_id) {
            return Todo::where('list_id', '=', $id)
                ->get();
        }
        return -1;
    }
}
