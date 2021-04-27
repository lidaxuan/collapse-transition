## 展开收起

`vue`项目中展开收起功能

![](https://img-blog.csdnimg.cn/20210427154027837.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzU1MzcwMQ==,size_16,color_FFFFFF,t_70)



简单操作

```javascript
npm i @lijixuan/collapse-transition

import packUp from '@lijixuan/collapse-transition';

mixins: [packUp]
```



```html
el-button(type="text" class="ml10"  @click="packUp")
  span(class="mr5 ml10") {{ packUpFlag ? '收起' : '展开' }}
  i(:class="packUpFlag ? 'el-icon-arrow-up' : 'el-icon-arrow-down'")

```



将要展开收起的元素进行包裹

```js
  collapse-transition
    div(class="collapse-wrap" v-show="packUpFlag")
      //- 你的内容
```



变量与方法 可以进行覆盖

```javascript
	packUpFlag: Boolean;
  //  可以进行覆盖
  packUp() {
  	this.packUpFlag = !this.packUpFlag;
  }

```

