<template>
  <div id="detail">
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
        <li class="breadcrumb-item active">Detail</li>
      </ol>

      <!-- Image Header -->
      <div class="row center-block mb-4" style="height: 300px;">
        <img class="img-thumbnail center" width="300px" height="300px" id="scream" v-bind:src="orginImg" alt="QwQ">
        <canvas id="myCanvas" width="300px" height="300px" ref="myCanvas" class="img-thumbnail center">您的浏览器不支持 HTML5 canvas 标签。</canvas>
      </div>
      <div class="row center-block mb-4">
        <label class="center font-weight-normal">原图</label>
        <label class="center font-weight-normal">修改</label>
      </div>

      <!-- Marketing Icons Section -->
      <div class="center col-sm-6">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">font</label>
            <div class="col-sm-10">
              <select  id="disabledTextInput" class="form-control custom-select">
                <option selected>微软雅黑</option>
                <option>宋体</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">font size</label>
            <div class="col-sm-10">
            <select id="disabledSelect" class="form-control custom-select">
              <option selected>14px</option>
              <option>13px</option>
            </select>
            </div>
          </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">color</label>
          <div class="col-sm-10">
            <select class="form-control custom-select">
              <option selected>black</option>
              <option>red</option>
              <option>blue</option>
            </select>
          </div>
        </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="description"></textarea>
            </div>
          </div>
        <div class="row">
          <div class="input-group mb-3 col-sm-8" style="margin-top: 4px">
            <div class="input-group-prepend">
              <span class="input-group-text">自定义表情</span>
            </div>
            <div class="custom-file">
              <input type="file" id="file" class="custom-file-input" @change="preview($event)">
              <label class="custom-file-label">Choose file</label>
            </div>
          </div>
        <div class="col-sm-4"><button @click="showImg" class="btn btn-primary my-1 center">开始制作</button>
          <a href="" @click="saveImg" download="test" id="download" class="btn btn-primary text-light">下载</a></div>
        </div>
      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->

    <!-- Footer -->
    <my-footer></my-footer>

  </div>
</template>

<script defer="defer">
  export default {
    name: "detail",
    data() {
      return {
        myCanvas: null,
        orginImg: this.$route.query.imgUrl,
        description: '',
        results: [],
        getUrl: '/api/detail/getDetail'
      }
    },
    created: function () {
      // this.getImg()              //定义方法
      // this.showImg()
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
      preview(event){
        var oFReader = new FileReader();
        var file =event.target.files[0];
        var self = this;
        oFReader.readAsDataURL(file);
        oFReader.onloadend = function(oFRevent){
          self.orginImg = oFRevent.target.result;
        };
        //判断图片格式
        var fileName=event.target.value;
        var suffixIndex=fileName.lastIndexOf(".");
        var suffix=fileName.substring(suffixIndex+1).toUpperCase();
        if(suffix!="BMP"&&suffix!="JPG"&&suffix!="JPEG"&&suffix!="PNG"&&suffix!="GIF"){
          alert( "请上传图片（格式BMP、JPG、JPEG、PNG、GIF等）!");
        }
      },
      saveImg: function() {
        var c = document.getElementById("myCanvas");
        var dataURL = c.toDataURL("image/png");
        var a = document.getElementById("download");
        a.setAttribute("download","emoticon-");
        a.setAttribute("href",dataURL);
      },
      showImg: function () {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById("scream");
        ctx.drawImage(img,0,0,300,300);
        var text = this.description
        // 设置字体大小
        ctx.font = "28px Microsoft YaHei"
        // 更改字号后，必须重置对齐方式，否则居中麻烦。设置文本的垂直对齐方式
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        // 距离左边的位置
        var left = c.width / 2
        // 距离上边的位置 (图片高-文字距离图片底部的距离)
        var top = c.height / 6
        // 文字颜色
        ctx.fillStyle = "#000"
        // 文字在画布的位置
        ctx.fillText(text, left, top)
      }
    }
  }

</script>

<style scoped>
  .center {
    margin-left: auto;
    margin-right: auto;
  }
</style>
