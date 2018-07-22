<template>
  <div id="app">
    <router-view/>
    <b-col sm="12" lg="12" class="footer">
        All Rights Reserved. Bookly. 2018
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      inside: true,
      isActive: ''
    }
  },
  methods: {
    activate () {
      this.isActive = 'active'
    }
  }
}
</script>
<style>
* {
  font-family: 'Rubik', sans-serif;
}
#app {
  width: 100%;
  overflow-x: hidden;
  font-family: 'Rubik', sans-serif;
}
.footer {
  height: 100px;
  font-size: 16px;
  line-height: 100px;
  text-align: center;
  color:#959595;
  border-top:1px solid #e1e1e1
  /* background-color: blueviolet; */
}
</style>
