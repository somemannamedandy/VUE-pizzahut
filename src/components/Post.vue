<template>
    <div class="col-md-6 offset-md-3">
        <!--1acticle-->
        <div class="card flex-md-row mb-4 shadow-sm h-md-250" >
            <div class="card-body d-flex flex-column align-items-start">

                <h3 class="mb-0">
                    <a class="text-dark" href="#">{{post.title}}</a>
                </h3>
                <div class="mb-1 text-muted">{{post.date}}</div>
                <p class="card-text mb-auto">{{post.desc.substring(0,100)+"..."}}</p>
                <a href="#" data-toggle="modal" data-target="#exampleModal">Continue reading</a>
            </div>
            <img v-bind:src="post.image" class="bd-placeholder-img card-img-right flex-auto d-none d-lg-block" height="250" alt="">
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{post.title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="card-text mb-auto">{{post.desc}}</p>
                        <img v-bind:src="post.image" class="bd-placeholder-img card-img-right flex-auto d-none d-lg-block" height="250" alt="">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
        <!--end article-->
    </div>


</template>
<script>
    export default{
        props:['post']
    }
</script>