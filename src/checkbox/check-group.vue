<template>
  <div class="big-select-btn-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"checkGroup",
  props:{
    value:{
      type: Array,
      required: false,
      default:()=>{
        return[]
      },
    },
  },
  data(){
    return{
      arr:[]
    }
  },
  provide() {
    return {
      Group: this,
    }
  },
  mounted(){
    this.arr=this.value
  },
  methods:{
    check(name,status){
      if (status) {
        this.arrAddItme(this.arr,name)
      } else {
        this.arrDelItem(this.arr,name)
      }
      this.$emit('input',this.arr)
    },
    arrAddItme(arr,item){
      if (arr.includes(item)) return arr;
      return arr.push(item);
    },
    arrDelItem(arr,itme) {
      if (arr.includes(itme)) {
        arr.splice(arr.indexOf(itme),1)
        return arr
      }
      return arr
    }
  }
}
</script>
<style scoped>

</style>