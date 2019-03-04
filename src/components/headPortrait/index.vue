<template>
  <div id="app">
    <h1>beauty</h1>
    <div class="container">
      <div class="alert alert-success text-center" role="alert">情头</div>
      <table class="table table-striped table-bordered">
        <tr>
          <td>作者</td>
          <td>图片标题</td>
          <td>图片名</td>
          <td>图片展示</td>
        </tr>
        <tr class="text-info" v-for="result in results" :key="result.id">
          <td>{{result.author}}</td>
          <td>{{result.title}}</td>
          <td>{{result.name}}</td>
          <td>
            <div class="tab_image"><img v-bind:src="result.url" style="width: 20rem;"/></div>
          </td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        results: [],
        getUrl: '/api/main/findLover'
      }
    },
    created: function () {
      this.getImg()              //定义方法
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
</style>
