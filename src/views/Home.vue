<template>
  <div class="home">
    <checkGroup>
      <checkItem name="watermelon" :checkedImg="checkedImg" :disCheckedImg="disCheckedImg" label="西瓜"/>
      <checkItem name="apple" :checkedImg="checkedImg" :disCheckedImg="disCheckedImg" label="苹果"/>
      <checkItem name="banana" :checkedImg="checkedImg" :disCheckedImg="disCheckedImg" :disabledImg="disabledImg" label="香蕉" :disabled="true"/>
    </checkGroup>
  </div>
</template>

<script>
// @ is an alias to /src
// import checkGroup from '../checkbox/check-group.vue'
// import checkItem from '../checkbox/check-item.vue'1
export default {
  name: 'home',
  components: {
    // checkGroup,
    // checkItem,
  },
  data(){
    return{
      checkedImg:`${require('../assets/checked.png')}`,
      disCheckedImg:`${require('../assets/dis-checked.png')}`,
      disabledImg:`${require('../assets/disabled.jpg')}`,
      favorites: ['apple']
    }
  }
}
</script>
