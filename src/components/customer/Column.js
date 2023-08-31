export default {
  functional: true,
  props: {
    text: {
      type: String,
      default: ''
    },
    data: {
      type: [Object, Array, String, Number, Boolean, Function, undefined]
    },
    row: {
      type: [Object, Array, String, Number, Boolean, Function, undefined]
    }
  },
  render(createElement, { props }) {
    try {
    /*
        text示例
        function(h,data,row){
          return h('div',data+300)
        }
    */

      return eval(`(${props.text})(createElement, props.data, props.row)`)
    } catch (error) {
      return createElement('span', props.data)
    }
  }
}
