<template>
<div class="bg">
    <h1>双葉屋銀箔堂</h1>
  <mymarquee></mymarquee>
<br>
<anime></anime>
<br>
<counter></counter>
<myborder></myborder>
<br>
+ Profile 自己紹介 +<br>
<br>
+ Activity 主な活動 +<br>
<br>
+ Twitter ツイッター +<br>
<br>
+ Links リンク +<br>
<myborder></myborder>
<h5>※このサイトはVue.jsの学習がてら2000年くらいによくあったサイトデザインをまねて作ったものです</h5>
</div>
</template>

<script>
import mymarquee from './components/mymarquee'
import counter from './components/counter'
import myborder from './components/myborder'
import anime from './components/anime'

export default {
  components: {
    mymarquee, counter, myborder, anime
  },
  data () {
    return {
      msg: '双葉屋銀箔堂'
    }
  }
}
</script>
<style>
body{
  background-color: #000000;
}
div{
  text-align: center;
  color: #ffffff;
}
.bg {
  background-image: url("~@/assets/darkness.png");
  }
</style>
