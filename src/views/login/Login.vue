<template>
  <div id="login">
    <div class="cent">
      <!-- <img class="back" src="../../assets/img/back/backmark.png" /> -->
      <div class="loginIn">
        <h1>登录</h1>
        <a-input class="input" placeholder="Username">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </a-input>
        <a-input class="input" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </a-input>
        <a-button class="button" type="primary" html-type="submit">Log in</a-button>
        <a-divider></a-divider>
        <p class="user"><a-icon type="user" />  用户名登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
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
.input{
    margin-bottom: 20px;
    width: 300px;
    margin-left: 50px;
}
.button{
    margin-left: 80%;
    margin-top: 20%;
}
.user{
    margin-left: 20px;
}
</style>