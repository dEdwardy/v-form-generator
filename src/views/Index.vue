<template>
  <div class="container">
    <div class="form-items">
      <div
        v-for="item in cmp"
        :key="item.label"
        class="section"
      >
        <div class="section-title">
          {{ item.label }}
        </div>
        <div class="section-content">
          <draggable
            v-bind="{group:{ name:'cmp', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
            :move="handleMove"
            v-model="formArr"
          >
            <transition-group>
              <el-button
                @click.stop="() => handleClickCmp(i)"
                v-for="i of item.value"
                :key="i.value"
                class="btn"
              >
                {{i.label}}
              </el-button>
            </transition-group>

          </draggable>

        </div>
      </div>
    </div>
    <div class="main">
      <draggable
        group="cmp"
        @add="handleAdd"
        style="width:100%;height:100%"
        v-model="arr"
      >
        <cro-form :list="arr.map( i =>({...i,type:i.value,value:'a'}))"></cro-form>
      </draggable>
    </div>
    <div class="form-options">
      <el-tabs
        stretch
        v-model="curSetting"
      >
        <el-tab-pane
          label="字段属性"
          name="fieldAttrs"
        >字段属性</el-tab-pane>
        <el-tab-pane
          label="表单属性"
          name="formAttrs"
        >
          <el-form :model="formSettings">
            <el-form-item label="表单宽度">
              <el-input v-model="formSettings.formWidth"></el-input>
            </el-form-item>
            <el-form-item  label="表单标签宽度">
              <el-input-number v-model="formSettings.labelWidth" :step="10"></el-input-number>
            </el-form-item>
            <el-form-item  label="标签对齐方式">
              <el-radio-group v-model="formSettings.size">
                <el-radio-button label="medium"></el-radio-button>
                <el-radio-button label="small"></el-radio-button>
                <el-radio-button label="mini"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-radio-group v-model="formSettings.labelPosition">
                <el-radio-button label="medium"></el-radio-button>
                <el-radio-button label="small"></el-radio-button>
                <el-radio-button label="mini"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CroForm from '@/components/cro-form.vue'
export default {
  components: {
    draggable,
    CroForm
  },
  data () {
    return {
      cmp: {
        basic: {
          label: '基础字段',
          value: [
            {
              label: '单行输入',
              value: 'input'
            },
            {
              label: '多行输入',
              value: 'textarea'
            },
            {
              label: '计数器',
              value: 'counter'
            },
            {
              label: 'radio',
              value: 'radio'
            },
            {
              label: '多选框组',
              value: 'checkbox'
            },
            {
              label: '下拉选择框',
              value: 'select'
            },
            {
              label: '时间选择器',
              value: 'timepicker'
            },
            {
              label: '日期选择器',
              value: 'datepicker'
            },
            {
              label: '评分',
              value: 'rate'
            },
            {
              label: '颜色选择器',
              value: 'colorpicker'
            },
            {
              label: '开关',
              value: 'switch'
            },
            {
              label: '滑块',
              value: 'slider'
            },
            {
              label: '文字',
              value: 'words'
            },
            {
              label: 'HTML',
              value: 'html'
            },
            {
              label: '按钮',
              value: 'button'
            },
            {
              label: '文字链接',
              value: 'link'
            }
          ]
        },
        advanced: {
          label: '高级字段',
          value: []
        },
        layout: {
          label: '布局字段',
          value: []
        },
        diy: {
          label: '自定义字段',
          value: []
        }
      },
      formArr: [],
      arr: [],
      curSetting: 'fieldAttrs',
      formSettings: {
        formWidth: '100%',
        labelWidth: 100,
        size: 'medium'
      }
    }
  },
  computed: {
    formItem () {
      return Object.values(this.cmp).map(obj => {
        console.log(obj.value)
        return obj.value || []
      }).flat(Infinity)
    }
  },
  watch: {
    formSettings: {
      handler (config) {
        this.$store.commit('setConfig', config)
      },
      deep: true
    }
  },
  methods: {
    handleClickCmp (item) {
      this.arr.push({
        ...item,
        type: item.value,
        value: 'a'
      })
    },
    handleMove () {
      return true
    },
    handleAdd (e) {
      console.log(e, e.newIndex, e.item.innerText)
      const cur = this.formItem.filter(i => i.label === e.item.innerText)[0]
      this.arr.push(cur)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  .form-items {
    width: 300px;
    height: 100%;
    .section {
      padding: 0 10px;
      margin-bottom: 10px;
      .btn {
        width: 44%;
        margin: 4px 0;
      }
      margin-bottom: 10px;
      .section-title {
        padding: 8px 12px;
        font-size: 13px;
      }
      .section-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .main {
    flex: 1;
    height: 100%;
  }
  .form-options {
    margin: 0 12px;
    width: 300px;
    height: 100%;
  }
}
</style>
