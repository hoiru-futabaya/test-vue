<template>
  <div>
<p id="counter">
{{count}}
</p>
  </div>
</template>

<script>
export default {
  el: '#counter',
  data () {
    return {
      count: 'カウンター'
    }
  }
//  updated () {
//    setTimeout(() => {
//      this.msg = this.msg.slice(-2) + this.msg.slice(0, -2)
//    }
//      , 500
//    )
//  },
//  created () {
//    setTimeout(() => {
//      this.msg = this.msg.slice(-2) + this.msg.slice(0, -2)
//    }
//      , 1000
//    )
//  }
}
</script>

<style>
#counter{
  background-color: #ffffff ;
  display: inline ;
  white-space: pre ;
}
</style>
