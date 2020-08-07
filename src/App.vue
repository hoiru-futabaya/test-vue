<template>
<div>
<myheader></myheader>
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
import myheader from './components/myheader'

export default {
  components: {
    myheader
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
