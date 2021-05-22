<!--
 * @Descripttion: 
 * @version: 
 * @Author: wangsf
 * @Date: 2021-05-18 16:26:04
 * @LastEditors: wangsf
 * @LastEditTime: 2021-05-18 17:29:31
-->
<template>
  <div class="childBox">
    <p>{{msg}}</p> <input type="text" v-model.lazy="newMsg" >
    <button @click="changeMsg">改变</button>
    <div>
      <!-- 这里是{{location}}, {{person.age}} -->
      这里是{{userLocation}}, {{userInfo.age}} {{userInfo.name}}
      <button @click="updateLocation(msg)">修改</button>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Child',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const userLocation = inject('location', '深圳'); // 第二个参数为 默认值
    const userInfo = inject('person')

    const updateLocation = inject('updateLocation')

    return {
      userLocation,
      userInfo,
      updateLocation
    }
  },
  // inject: {
  //   location: {
  //     type: String
  //   },
  //   person: {
  //     type: Object
  //   }
  // },
  // inject: [
  //   'location',
  //   'person'
  // ],
  data() {
    return {
      newMsg: ''
    }
  },
  methods: {
    changeMsg() {
      this.$emit('changeMsg', this.newMsg)
    }
  },
}
</script>

<style>

</style>