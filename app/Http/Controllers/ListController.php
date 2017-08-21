<?php

namespace App\Http\Controllers;

use App\Todo;
use App\TodoList;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;

class ListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todoLists = TodoList::getAllUserLists(Auth::id());
        return TodoList::getAllUserLists(Auth::id());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//    public function create()
//    {
//        //
//    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $attr = $request->only('content', 'completed');
        $attr["user_id"] = Auth::id();
        if ($todo = Todo::create($attr))
            return ["success" => true, "data" => $todo];
        return ["success" => false];

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
//    public function show($id)
//    {
//        //
//    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
//    public function edit($id)
//    {
//        //
//    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $attr = $request->only('completed', 'content');
        $todo = Todo::find($id);
        if ($todo->update($attr)) {
            return ["success" => true, "data" => $todo];
        }
        return ["success" => false];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $todo = Todo::find($id);
        if ($todo->delete()) {
            return ["success" => true];
        }
        return ["success" => false];


    }
}
