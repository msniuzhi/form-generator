<template>
  <div>
    <el-table :data="value" v-bind="$attrs" style="width: 100%">
      <!-- 序号列 -->
      <el-table-column
        v-if="showNumber"
        label="序号"
        type="index"
        align="center"
        width="55px"
        :fixed="fixedNumber ? 'left' : null"
      />
      <!-- 内容列 -->
      <!-- :fixed="item.fixed" -->
      <el-table-column
        v-for="item in columns"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width || 'auto'"
        :align="item.align || 'center'"
        :sortable="item.sortable"
        :resizable="item.resizable"
        :fixed="item.fixed"
        :show-overflow-tooltip="item.showOverflowTooltip"
      >
        <template slot-scope="scope">
          <!-- 修改 -->
          <div v-if="editRows[scope.$index]">
            <el-input v-if="item._editType=='number'" v-model="scope.row[item.prop]" type="number" size="small" />
            <el-input v-else v-model="scope.row[item.prop]" size="small" />
          </div>
          <!-- 显示 -->
          <div v-else>
            <!-- 链接类型 -->
            <el-link
              v-if="item._columnDataType == 'link'"
              type="primary"
              @click="handleClickLink(scope.row[item.prop])"
            >
              {{ scope.row[item.prop] }}
            </el-link>
            <!-- 图片类型 -->
            <el-image
              v-else-if="item._columnDataType == 'picture'"
              style="width: 50px; height: 50px"
              :src="scope.row[item.prop]"
              :preview-src-list="[scope.row[item.prop]]"
            />
            <!-- 金额类型 -->
            <span v-else-if="item._columnDataType == 'amount'">{{
              Number(scope.row[item.prop]).toFixed(2)
            }}</span>
            <!-- 自定义类型 -->
            <Column
              v-else-if="item._columnDataType == 'customer'"
              :text="item._customerHTML"
              :data="scope.row[item.prop]"
              :row="scope.row"
            />
            <!-- 文本类型 -->
            <span v-else>{{ scope.row[item.prop] }}</span>
          </div>
        </template>
      </el-table-column>
      <!-- 操作列 -->
      <el-table-column
        v-if="addAble || editAble || delAble"
        label="操作"
        width="130px"
        align="center"
        :fixed="fixedEdit ? 'right' : null"
      >
        <template slot="header" slot-scope="scope">
          <el-button
            v-show="addAble"
            size="mini"
            type="text"
            style="font-size: 16px; color: #67c23a"
            icon="el-icon-plus"
            @click="handleAdd(scope.$index, scope.row)"
          />
          <span v-show="!addAble">操作</span>
        </template>
        <template slot-scope="scope">
          <el-button
            v-show="editAble"
            size="mini"
            type="text"
            style="font-size: 16px"
            :icon="editRows[scope.$index] ? 'el-icon-check' : 'el-icon-edit'"
            @click="handleEdit(scope.$index, scope.row)"
          />
          <el-button
            v-show="delAble"
            size="mini"
            type="text"
            style="font-size: 16px; color: #f56c6c"
            icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Column from '@/components/customer/Column'

export default {
  components: {
    Column
  },
  props: {
    // 列
    columns: {
      type: Array,
      required: true
    },
    // 数据
    value: {
      type: Array,
      required: true
    },
    // 是否可新增
    addAble: {
      type: Boolean,
      default: true
    },
    // 是否可编辑
    editAble: {
      type: Boolean,
      default: true
    },
    // 是否可删除
    delAble: {
      type: Boolean,
      default: true
    },
    // 固定序号列
    fixedNumber: {
      type: Boolean,
      default: true
    },
    // 固定操作列
    fixedEdit: {
      type: Boolean,
      default: true
    },
    // 是否显示序号
    showNumber: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 单独把row编辑状态拿出来而不是放在row数据中
      editRows: []
    }
  },
  created() {
    this.editRows = this.value.map(item => false)
  },
  methods: {
    // 新增
    handleAdd(idx, row) {
      const obj = {}
      this.columns.forEach(column => {
        obj[column.prop] = null
      })
      this.value.push(obj)
      this.editRows.push(false)
      this.$emit('input', this.value)
    },
    // 修改
    handleEdit(idx, row) {
      if (this.editRows[idx]) {
        this.$emit('input', this.value)
      }
      this.$set(this.editRows, idx, !this.editRows[idx])
    },
    // 删除
    handleDelete(idx, row) {
      this.value.splice(idx, 1)
      this.editRows.splice(idx, 1)
      this.$emit('input', this.value)
    },
    // 点击外链
    handleClickLink(url) {
      if (url) {
        if (!url.includes('https') && !url.includes('http')) {
          url = `http://${url}`
        }
        window.open(url)
      }
    }
  }
}
</script>
