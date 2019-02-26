  <template>
    <div>
      <mt-tabbar v-model="selected1">
        <mt-tab-item id="外卖" @click.native="ToClick(1)">
          <img slot="icon" src="../assets/images/1.png">
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单"  @click.native="ToClick(2)">
          <img slot="icon" src="../assets/images/2.png">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现" @click.native="ToClick(3)">
          <img slot="icon" src="../assets/images/3.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的" @click.native="ToClick(4)">
          <img slot="icon" src="../assets/images/4.png">
          我的
        </mt-tab-item></mt-tabbar>
    </div>
  </template>

  <script>
    export default {
      name: 'HelloWorld',
      props: {
        selected:String
      },
      data() {
        return {
          selected1: this.selected,
        }
      },
      methods: {
        ToClick(index) {
          switch(index) {
            case 1:
              this.$router.push('/')
              break
            case 2:
              this.$router.push('/loadMoreList')
              break
            case 3:
              this.$router.push('/uploadMore')
              break
            case 4:
              this.$router.push('/button')
              break
          }


        }

      }
    }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
