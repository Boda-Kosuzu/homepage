<template>
  <div id="header">
    <div class="header-image-background">
      <div class="page-title">
        小鈴の犬小屋
      </div>
      <img
        src="../assets/kosuzu2.png"
        alt="小鈴さん"
        class="kosuzu-pic"
      >
    </div>
    <div class="header-link-area">
      <ul>
        <li
          :class="{'selected-header-button': isHome, 'blue-hover': hoverColor[0], 'orange-hover': !hoverColor[0]}"
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
          :class="{'selected-header-button': isIntroduction, 'blue-hover': hoverColor[1], 'orange-hover': !hoverColor[1]}"
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
          :class="{'selected-header-button': isLinks, 'blue-hover': hoverColor[2], 'orange-hover': !hoverColor[2]}"
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
          :class="{'selected-header-button': isContact, 'blue-hover': hoverColor[3], 'orange-hover': !hoverColor[3]}"
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
  data () {
    return {
      hoverColor: []
    }
  },
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
  },
  created () {
    for (let i = 0; i < 4; i++) {
      this.hoverColor.push(Math.random() < 0.5)
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

.page-title {
  text-shadow:
    #e8efff 2px 0px 0px, #e8efff -2px 0px 0px,
    #e8efff 0px -2px 0px, #e8efff 0px 2px 0px,
    #e8efff 2px 2px 0px, #e8efff -2px 2px 0px,
    #e8efff 2px -2px 0px, #e8efff -2px -2px 0px,
    #e8efff 1px 2px 0px, #e8efff -1px 2px 0px,
    #e8efff 1px -2px 0px, #e8efff -1px -2px 0px,
    #e8efff 2px 1px 0px, #e8efff -2px 1px 0px,
    #e8efff 2px -1px 0px, #e8efff -2px -1px 0px,
    #e8efff 1px 1px 0px, #e8efff -1px 1px 0px,
    #e8efff 1px -1px 0px, #e8efff -1px -1px 0px;
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

.blue-hover:hover {
  background: #B3C1E0;
}

.orange-hover:hover {
  background: #e3925b;
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
  width: 450px;
  height: 100%;
  margin-right: 100px;
}
</style>
