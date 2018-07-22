<template>
  <div class="wrap">
      <div class="books-container">
          <div class="top-sect">
            <span class="sect-heading">
               <b>Quizzes</b>
            </span>
            <b-row class="row">
                <b-col lg="6"> 
                    <span class="quiz-sect"><b>Mathematics</b></span>
                    <b-row>  
                        <b-col sm="12" lg="4">
                        <router-link to="/start-quiz">
                            <div class="single-book">
                                <img src="../assets/algebra.png" alt="">
                            <span class="book-name"> <br>
                            Algebra
                            </span>
                            </div>
                        </router-link>
                        </b-col>
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/trig.png" alt="">
                            <span class="book-name"><br>
                            Trigonometry
                            </span>
                            </div>
                        </b-col>
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/stats.png" alt="">
                            <span class="book-name"><br>
                            Statistics
                            </span>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col lg="6"> 
                    <span class="quiz-sect"><b>English Language</b></span>
                    <b-row>  
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/pos.png" alt="">
                            <span class="book-name"> <br>
                            Parts Of Speech
                            </span>
                            </div>
                        </b-col>
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/cos.png" alt="">
                            <span class="book-name"><br>
                            Composition Skills
                            </span>
                            </div>
                        </b-col>
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/brain.png" alt="">
                            <span class="book-name"><br>
                            Comprehension Skills
                            </span>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="row row-two">
                <b-col lg="6"> 
                    <span class="quiz-sect"><b>English Literature</b></span>
                    <b-row>  
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/book-circ.png" alt="">
                            <span class="book-name"> <br>
                            Half of A Yellow Sun
                            </span>
                            </div>
                        </b-col>
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/book-circ.png" alt="">
                            <span class="book-name"><br>
                            Othello
                            </span>
                            </div>
                        </b-col>
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/book-circ.png" alt="">
                            <span class="book-name"><br>
                            Independence
                            </span>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col lg="6"> 
                    <span class="quiz-sect"><b>Blology</b></span>
                    <b-row>  
                        <b-col sm="12" lg="4">
                        <router-link to="/start-quiz">
                            <div class="single-book">
                                <img src="../assets/sprm.png" alt="">
                            <span class="book-name"> <br>
                            Reproductive system
                            </span>
                            </div>
                        </router-link>
                        </b-col>
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/cells.png" alt="">
                            <span class="book-name"><br>
                            Cells
                            </span>
                            </div>
                        </b-col>
                        <b-col sm="12" lg="4">
                            <div class="single-book">
                                <img src="../assets/time.png" alt="">
                            <span class="book-name"><br>
                            Heredity And Genetics
                            </span>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
          </div>
          <!-- <div class="other-sect">
            <b-row class="row">
                <b-col sm="12" lg="2">
                    <div class="single-book">
                        <img src="../assets/algebra.png" alt="">
                    <span class="book-name"> <br>
                       New General Mathematics 2
                    </span>
                    </div>
                </b-col>
                <b-col sm="12" lg="2">
                    <div class="single-book">
                        <img src="../assets/algebra.png" alt="">
                    <span class="book-name"><br>
                       New General Mathematics 2
                    </span>
                    </div>
                </b-col>
                <b-col sm="12" lg="2">
                    <div class="single-book">
                        <img src="../assets/algebra.png" alt="">
                    <span class="book-name"><br>
                       New General Mathematics 2
                    </span>
                    </div>
                </b-col>
                <b-col sm="12" lg="2">
                    <div class="single-book">
                        <img src="../assets/algebra.png" alt="">
                    <span class="book-name"><br>
                       New General Mathematics 2
                    </span>
                    </div>
                </b-col>
            </b-row>             -->
          </div>
          
      </div>
</template>

<script>
export default {
    data () {
        return {
            inside: true
        }
    }
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
    .books-container a:hover {
        text-decoration: none
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
    .row {
        margin-top: 12px
    }
    .single-book {
        width: 100%;
        background-color: #fff;
        padding: 40px 40px 30px 40px;
        text-align: center;
        height: 250px;
        border-radius: 10px;
        /* margin-top: 20px; */
        margin-bottom: 12px;
        transition: all 0.9s
    }
    .single-book:hover {
        transform: scale(1.1);
        box-shadow: 4px 4px 4px #e6e6e6
    }
    .single-book img {
        width: 65px;
        margin-bottom: 35px
    }
    .book-name {
        font-size: 16px; color:#3D4851;
        padding-top: 32px
    }
    .other-sect {
        margin-top: 50px
    }
    .subject-heading {
        font-size: 20px;
        color: #000
    }
    .float-btn {
        z-index: 1000;
        float: right;
        background-color: aqua
    }
    .row-two {
        margin-top: 40px
    }
    @media (max-width:767px) {
        .wrap {
            padding: 12px
        }
         .books-container {
            padding: 10px 60px 10px 60px
        }
        .second-sect {
            /* margin-top: 1200px; */
        }
    .single-book {
        height: 300px;
    }
    }
</style>
