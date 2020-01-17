# vue-checkboxs-radio

### 安装
```
npm install --save vue-checkboxs-radio
```

### 在main.js中引入样式
```
import 'vue-checkboxs-radio/checkbox.css'
```

### 在main.js中全局引入组件和注册组件
###### 也可以在组件中局部引入组件，这里就不详细介绍了
```
import { checkGroup, checkItem } from 'vue-checkboxs-radio'
Vue.use(checkGroup)
Vue.use(checkItem)
```

### 例子
```
<checkGroup v-model="favorites">
  <checkItem name="watermelon" :checkedImg="checkedImg" :disCheckedImg="disCheckedImg" label="西瓜"/>
  <checkItem name="apple" :checkedImg="checkedImg" :disCheckedImg="disCheckedImg" label="苹果"/>
  <checkItem name="banana" :checkedImg="checkedImg" :disCheckedImg="disCheckedImg" :disabledImg="disabledImg" label="香蕉" :disabled="true"/>
</checkGroup>
```

### 说明
```
favorites  // 双向绑定的已经选中的选项 如果是Array就是checkbox如果是String就是radio
checkedImg  // String 选中时的icon图 eg: `${require('../assets/checked.png')}`
disCheckedImg  // String 未选中时的icon图
disabledImg  // String 禁选中时的icon图
label  // String 选项文字内容
disabled  // Boolean 是否禁选
```

