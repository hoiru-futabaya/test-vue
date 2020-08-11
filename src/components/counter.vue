<template>
  <div>
<p id="counter">
貴方は † {{count}}人目 † の迷える子羊……
</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  el: '#counter',
  data () {
    return {
      count: ''
    }
  },
  created () {
    axios
      .get('https://script.google.com/macros/s/AKfycbwMZwR-7TSCJ79fgfc8yiU37at5fpt6wcVDMTI7Weik-bYqxBaH/exec')
      .then(response => (this.count = response['data']['count']))
  }
}
</script>

<style>
#counter{
  display: inline ;
  white-space: pre ;
}
</style>
