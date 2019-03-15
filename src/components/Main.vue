<template>
  <!-- Navigation -->
  <div id="main">
    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand text-light" href="index.html">Beauty Vayi</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto text-light">
            <li class="nav-item">
              <router-link to="/headPortrait/index" class="nav-link text-light"><i class="myGlyphicon glyphicon-heart nav-icon-size"></i> Head portrait</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/emoticon/index" class="nav-link text-light"><i class="myGlyphicon glyphicon-piggy-bank nav-icon-size"></i> Emoticon</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/wallpaper/index" class="nav-link text-light"><i class="myGlyphicon glyphicon-cd nav-icon-size"></i> Wallpaper</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" target="_blank" href="http://vayi.site/"><i class="myGlyphicon glyphicon-globe nav-icon-size"></i> Blog</a>
            </li>
            <li class="nav-item">
              <router-link to="/rank/index" class="nav-link text-light"><i class="myGlyphicon glyphicon-apple nav-icon-size"></i> GitHub</router-link>
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

    <header>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div class="carousel-item active" style="background-image: url('./static/images/banner/04Y.jpg')">
            <div class="carousel-caption d-none d-md-block">
              <h3>YoRHa No. 2 Type B</h3>
              <p>This is a NieR:Automata.</p>
            </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('./static/images/banner/07Y.jpg')">
            <div class="carousel-caption d-none d-md-block">
              <h3>Aestheticism Boy</h3>
              <p>This is a Aestheticism Boy.</p>
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('./static/images/banner/06Y.jpg')">
            <div class="carousel-caption d-none d-md-block">
              <h3>LINK</h3>
              <p>The Legend of Zelda: Breath of the Wild.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>

    <!-- Page Content -->
    <div class="container">

      <h1 class="my-4 text-center">Welcome to Beauty Vayi</h1>

      <!-- Portfolio Section -->
      <h2>Portfolio Heading</h2>

      <div class="row">
        <div class="col-lg-3 col-sm-8 portfolio-item" v-for="result in results" :key="result.id">
          <div class="card h-100">
            <router-link :to="{path:'/emoticon/detail', query:{ imgUrl: result.url }}"><img class="card-img-top" v-bind:src="result.url" alt=""></router-link>
            <div class="card-body">
              <h4 class="card-title">
                <router-link to="/emoticon/detail">{{result.title}}</router-link>
              </h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

      </div>
      <!-- /.row -->

      <!-- Features Section -->
      <div class="row">
        <div class="col-lg-6">
          <h2>Modern Business Features</h2>
          <p>The Modern Business template by Start Bootstrap includes:</p>
          <ul>
            <li>
              <strong>Bootstrap v4</strong>
            </li>
            <li>jQuery</li>
            <li>Font Awesome</li>
            <li>Working contact form with validation</li>
            <li>Unstyled page elements for easy customization</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
        </div>
        <div class="col-lg-6">
          <img class="img-fluid rounded" src="../../static/images/banner/05.jpg" alt="">
        </div>
      </div>
      <!--
        >

      <hr>

      <!-- Call to Action Section -->
      <div class="row mb-4">
        <div class="col-md-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
        </div>
      </div>

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <my-footer></my-footer>

  </div>

</template>

<script>
  export default {
    name: 'Main',
    data() {
      return {
        results: [],
        getUrl: '/main/findLover'
      }
    },
    created: function () {
      this.getImg()              //定义方法
    },
    mounted: function () {
      this.init();
    },
    methods: {
      getImg: function () {
        this.axios.get(this.getUrl).then(res => {
          // 成功回调
          this.results = res.data;
        }, res => {
          // 错误回调
          alert("数据返回失败")
        })
      },
      init: function () {
        $(window).scroll(function () {
          var top = 0;
          var scrollTop = $(window).scrollTop();
          console.log("top:" + top);
          console.log("scrollTop:" + scrollTop);
          if (scrollTop > top) {
            $("nav").addClass("bg-dark");
          }else {
            $("nav").removeClass("bg-dark");
          }
        });

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item {
  height: 100vh;
  min-height: 300px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.portfolio-item {
  margin-bottom: 30px;
}

.nav-icon-size {
  font-size: 0.7rem;
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
