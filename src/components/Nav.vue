<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mt-0">
        <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" height="50" width="50" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                   <router-link class="nav-link" to="/Blog">Blog</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Home">Add Post</router-link>
                </li>

            </ul>

        </div>
    </nav>
</template>