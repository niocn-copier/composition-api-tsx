import { defineComponent, onMounted } from '@vue/composition-api'
import HelloWorld1 from './components/HelloWorld1.vue'
import logo from '@/assets/logo.png'

export default defineComponent({
  setup() {
    onMounted(() => {})
  },
  render() {
    return (
      <div class="app">
        <img alt="Vue logo" src={logo} />
        <HelloWorld1 msg="Welcome to Your Vue.js App"/>
      </div>
    )
  },
})