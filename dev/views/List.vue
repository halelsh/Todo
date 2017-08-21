<template>
    <div class="row" id="list">
        <hr>
        <div class="col-xs-4">
            <button class="btn btn-danger pull-left btn-xs" @click="deleteList">X</button>
        </div>
        <div class="col-xs-6" v-if="!onEdit" style="font-size: 16px"
             @click="comeEdit">
            {{todoList.name}}
        </div>
        <div class="col-xs-6" v-if="onEdit"><input type="text" class="form-control" v-model="todoList.name"
                                                   maxlength="70"
                                                   @focusout="submit" @keyup.13="submit"/>
        </div>

        <hr>
    </div>
</template>

<script>
    import iziToast from 'izitoast'
    import listModule from '../store/module/list.module'

    export default {
        props: ["todoList"],
        components: {},
        data() {
            return {
                onEdit: false
            }
        },

        computed: {},
        methods: {
            deleteTodo() {
                this.$store.dispatch(listModule.types.REMOVE, this.list)
            },


            comeEdit() {
                this.onEdit = true
                iziToast.info({
                    title: 'לחץ על אנטר לסיום',
//                    message: 'לחץ על ENTER לסיום',
                    position: 'topCenter',
                    timeout: 300,

                });
            },
            submit() {
                this.onEdit = false;
                this.$store.dispatch(listModule.types.UPDATE, this.list)
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

    #list {
        padding-top: 3%;
        padding-bottom: 3%;
    }

</style>