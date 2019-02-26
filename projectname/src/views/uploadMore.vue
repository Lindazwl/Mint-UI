<template>
  <div>
    <p class="example-title">pull to refresh</p>
    <div class="example-wrapper" id="example1">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="top">
        <ul class="example-list">
          <li v-for="item in list" class="example-listitem">{{ item }}</li>
        </ul>
      </mt-loadmore>
    </div>
     <foot-bar :selected="selected"></foot-bar>
  </div>
</template>

<script>
  import footBar from '../components/footBar'
  export default {
    name: "uploadmore",
    components: {
      footBar
    },
    data() {
      return {
        list: [],
        allLoaded: false,
        selected: '发现'
      }
    },
    methods: {
      loadTop(id) {
        setTimeout(() => {
          if (this.list[0] === 1) {
            for (let i = 0; i >= -10; i--) {
              this.list.unshift(i);
            }
          }
          this.$refs.top.onTopLoaded(id);
        }, 1500);
      },

      loadBottom(id) {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
            this.$refs.top.onBottomLoaded();
          }
        }, 1500);
      }
    },

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  }
</script>

<style scoped>
  .example-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    background-color: #dddddd;
  }
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
    height: 300px;
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
