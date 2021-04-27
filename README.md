## 展开收起

`vue`项目中展开收起功能

![](https://img-blog.csdnimg.cn/20210427154027837.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzU1MzcwMQ==,size_16,color_FFFFFF,t_70)

### 第一步

```html
el-button(type="text" class="ml10"  @click="packUp")
  span(class="mr5 ml10") {{ packUpFlag ? '收起' : '展开' }}
  i(:class="packUpFlag ? 'el-icon-arrow-up' : 'el-icon-arrow-down'")

```

### 第二步

创建一个`packUp.js`

```js

import collapseTransition from '@lijixuan/anim';
export default {
  data() {
    return {
      packUpFlag: false,

    };
  },
  components: {collapseTransition},
  methods: {
    // 
    packUp() {
      this.packUpFlag = !this.packUpFlag;
    }
  }
};
```

`  import packUp from '@/mixins/packUp';`

### 第三步

将文件进行混入

  `mixins:[packUp],`

### 第四步

将要展开收起的元素进行包裹

```js
  collapse-transition
    div(class="collapse-wrap" v-show="packUpFlag")
      //- 你的内容
```

