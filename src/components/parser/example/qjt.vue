<template>
  <div class="test-form">
    <parser :form-conf="formConf" @submit="sumbitForm1" />
  </div>
</template>

<script>
import Parser from "../Parser";

// 若parser是通过安装npm方式集成到项目中的，使用此行引入
// import Parser from 'form-gen-parser'

export default {
  components: {
    Parser,
  },
  props: {},
  data() {
    return {
      formConf: {
        fields: [
          {
            __config__: {
              label: "编辑表格",
              tag: "EditTable",
              tagIcon: "table",
              defaultValue: [
                {
                  column1: "小王",
                  column2: "技术部",
                  column3: "1天",
                },
                {
                  column1: "小张",
                  column2: "财务部",
                  column3: "2天",
                },
                {
                  column1: "小李",
                  column2: "运营部",
                  column3: "3天",
                },
              ],
              layout: "colFormItem",
              span: 24,
              showLabel: false,
              labelWidth: null,
              columnId: 3,
              tableDataType: "static",
              url: "",
              method: "",
              requestBody: "",
              dataPath: "",
              formId: 101,
              renderKey: "1011693445889672",
            },
            columns: [
              {
                prop: "column1",
                label: "姓名",
                width: "",
                minWidth: "",
                align: "center",
                sortable: false,
                resizable: false,
                showOverflowTooltip: false,
                fixed: null,
                _columnDataType: "text",
                _customerHTML: "",
                _editType: "text",
              },
              {
                prop: "column2",
                label: "部门",
                width: "",
                minWidth: "",
                align: "center",
                sortable: false,
                resizable: false,
                showOverflowTooltip: false,
                fixed: null,
                _columnDataType: "text",
                _customerHTML: "",
                _editType: "text",
              },
              {
                prop: "column3",
                label: "请假时间",
                width: "",
                minWidth: "",
                align: "center",
                sortable: false,
                resizable: false,
                showOverflowTooltip: false,
                fixed: null,
                _columnDataType: "text",
                _customerHTML: "",
                _editType: "text",
              },
            ],
            size: "medium",
            border: true,
            addAble: true,
            editAble: true,
            delAble: true,
            fixedNumber: false,
            fixedEdit: false,
            showNumber: true,
            __vModel__: "field101",
          },
        ],
        formRef: "elForm",
        formModel: "formData",
        size: "medium",
        labelPosition: "right",
        labelWidth: 100,
        formRules: "rules",
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.test-form {
  margin: 15px auto;
  width: 800px;
  padding: 15px;
}
</style>
