<template>
    <div class="">
     <div class="row" :key="i.id" v-for="i in posts">
        <post :post="i"></post>
    </div>
    </div>
</template>
<script>
    import posts from '../assets/json/Posts.json'
    import Post from '../components/Post.vue'
    export default {

        data(){
            return{
                posts
            }
        },
        components: {
            Post
        }
    }
</script>