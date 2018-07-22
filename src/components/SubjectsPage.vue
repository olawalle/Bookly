<template>
    <div class="div-body">
        <!-- <div class="overlay"></div> -->
        <!-- <img src="../assets/library.png" alt=""> -->
        <div class="content">
            <span class="top-portion"><img src="../assets/logo.svg" alt="" width="50px"><b>Bookly</b></span>
            <b-row class="row">
                <b-col lg="6" class="left">
                    <img src="../assets/svg/undraw_events_2p66.svg" alt="" width="280px">
                    <h1><b>Great! You’re almost done. Now, select the subjects you offer in school</b></h1>
                        </b-col>
                        <b-col lg-6 class="right-sect">
                            <b-row>
                                <b-col>
                                    <div class="subject"  :class="bluemaths" @click="maths()">
                                    Mathematics
                                    </div>
                                </b-col>
                                <b-col >
                                    <div class="subject" :class="blueeng" @click="eng()">
                                    English
                                    </div>
                                </b-col>
                                <b-col >
                                    <div class="subject" :class="bluebio" @click="bio()">
                                    Biology
                                    </div>
                                </b-col>
                                <b-col >
                                    <div class="subject" :class="bluephy" @click="phy()">
                                    Physics
                                    </div>
                                </b-col>
                                <b-col >
                                    <div class="subject" :class="blueche" @click="che()">
                                    Chemistry
                                    </div>
                                </b-col>
                                <b-col >
                                    <div class="subject" :class="blueeco" @click="eco()">
                                    Economics
                                    </div>
                                </b-col>
                                <b-col >
                                    <div class="subject" :class="bluecomm" @click="comm()">
                                    Commerce
                                    </div>
                                </b-col>
                                <b-col >
                                    <div class="subject" :class="bluegeo" @click="geo()">
                                    Geography
                                    </div>
                                </b-col>
                                <b-col >
                                    <div class="subject" :class="bluelit" @click="lit()">
                                    Literature
                                    </div>
                                </b-col>
                            </b-row>
                            <div class="btns">
                                <router-link to="/books">
                                    <b-button class="blue-btn">Continue</b-button>
                                </router-link>
                            </div>
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
            bluemaths: '',
            blueeng: '',
            bluebio: '',
            bluegeo:'',
            blueeco:'',
            bluephy:'',
            bluelit:'',
            bluecomm:'',
            blueche: '',
            // options: ['SS 1', 'SS 2', 'SS 3']
        }
    },
    methods: {
        // Yeah i know this || is as DUMB AS DUMB CAN BE!!! 
        //                  vv 
        // but i'm short of time and i cant seem to find a way to clog it all in one method... laught at me if u will. it workes for demo purposes.
        maths () {
            this.bluemaths = 'bluemaths'
            console.log('clicked')
        },
        eng () {
            this.blueeng = 'blueeng'
            console.log('clicked')
        },
        lit () {
            this.bluelit = 'bluelit'
            console.log('clicked')
        },
        geo () {
            this.bluegeo = 'bluegeo'
            console.log('clicked')
        },
        che () {
            this.blueche = 'blueche'
            console.log('clicked')
        },
        phy () {
            this.bluephy = 'bluephy'
            console.log('clicked')
        },
        bio () {
            this.bluebio = 'bluebio'
            console.log('clicked')
        },
        eco () {
            this.blueeco = 'blueeco'
            console.log('clicked')
        },
        comm () {
            this.bluecomm = 'bluecomm'
            console.log('clicked')
        }
    }
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
   .subject {
       border: 1px solid #959595;
       border-radius: 40px;
       text-align: center;
       padding: 12px 32px 12px 32px;
       margin-top: 20px;
       width: 95%
   }
   .bluemaths, .blueeng, .bluebio, .bluegeo, .blueeco, .bluephy, .bluelit, .bluecomm, .blueche {
       background-color: #156EDC;
       border: 1px solid #156EDC;
       color:#fff
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
