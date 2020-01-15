<template>
  <div class="select-item" :class="{'disabled': disabled}" @click="checking">
    <div class="icon">
      <img v-if="disabled" :src="disabledImg||disCheckedImg"/>
      <div v-else>
        <img v-if="status" :src="checkedImg"/>
        <img v-else :src="disCheckedImg"/>
      </div>
    </div>
    <span>{{label}}</span>
  </div>
</template>
<script>
export default {
  name:"checkItem",
  inject:['Group'],
  props:{
    checkedImg: {
      type: String,
      default: `${require('../assets/checked.png')}`,
    },
    disCheckedImg: {
      type: String,
      default: `${require('../assets/dis-checked.png')}`,
    },
    disabledImg: {
      type: String,
      default: `${require('../assets/dis-checked.png')}`,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    disabled:{
      type: Boolean,
      required: false,
    }
  },
  data(){
    return {
      status: false,
    }
  },

  mounted(){
    if (this.Group.value.includes(this.name)) {
      this.status = true;
    }
    
  },
  methods:{
    checking(){
      if (this.disabled) return;
      this.status = !this.status;
      this.Group.check(this.name,this.status);
    }
  }
}
</script>
<style lang='scss' scoped>
  .disabled{
    color: #ccc;
  }
  .select-item{
    display: flex;
    .icon{
      img{
        width: 25px;
        height: 25px;
      }
    }
  }
</style>