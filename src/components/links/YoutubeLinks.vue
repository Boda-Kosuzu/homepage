<template>
  <div class="links-youtube-body">
    <div>
      <iframe
        :src="src"
        width="560"
        height="315"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        SameSite="None" />
    </div>
    <div class="links-youtube-introduction">
      <h1>
        {{ title }}
      </h1>
      <article>
        {{ description }}
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubeLinks',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    title () {
      return this.data.title
    },
    description () {
      return this.data.description
    },
    src () {
      return `https://www.youtube.com/embed/videoseries?list=${this.data.id}`
    }
  }
}
</script>

<style scoped>
.links-youtube-body {
  display: flex;
  flex-direction: row;
}

.links-youtube-introduction {
  margin-left: 30px;
}

.links-youtube-introduction > h1 {
  font-size: 2.5rem;
  border-bottom: 1px solid black;
  padding: 0 15px;
}

.links-youtube-introduction > article {
  font-size: 1.3rem;
  white-space: pre-line;
  word-break: break-word;
  padding: 0 15px;
}
</style>
