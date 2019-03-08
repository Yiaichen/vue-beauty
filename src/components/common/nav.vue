<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">Beauty Vayi</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="about.html"><i class="glyphicon glyphicon-heart nav-icon-size"></i> Head portrait</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="services.html"><i class="glyphicon glyphicon-piggy-bank nav-icon-size"></i> Emoticon</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html"><i class="glyphicon glyphicon-cd nav-icon-size"></i> Wallpaper</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="blog-post.html"><i class="glyphicon glyphicon-globe nav-icon-size"></i> Blog</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="glyphicon glyphicon-download nav-icon-size"></i> Other Pages
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <router-link to="/rank/index">GitHub</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "myNav"
    }
</script>

<style scoped>
nav{
  position: relative;
}
</style>
