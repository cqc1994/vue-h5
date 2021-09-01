<template>
  <div id="demo">
    <p>1111</p>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { demo } from "@/api";
import { Button } from 'vant';
export default {
    name: "demo",
    components:{
      [Button.name]:Button
    },
    methods:{
      init(){
        const data = {
          pageNum: 1,
          pageSize: 10
        }
        demo(data).then(res=>{
          console.log('res',res);
        })
      }
    },
    created() {
      this.$toast('1')
      let a = {a:1}
      let b = this.$deepCopy(a)
      b.a = 2
      console.log(a, b);
      this.init()
      // this.$toast({
      //   message:'1',
      //   duration:50000
      // })
    }
  }
</script>

<style lang="less" scoped>
  #demo{
    p{
      font-size: 14px;
    }
  }
</style>
