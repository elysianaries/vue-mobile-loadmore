# vue-loadmore

移动端，h5/webapp, 简易的上拉加载，下拉刷新。

# Install

```Bash
npm install vue-loadmore --save
```

### CommonJS

You can use any build tool which supports `commonjs`:

```JavaScript
// register globally
var vueLoadMore =  require('vue-loadmore');
Vue.use(vueLoadMore)

// or for a single instance
var vueLoadMore = require('vue-loadmore');
new Vue({
  directives: {vueLoadMore}
})

```

Or in ES2015/ES6:

```JavaScript

// 在单页面没引用
import vueLoadMore from 'vue-loadmore'
new Vue({
  components: {
     vueLoadMore
  }
})

// 全局注册
import vueLoadMore from 'vue-loadmore'
Vue.use(vueLoadMore)


```


## Usage

```HTML
  .important
        vueLoadMore(
            :index = 'index',
            ref = 'loadMore',
            :option = 'option',
            v-on:startLoading = 'startLoad',
            v-on:startRefresh = 'startRefresh')
            .body
                p(v-for='x in 100') 123123
  ...
  用的pug,请自行转化html
```

```css
  全局修改css, 来调整样式，注意权重

  span.refresh-mes
  img.refresh-mes

  span.loading-mes
  img.loading-mes
  ...
  用的pug,请自行转化html
```

```JavaScript
new Vue({
  el: '#app',
  data() {
        return {
            option: {
                refresh_message: '快松手',
                loading_message: '别拉了',
                refresh_img: require('../assets/images/load-more/loading.gif'),
                loading_img: require('../assets/images/load-more/loading.gif')
            }
        }
  },
  methods: {
    startLoad() {
        console.log('开始加载')
        // 上拉加载调用的方法
        setTimeout(() => {
            this.loadFinish()
        }, 500)
    },
    startRefresh() {
        console.log('开始刷新')
        // 下拉刷新调用的方法
        setTimeout(() => {
            this.loadFinish()
        }, 500)
    },
    loadFinish() {
        // 获得数据加载完成后 手动调用此方法来结束动画
        this.$refs.loadMore.loadingFinish()
    }
});
```

# Options

| Option | Description |
| ----- | ----- |
| refresh_message | 下拉刷新的提示字段 |
| loading_message | 上拉加载的提示字段 |
| refresh_img | 下拉刷新的loading.gif |
| loading_img | 上拉加载的loading.gif |

## Development

|Command|Description|
|---|---|
|npm run build|Build in umd format|

# License

MIT
