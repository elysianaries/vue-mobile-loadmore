import vueLoadMore from './vue-loadmore.vue'

const loadmore = {
    install(Vue, options) {
        Vue.component(vueLoadMore.name, vueLoadMore)
    }
}

export default vueLoadMore
