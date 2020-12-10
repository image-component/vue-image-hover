<template>
  <div 
    class="vue-image-hover"
    :class="`image-${effect}`"
    :style="hoverStyle">
    <img
      class="vue-image-hover-img"
      @load="loadImg"
      :src="src"
      :style="imgStyle"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageHover',
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 280
    },
    height: {
      type: Number,
      default: 160
    },
    effect: {
      type: String,
      default: ''
    },
    imgMargin: {
      type: String,
      default: ''
    }
  },

  created () {

  },

  mounted () {
    this.loadStyle()
  },

  watch: {
    data(newValue, oldValue) {

    }
  },

  destroyed () {
    ;
  },

  data() {
    return {
      hoverStyle: '',
      imgStyle: '',
    }
  },

  methods: {
    loadStyle() {
      this.hoverStyle = {
        "width": `${this.width}px`,
        "height": `${this.height}px`,
      }
    },

    loadImg(img) {
      const { width, height} = img.path[0];
      if (!this.imgStyle) {
        const rate = this.effect === 'zoom-in' ? 1 : 0.8
        let dx = rate * width - this.width
        let dy = rate * height - this.height
        if (dx > 0 && dy > 0) {
          this.imgStyle = {
            "margin-left": `-${dx/2}px`,
            "margin-top": `-${dy/2}px`,
          }
        }
      }
    },
  },
}
</script>

<style scoped>

</style>

<style>

</style>
