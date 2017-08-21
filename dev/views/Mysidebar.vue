<template>

    <div><a id="menu-toggle" class="btn btn-dark btn-lg toggle"><i class="fa fa-bars"></i></a>
        <nav id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <a id="menu-close" class="btn btn-light btn-lg pull-right toggle"><i
                        class="fa fa-times"></i></a>


                <li><a data-toggle="collapse" data-target="#drilldown-2" class="bold"> ניהול רשימות<i
                        class="fa fa-sort-down "
                        aria-hidden="true">
                </i></a>
                    <div>
                        <ul id="drilldown-2" class="nav nav-pills nav-stacked collapse">
                            <li class="closeSideBar listodo" v-for="l in lists">
                                <a :id="l.id" @click="changeNowList">{{l.name}}</a>

                            </li>

                        </ul>
                    </div>
                </li>


            </ul>
        </nav>
    </div>
</template>
<script>
    import listModule from '../store/module/list.module'
    import todoModule from '../store/module/todo.module'

    export default {
        props: ["closeSideBar"],
        components: {},
        data() {
            return {}
        },

        methods: {
            changeNowList(e) {
                console.log(e.target.id)

                this.$store.commit("setNowList", e.target.id)
                this.$store.dispatch(todoModule.types.GET, listModule.state.nowList.id)
            }
        },
        created() {
            this.$store.dispatch(listModule.types.FETCH)
        },

        computed: {
            lists() {
                return this.$store.state.listModule.lists
            }
        },
        mounted() {
            // Closes the sidebar menu
            $("#menu-close").click(function (e) {
                e.preventDefault();
                $("#sidebar-wrapper").toggleClass("active");
                $("#menu-toggle").fadeIn(800)
            });

            // Opens the sidebar menu
            $("#menu-toggle").click(function (e) {
                e.preventDefault();
                $("#sidebar-wrapper").toggleClass("active");
                $(this).fadeOut()
            });


            $(".closeSideBar").click(function (e) {
                e.preventDefault();
                $("#sidebar-wrapper").toggleClass("active");
                $("#menu-toggle").fadeIn(800)

            });

            //#to-top button appears after scrolling
            var fixed = false;
            $(document).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    if (!fixed) {
                        fixed = true;
                        // $('#to-top').css({position:'fixed', display:'block'});
                        $('#to-top').show("slow", function () {
                            $('#to-top').css({
                                position: 'fixed',
                                display: 'block'
                            });
                        });
                    }
                } else {
                    if (fixed) {
                        fixed = false;
                        $('#to-top').hide("slow", function () {
                            $('#to-top').css({
                                display: 'none'
                            });
                        });
                    }
                }
            });
        },
    }
</script>

<style>
    .red {
        background-color: #eff5ff;
        /*color: white !important;*/
    }

    a {
        text-decoration: none !important;
    }

    li {
        cursor: pointer;
        text-decoration: none !important;
    }

    .bold {
        font-weight: bold;
    }

    /*.side-bar-back {*/
    /*background-color: #eff5ff;*/
    /*height: 100vh;*/

    /*}*/
    /*!
 * Start Bootstrap - Stylish Portfolio (http://startbootstrap.com/)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

    /* Global Styles */

    html,
    body {
        width: 100%;
        height: 100%;
    }

    body {
        font-family: "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .text-vertical-center {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .text-vertical-center h1 {
        margin: 0;
        padding: 0;
        font-size: 4.5em;
        font-weight: 700;
    }

    /* Custom Button Styles */

    .btn-dark {
        border-radius: 0;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .btn-dark:hover,
    .btn-dark:focus,
    .btn-dark:active {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .btn-light {
        border-radius: 0;
        color: #333;
        background-color: rgb(255, 255, 255);
    }

    .btn-light:hover,
    .btn-light:focus,
    .btn-light:active {
        color: #333;
        background-color: rgba(255, 255, 255, 0.8);
    }

    /* Custom Horizontal Rule */

    hr.small {
        max-width: 100px;
    }

    /* Side Menu */

    #sidebar-wrapper {
        z-index: 1000;
        position: fixed;
        right: 0;
        width: 250px;
        height: 100%;
        transform: translateX(250px);
        overflow-y: auto;
        background: #222;
        -webkit-transition: all 0.4s ease 0s;
        -moz-transition: all 0.4s ease 0s;
        -ms-transition: all 0.4s ease 0s;
        -o-transition: all 0.4s ease 0s;
        transition: all 0.4s ease 0s;
        opacity: 0.85;
        top: 51px;
    }

    .sidebar-nav {
        position: absolute;
        top: 0;
        width: 250px;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .sidebar-nav li {
        text-indent: 20px;
        line-height: 40px;
    }

    .sidebar-nav li a {
        display: block;
        text-decoration: none;
        color: #999;
    }

    .sidebar-nav li a:hover {
        text-decoration: none;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
    }

    .sidebar-nav li a:active,
    .sidebar-nav li a:focus {
        text-decoration: none;
    }

    .sidebar-nav > .sidebar-brand {
        height: 55px;
        font-size: 18px;
        line-height: 55px;
    }

    .sidebar-nav > .sidebar-brand a {
        color: #999;
    }

    .sidebar-nav > .sidebar-brand a:hover {
        color: #fff;
        background: none;
    }

    #menu-toggle {
        z-index: 1;
        position: fixed;
        top: 46px;
        right: -5px;
    }

    #sidebar-wrapper.active {
        right: 250px;
        width: 250px;
        -webkit-transition: all 0.4s ease 0s;
        -moz-transition: all 0.4s ease 0s;
        -ms-transition: all 0.4s ease 0s;
        -o-transition: all 0.4s ease 0s;
        transition: all 0.4s ease 0s;
    }

    .toggle {
        margin: 5px 5px 0 0;
    }

    /* Header */

    .header {
        display: table;
        position: relative;
        width: 100%;
        height: 100%;
        /*background: url(../img/bg.jpg) no-repeat center center scroll;*/
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        -o-background-size: cover;
    }

    /* About */

    .about {
        padding: 50px 0;
    }

    /* Services */

    .services {
        padding: 50px 0;
    }

    .service-item {
        margin-bottom: 30px;
    }

    /* Callout */

    .callout {
        display: table;
        width: 100%;
        height: 400px;
        color: #fff;
        /*background: url(../img/callout.jpg) no-repeat center center scroll;*/
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        -o-background-size: cover;
    }

    /* Portfolio */

    .portfolio {
        padding: 50px 0;
    }

    .portfolio-item {
        margin-bottom: 30px;
    }

    .img-portfolio {
        margin: 0 auto;
    }

    .img-portfolio:hover {
        opacity: 0.8;
    }

    /* Call to Action */

    .call-to-action {
        padding: 50px 0;
    }

    .call-to-action .btn {
        margin: 10px;
    }

    /* Map */

    .map {
        height: 500px;
    }

    @media (max-width: 768px) {
        .map {
            height: 75%;
        }
    }

    .map iframe {
        pointer-events: none;
    }

    /* Footer */

    footer {
        padding: 100px 0;
    }

    #to-top {
        display: none;
        position: fixed;
        bottom: 5px;
        right: 5px;
    }

</style>