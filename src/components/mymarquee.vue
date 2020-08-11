<template>
  <div>
<p id="marquee">
{{msg}}
</p>
  </div>
</template>

<script>
export default {
  el: '#marquee',
  data () {
    return {
      msg: 'Welcome to my homepage!!                          '
    }
  },
  updated () {
    setTimeout(() => {
      this.msg = this.msg.slice(-1) + this.msg.slice(0, -1)
    }
      , 500
    )
  },
  created () {
    setTimeout(() => {
      this.msg = this.msg.slice(-2) + this.msg.slice(0, -2)
    }
      , 500
    )
  }
}
</script>

<style>
#marquee{
  background-color: #ccccff ;
  color: #000000;
  display: inline ;
  white-space: pre ;
}
</style>
