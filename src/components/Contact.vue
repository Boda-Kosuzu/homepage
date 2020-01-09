<template>
  <div
    class="contact-body"
  >
    <div>
      <h1 class="contact-header">
        HP作成依頼受付中！
      </h1>
      <article class="contact-article">
        HP作成の依頼を受付中です！<br>
        このページのようなHPを作成できます。<br>
        依頼に関してはTwitterのDMやメールでお願いします。<br>
      </article>
      <div class="contact-data">
        <div>
          <ul class="contact-way">
            <li>
              メールアドレス
            </li>
            <ul>
              <li>
                boda.kosuzu@gmail.com
              </li>
            </ul>
            <li>
              Twitter
            </li>
            <ul>
              <li>
                <a href="https://twitter.com/border_s_bell">Twitter</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact-body {
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #374047;
}

.contact-header {
  margin: 0;
  font-size: 3rem;
  width: 460px;
  border-bottom: 1px solid #374047;
  padding: 0 45px;
  margin-bottom: 30px;
}

.contact-article,
.contact-data {
  font-size: 1.5rem;
  margin-left: 45px;
}

.contact-way,
.contact-way ul {
  list-style: none;
}
</style>
