<template>
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-4" v-for="(item, index) in items">
          <div class="card mb-4 box-shadow">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.desc }}</p>
              <span v-for="label in item.labels" class="badge badge-dark">{{ label }}</span> 
              <a href="javascript:void(0)" class="card-link float-right" @click="showDetail(item)" >View</a>
            </div>
          </div>
        </div> -->
        <div class="col-md-12" v-for="(item, index) in items" style="margin-bottom: 10px;">
          <div class="card mb-12 box-shadow">
            <div class="card-body">
              <span class="h5 card-title">
                {{ item.title }}
              </span>
              <span v-for="label in item.labels" class="badge badge-dark">{{ label }}</span>
              <a href="javascript:void(0)" class="card-link float-right" @click="showDetail(item)" >View</a>
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
              <iframe width="100%" src="./1.html" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

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
  name: 'home',
  data: function() {
    return {
      'items': Data
    }
  },
  methods: {
    showDetail: function(item) {
        $('#myModal .modal-title').html(item.title)
        if (item.link) {
          $('#myModal .modal-body iframe').attr('src', item.link)
        } else {
          $('#myModal .modal-body iframe').attr('src', 'data/0.html')
        }
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

.badge {
  margin-right: 5px;
}

#myModal .modal-body iframe {
  width: 100%;
  min-height: 150px;
}
</style>
