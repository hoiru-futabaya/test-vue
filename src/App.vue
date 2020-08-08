<template>
<div>
<mymarquee></mymarquee>
<div>
    <p class="basetext" v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
</div>
  </div>
</template>

<script>
import mymarquee from './components/mymarquee'

export default {
  components: {
    mymarquee
  },
  data () {
    return {
      msg: 'ちんちん！'
    }
  }
}
</script>
<style>
div{
  text-align: center;
}
</style>
