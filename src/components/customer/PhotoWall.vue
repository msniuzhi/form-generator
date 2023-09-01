<template>
  <div class="pw-list">
    <div v-for="(item, index) in imageList" :key="index" class="pw-item" :style="{width:width+'px',height:height+'px'}">
      <el-image
        :src="item"
        fit="cover"
        :style="{width:width+'px',height:height+'px'}"
        :preview-src-list="imageList"
      />
      <div class="mask">
        <i class="el-icon-search" @click="(e)=>{handlePreview(index,e)}" />
        <i class="el-icon-delete" @click="handleDelete(index)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Array, String],
      default: () => []
    },
    width: {
      type: [Number, String],
      default: 300
    },
    height: {
      type: [Number, String],
      default: 168
    }
  },
  emits: ['input'],
  data() {
    return {
    }
  },
  computed: {
    imageList() {
      if (this.value instanceof Array) {
        return JSON.parse(JSON.stringify(this.value))
      }
      return this.value.split(',')
    }
  },
  created() {

  },
  methods: {
    // 点击预览--该功能依赖于preview-src-list
    handlePreview(index, e) {
      // 获取父节点
      const { parentNode } = e.target.parentNode
      // 获取图片
      const imgNode = parentNode.querySelector('img')
      // 触发图片点击事件
      imgNode.dispatchEvent(new Event('click'))
    },
    // 点击删除
    handleDelete(index) {
      this.imageList.splice(index, 1)
      if (this.value instanceof Array) {
        this.$emit('input', JSON.parse(JSON.stringify(this.imageList)))
      } else {
        this.$emit('input', this.imageList.join(','))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pw-list {
  display: flex;
  gap: 5px;
  padding: 5px 5px;
  flex-wrap: wrap;
  border: 1px solid #eee;
}
.pw-item {
  position:relative;
  border-radius: 8px;
  overflow:hidden;
  .mask{
    display:none;
    position:absolute;
    top:0;left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.3);
    color:white;
    font-size:20px;
    z-index:10;
  }
  &:hover .mask{
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  i{
    cursor:pointer;
  }
}
</style>
