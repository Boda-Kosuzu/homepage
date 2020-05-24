<template>
  <div
    v-observe-visibility="visibility"
    class="items-body"
  >
    <div
      class="items-area"
    >
      <transition name="introduction-items-header">
        <h1
          v-if="isVisible"
          class="items-header">
          {{ title }}
        </h1>
      </transition>
      <transition name="introduction-items-article">
        <article
          v-if="isVisible"
          class="items-article">
          {{ description }}
        </article>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Items',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    title () {
      return this.data.title
    },
    description () {
      return this.data.description
    }
  },
  methods: {
    visibility (isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>

<style scoped>
.items-body {
  overflow: hidden;
}

.items-header {
  font-size: 3rem;
  width: 30%;
  padding-top: 3rem;
  margin: 0;
  left: 0;
  position: absolute;
  box-sizing: border-box;
}

.items-article {
  font-size: 3rem;
  white-space: pre-line;
  word-break: break-word;
  width: 60%;
  right: 0;
  position: absolute;
  padding-right: 3rem;
  box-sizing: border-box;
}

.items-area {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  mix-blend-mode: difference;
}

.introduction-items-header-enter-active, .introduction-items-header-leave-active {
  transition: opacity .8s, background .8s, left .8s;
}

.introduction-items-header-enter, .introduction-items-header-leave-to {
  opacity: 0;
  left: -30%;
}

.introduction-items-article-enter-active, .introduction-items-article-leave-active {
  transition: opacity .8s, background .8s, right .8s;
}

.introduction-items-article-enter, .introduction-items-article-leave-to {
  opacity: 0;
  right: -30%;
}
</style>
