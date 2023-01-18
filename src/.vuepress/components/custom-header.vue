<template>
  <div class="custom-header">
    <h1 class="title">{{ data.title }}</h1>
    <div class="name">
      作者:
      <span>{{ data.author }}</span>
    </div>
    <div class="categories">
      分类:
      <router-link
        v-for="(item, index) in data.categories"
        :to="'/archive/?type=category&' + 'name=' + item"
        :key="index"
        >{{ item }}</router-link
      >
    </div>
    <div class="tags">
      标签:
      <router-link
        :to="'/archive/?type=tag&' + 'name=' + item"
        v-for="(item, index) in data.tags"
        :key="index"
        >{{ item }}</router-link
      >
    </div>
    <div class="date">
      创建时间:
      <span>{{ data.date }}</span>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive } from "vue";

const data = reactive({
  tags: [],
  categories: [],
  date: "",
  author: "",
  title: "",
});

onMounted(() => {
  const {
    $page: page,
    $themeConfig: { author = "陈江" },
  } = getCurrentInstance().proxy;
  const {
    frontmatter: { categories, tags, date, author: matterAuthor, title },
  } = page;

  data.title = title;
  data.tags = tags;
  data.categories = categories;
  data.date = date;
  data.author = matterAuthor || author;
});
</script>

<style lang="stylus" scoped>
.custom-header
  display: flex;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #eaecef;
  font-size: 14px;
  flex-wrap: wrap;

.title
  width: 100%;
  margin: 0;

a
  padding: 4px 6px;

span
  padding: 4px 6px;

.date span
  color: #999;

.name span
  color: #3eaf7c;
</style>
