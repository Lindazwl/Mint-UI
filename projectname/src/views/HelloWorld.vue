  <template>
    <div>
      <mt-header title="多个按钮">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <mt-field label="用户名" placeholder="请输入用户名" :state="success" @blur.native.capture="checkInputName" v-model="testForm.username"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="testForm.email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="testForm.password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="testForm.phone"></mt-field>
      <mt-field label="网站" placeholder="请输入网址" type="url" v-model="testForm.website"></mt-field>
      <mt-field label="数字" placeholder="请输入数字" type="number" v-model="testForm.number"></mt-field>
      <mt-field label="生日" placeholder="请输入生日" type="date" v-model="testForm.birthday"></mt-field>
      <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="testForm.introduction"></mt-field>
      <mt-button type="primary" size="large">确认</mt-button>
      <foot-bar :selected="selected"></foot-bar>
    </div>
  </template>

  <script>
    import footBar from '../components/footBar'
    export default {
      name: 'HelloWorld',
      components: {
        footBar
      },
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
          testForm: {
            username: '',
            email: '',
            password: '',
            phone: '',
            website: '',
            number: '',
            birthday: '',
            introduction: ''
          },
          selected: "外卖",
          success: '' // 设置校验状态
        }
      },
      methods: {
        handleClose() {

        },
        checkInputName() {
          var regex = /^[\u4E00-\u9FA5]+$/;//判断是全为汉字
          var name = this.testForm.username;
          if (!regex.test(name)) {
            this.success = "error";
          }
          else {
            this.success = "success";
          }
        }
      }
    }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
