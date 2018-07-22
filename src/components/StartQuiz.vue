<template>
    <div class="wrap video-container">
        <div class="pagination">
            <span class="page"> Video Tutorials</span> > <span class="page">Biology</span>
        </div>
        <b-row class="row">
                <b-col sm="12" lg="12">
                    <!-- <input id="query" v-model="searchTerm" type="text">
                    <br>
                    <input type="submit" value="Submit" @click="getData()"> -->
                    <div class="quiz-name">
                        <b>The Human reproductive System</b>
                    </div>
                </b-col>
                <b-col lg="12" sm="12">
                    <div class="quiz-view">
                        <span class="quiz-counter"> {{counter}} / <b>20</b></span><br>
                        <span class="question">
                            Which of the following is regarded as the father of genetics?
                        </span>
                        <b-row>
                            <b-col lg="6">
                                <div class="option">
                                    <b-form-radio
                                        name="radioInline">
                                    </b-form-radio>
                                    <span>Muhamadu Buhari</span>
                                </div>
                            </b-col>
                            <b-col lg="6">
                                <div class="option">
                                    <b-form-radio
                                        name="radioInline">
                                    </b-form-radio><span>Charles Babage</span>
                                </div>                                
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col lg="6">
                               <div class="option">
                                    <b-form-radio
                                        name="radioInline">
                                    </b-form-radio><span>Carl Max</span>
                                </div>
                            </b-col>
                            <b-col lg="6">
                                <div class="option">
                                    <b-form-radio
                                        name="radioInline">
                                    </b-form-radio><span>Gregor Mendel</span>
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="nav-btns">
                            <b-col lg="12">
                                <button class="left-nav" @click="prev">
                                    <img src="../assets/caret-left.png" alt="">
                                </button>
                                <button class="right-nav" @click="next" v-if="hideNext">
                                    <img src="../assets/caret-right.png" alt="">
                                </button>
                                <button class="right-nav" @click="next" v-if="!hideNext">
                                    Submit
                                </button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
        </b-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            counter: 1,
            hideNext: true,
            searchTerm: '',
            videoUrl2: 'https://www.youtube.com/embed/JKC7jgYHCFI',
            
        }
    },
    methods: {
        getData () {
            axios.get(
                'https://opentdb.com/api.php?amount=20&category=23&difficulty=medium&type=multiple')
            .then(function (response) {
                console.log(res)
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        prev () {
            if (this.counter = 1) {
                alert('This is the begining of the Quiz')
            } else {
                this.counter--
                return counter
            }
        },
        next () {
            if (this.counter > 19) {
                this.counter++
                return counter
            } else {
                alert('This is the End of the Quiz')
                this.hideNext = false
            }
        }
    },
    computed: {
        // showSubmit () {
        //     if (this.counter = 20 ) {
        //     }
        // }
    }
}
</script>

<style scoped>
    .page {
        color: #959595;
        margin: 0 20px 0 20px
    }
    .video-container {
        padding: 34px 108px 20px 108px;
        height: auto;
        /* background-color: crimson; */
    }
    .pagination {
        padding: 0 0 30px 0
    }
    .quiz-name {
        width: 100%;
        text-align: center;
        color: #156EDC;
        font-size:  24px;
        margin-bottom: 35px
    }
    .row {
        text-align: center;
        padding: 12px 100px 12px 100px
    }
    .quiz-counter {
        padding-top: 20px
    }
    .question {
        padding-top: 20px;
        font-size: 20px;
    }
    .quiz-view {
        
    }
    .option {
        background-color: #fff;
        margin-top: 20px;
        width: 98%;
        height: 90px;
        line-height: 90px;
        text-align: left;
        font-size: 20px;
        padding: 0px 40px 20px 40px
    }
    .tick {
        margin-top: 30px;
        float: left;
    }
    .nav-btns button {
        background-color: #fafafa;
        padding: 30px;
        cursor: pointer;
        /* margin: 30px 30px 0 30px; */
        border: 0
    }
    .left-nav {
        float: left;
    }
    .right-nav {
        float: right;
    }
</style>
