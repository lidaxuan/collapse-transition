/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-04-27 15:59:54
 * @FilePath: /collapse-transition/src/index.js
 */


import collapseTransition from './packUp';
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