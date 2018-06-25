<template>
    <div id="app">
        <header>
          <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                  <h4 class="text-muted">卷首</h4>
                  <p class="text-white">生活不能等待别人来安排，要自己去争取和奋斗；而不论其结果是喜是悲，但可以慰藉的是，你总不枉在这世界上活了一场。有了这样的认识，你就会珍重生活，而不会玩世不恭；同时，也会给人自身注入一种强大的内在力量。</p>
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
                    <li data-target="#slideTop" data-slide-to="0" class="active"></li>
                    <li data-target="#slideTop" data-slide-to="1"></li>
                    <li data-target="#slideTop" data-slide-to="2"></li>
                  </ul>
                  <!-- 轮播图片 -->
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <h1>Silder1</h1>
                        <p>Silder1</p>
                      <!-- <img src="https://static.runoob.com/images/mix/img_fjords_wide.jpg"> -->
                    </div>
                    <div class="carousel-item">
                        <h1>Silder2</h1>
                        <p>Silder2</p>
                      <!-- <img src="https://static.runoob.com/images/mix/img_nature_wide.jpg"> -->
                    </div>
                    <div class="carousel-item">
                        <h1>Silder3</h1>
                        <p>Silder3</p>
                      <!-- <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg"> -->
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

export default {
  name: 'app'
}
</script>

<style>
  .carousel.slide {
      background-color: slategray;
      text-align: center;
      color: #aaa;
  }

  .carousel-item {
      height: 350px;
  }
</style>
