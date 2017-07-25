<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <span id="created-by">Created By Adiel Shalit</span>
            </div>
        </div>
        <div id="frame">
            <div class="row">
                <div class="col-md-12">
                    <div id="title">
                        <span id="title-text">Todo List</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <tr is="Todo" :todo="t" v-for="t in todos"></tr>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <input type="text" class="form-control" maxlength="70" v-model="newTodo.content"
                           placeholder="Feel free to add TODO....."/>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <button class="btn btn-success pull-right" id="new-task-btn" @click="addNewTodo">Add new task
                        </button>
                    </div>
                </div>
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
            Todo: require('./todo.vue')
        },
        data () {
            return {
                newTodo: {
                    content: '',
                    completed: false
                }
            }
        },

        computed: {
            todos: function () {
                return this.$store.state.todoModule.todos
            }
        },
        methods: {
            addNewTodo(){
                this.$store.dispatch(todoModule.types.CREATE, this.newTodo).then(res => {
                    console.log(res)
                    if (res.success) {
                        iziToast.success({
                            title: 'Done',
                            message: 'Good Job!',
                            position: 'topCenter',

                        });
                    }
                })
            }
        },
        created(){
            this.$store.dispatch(todoModule.types.FETCH)
        },
        mounted(){
        },
        updated(){
        },
        destroyed(){


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
</style>