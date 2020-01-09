<template>
  <div class="links-body">
    <ul class="links-list">
      <li>
        <h1 class="links-title">
          Youtube
        </h1>
        <youtube-links
          v-for="(y, key) in youtube"
          :key="key"
          :data="y"
          class="links-item"
        />
      </li>
      <li>
        <h1 class="links-title">
          Twitter
        </h1>
        <div class="links-twitter">
          <article class="links-twitter-article">
            いつも適当につぶやいてます。<br>
            主に日々のとりとめのないこと<br>
            時々プログラミング、時々ゲーム
          </article>
          <time-line
            :id="tweetId"
            :options="options"
            source-type="profile"
          />
        </div>
      </li>
      <li>
        <h1 class="links-title">
          GitHub
        </h1>
        <ul class="git-links">
          <li>
            <a href="https://github.com/Boda-Kosuzu">
              個人ページ
            </a>
          </li>
          <li>
            <a href="https://github.com/Boda-Kosuzu/minesweeper">
              Svelteで作成したマインスイーパー
            </a>
            <article>
              Svelteで作ってみたシリーズ第一弾で作成したもの。
            </article>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import YoutubeLinks from './links/YoutubeLinks'
import { Timeline } from 'vue-tweet-embed'

export default {
  name: 'Links',
  components: {
    YoutubeLinks,
    'time-line': Timeline
  },
  data () {
    return {
      youtube: [
        {
          title: 'Svelteで作ってみたシリーズ',
          description: `フロントエンドの軽量コンパイラ、
Svelteを利用していろいろ作ってみたシリーズ。
マインスイーパー作成は初めて触ったのでグダグダしてます。`,
          id: 'PLFUWmvZ8X_UxwCc9ed159mzWYWMginGxe'
        },
        {
          title: 'カッコいいHPを作るシリーズ',
          description: `JavaScriptのフレームワークのVue.jsを使って
このHPを作った配信シリーズ。
だいたい無言でひたすら作ってます。`,
          id: 'PLFUWmvZ8X_UyNIKK88XicJMdEhSQ17XtY'
        }
      ],
      tweetId: 'border_s_bell',
      options: {
        height: '250',
        width: '500'
      }
    }
  }
}
</script>

<style scoped>
.links-body {
  padding: 60px;
  color: #374047;
  border-color: #374047;
}

.links-item {
  height: 500px;
  margin: 0 30px;
}

.links-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.links-title {
  font-size: 3rem;
  margin-bottom: 60px;
  margin-top: 0;
  padding: 0 30px;
  border-bottom: 1px solid black;
}

.links-list > li {
  width: 75%;
}

.links-twitter {
  display: flex;
}

.links-twitter-article {
  font-size: 1.5rem;
  margin-right: 90px;
}

.git-links {
  font-size: 1.6rem;
}
</style>
