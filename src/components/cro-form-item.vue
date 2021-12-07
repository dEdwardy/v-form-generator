<template>
  <el-form-item
    @click.native="handleClickItem"
    :class="config.active ? 'cro-form-item on' :'cro-form-item off' "
    :label="config.label"
  >
    <el-input
      :size="formConfig.size"
      v-if="config.type === 'input'"
      :value="config.value"
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
    <el-radio-group
      :size="formConfig.size"
      v-else-if="config.type === 'radio'"
      v-model="config.value"
    >
      <el-radio
        v-for="i of config.options"
        :key="i.values"
        :value="i.value"
      >{{ i.label }}</el-radio>
    </el-radio-group>
    <el-select
      :size="formConfig.size"
      v-if="config.type=== 'select'"
      v-model="config.value"
    >
      <el-option
        v-for="item of config.options"
        :key="item.id"
        :label="item.label"
        :value="item.value"
      >{{ item.label }}
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
// import Clickoutside from 'element-ui/src/utils/clickoutside'
import { mapGetters } from 'vuex'
export default {
  name: 'cro-form-item',
  // directives: {
  //   Clickoutside
  // },
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
  },
  methods: {
    handleClickItem () {
      if (this.config.active) return
      this.config.active = true
      const list = this.list.map(i => {
        if (i.id === this.config.id) i.active = true
        return i
      })
      this.$store.commit('setList', list)
    }
    // handleClickout () {
    //   if (!this.config.active) return
    //   this.config.active = true
    //   const list = this.list.map(i => {
    //     if (i.id === this.config.id) i.active = false
    //     return i
    //   })
    //   this.$store.commit('setList', list)
    // }
  }
}
</script>

<style lang="scss" scoped>
.cro-form-item {
  padding: 8px 12px;
  &:hover {
    border: 2px dashed #409eff;
    // outline: 2px solid #409eff;
    background-color: rgba(#409eff, 0.3);
  }
}
.on {
  border: 2px dashed #409eff;
  // outline: 2px solid #409eff;
  background-color: rgba(#409eff, 0.3);
}
.off {
  border: 2px solid transparent;
  outline: 2px solid transparent;
}
</style>
