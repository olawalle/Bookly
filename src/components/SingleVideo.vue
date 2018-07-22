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
                    <div class="video-name">
                        <b>The Human reproductive System</b>
                    </div>
                </b-col>
                <b-col lg="7" sm="12">
                    <div class="video-view">
                        <iframe width="80%" height="500px" :src="videoUrl2"> </iframe>
                    </div>
                </b-col>
                <b-col lg="5" sm="12">
                    <div class="video-view">
                        <span><b>Lessons</b></span>
                        <ul>
                            <router-link to="/"><li class="active">
                                Introduction to The Human Reproductive System <br>
                                <span class="duration">1:30</span>
                            </li></router-link>
                            <router-link to="/"><li>
                                The male reproductive system 1<br>
                                <span class="duration">1:30</span>
                            </li></router-link>
                            <router-link to="/"><li>
                                The male reproductive system 2<br>
                                <span class="duration">1:30</span>
                            </li></router-link>
                            <router-link to="/"><li>
                                The female reproductive system 1<br>
                                <span class="duration">1:30</span>
                            </li></router-link>
                            <router-link to="/"><li>
                                The female reproductive system 2
                                <br>
                                <span class="duration">1:30</span>
                            </li></router-link>
                            <router-link to="/"><li>
                                Conclusion<br>
                                <span class="duration">1:30</span>
                            </li></router-link>
                        </ul>
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
            searchTerm: '',
            videoUrl2: 'https://www.youtube.com/embed/JKC7jgYHCFI',
            
        }
    },
    methods: {
        getData () {
            axios.get(
                'https://www.googleapis.com/youtube/v3/search', {
                    key: 'AIzaSyBYzgYBvLtto8EW1aP3vyP9ZTeRP4AEfq0',
                    q: 'test',
                    part: 'snippet',
                 })
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
    .page {
        color: #959595;
        margin: 0 20px 0 20px
    }
    .video-container {
        padding: 100px 108px 60px 108px;
        height: auto;
        /* background-color: crimson; */
    }
    .pagination {
        padding: 0 0 30px 0
    }
    .video-name {
        width: 100%;
        text-align: center;
        color: #156EDC;
        font-size:  24px;
        margin-bottom: 35px
    }
    .video-view {
        border-radius: 30px
    }
    .video-view ul {
        margin-left: -40px
    }
    .video-view ul li {
        list-style: none;
        padding: 10px 0 10px 0;
        color:#000;
        border-bottom: 1px solid #dfdfdf
    }
    .active {
        color: #156EDC
    }
    .video-view ul a:hover {
        text-decoration: none
    }
    .video-view ul li .duration {
        color: #959595;
        margin: 7px 0 7px 0
    }
</style>
