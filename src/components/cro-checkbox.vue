<template>
  <div class="cro-checkbox">
    <el-checkbox v-model="value.required.valid">
      必填<br/>
      <el-input
        class="mt-2"
        v-if="value.required.valid"
        v-model="value.required.msg"
        placeholder="自定义错误提示"
      ></el-input>
    </el-checkbox>
    <el-checkbox
      class="mt-2"

      v-model="value.type.valid"
    >
      <el-select :disabled="!value.type.valid" v-model="value.type.value">
        <el-option
          v-for="item of rules"
          :key="item.label"
          :value="item.label"
        >{{ item.label }}</el-option>
      </el-select>
      <br/>
      <el-input class="mt-1"
        v-model="value.type.msg"
        v-if="value.type.valid"
        placeholder="自定义错误提示"
      ></el-input>
    </el-checkbox>
    <el-checkbox
      class="mt-2"
      v-model="value.reg.valid"
    >
      <el-input :disabled="!value.reg.valid"
        v-model="value.reg.value"
        placeholder="填写正则表达式"
      ></el-input>
      <br/>
      <el-input
        class="mt-1"
        v-if="value.reg.valid"
        v-model="value.reg.msg"
        placeholder="自定义错误提示"
      ></el-input>

    </el-checkbox>
    <el-checkbox
      class="mt-2"
      v-model="value.rule.valid"
    >
      <el-input v-model="value.rule.value"></el-input>
    </el-checkbox>
    <!-- </el-checkbox-group> -->
  </div>

</template>

<script>
export default {
  name: 'cro-checkbox',
  props: {
    value: {
      type: Object,
      default: () => {
        const data = {
          required: {
            valid: false,
            msg: ''
          },
          type: {
            valid: false,
            msg: 'ssss',
            value: 'number'
          },
          reg: {
            valid: false,
            msg: 'xxxx',
            value: '/asdasd/'
          },
          rule: {
            valid: false,
            value: ''
          }
        }
        return data
      }
    }
  },
  watch: {
    value: {
      handler (v) {
        this.$emit('input', this.value)
      },
      deep: true
    }
  },
  data () {
    this.rules = [
      {
        label: '字符串',
        value: /acc/
      }, {
        label: '数字',
        value: /acc/
      }, {
        label: '整数',
        value: /acc/
      }, {
        label: '浮点数',
        value: /acc/
      }, {
        label: 'URL地址',
        value: /acc/
      }, {
        label: '邮箱地址',
        value: /acc/
      }, {
        label: '十六进制',
        value: /acc/
      }
    ]
    return {

    }
  },
  methods: {
    handleChange (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.cro-checkbox {
  ::v-deep .el-checkbox {
    display: flex;
    align-items: flex-start;
    width: 100% !important;
  }
  ::v-deep .el-input{
    width:100% !important;
  }
  ::v-deep .el-checkbox__label{
    width:100% !important;
  }
}
.mt-1 {
  margin-top: 5px;
}
.mt-2 {
  margin-top: 10px;
}
</style>
