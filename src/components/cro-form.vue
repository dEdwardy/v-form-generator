<script>
import CroFormItem from './cro-form-item.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    CroFormItem
  },
  data () {
    return {

    }
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [[
          {
            type: 'select',
            icon: 'icon-select',
            options: {
              defaultValue: '',
              multiple: false,
              disabled: false,
              clearable: false,
              placeholder: '',
              required: false,
              requiredMessage: '',
              validatorCheck: false,
              validator: '',
              showLabel: false,
              width: '',
              options: [
                {
                  value: 'Option 1'
                },
                {
                  value: 'Option 2'
                },
                {
                  value: 'Option 3'
                }
              ],
              remote: false,
              remoteType: 'datasource',
              remoteOption: 'option_5h3uj6wh',
              filterable: false,
              remoteOptions: [],
              props: {
                value: 'value',
                label: 'label'
              },
              remoteFunc: 'func_5h3uj6wh',
              customClass: '',
              labelWidth: 100,
              isLabelWidth: false,
              hidden: false,
              dataBind: true,
              tableColumn: false
            },
            events: {
              onChange: '',
              onFocus: '',
              onBlur: ''
            },
            name: '下拉选择框',
            key: '5h3uj6wh',
            model: 'select_5h3uj6wh',
            rules: []
          }
        ]]
      }
    }
  },
  computed: {
    ...mapGetters(['formConfig'])
  },
  render () {
    const orderList = this.list.sort((pre, cur) => pre.newIndex - cur.newIndex)
    return (
      <div class="cro-form">
        <el-form labelWidth={ this.formConfig.labelWidth + 'px'}>
          { orderList.map(item => {
            return (<cro-form-item config={ item }/>)
          }) }
        </el-form>
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
</style>
