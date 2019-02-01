<template>
    <div class="row my-4">
        <form class="col-md-6 offset-md-3">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Title" required>
            </div>


            <div class="form-group">
                <label for="Post">Post</label>
                <textarea class="form-control" id="Post" rows="3"></textarea>
            </div>

            <div class="form-group">
                <label for="file-picker">Choose image</label>
                <input type="file" class="form-control-file" id="file-picker">
            </div>
            <div class="form-group">
               <button class="btn btn-success">Post</button>
            </div>
        </form>

    </div>
</template>
<script>

</script>