<template>
  <div>
    zoom-in
    <image-hover
      :src="src2"
      effect="zoom-in"
      >
    </image-hover>
    zoom-out
    <image-hover
      :src="src2"
      effect="zoom-out"
      >
    </image-hover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        src1: 'https://github.com/image-component/react-image-shadow/blob/main/image/red.png?raw=true',
        src2: 'https://github.com/image-component/react-image-shadow/blob/main/image/blue.jpg?raw=true',
        src3: 'https://github.com/image-component/react-image-shadow/blob/main/image/white.jpg?raw=true'
      }
    }
  }
</script>

<style>
body {
  text-align: center;
  padding: 10em;
}
</style>
