<template>
  <div>
<p id="counter">
貴方は † {{count}}人目 † の迷える子羊……
</p>
  </div>
</template>

<script>
import access from '@/access/access.js'
export default {
  el: '#counter',
  data () {
    return {
      count: ''
    }
  },
  created () {
    this.count = access.accessCount()
  }
}
</script>

<style>
#counter{
  display: inline ;
  white-space: pre ;
}
</style>
