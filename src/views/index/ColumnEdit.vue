<template>
  <div v-show="show" class="edit-container">
    <div class="edit-title">
      编辑列属性
    </div>
    <el-form v-if="activeColumn" label-width="80px">
      <el-form-item label="字段">
        <el-input :value="activeColumn.prop" size="mini" @input="columnPropChange" />
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="activeColumn.label" size="mini" />
      </el-form-item>
      <el-form-item label="数据类型">
        <el-select v-model="activeColumn._columnDataType" size="mini">
          <el-option label="文本" value="text" />
          <el-option label="链接" value="link" />
          <el-option label="图片" value="picture" />
          <el-option label="金额" value="amount" />
          <el-option label="自定义" value="customer" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="activeColumn._columnDataType == 'customer'" label-width="0">
        <el-input
          v-model="activeColumn._customerHTML"
          type="textarea"
          :rows="4"
          placeholder="请输入自定义模板，例如function(h,data,row){ return h('div',data+300)}其中h为渲染函数data、row为数据,需要返回一个vnode"
        />
      </el-form-item>
      <el-form-item label="编辑格式">
        <el-select v-model="activeColumn._editType" size="mini">
          <el-option label="文本" value="text" />
          <el-option label="数值" value="number" />
        </el-select>
      </el-form-item>
      <el-form-item label="宽度">
        <el-input v-model="activeColumn.width" placeholder="不填就是auto" min="0" size="mini" type="number" />
      </el-form-item>
      <el-form-item label="对其方式">
        <el-radio-group v-model="activeColumn.align" size="mini">
          <el-radio-button label="left">
            居右
          </el-radio-button>
          <el-radio-button label="center">
            居中
          </el-radio-button>
          <el-radio-button label="right">
            居右
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="固定列">
        <el-radio-group v-model="activeColumn.fixed" size="mini">
          <el-radio-button :label="null">
            无
          </el-radio-button>
          <el-radio-button label="left">
            左
          </el-radio-button>
          <el-radio-button label="right">
            右
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否排序">
        <el-switch v-model="activeColumn.sortable" size="mini" />
      </el-form-item>
      <el-form-item label="是否溢出隐藏">
        <el-switch v-model="activeColumn.showOverflowTooltip" size="mini" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
let globalEvent = () => {}
export default {
  props: ['activeColumn'],
  data() {
    return {
      show: false
    }
  },
  mounted() {
    // 挂载全局事件
    globalEvent = event => {
      if (!this.$el.contains(event.target) && !event.target.className.includes('edit-btn-flag')) {
        this.show = false
      }
    }
    document.body.addEventListener('click', globalEvent)
  },
  beforeDestroy() {
    document.body.removeEventListener('click', globalEvent)
  },
  methods: {
    // 列字段修改
    columnPropChange(value) {
      this.$parent.columnPropChange(this.activeColumn, value)
    }
  }
}

</script>

<style lang="scss" scoped>
  .edit-container {
    position: absolute;
    top: 0;
    left: 0px;
    transform: translateX(-100%);
    width: 270px;
    height: 100%;
    padding: 5px 10px 5px;
    border: 1px solid #eee;
    z-index: 3;
    background: #fff;
    overflow: auto;
    box-sizing: border-box;

    .edit-title {
      font-weight: 400;
      color: #1f2f3d;
      line-height: 35px;
      letter-spacing: 1.5px;
      font-size: 16px;
      border-bottom: 1px solid #eee;
      margin-bottom: 5px;
    }
  }

  ::v-deep .el-form-item {
    margin-bottom: 10px
  }

</style>
