<template>
  <div id="app">
    <Nav></Nav>

    <router-view></router-view>
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import posts from '@/assets/json/Posts.json'
/*import Post from '@/components/Post.vue'*/

export default {
  name: 'app',
    data(){
      return{
          posts
      }
    },
  components: {
    Nav/*Post*/
  },
    methods:{
      /*submitPost()*/
    }
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
