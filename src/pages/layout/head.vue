<template>
  <div class="header container">我是头部我要更新啦啦啦
    <div class="box">666</div>
  </div>
</template>
<style lang="less" scoped>
.header {
  color: red;
  display: flex;
}
.container{
  font-size: 60px;
}
.box {
  transform: rotate(45deg);
  border-radius: 5px;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease 0.1s;
}
</style>

