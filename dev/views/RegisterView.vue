<template>
    <div class="panel panel-info">
        <div class="panel-heading"><h1>הרשמה</h1>
        </div>
        <div class="panel-body">
            <form>
                <label for=""> שם</label>
                <input type="text" v-model="form.name" class="form-control">
                <label for="">מייל</label>
                <input type="email" v-model="form.email" class="form-control">
                <label for="">סיסמא</label>
                <input type="password" v-model="form.password" class="form-control">
                <label for="">אישור סיסמא</label>
                <input type="password" v-model="passAgain" class="form-control">
                <label for="" v-if="!checkPassMatch"></label>
                <label for="" class="text-center" style="color:limegreen;" v-if="successMsg">בוצע בהצלחה</label>
                <button type="button" @click="sendForm" :disabled="!checkPassMatch" class="btn btn-primary btn-block">
                    שלח
                </button>
            </form>
        </div>
    </div>
</template>

<script>

    import loginModule from '../store/module/login.module'

    export default {
        props: [],
        components: {},
        data() {
            return {form: {}, passMatch: true, passAgain: '', successMsg: false}
        },
        computed: {
            checkPassMatch() {
                return (this.form.password == this.passAgain)
            }
        },
        methods: {
            sendForm() {

                this.$store.dispatch(loginModule.types.REGISTER, this.form).then(res => {
                    if (res) {
                        this.successMsg = true
                        this.form = {}
                        this.$router.push('/')
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