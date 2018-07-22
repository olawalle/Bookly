<template>
  <div class="wrap">
      <b-row class="header">
          <b-col col="12">
            <router-link to="/books"><img src="../assets/logo.png" alt="" class="logo"></router-link>
              <span class="search-bar">
                <b-input-group class="input">
                  <b-form-input placeholder="Search" class="form-input"></b-form-input>
                  <b-input-group-prepend><font-awesome-icon :icon="['fas', 'search']" size="lg" style="margin-left:-150px; margin-top:11px; z-index:10000; color:#959595"/></b-input-group-prepend>
                  <b-input-group-append>
                    <b-form-select v-model="selected" :options="options" id="exampleInput1"  />
                  </b-input-group-append>
                </b-input-group>
                <!-- <font-awesome-icon icon="search" class="search-icon" /> -->
                </span>
                <b-collapse id="myCollapse">
                <div class="links" :style="linkSty">
                    <ul>
                      <!-- <li  v-for="(link, index) in links" @click="activate(link.name)">
                        <router-link :to="link.url">
                          
                          <span>{{link.name}}</span>
                        </router-link>
                      </li> -->
                      <router-link to="/books">
                      <li @click="books()" :class="bookActive">
                        <font-awesome-icon :icon="['fas', 'book']"  size="lg"/><span>Books</span>
                      </li>
                      </router-link>
                      <router-link to="/videos">
                      <li @click="video()" :class="videosActive">
                        <font-awesome-icon :icon="['fas', 'play']" size="lg" /><span>Videos</span>
                      </li>
                      </router-link>
                      <router-link to="quiz">
                      <li :class="quizActive" @click="quiz()">
                        <font-awesome-icon :icon="['fas', 'question']" size="lg" /><span>Quiz</span>
                      </li>
                      </router-link>
                      <router-link to="quiz">
                      <li :class="profileActive" @click="profile()">
                        <font-awesome-icon :icon="['fas', 'user']" size="lg" /><span>Profile</span>
                      </li>
                      </router-link>
                    </ul>
                </div>
                </b-collapse>
                <b-collapse id="myCollapse2">
                  <b-input-group class="input">
                  <b-form-input placeholder="Search" class="form-input"></b-form-input>
                  <!-- <b-input-group-prepend><font-awesome-icon :icon="['fas', 'search']" size="lg" style="margin-left:-150px; margin-top:11px; z-index:10000; color:#959595"/></b-input-group-prepend> -->
                  <b-input-group-append>
                    <b-form-select v-model="selected" :options="options" id="exampleInput1"  />
                  </b-input-group-append>
                </b-input-group>
                </b-collapse>
                <div class="links wide" :style="linkSty">
                    <ul>
                      <router-link to="/books">
                      <li @click="books()" :class="bookActive">
                        <font-awesome-icon :icon="['fas', 'book']"  size="lg"/><span>Books</span>
                      </li>
                      </router-link>
                      <router-link to="/videos">
                      <li @click="video()" :class="videosActive">
                        <font-awesome-icon :icon="['fas', 'play']" size="lg" /><span>Videos</span>
                      </li>
                      </router-link>
                      <router-link to="quiz">
                      <li :class="quizActive" @click="quiz()">
                        <font-awesome-icon :icon="['fas', 'question']" size="lg" /><span>Quiz</span>
                      </li>
                      </router-link>
                      <router-link to="quiz">
                      <li :class="profileActive" @click="profile()">
                        <font-awesome-icon :icon="['fas', 'user']" size="lg" /><span>Profile</span>
                      </li>
                      </router-link>
                    </ul>
                </div>
                <!-- <b-button  @click="showLinks()">
                  <img src="../assets/menu.svg" alt="" width="20px">
                </b-button> -->
                <span class="mobile-search" v-b-toggle.myCollapse2><font-awesome-icon icon="search" class="search-icon" /></span>
                <b-button class="bars" v-b-toggle.myCollapse>
                  <img src="../assets/menu.svg" alt="" width="20px">
                </b-button>
          </b-col>
      </b-row>
      <b-row>
        <router-view></router-view>
      </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageClass: '',
      linkSty: '',
      bookActive: 'active',
      videosActive: '',
      profileActive: '',
      quizActive: '',
      selected: null,
      options: [
        { value: null, text: 'Categories' },
        { value: 'a', text: 'Books' },
        { value: 'b', text: 'Videos' },
        { value: 'd', text: 'Quizzes'}
      ]
      // links: [
      //   {
      //   name: 'Books',
      //   imgSrc: '../assets/books.png',
      //   url: '/books'
      // }, 
      //   {
      //   name: 'Videos',
      //   imgSrc: '../assets/play.png',
      //   url: '/videos'
      // }, 
      //   {
      //   name: 'Quiz',
      //   imgSrc: '../assets/quiz.png',
      //   url: '/quiz'
      // }, 
      //   {
      //   name: 'Profile',
      //   imgSrc: '../assets/profile.png',
      //   url: '/profile'
      // }]
    }
  },
  methods: {
    showLinks () {
      if (this.linkSty == "") {
        this.linkSty= {'display': 'block'}
      } else {
        this.linkSty= {'display': ""}
      }
      console.log(this.linkSty)
    },
    // Iknow this is not healthy but thats the much i can cook up for now. Bear with us! *winks
    books () {
      this.bookActive = 'active',
      this.videosActive = '',
      this.quizActive = '',
      this.profileActive = ''
    },
    video () {
      this.bookActive = '',
      this.videosActive = 'active',
      this.quizActive = '',
      this.profileActive = ''
    },
    quiz () {
      this.bookActive = '',
      this.videosActive = '',
      this.quizActive = 'active',
      this.profileActive = ''
    },
    profile () {
      this.bookActive = '',
      this.videosActive = '',
      this.quizActive = '',
      this.profileActive = 'active'
    }
  }
}
</script>
<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
  .wrap {
    width: 100%;
    height: auto;
    padding: 0;
    background-color: #fafafa
  }
  .header {
    position: fixed;
    top: 0;
    z-index: 100000;
    background-color: #fff;
    height: 80px;
    width: 102%;
    border-bottom:1px solid #e7e7e7;
    /* background-color: aquamarine; */
    padding-left: 108px;
    padding-top: 15px;
    padding-right:108px;
    /* box-shadow: 30px 30px 30px #4f4646 */
  }
  .logo {
    margin-top: 8px;
  }
  .search-bar {
    /* margin-top: -15px; */
    margin-left: 60px;
  }
  .search-icon {
    margin-left: -215px;
    color: #959595
  }
  .search-bar .input {
    border: 0;
    /* border: 1px solid #8795A1; */
    border-radius: 5px;
    height: 43px;
    margin-left: 220px;
    margin-top: -34px;
    /* padding-left: 45px; */
    width: 288px
  }
  .search-bar .input .form-input {
    padding-left: 50px
  }
  #exampleInput1 {
    height: 100%;
    background-color: #156EDC;
    border: 1px solid #156EDC;
    border-radius: 0px 5px 5px 0;
    color: #fff
  }
  .links {
    float: right;
    margin-top: -46px
    /* display: none */
  }
  .links a {
    color:#959595;
    padding-bottom: 20px;
  }
  .links ul li {
    list-style: none;
    margin-left: 30px;
    /* font-size: 14px; */
    display: inline-block;
    padding: 15px;
    transition: all 0.8s;
    height: 65px
  }
  .links ul li span {
    margin-left: 12px
  }
  .active {
    color: #156EDC;
    font-size: 19px;
    border-bottom: 2px solid #156EDC
  }
  .bars {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #156EDC;
    display: none
  }
    #myCollapse2 {
      display: none
    }
  @media (max-width: 767px) {
    .header {
      width: 105%;
      padding: 20px 0px 0 30px;
    }
    .search-bar {
      display: none
    }
    .search-bar input {
      width: 128px;
    }
    .search-icon {
      margin-left: -115px;
      color: #959595
    }
    .wide {
      display: none
    }
    .links {
      float: right;
      /* display: none */
    }
    .links ul {
      padding: 13px;
      margin-top: 45px;
      /* box-shadow: 3px 3px 3px #959595 */
    }
    .links ul li {
      list-style: none;
      margin-right: -30px;
      display: block;
      padding: 12px 35px 0 35px;
      background-color: #fff;
      z-index: 2000;
      height: 57px
    }
    .mobile-search {
    position: fixed;
    top: 25px;
    right: 0px;
    }
    .bars {
      display: block
    }
    .active {
      color: #156EDC;
      font-size: 19px;
      border-bottom: 0
    }
    #myCollapse2 {
      display: block;
      margin-top:25px;
      width: 100%;
      padding: 12px;
      background-color: #fff
    }
  }
</style>
