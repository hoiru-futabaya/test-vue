<template>
<div>
    <h1>双葉屋銀箔堂</h1>
  <mymarquee></mymarquee>
<br>
<anime></anime>
<br>
<counter></counter>
<br>
<p class="long">※このサイトはVue.jsを覚える為に</p>
<p class="long">2000年代当時よくあったデザインを</p>
<p class="long">記憶を頼りに模して作ったものです</p>
<myborder></myborder>
<br>
<ul class="menu">
<li>Profile +自己紹介+</li>
<li>+</li>
<li>Activity +活動+</li>
<li>+</li>
<li>Twitter +つぶやき+</li>
<li>+</li>
<li>Link +リンク+</li>
</ul>
<myborder></myborder>
<br>
<p class="long">当サイトはリンクフリーです。</p>

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
.long{
  font-size: 0.75rem;
  margin-left: 0;/*左*/
  margin-top: 0;/*上*/
  margin-right: 0;/*右*/
  margin-bottom: 0;/*下*/
  text-align: center;
}
div{
  text-align: center;
  color: #ffffff;
}
.menu{
  line-height: 2.5rem;
  margin-left: 0;
  padding-left: 0;
  color: #ffffff;
  list-style-type: none;
  align: center;
}
</style>
