<template>
  <div id="login">
    <div class="cent">
      <!-- <img class="back" src="../../assets/img/back/backmark.png" /> -->
      <div class="loginIn">
        <div v-if="isShow1">
          <h1>用户名登录</h1>
          <a-input class="input" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
          <a-input class="input" type="password" placeholder="Password">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
          <a-button class="button" type="primary" html-type="submit">Log in</a-button>
        </div>

        <div v-if="isShow2">
          <h1>手机验证码登录</h1>
          <a-input class="input">
            <a-select slot="addonBefore" default-value="+86" style="width: 90px">
              <a-select-option value="中国 +86">+86</a-select-option>
              <a-select-option value="台湾地区 +886">+886</a-select-option>
            </a-select>
          </a-input>
          <div>
              <a-input type="value" style="width:195px;margin-left: 50px"> </a-input>
              <a-button type="primary">获取验证码</a-button>
          </div>
        </div>

        <a-divider></a-divider>
        <p class="user" @click="uselogin" v-if="p1Show">
          <a-icon type="user" />用户名登录
        </p>
        <p class="user" @click="phonelogin" v-if="p2Show">
          <a-icon type="user" />手机验证码登录
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isShow1: false,
      isShow2: true,
      p1Show: true,
      p2Show: false
    };
  },
  methods: {
    uselogin() {
      this.isShow1 = !this.isShow1;
      this.isShow2 = !this.isShow2;
      this.p1Show = !this.p1Show;
      this.p2Show = !this.p2Show;
    },
    phonelogin() {
      this.isShow1 = !this.isShow1;
      this.isShow2 = !this.isShow2;
      this.p1Show = !this.p1Show;
      this.p2Show = !this.p2Show;
    }
  }
};
</script>

<style scoped>
.loginIn {
  background: white;
  border: 1px solid white;
  border-radius: 5px;
  height: 450px;
  width: 400px;
  margin-top: 12%;
  margin-bottom: 10%;
  margin-left: 60%;
}
h1 {
  text-align: center;
  margin-top: 20%;
  margin-bottom: 30px;
  font-size: 25px;
  
}
.input {
  margin-bottom: 20px;
  width: 300px;
  margin-left: 50px;
}
.button {
  margin-left: 80%;
  margin-top: 20%;
}
.user {
  margin-left: 20px;
}
</style>