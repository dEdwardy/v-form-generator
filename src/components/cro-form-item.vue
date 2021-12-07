<template>
  <el-form-item :label="config.label">
    <el-input
      :size="formConfig.size"
      v-if="config.type === 'input'"
      v-model="config.value"
    ></el-input>
    <el-input
      :size="formConfig.size"
      type="textarea"
      v-else-if="config.type === 'textarea'"
      v-model="config.value"
    ></el-input>
    <el-input-number
      :size="formConfig.size"
      v-else-if="config.type === 'counter'"
      v-model="config.value"
    ></el-input-number>
    <el-select
      :size="formConfig.size"
      v-if="config.type=== 'select'"
      v-model="config.value"
    >
      <el-option
        v-for="item of config.selectOptions"
        :key="item.id"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-time-select
      :size="formConfig.size"
      v-else-if="config.type==='timepicker'"
      v-model="config.value"
    ></el-time-select>
    <el-date-picker
      :size="formConfig.size"
      v-else-if="config.type==='datepicker'"
      v-model="config.value"
    ></el-date-picker>
    <el-rate
      :size="formConfig.size"
      v-else-if="config.type==='rate'"
      v-model="config.value"
    ></el-rate>
    <el-color-picker
      :size="formConfig.size"
      v-else-if="config.type==='colorpicker'"
      v-model="config.value"
    ></el-color-picker>
    <el-switch
      :size="formConfig.size"
      v-else-if="config.type==='switch'"
      v-model="config.value"
    />
    <el-slider
      :size="formConfig.size"
      v-else-if="config.type==='slider'"
      v-model="config.value"
    />
    <div
      v-text="config.value"
      v-else-if="config.type === 'words'"
    >
    </div>
    <div
      v-html="config.value"
      v-else-if="config.type==='html'"
    >

    </div>
  </el-form-item>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cro-form-item',
  props: {
    config: {
      type: Object,
      default: () => ({ type: 'input', value: 'a', label: 'label', list: ['a', 'b', 'c'] })
    }
  },
  computed: {
    ...mapGetters(['list', 'formConfig'])
  },
  mounted () {
    console.error(this.formConfig)
  }
}
</script>

<style>
</style>
