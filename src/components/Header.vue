<template>
  <div id="header">
    <div class="header-image-background">
      <div class="page-title">
        小鈴の犬小屋
      </div>
      <img
        src="../assets/kosuzu.png"
        alt="小鈴さん"
        class="kosuzu-pic"
      >
    </div>
    <div class="header-link-area">
      <ul>
        <li
          :class="{'selected-header-button': isHome}"
          class="header-bar-button home-button"
        >
          <router-link
            :to="{name: 'Home'}"
            :class="{'selected-color': isHome}"
            class="header-link"
          >
            ホーム
          </router-link>
        </li>
        <li
          :class="{'selected-header-button': isIntroduction}"
          class="header-bar-button introduction-button">
          <router-link
            :to="{name: 'Introduction'}"
            :class="{'selected-color': isIntroduction}"
            class="header-link"
          >
            自己紹介
          </router-link>
        </li>
        <li
          :class="{'selected-header-button': isLinks}"
          class="header-bar-button link-button">
          <router-link
            :to="{name: 'Links'}"
            :class="{'selected-color': isLinks}"
            class="header-link"
          >
            リンク
          </router-link>
        </li>
        <li
          :class="{'selected-header-button': isContact}"
          class="header-bar-button contact-button">
          <router-link
            :to="{name: 'Contact'}"
            :class="{'selected-color': isContact}"
            class="header-link"
          >
            依頼
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isHome () {
      return this.$route.name === 'Home'
    },
    isIntroduction () {
      return this.$route.name === 'Introduction'
    },
    isLinks () {
      return this.$route.name === 'Links'
    },
    isContact () {
      return this.$route.name === 'Contact'
    }
  }
}
</script>

<style scoped>
.page-title {
  color: #606E79;
  font-size: 70px;
  min-width: 310px;
  padding: 50px;
  box-sizing: border-box;
}

.header-image-background {
  background: #eceeef;
  display: flex;
  max-height: 250px;
  justify-content: space-between;
  overflow: hidden;
}

.header-link-area {
  background: #606E79;
}

.header-link-area > ul {
  display: flex;
  list-style: none;
  width: 687px;
  margin: 0 auto;
}

.header-bar-button + .header-bar-button {
  border-left: 3px solid #eceeef;
}

.header-bar-button {
  padding: 10px 0;
  transition: background-color .5s linear;
}

.header-bar-button:hover {
  background: #eceeef;
}

.header-bar-button:hover a {
  color: #606E79 !important;
}

.header-link {
  color: #CFD3D7 !important;
  font-size: 36px;
  text-decoration: none;
  padding: 0 30px;
  box-sizing: border-box;
  transition: color .5s linear;
}

.selected-header-button {
  background: #eceeef;
}

.home-button {
  border-left: 3px solid #eceeef;
}

.contact-button {
  border-right: 3px solid #eceeef;
}

.selected-color {
  color: #606E79 !important;
}

.kosuzu-pic {
  width: 650px;
  height: 100%;
}
</style>
