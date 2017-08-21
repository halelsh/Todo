<template>
    <div>
        <div class="row">
            <div class="col-md-1 righting">
                <side-bar :closeSideBar="closeSideBar"
                ></side-bar>
            </div>
            <div class="col-md-11">
                <h4 id="title-text text-center">רשימת מטלות</h4>
            </div>
        </div>

        <div class="row" id="todosFrame">
            <div class="col-md-12" is="Todo" :todo="t" v-for="t in todos"></div>
        </div>
        <div class="row">
            <div class="col-xs-3">
                <button class="btn btn-success pull-right btn-block" id="new-task-btn" @click="addNewTodo">
                    הוסף
                </button>
            </div>
            <div class="col-xs-9">
                <input id="new-todo-textbox" type="text" class="form-control" maxlength="70" v-model="newTodo.content"
                       @keyup.13="addNewTodo" placeholder="כתוב משהו.."/>
            </div>

        </div>

    </div>
</template>


<script>
    import iziToast from 'izitoast'
    import todoModule from '../store/module/todo.module'

    export default {
        props: [],

        components: {
            Todo: require('./Todo.vue'),
            "side-bar": require('./Mysidebar.vue'),

        },
        data() {
            return {
                newTodo: {
                    content: '',
                    completed: false
                }
            }
        },
        computed:
            {
                todos: function () {
                    return this.$store.state.todoModule.todos
                }
            }
        ,
        methods: {
            addNewTodo() {
                this.$store.dispatch(todoModule.types.CREATE, this.newTodo).then(res => {
                    if (res.success) {
                        iziToast.success({
                            title: 'נוסף בהצלחה',
//                            message: 'Good Job!',
                            position: 'topCenter',
                            timeout: 300,

                        });
                        this.newTodo.content = ''
                    }
                })
            }
        }
        ,
        created() {
            this.$store.dispatch(todoModule.types.FETCH)
        }
        ,
        mounted() {
        }
        ,
        updated() {
        }
        ,
        destroyed() {


        }
    }
</script>

<style scoped>
    #frame {
        max-width: 500px;
        /*height: 700px;*/
        /*background-color: #a5dc86;*/
        margin-left: auto;
        margin-right: auto;
        float: none;
        -webkit-box-shadow: -2px 5px 42px 1px rgba(0, 0, 0, 0.65);
        -moz-box-shadow: -2px 5px 42px 1px rgba(0, 0, 0, 0.65);
        box-shadow: -2px 5px 42px 1px rgba(0, 0, 0, 0.65);

    }

    #title {
        background-color: #2a6496;
        width: 100%;
        height: 80px;
        color: white;
        font-size: large;
        padding-top: 5%;
        padding-left: 42%;
        margin-bottom: 5%;

    }

    #title-text {
        margin-left: auto;
        margin-right: auto;
        /*float: none;*/
    }

    .row {
        margin-right: unset;
        margin-left: unset;
    }

    #created-by {
        font-size: x-large;
    }

    #new-task-btn {
        margin-top: 10%;
        margin-bottom: 10%;
    }

    #new-todo-textbox {
        margin-top: 2.5%;
    }

    #todosFrame {
        height: 75vh;
        overflow-y: scroll;
    }

    .righting {
        padding-right: 0 !important;
    }
</style>