<template>
    <div class="div-body" :class="pageClass">
        <!-- <div class="overlay"></div> -->
        <!-- <img src="../assets/library.png" alt=""> -->
        <div class="content">
            <span class="top-portion"><img src="../assets/logo.svg" alt="" width="50px"><b>Bookly</b></span>
            <b-row class="row">
                <b-col lg="6" class="left">
                    <img src="../assets/svg/undraw_reading_list_4boi.svg" alt="" width="250px">
                    <h1><b>A Free Online Learning Resource Library for Secondary School Students</b></h1>
                    <b-row>
                        <b-col>
                             <div class="single-book">
                                <img src="../assets/home-book.png" alt="" width="75px">
                            </div>
                            <span class="book-name">
                            Textbooks
                            </span>
                        </b-col>
                        <b-col>
                             <div class="single-book">
                                <img src="../assets/home-play.png" alt="" width="75px">
                            </div>
                            <span class="book-name">
                            Videos
                            </span>
                        </b-col>
                        <b-col>
                             <div class="single-book">
                                <img src="../assets/home-quiz.png" alt="" width="75px">
                            </div>
                            <span class="book-name">
                            Quizzes
                            </span>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col lg-6 class="right-sect" v-if="signin">
                            <span class="register"><b>Register</b></span>
                            <b-form>
                                <b-form-group id="exampleInputGroup1"
                                                label-for="exampleInput1">
                                    <b-form-input id="exampleInput1"
                                                type="email"
                                                required
                                                placeholder="Your full name">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup2"
                                                label-for="exampleInput2">
                                    <b-form-select v-model="selected" :options="options" id="exampleInput1"  />
                                </b-form-group>
                                <b-input-group prepend="+234" id="exampleInput2">
                                    <b-form-input placeholder="Your phone number" ></b-form-input>
                                </b-input-group>
                                </b-form>
                            <div class="btns">
                                <router-link to="/subject">
                                    <b-button class="blue-btn">Register</b-button>
                                </router-link>
                            </div>
                            <span class="log">Already have an account? <b-button  @click="toLogin()" class="log-btn"> <b>Log in</b></b-button></span>
                        </b-col>
                        <b-col lg-6 class="right-sect" v-if="!signin">
                            <span class="register"><b>Sign in</b></span>
                            <b-form>
                                
                                <b-input-group  prepend="+234" id="exampleInput2">
                                    <b-form-input placeholder="Your phone number"></b-form-input>
                                </b-input-group>
                                </b-form>
                            <div class="btns">
                                <router-link to="/books">
                                    <b-button class="blue-btn">Login</b-button>
                                </router-link>
                            </div>
                            <span class="log">Dont have an account? <b-button  @click="toSignup()" class="log-btn"><b>Register</b></b-button></span>
                        </b-col>
            </b-row>
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            inside: false,
            pageClass: '',
            signin: false,
            selected: null,
            options: [
                { value: null, text: 'Please select your class' },
                { value: 'a', text: 'SS 1' },
                { value: 'b', text: 'SS 2' },
                { value: 'd', text: 'SS 3'}
            ]
        }
    },
    
    methods: {
        add () {
            this.pageClass = ' animate fadeInLeft'
            console.log('clicked')
            },
        toSignup () {
            this.signin = true
        },
        toLogin () {
            this.signin = false
        }
    }
    // mounted () {
    //     this.add()
    // }
}
</script>
<style scoped>
    .header {
        display: none;
    }
   .div-body {
       width: 100%;
       padding-bottom: 20px
       /* height:150vh; */
   }
   /* .overlay {
       width: 100%;
       height: 100vh;
       opacity: 1;
       background-color: #fff;
       position: relative;
       z-index: 3;
   } */
   .top-portion {
       font-size: 20px
   }
   .top-portion b {
       margin-left: 15px
   }
   .left {
       padding: 0 100px 0 100px;
       border-right: 1px solid #dddddd
   }
   .content {
       color:#fff;
       position: relative;
       z-index: 5;
       padding: 30px 50px 100px 50px;
       text-align: center;
       color:#000
   }
   .row {
       margin-top: 80px
   }
   .landing-img{
       margin-top: -80px
   }
   .content h1 {
       font-size: 20px;
       margin-top: 12px;
       margin-bottom: 12px;
       padding: 12px 100px 10px 100px
   }
   .single-book {
       margin-bottom: 25px
   }
   .book-name {
       padding: 0px 5px 20px 5px;
       color: #3D4851
   }
   .right-sect {
       padding: 20px 120px 20px 120px
   }
   #exampleInput1 {
       height: 58px;
       margin-top: 20px;
       padding-left:20px;
       border: 1px solid #a8b1b8
   }
   #exampleInput2 {
       height: 58px;
       margin-top: 20px;
   }
   .register {
       color: #000;
       font-size: 25px;
       margin-bottom: 45px
   }
   .btns {
       padding-top: 30px;
       padding-bottom: 30px
   }
   .blue-btn {
       padding: 12px 84px 12px 84px;
       background-color: #156EDC;
       border: 1px solid #156EDC;
       border-radius: 5px;
       font-size:20px;
       color: #fff
   }
   .blue-inverse-btn {
       margin-left: 30px;
       padding: 12px 54px 12px 54px;
       border: 1px solid #156EDC;
       font-size:20px;
       background-color: none;
       border-radius: 5px;
       color: #156EDC
   }
   .log {
       font-size: 15px
   }
   .log-btn {
       background-color: #fff;
       border: 0;
       color: #000
   }
   .log-btn:hover {
       color: #156EDC
   }
   .log-btn:focus {
       border: 0
   }
   @media (max-width: 767px) {
    .div-body {
           padding-top: 12px
       }
   .left {
       padding: 0 20px 0 20px;
       border-right: 0;
   }
   .content {
       color:#fff;
       position: relative;
       z-index: 5;
       padding: 10px 20px 10px 20px;
       text-align: center;
       color:#000
   }
   .content h1 {
       padding: 12px 18px 10px 50px
   }
   .right-sect {
       padding: 50px 20px 20px 20px
   }

   }
</style>
