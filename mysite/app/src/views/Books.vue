<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(item, index) in items">
          <div class="card mb-4 box-shadow">
            <img class="card-img-top" data-src="" alt="" style="height: 225px; width: 100%; display: block;" src="" data-holder-rendered="true">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.desc }}</p>
              <a href="javascript:void(0)" class="card-link float-right" @click="showDetail($event, item)" >View</a>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
             <div class="modal-header">
             <h4 class="modal-title"></h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
             <div class="modal-body">
             </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
           </div>
          </div>
         </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Data from '../data/Home.js'
import $ from 'jquery/dist/jquery.js'

export default {
  name: 'books',
  data: function() {
    return Data
  },
  methods: {
    showDetail: function(event, item) {
        $('#myModal .modal-title').html(item.title)
        $('#myModal .modal-body').html(item.desc)
        $('#myModal').modal('show')
    }
  }
}
</script>

<style scoped>
.card-title {
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.card-text {
    height: 96px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
