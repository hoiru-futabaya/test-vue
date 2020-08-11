<template>
<p class="moon" :style="styles">
{{title}}
</p>
</template>

<script>
export default{
  el: '.moon',
  data: function () {
    return {
      style: '',
      colorful: ['#ffff80', '#d5d500', '#555500', '#aaaa00', '#ffffaa']
    }
  },
  props: {
    'title': {
      type: String
    },
    'color': {
      type: Number
    },
    'alpha': {
      type: Object
    }
  },
  created () {
    setTimeout(() => {
      this.style = this.colorful[this.color]
    }
      , 3000
    )
  },
  computed: {
    styles () {
      return {
        '--color': this.style
      }
    }
  },
  updated () {
    setTimeout(() => {
      this.color += 1
      this.style = this.colorful[this.color]
    }
      , 3000
    )
    if (this.color === 4) {
      this.color = -1
    }
  }
}
</script>
<style scoped>
.moon{
  white-space: pre;
  letter-spacing: 0.25rem;
  line-height: 0.5;
  margin-left: 0;/*左*/
  margin-top: 0;/*上*/
  margin-right: 0;/*右*/
  margin-bottom: 0;/*下*/
  --color: black;
  color: var(--color);
}
</style>
