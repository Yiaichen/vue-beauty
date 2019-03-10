<template>
  <div id="">
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
      <img class="img-fluid rounded mb-4" src="../../../static/images/banner/03Y.jpg" alt="miao~">

      <!-- Marketing Icons Section -->
      <div class="row">
        <div class="col-lg-4 mb-4" v-for="result in results">
          <div class="card h-100">
            <h4 class="card-header myRow"><div class="headImgD"><img v-bind:src="result.owner.avatar_url" alt="git me" class="img-thumbnail"></div>&nbsp;{{result.name}}</h4>
            <div class="card-body">
              <p class="card-text">{{result.description}}</p>
            </div>
            <div class="card-footer">
              <a v-bind:href="result.html_url" target="_blank" class="btn btn-primary text-light">More</a>
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
</style>
