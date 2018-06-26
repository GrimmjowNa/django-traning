<template>
    <div id="app">
        <header>
          <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                  <h4 class="text-muted">卷首</h4>
                  <p class="text-white">{{ content }}</p>
                </div>
                <div class="col-sm-4 offset-md-1 py-4">
                  <h4 class="text-white">Contact</h4>
                  <ul class="list-unstyled">
                    <li><a class="text-white" href="https://github.com/GrimmjowNa/" target="_blank">Git Hub</a></li>
                    <li><a class="text-white" href="mailto:naguangqing@qq.com">Email me</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar navbar-expand-lg navbar-dark bg-dark box-shadow">
            <div class="container d-flex justify-content-between">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link to="/" class="navbar-brand d-flex align-items-center nav-link">
                    <strong>Home</strong>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/books" class="navbar-brand d-flex align-items-center nav-link">
                    <strong>Books</strong>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/task" class="navbar-brand d-flex align-items-center nav-link">
                    <strong>Task</strong>
                  </router-link>
                </li>
              </ul>
              <button class="navbar-toggler" style="display: block" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>
        <main role="main">
            <section>
                <div id="slideTop" class="carousel slide" data-ride="carousel">
                  <!-- 指示符 -->
                  <ul class="carousel-indicators">
                    <li data-target="#slideTop" v-if="index==0" v-bind:data-slide-to="index" v-for="(silder, index) in silders"></li>
                    <li data-target="#slideTop" v-else v-bind:data-slide-to="index"></li>
                  </ul>
                  <!-- 轮播图片 -->
                  <div class="carousel-inner">
                    <div style="background-image: url(https://static.runoob.com/images/mix/img_fjords_wide.jpg)" class="carousel-item active" v-if="index == 0" v-for="(silder, index) in silders">
                        <h1>{{ silder.title }}</h1>
                        <p>{{ silder.desc }}</p>
                    </div>
                    <div style="background-image: url(https://static.runoob.com/images/mix/img_fjords_wide.jpg)" class="carousel-item" v-else>
                        <h1>{{ silder.title }}</h1>
                        <p>{{ silder.desc }}</p>
                    </div>
                  </div>
                  <!-- 左右切换按钮 -->
                  <a class="carousel-control-prev" href="#slideTop" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a class="carousel-control-next" href="#slideTop" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </a>
                </div>
            </section>
          <div class="album py-5 bg-light">
            <router-view />
          </div>
        </main>
        <footer class="text-muted">
          <div class="container">
            <p class="float-right">
              <a href="#" class="text-muted">Back to top</a>
            </p>
          </div>
        </footer>
    </div>
</template>

<script>
import Content from './data/Content.js'
import Silder from './data/Silder.js'

export default {
  name: 'app',
  data: function() {
    let index = Math.floor(Math.random()*Content.length)
    return {
      'content': Content[index],
      'silders': Silder,
    }
  }
}
</script>

<style>
  .carousel.slide {
      background-color: slategray;
      text-align: center;
      color: #fff;
  }

  .carousel-item {
      height: 350px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
  }
</style>
