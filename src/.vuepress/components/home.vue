<template>
  <div class="home-container">
    <div class="title">
      <h1><span>Technology</span> document</h1>
      <a href="archive/" class="btn">Archive</a>
    </div>
    <img src="./images/person.png" alt="" />
  </div>
</template>

<script setup></script>

<style lang="stylus">

html, body
    height: 100% !important;


header.hero
    display: none;

header.navbar
    border: none;

#app, .theme-container, .theme-default-content
    height: 100%;


.home
    height: calc(100% - 3.6rem);
    max-width: 100%;
    background: url('./images/bg.png') no-repeat 60% 100%;
    background-size: cover;
    overflow: hidden;

.home .footer
    border-top: none;


.navbar .links
    display: flex;

.navbar .links .search-box
    order: 2;
    padding-left: 1.5rem;

.home-container
    position: relative;
    height: 100%;

.home-container img
    pointer-events: none;
    position: absolute;
    left: 60%;
    bottom: 0;
    transform: translateX(-50%);

.home-container .title
    position: absolute;
    top: 40%;
    left: 10%;
    z-index: 2;

.home-container .title h1
    font-size: 2rem;
    margin-bottom: 2rem;
.home-container .title span
    color: #4ba0f9

.home-container .title a
    color: #4ba0f9;
    padding: .7rem 2rem;
    border: 1px solid #4ba0f9;
    transition: color 500ms;

.home-container .title a:hover
    background: #4ba0f9;
    color: white;

@media screen and (max-width: 1150px)
    .home-container .title
        top: 20%;
        left: 5%;
</style>
