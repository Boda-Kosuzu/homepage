<template>
  <div class="home-body">
    <div class="home-area">
      <h1 class="home-header">
        Welcome to 小鈴の犬小屋
      </h1>
      <article class="home-article">
        バーチャルプログラマ帽田小鈴の<br>
        活動についてのホームページです!<br>
        自己紹介とか動画、作成物のリンクをおいてあります！
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-body {
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #374047;
}

.home-header {
  font-size: 3rem;
  margin: 0;
  font-size: 3rem;
  width: 605px;
  border-bottom: 1px solid #374047;
  padding: 0 45px;
  margin-bottom: 30px;
}

.home-article {
  font-size: 1.5rem;
  margin-left: 45px;
}
</style>
