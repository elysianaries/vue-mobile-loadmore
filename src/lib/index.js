import vueLoadMore from './vue-loadmore.vue'

const loadmore = {
    install(Vue, options) {
        Vue.component(vueLoadMore.name, vueLoadMore)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(loadmore);
}

export default vueLoadMore
