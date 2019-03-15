<template>
  <div id="">
    <!-- Navigation -->
    <my-nav></my-nav>

    <!-- Page Content -->
    <div class="container">


      <div class="my-3 p-3 bg-white rounded myBox_shadow">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li class="breadcrumb-item active">表情包在线制作</li>
        </ol>

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
          <!-- row -->
          <div class="col-md-3"  v-for="result in results" :key="result.id">
            <div class="card mb-3 myBox_shadow">
              <router-link :to="{path:'/emoticon/detail', query:{ imgUrl: result.url }}">
                <img class="card-img-top" alt="Thumbnail [100%x225]" style="height: 15rem; width: 100%; display: block;"  v-bind:src="result.url" data-holder-rendered="true">
              </router-link>
              <div class="card-body">
                <p class="card-text">{{result.title}}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary"><i class="myGlyphicon glyphicon glyphicon-thumbs-up nav-icon-size"></i> 赞</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary"><i class="myGlyphicon glyphicon glyphicon-heart-empty nav-icon-size"></i> 收藏</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <!-- /.row -->
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
    name: "emoticonMain",
    data() {
      return {
        results: [],
        getUrl: '/main/findLover'
      }
    },
    created: function () {
      this.findGithub()              //定义方法
    },
    methods: {
      findGithub: function () {
        this.axios.get(this.getUrl).then(res => {
          // 成功回调
          this.results = res.data;
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
    padding: 0.5rem 0.65rem;
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

  .myBox_shadow {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
  }
</style>
