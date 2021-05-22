<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangsf
 * @Date: 2021-05-18 16:25:54
 * @LastEditors: wangsf
 * @LastEditTime: 2021-05-18 17:13:10
-->
<template>
  <div class="parentBox">
    <div class="showBox">
      <input type="text" v-model="message" />
      <span>{{message}}</span>
    </div>
    <Child :msg="message" @changeMsg="changeMessage"/>
  </div>
</template>

<script>
import { provide, reactive, ref } from 'vue'
import Child from '../components/Child.vue'

export default {
  name: 'Parent',
  components: {
    Child
  },
  // provide: {
  //   location: '杭州',
  //   person: {
  //     age: 20,
  //     name: 'sam'
  //   }
  // },
  setup() {
    // provide('location', '上海')
    // provide('person', {
    //   age: 23,
    //   name: 'sdsd'
    // })
    const location = ref('杭州')
    const person = reactive({
      age: 18,
      name: 'husky'
    })

    const updateLocation = (newVal) => {
      console.log(newVal)
      location.value = newVal
    }

    provide('location', location)
    provide('person', person)
    provide('updateLocation', updateLocation)
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    changeMessage(event) {
      console.log(event)
      this.message = event;
    },
  }
}
</script>

<style scoped>
/* .parentBox {

} */
.showBox {
  display: flex;
  justify-content: center;
}
</style>