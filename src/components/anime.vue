<template>
  <div>
<p class="moon aaa" :style="styles">            *         </p>
<p class="moon bbb" :style="styles">      ｡              ☆</p>
<p class="moon ccc" :style="styles">＊      ＿ﾆ三三三＝＿ </p>
<p class="moon ddd" :style="styles">      _ﾆ三三三ﾆ＝￣   </p>
<p class="moon eee" :style="styles">    _ﾆ三三三ﾆ￣      *</p>
<p class="moon aaa" :style="styles">ﾟ-ﾆ三三三ﾆ-      ★    </p>
<p class="moon bbb" :style="styles">-ﾆ三三三ﾆ-  +      +  </p>
<p class="moon ccc" :style="styles">ﾆ三三三三             </p>
<p class="moon ddd" :style="styles">三三三三ﾆ      *  ☆   </p>
<p class="moon eee" :style="styles">ﾆ三三三三  ☆          </p>
<p class="moon aaa" :style="styles">-ﾆ三三三ﾆ-            </p>
<p class="moon bbb" :style="styles">｡-ﾆ三三三ﾆ-           </p>
<p class="moon ccc" :style="styles">    -ﾆ三三三ﾆ_        </p>
<p class="moon ddd" :style="styles">★    -ﾆ三三三         </p>
<p class="moon eee" :style="styles">   *  *￣＝三三ニ＝-  </p>
    </div>
</template>

<script>
var rangea = 0
// var rangeb = 1
// var rangec = 2
// var ranged = 3
// var rangee = 4
export default {
  name: 'moon',
  data: function () {
    return {
      color: '',
      colorful: ['red', 'yellow', 'green', 'blue', 'purple']
    }
  },
  created () {
    setTimeout(() => {
      this.color = this.colorful[0]
    }
      , 2000
    )
  },
  computed: {
    styles () {
      return {
        '--colora': this.color
      }
    }
  },
  updated () {
    setTimeout(() => {
      rangea += 1
      this.color = this.colorful[rangea]
    }
      , 2000
    )
    if (rangea === 4) {
      rangea = -1
    }
  }
}
</script>

<style scoped>
.moon{
  white-space: pre;
  letter-spacing: 0.25rem;
  line-height: 1;
  margin-left: 0;/*左*/
  margin-top: 0;/*上*/
  margin-right: 0;/*右*/
  margin-bottom: 0;/*下*/
}
.aaa{
  --colora: white;
  color: var(--colora);
}
.bbb{
  --colorb: yellow;
  color: var(--colorb);
}
.ccc{
  --colorc: green;
  color: var(--colorc);
}
.ddd{
  --colord: blue;
  color: var(--colord);
}
.eee{
  --colore: purple;
  color: var(--colore);
}
</style>
