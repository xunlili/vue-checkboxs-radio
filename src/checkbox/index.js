import checkGroup from './check-group.vue'
import checkItem from './check-item.vue'

checkGroup.install = function (Vue) {
  Vue.component(checkGroup.name,checkGroup)
}

checkItem.install = function (Vue) {
  Vue.component(checkItem.name,checkItem)
}

export {checkGroup,checkItem}
