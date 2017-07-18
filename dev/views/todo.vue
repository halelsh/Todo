<template>
    <tr>
        <td><input type="checkbox" v-model="todo.completed" @change="changeCompleted"/></td>
        <td v-if="!onEdit" :class="todo.completed ? 'cross':''" @click="comeEdit">{{todo.content}} <i
                class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </td>
        <td v-if="onEdit"><input type="text" class="form-control" v-model="todo.content" maxlength="70"
                                 @keyup.13="submit"/>
        </td>
        <td>
            <button class="btn btn-danger pull-right btn-xs" @click="deleteTodo">X</button>
        </td>
    </tr>
</template>


<script>
    import iziToast from 'izitoast'
    import todoModule from '../store/module/todo.module'
    export default {
        props: ["todo"],
        components: {},
        data () {
            return {
                onEdit: false
            }
        },

        computed: {},
        methods: {
            deleteTodo(){
                this.$store.dispatch(todoModule.types.REMOVE, this.todo)
            },

            changeCompleted(){
                this.submit()

            },
            comeEdit(){
                this.onEdit = true
                iziToast.info({
                    title: 'Attention',
                    message: 'Please press on the "Enter" button to finish editing',
                    position: 'topCenter',

                });
            },
            submit(){
                this.onEdit = false;
                this.$store.dispatch(todoModule.types.UPDATE, this.todo)
            }
        },
        created(){

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
    .cross {
        text-decoration: line-through;

    }

</style>