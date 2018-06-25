import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Task from './views/Task.vue'
import Books from './views/Books.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/task',
        name: 'task',
        component: Task
    }, {
        path: '/books',
        name: 'books',
        component: Books
    }]
})
