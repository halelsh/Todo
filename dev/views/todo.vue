<template>
    <div class="row" id="todo">
        <hr>
        <div class="col-xs-4">
            <button class="btn btn-danger pull-left btn-xs" @click="deleteTodo">X</button>
        </div>
        <div class="col-xs-6" v-if="!onEdit" :class="todo.completed==1 ? 'cross':''" style="font-size: 16px"
             @click="comeEdit">
            {{todo.content}}
        </div>
        <div class="col-xs-6" v-if="onEdit"><input type="text" class="form-control" v-model="todo.content"
                                                   maxlength="70"
                                                   @focusout="submit" @keyup.13="submit"/>
        </div>
        <div class="col-xs-2"><input class="pull-left" type="checkbox" :checked="todo.completed==1"
                                     @change="changeCompleted"/></div>
        <hr>
    </div>
</template>

<script>
    import iziToast from 'izitoast'
    import todoModule from '../store/module/todo.module'

    export default {
        props: ["todo"],
        components: {},
        data() {
            return {
                onEdit: false
            }
        },

        computed: {},
        methods: {
            deleteTodo() {
                this.$store.dispatch(todoModule.types.REMOVE, this.todo)
            },

            changeCompleted(e) {
                if (e && e.target && e.target.checked) {
                    this.todo.completed = true
                }
                else {
                    this.todo.completed = false

                }
                this.submit()

            },
            comeEdit() {
                this.onEdit = true
                iziToast.info({
                    title: 'Press enter to finish',
                    position: 'topCenter',
                    timeout: 300,

                });
            },
            submit() {
                this.onEdit = false;
                this.$store.dispatch(todoModule.types.UPDATE, this.todo)
            }
        },
        created() {

        },

        mounted() {
        },
        updated() {
        },
        destroyed() {
        }
    }
</script>

<style scoped>
    .cross {
        text-decoration: line-through;

    }

    #todo {
        padding-top: 3%;
        padding-bottom: 3%;
    }

</style>
