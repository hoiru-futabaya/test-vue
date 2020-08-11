<template>
 <div>
<!-- titleは静的、colorは動的なプロパティ-->
<colorwave :title="alpha.A" :color="value.A"></colorwave>
<colorwave :title="alpha.B" :color="value.B"></colorwave>
<colorwave :title="alpha.C" :color="value.C"></colorwave>
<colorwave :title="alpha.D" :color="value.D"></colorwave>
<colorwave :title="alpha.E" :color="value.E"></colorwave>
<colorwave :title="alpha.F" :color="value.A"></colorwave>
<colorwave :title="alpha.G" :color="value.B"></colorwave>
<colorwave :title="alpha.H" :color="value.C"></colorwave>
<colorwave :title="alpha.I" :color="value.D"></colorwave>
<colorwave :title="alpha.J" :color="value.E"></colorwave>
<colorwave :title="alpha.K" :color="value.A"></colorwave>
<colorwave :title="alpha.L" :color="value.B"></colorwave>
<colorwave :title="alpha.M" :color="value.C"></colorwave>
<colorwave :title="alpha.N" :color="value.D"></colorwave>
<colorwave :title="alpha.O" :color="value.E"></colorwave>
    </div>
</template>

<script>
import colorwave from './color-wave.vue'
export default {
  components: {
    colorwave
  },
  data: function () {
    return {
      alpha: {
        A: '            *         ',
        B: '      ｡              ☆',
        C: '＊      ＿ﾆ三三三＝＿ ',
        D: '      _ﾆ三三三ﾆ＝￣   ',
        E: '    _ﾆ三三三ﾆ￣      *',
        F: 'ﾟ-ﾆ三三三ﾆ-      ★    ',
        G: '-ﾆ三三三ﾆ-  +      +  ',
        H: 'ﾆ三三三三             ',
        I: '三三三三ﾆ      *  ☆   ',
        J: 'ﾆ三三三三  ☆          ',
        K: '-ﾆ三三三ﾆ-            ',
        L: '｡-ﾆ三三三ﾆ-           ',
        M: '    -ﾆ三三三ﾆ_        ',
        N: '★    -ﾆ三三三         ',
        O: '   *  *￣＝三三ニ＝-  '
      },
      value: {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4
      }
    }
  }
}
</script>

<style scoped>
</style>
