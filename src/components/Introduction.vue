<template>
  <div class="introduction-body">
    <Items
      v-for="(d, key) in data"
      :key="key"
      :data="d"
      class="introduction-item"
    />
  </div>
</template>

<script>
import Items from './introduction/Items'

export default {
  name: 'Introduction',
  components: {
    Items
  },
  data () {
    return {
      data: [
        {
          title: '帽田小鈴とは…？',
          description: `ボーダーコリー系バーチャルプログラマ！
          犬好きを拗らせて自ら犬になったふつーのプログラマです。`
        },
        {
          title: 'プログラマっていろいろあるけど？',
          description: `クライアントサイドがメインのプログラマです！
          言ってしまえば、Webページを作成するプログラマ！
          このホームページも完全自作です。`
        },
        {
          title: 'Vtuberとしては何してるの？',
          description: `ライブコーディング配信をしてます！(それしかしてない)
          ホームページ作る講座的な動画を出したいと思ってたり、
          VtuberによるVtuberのための(？)Vtuberのゲームも作りたいですね。`
        },
        {
          title: '言語とかは何使ってるの？',
          description: `JavaScriptを使っています！(クライアントサイドだし)
          得意なフレームワークはVue.js！このサイトも！
          あとはSvelteも触ったことがあったり。`
        },
        {
          title: '他に何かある？',
          description: `node.jsとwebpack完全に理解しました。
          このサイトも(ry
          あとWebデザインも勉強中。`
        },
        {
          title: '今後何したい？',
          description: `いろんな人を巻き込んで面白いWebApp作りたい！
          というか、今一つ作ってるから完成をお楽しみに！
          それ以外だと、R言語の勉強したり、モデリングも勉強したい！！！`
        }
      ]
    }
  }
}
</script>

<style scoped>
.introduction-body {
  color: #f9f9fa;
  overflow: hidden;
  position: relative;
}

.introduction-item {
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.introduction-body::before {
  content: "";
  background: #374047;
  position: absolute;
  width: 100%;
  height: 109%;
  transform: rotate(-45deg);
}
</style>
