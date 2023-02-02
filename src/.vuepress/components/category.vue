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
        <div class="article-item">
          <a :href="$site.base.slice(0, -1) + item.regularPath"
            >{{ item.title }}
          </a>
          <div class="info">
            <span class="user">
              <img src="./images/user.svg" alt="" />
              {{ item.frontmatter.author || $themeConfig.author }}
            </span>
            <span class="time">
              <img src="./images/time.svg" alt="" />{{
                item.frontmatter.date || "2023年1月15日09:22:55"
              }}</span
            >
            <span class="category">
              <img src="./images/cate.svg" alt="" />
              {{ (item.frontmatter.categories || []).join("&nbsp;&nbsp;") }}
            </span>
            <span class="tag">
              <img src="./images/tag.svg" alt="" />
              {{ (item.frontmatter.tags || []).join("&nbsp;&nbsp;") }}
            </span>
          </div>
        </div>
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
.article-item
  background: #F9FAFB;
  padding: 1.2rem;
  transition: all 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.04);


.article-item:hover
  box-shadow: 0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008;


.info
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

.info img
  width: 16px;
  height: 16px;
  margin-top: 2px;

.info > span
  display: flex;
  align-items: center;
  gap: 5px;

.info > span.category
  color: #27ae60;

.info > span.tag
  color: #e67e22;


a.tag, a.category
  display: inline-block;
  padding: 4px 6px;
  text-align: center;
  margin-bottom: 10px;

a.category
  color: #27ae60;

a.tag
  color: #e67e22;

a.category.active
  background-color: #27ae60;
  color: white;
  border-radius: 3px;

a.tag.active
  background-color: #e67e22;
  color: white;
  border-radius: 3px;

.article
  padding-bottom: 20px;
</style>
