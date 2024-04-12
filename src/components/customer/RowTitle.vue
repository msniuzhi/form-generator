<template>
  <div ref="rowTitle" v-text="rowTitleText" :style="setStyle()"></div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      
    }
  },
  props: {
    // rowTitleText: {
    //   type: String,
    //   default: '文本容器'
    // }
  },
  computed: {
    rowTitleText () {
      return this.$attrs.titleText
    },
  },
  watch:{
    $attrs: {
      deep: true,
      handler (val) {
        this.setStyle()
      }
    },
  },
  methods: {
    setStyle(){
      let obj = {
        color: this.$attrs.fontColor,
        fontSize: this.$attrs.fontSize+'px',
        fontWeight: this.$attrs.fontWeight ? 600 : 400,
        textAlign: this.$attrs.textAlign,
      }
      return obj
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
