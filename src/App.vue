<template>
<div>
  <mymarquee></mymarquee>
    <p class="basetext">
      {{msg}}
    </p>
<counter></counter>
</div>
</template>

<script>
import mymarquee from './components/mymarquee'
import counter from './components/counter'

export default {
  components: {
    mymarquee, counter
  },
  data () {
    return {
      msg: '双葉屋ほいるのホームページ'
    }
  }
}
</script>
<style>
div{
  text-align: center;
}
</style>
