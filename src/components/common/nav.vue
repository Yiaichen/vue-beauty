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
            <router-link to="/headPortrait/index" class="nav-link"><i class="myGlyphicon glyphicon-heart nav-icon-size"></i> Head portrait</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/emoticon/index" class="nav-link"><i class="myGlyphicon glyphicon-piggy-bank nav-icon-size"></i> Emoticon</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wallpaper/index" class="nav-link"><i class="myGlyphicon glyphicon-cd nav-icon-size"></i> Wallpaper</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="http://vayi.site/"><i class="myGlyphicon glyphicon-globe nav-icon-size"></i> Blog</a>
          </li>
          <li class="nav-item">
            <router-link to="/rank/index" class="nav-link"><i class="myGlyphicon glyphicon-apple nav-icon-size"></i> GitHub</router-link>
          </li>

          <!--<li class="nav-item dropdown">-->
            <!--<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
              <!--<i class="glyphicon glyphicon-download nav-icon-size"></i> Other Pages-->
            <!--</a>-->
            <!--<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">-->
              <!--<router-link to="/rank/index">GitHub</router-link>-->
            <!--</div>-->
          <!--</li>-->
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

.myGlyphicon {
  position: relative;
  top: 2px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}
</style>
