<template>
  <div class="example-wrapper" id="example2">
    <mt-loadmore :top-method="loadTop2" @top-status-change="handleTopChange" ref="bottom">
      <ul class="example-list">
        <li v-for="item in list2" class="example-listitem">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
     <foot-bar :selected="selected"></foot-bar>
  </div>
</template>

<script>
  import footBar from '../components/footBar'
  import { Loadmore } from 'mint-ui';
  export default {
    name: "load-more-list",
    components: {
      footBar
    },
    data() {
      return {
        list2: [],
        topStatus: '',
        selected: '订单'
      }
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },

      loadTop2(id) {
        setTimeout(() => {
          if (this.list2[0] === 1) {
            for (let i = 0; i >= -10; i--) {
              this.list2.unshift(i);
            }
          }
          this.$refs.bottom.onTopLoaded(id);
        }, 1500);
      }
    },
    created() {
      for (let i = 1; i <= 20; i++) {
        this.list2.push(i);
      }
    }
  }
</script>

<style scoped>
  .example-list {
    padding: 4px 4px 0;
    list-style: none;
  }
  .example-listitem {
    height: 50px;
    line-height: 50px;
    border: solid 1px #999;
    border-radius: 2px;
    margin-bottom: 4px;
    text-align: center;
  }
  .example-listitem:last-child {
    margin-bottom: 0;
  }
  .example-wrapper {
    height: 400px;
    overflow: scroll;
  }
  .mint-loadmore-top span {
    display: inline-block;
    transition: .2s linear;
  }
  .rotate {
    transform: rotate(180deg);
  }
</style>
