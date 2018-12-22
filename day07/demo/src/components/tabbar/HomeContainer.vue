<template>
  <div>
    <!--轮播图区域-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="obj in lunbotuList" :key="obj">
        <img :src="obj" alt="obj">
      </mt-swipe-item>
    </mt-swipe>
    <!--六宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/menu1(1).png">
        <div class="mui-media-body">新闻资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/menu2.png">
        <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/menu3.png">
        <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/menu4.png">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/menu5.png">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/images/menu6.png">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>


  </div>
</template>

<script>
export default {
  data(){
    return{
      lunbotuList:[

      ]//保存轮播图的数组
    }
  },
  methods:{
    //获取轮播图数据的方法
    getLunbotu(){

      //TODO 需要更新静态数据为动态数据
      this.$http.get("http://localhost:8081/rest/vue/getLunBo").then(result =>{
        if(result.status == 200){
          this.lunbotuList = result.data.data
        }
      })
    }
  },
  created() {
    this.getLunbotu();
  }
}
</script>

<style lang="scss" scoped>
  /*轮播图样式设置*/
  .mint-swipe{
    height: 200px;
    .mint-swipe-item{
      img{
        width:100%;
        height: 100%;
      }
    }
  }
  /*中部六宫格区样式设置*/
  .mui-grid-view.mui-grid-9{
    background: #fff;
    border:none;
    img{
      width:60px;
      height:60px;
    }
    .mui-media-body{
      font-size: 13px;
    }
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
  }
</style>
