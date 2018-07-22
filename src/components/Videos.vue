<template>
  <div class="wrap">
      <div class="books-container">
          <div class="top-sect">
            <span class="sect-heading">
               <b> Continue Watching</b>
            </span>
            <b-row class="row">
                <b-col sm="12" lg="4">
                    <router-link to="/watch-video">
                        <div class="single-video">
                            <iframe width="100%" height="100%" :src="videoUrl2"> </iframe>
                        </div>
                        <span class="book-name">
                        Algebra
                        </span>                        
                    </router-link>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-video">
                        <iframe width="100%" height="100%" :src="videoUrl"> </iframe>
                    </div>
                    <span class="book-name">
                        Trignometry
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-video">
                       <iframe width="100%" height="100%" :src="videoUrl3"> </iframe> 
                    </div>
                    <span class="book-name">
                        Statistics
                    </span>
                </b-col>
            </b-row>
          </div>
          <div class="other-sect">
            <span class="sect-heading">
               <b> All Video Tutorials</b>
            </span><br>
            <div class="sections">
            <span class="subject-heading">
                Mathematics
            </span>
            <b-row class="row">
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_create_f05x.svg" alt="">
                    </div>
                    <span class="book-name">
                       Algebra
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_control_panel1_20gm.svg" alt="">
                    </div>
                    <span class="book-name">
                        Trignometry
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_segmentation_uioo.svg" alt="" class="last">
                    </div>
                       <div class="float">
                           <img src="../assets/caret-right.png" alt="" height="23px" width="14px">
                       </div>
                    <span class="book-name">
                        Statistics
                    </span>
                </b-col>
            </b-row>
            </div>
            <div class="sections">
            <span class="subject-heading">
                English Language
            </span>
                <b-row class="row">
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_development_ouy3.svg" alt="">
                    </div>
                    <span class="book-name">
                        Parts Of Speech
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_notes1_cf55.svg" alt="">
                    </div>
                    <span class="book-name">
                        Comprehension Skills
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_organizing_projects1_47ja.svg" class="last" alt="">
                    </div>
                       <div class="float">
                           <img src="../assets/caret-right.png" alt="" height="23px" width="14px">
                       </div>
                    <span class="book-name">
                        Composition Skills
                    </span>
                </b-col>
            </b-row>
            </div>
            <div class="sections">
            <span class="subject-heading">
                English Literature
            </span>
                <b-row class="row">
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_Bibliophile_hwqc.svg" alt="">
                    </div>
                    <span class="book-name">
                        Half Of A Yellow Sun
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_may_the_force_bgdm.svg" alt="">
                    </div>
                    <span class="book-name">
                        Othello - A Review
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_messenger_e7iu.svg" alt="" class="last">
                    </div>
                       <div class="float">
                           <img src="../assets/caret-right.png" alt="" height="23px" width="14px">
                       </div>
                    <span class="book-name">
                        Independence - A Review
                    </span>
                </b-col>
            </b-row>
            </div>
            <div class="sections">
            <span class="subject-heading">
                Biology
            </span>
                <b-row class="row">
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_sleep_analysis_o5f9.svg" alt="">
                    </div>
                    <span class="book-name">
                        Sleep And Rest
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_couple_a7s9.svg" alt="">
                    </div>
                    <span class="book-name">
                        The Reproductive System
                    </span>
                </b-col>
                <b-col sm="12" lg="4">
                    <div class="single-book">
                        <img src="../assets/svg/undraw_connecting_teams3_1pgn.svg" alt="" class="last">
                    </div>
                       <div class="float">
                           <img src="../assets/caret-right.png" alt="" height="23px" width="14px">
                       </div>
                    <span class="book-name">
                        Heredity And Genetics
                    </span>
                </b-col>
            </b-row>
            </div>
          </div>
          
      </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            // videoUrl: 'https://www.youtube.com/watch?v=6s4RCFMm0AQ',
            videoUrl: 'https://www.youtube.com/embed/6s4RCFMm0AQ',
            videoUrl2: 'https://www.youtube.com/embed/grnP3mduZkM',
            videoUrl3: 'https://www.youtube.com/embed/sxQaBpKfDRk'
        }
    },
}
</script>
<style scoped>
    .wrap {
        padding: 30px 0 60px 0
    }
    .books-container {
        padding: 84px 108px 20px 108px;
        height: auto;
        /* background-color: crimson; */
    }
    .top-sect {
        /* background-color: red */
    }
    .sect-heading {
        color: #156EDC;
        font-size: 24px
    }
    .books {
        height: 100px;
        /* background-color: blueviolet */
    }
    .single-book, .single-video {
        width: 96%;
        background-color: #fff;
        /* border-top: 1px solid #c2c2c2; */
        height: 250px;
        margin-top: 20px;
        margin-bottom: 12px;
        cursor: pointer;
        transition: all 0.9s
    }
    .single-book:hover {
        transform: scale(1.1);
        box-shadow: 4px 4px 4px #e6e6e6
    }
    .single-book img {
        width: 100%;
        height: 100%
    }
    .last {
        position: relative;
        /* top: 0; */
        z-index: 2;
    }
    .float {
        position: relative;
        /* top: 0; */
        z-index: 3;
        margin-top: -150px;
        float: right;
        background-color: #fff;
        /* height: 40px; */
        align-content: center;
        padding: 12px 16px 12px 16px;
        /* line-height: 40px; */
        /* width: 40px; */
        box-shadow:  3px 3px 3px #e6e6e6;
        /* margin-left: 30px; */
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.4s
    }
     .float:hover {
         background-color: #e1e1e1;
        box-shadow:  3px 3px 3px #ebebeb;
        margin-left: -10px;
    }
    /* .float:hover img {
        margin-left: 12px
    } */
    .book-name {
        font-size: 16px;
         color:#5d6369;
        padding-top: 32px
    }
    .other-sect {
        margin-top: 50px
    }
    .sections {
        margin-top:30px
    }
    .subject-heading {
        font-size: 20px;
        margin-top:25px;
        color: #000
    }
       @media (max-width:767px) {
        .wrap {
            padding: 12px 30px 30px 30px
        }
         .books-container {
            padding: 10px
        }
        .second-sect {
            /* margin-top: 1200px; */
        }
    .single-book {
        margin-top: 40px;
    }
        /* .book-name {
            border-bottom: 1px solid #cbcbcb;
            width: 100%
        } */
    }
    
    .float {
      display: none
    }
</style>
