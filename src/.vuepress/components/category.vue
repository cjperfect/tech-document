<template>
  <div class="categories">
    <div class="categories">
      <h3>所有分类</h3>
      <div class="all-category">
        <a
          v-for="(item, index) in data.categories"
          :class="['category', data.currentType === item ? 'active' : '']"
          :key="index"
          href="javascript:;"
          @click="selectItem('categoriesMap', item)"
        >
          {{ item }}
        </a>
      </div>
    </div>
    <div class="tags">
      <h3>所有标签</h3>
      <div class="all-tag">
        <a
          :class="['tag', data.currentType === item ? 'active' : '']"
          v-for="(item, index) in data.tags"
          :key="index"
          href="javascript:;"
          @click="selectItem('tagsMap', item)"
        >
          {{ item }}
        </a>
      </div>
    </div>

    <div class="articles">
      <h3>文章列表</h3>
      <div class="article" v-for="(item, index) in data.pages" :key="index">
        <a :href="item.regularPath">{{ item.title }}</a>

        <Badge
          v-for="(cate, i) in item.frontmatter.categories || []"
          :key="i"
          :text="cate"
        />

        <Badge
          type="warning"
          v-for="(cate, i) in item.frontmatter.tags || []"
          :key="i"
          :text="cate"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";

const tagAndCategoryRef = ref({
  allPage: [],
  tagsMap: {},
  categoriesMap: {},
});

const data = reactive({
  currentType: "所有文章",
  tags: [],
  categories: [],
  pages: [],
});

const getTagsOrCategoryMap = (type = "tags", allPage = []) => {
  return allPage.reduce((prev, curr) => {
    (curr["frontmatter"][type] || []).forEach((t) => {
      if (!prev[t]) prev[t] = [];
      prev[t].push(curr);
    });
    return prev;
  }, {});
};

const selectItem = (type = "tagsMap", item) => {
  if (data.currentType === item) return;
  if (item === "所有文章") {
    data.pages = tagAndCategoryRef.value.allPage;
  } else {
    data.pages = tagAndCategoryRef["value"][type][item];
  }

  data.currentType = item;
};

onMounted(() => {
  const vue = getCurrentInstance().proxy;
  const pages = vue.$site.pages;
  const tagsMap = getTagsOrCategoryMap("tags", pages);
  const categoriesMap = getTagsOrCategoryMap("categories", pages);
  const { type, name } = vue.$route.query;

  const allPage = pages.filter((v) => v.title && v.title !== "Home");

  tagAndCategoryRef.value = {
    tagsMap,
    categoriesMap,
    allPage,
  };

  data.tags = ["所有文章", ...Object.keys(tagsMap)];
  data.categories = ["所有文章", ...Object.keys(categoriesMap)];
  if (type) {
    // 说明是文章中点击分类跳转过来的
    selectItem(
      type === "category" ? "categoriesMap" : "tagsMap",
      name || "所有文章"
    );
  } else {
    data.pages = allPage;
  }
});
</script>

<style lang="stylus" scoped>
a.tag, a.category
  display: inline-block;
  padding: 4px 6px;
  text-align: center;
  margin-bottom: 10px;

.article
  padding-bottom: 20px;
a.active
  background-color: #4ba0f9;
  color: white;
</style>
