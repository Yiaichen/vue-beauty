<template>
  <div style="margin-top: 5rem;">
    <!-- Navigation -->
    <my-nav></my-nav>

    <!-- Page Content -->
    <div class="container">

      <!-- Page Heading/Breadcrumbs -->
      <h1 class="mt-4 mb-3">
        <small></small>
      </h1>

      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li class="breadcrumb-item active">Github</li>
      </ol>

      <!-- Image Header -->
      <img class="img-fluid rounded mb-4" src="../../../static/images/rank/github.jpg" alt="miao~">

      <!-- Marketing Icons Section -->
      <ul class="nav nav-tabs">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">hot</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">hot</a>
            <a class="dropdown-item" href="#">new</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">time</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">day</a>
            <a class="dropdown-item" href="#">week</a>
            <a class="dropdown-item" href="#">month</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">language</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Java</a>
            <a class="dropdown-item" href="#">C</a>
            <a class="dropdown-item" href="#">C#</a>
          </div>
        </li>
      </ul>
      <br/>
      <div class="row">
        <div class="col-lg-4 mb-4" v-for="result in results">
          <div class="card h-100">
            <h4 class="card-header myRow">
              <div class="headImgD"><img v-bind:src="result.owner.avatar_url" alt="git me" class="img-thumbnail"></div>
              <a v-bind:href="result.html_url" target="_blank"  class="myLabel text-primary">&nbsp;{{result.name}}</a></h4>
            <div class="card-body">
              <p class="card-text">{{result.description}}</p>
            </div>
            <div class="myCard-footer myRow">
              <span class="myNavLink"><i class="myGlyphicon glyphicon-star nav-icon-size"></i>&nbsp;{{result.watchers}}</span>
              <span class="myNavLink"><i class="myGlyphicon glyphicon-random nav-icon-size"></i>&nbsp;&nbsp;{{result.forks}}</span>
              <span class="myNavLink"><i class="myGlyphicon glyphicon-pencil nav-icon-size"></i>&nbsp;{{result.language}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <my-footer></my-footer>

  </div>
</template>

<script>
  export default {
    name: "github",
    data() {
      return {
        results: [],
        getUrl: 'https://api.github.com/search/repositories?q=language:java&sort=stars'
      }
    },
    created: function () {
      this.findGithub()              //定义方法
    },
    methods: {
      findGithub: function () {
        this.axios.get(this.getUrl).then(res => {
          // 成功回调
          this.results = res.data.items;
      }, res => {
          // 错误回调
          alert("数据返回失败")
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    text-align: center;
    margin: 0 auto;
    width: 1000px;
  }

  .myRow {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .headImgD {
    height: 2rem;
    width: 2rem;
  }

  .myNavLink {
    display: block;
    padding: 0.5rem 1.2rem;
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

  .myLabel {
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 0px;
  }

  .myCard-footer {
    padding: 0rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }
</style>
