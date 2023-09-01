<template>
  <div class="test-form">
    <parser :form-conf="formConf" @submit="sumbitForm1" />
  </div>
</template>

<script>
import Parser from '../Parser'

// 若parser是通过安装npm方式集成到项目中的，使用此行引入
// import Parser from 'form-gen-parser'

export default {
  components: {
    Parser
  },
  props: {},
  data() {
    return {
      formConf: {
        fields: [
          {
            __config__: {
              label: '编辑表格',
              tag: 'EditTable',
              tagIcon: 'table',
              defaultValue: [],
              layout: 'colFormItem',
              span: 24,
              showLabel: false,
              labelWidth: null,
              columnId: 4,
              tableDataType: 'dynamic',
              url: 'https://api.thecatapi.com/v1/images/search?limit=10',
              method: 'get',
              requestBody: '',
              dataPath: '',
              formId: 101,
              renderKey: '10116934489877301111'
            },
            columns: [
              {
                prop: 'id',
                label: '编号',
                width: '',
                minWidth: '',
                align: 'center',
                sortable: false,
                resizable: false,
                showOverflowTooltip: false,
                fixed: null,
                _columnDataType: 'text',
                _customerHTML: '',
                _editType: 'text'
              },
              {
                prop: 'width',
                label: '宽度',
                width: '',
                minWidth: '',
                align: 'center',
                sortable: false,
                resizable: false,
                showOverflowTooltip: false,
                fixed: null,
                _columnDataType: 'customer',
                _customerHTML: "function(h,data,row){\n return h('div',data+' px')\n}",
                _editType: 'text'
              },
              {
                prop: 'height',
                label: '高度',
                width: '',
                minWidth: '',
                align: 'center',
                sortable: false,
                resizable: false,
                showOverflowTooltip: false,
                fixed: null,
                _columnDataType: 'text',
                _customerHTML: '',
                _editType: 'text'
              },
              {
                prop: 'url',
                label: '图片',
                width: '',
                minWidth: '',
                align: 'center',
                sortable: false,
                resizable: false,
                showOverflowTooltip: false,
                fixed: null,
                _columnDataType: 'picture',
                _customerHTML: '',
                _editType: 'text'
              }
            ],
            size: 'medium',
            border: true,
            addAble: true,
            editAble: true,
            delAble: true,
            fixedNumber: false,
            fixedEdit: false,
            showNumber: true,
            __vModel__: 'field101'
          }
        ],
        formRef: 'elForm',
        formModel: 'formData',
        size: 'medium',
        labelPosition: 'right',
        labelWidth: 100,
        formRules: 'rules',
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.test-form {
  margin: 15px auto;
  width: 800px;
  padding: 15px;
}
</style>
