<template>
<div>
    <h1>双葉屋銀箔堂</h1>
  <mymarquee></mymarquee>
<br>
<anime></anime>
<br>
<counter></counter>
<myborder></myborder>

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
</style>
