import { defineComponent, onMounted } from '@vue/composition-api'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    onMounted(() => {})
  },
  render() {
    return (
      <div class="defineComponent">
        <p>defineComponent</p>
      </div>
    )
  },
})