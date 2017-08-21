<template>
    <div v-if="$store.state.loginModule.nowConnect">
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" @click="logout" style="cursor: pointer">התנתק</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    import loginModule from '../store/module/login.module'

    export default {
        props: [],
        components: {},
        data() {
            return {}
        },
        computed: {},
        methods: {
            logout() {
                this.$store.dispatch(loginModule.types.LOGOUT).then(data => {
                    if (data.success) {
                        this.$router.push('/login')
                    }
                })
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

<style>

</style>