# vue-mobile-loadmore

移动端，h5/webapp, 简易的上拉加载，下拉刷新。

# Install

```Bash
npm install vue-mobile-loadmore --save
```


## Usage in ES2015/ES6:

```JavaScript

// 在单页内引用
import vueLoadMore from 'vue-mobile-loadmore'
new Vue({
  components: {
     vueLoadMore
  }
})


```


```HTML
  .important
        vue-load-more(
            ref = 'loadMore',
            :option = 'option', // option (require: true)
            v-on:startLoading = 'startLoad',
            v-on:startRefresh = 'startRefresh')
            .body
                p(v-for='x in 100') 123123
  ...
  用的pug,请自行转化html
```

```css
  全局修改css, 来调整样式，注意权重
  #load-more-vue
      .wrap
		  .vue-scroll-body
			  span.refresh-mes
			  img.refresh-img

			  span.loading-mes
			  img.loading-img
  ...
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
        console.log('startLoading')
        // take your owner method such as 'refreshList()'

        setTimeout(() => {
            this.loadFinish()
        }, 500)
    },
    startRefresh() {
        console.log('startRefresh')
        // take your owner method such as 'getList()'
        setTimeout(() => {
            this.loadFinish()
        }, 500)
    },
    loadFinish() {
        // when you get the async data, use this method and it will stop the animation
        this.$refs.loadMore.loadingFinish()
    }
});
```
## Usage in CDN

You can use with `<script>`:

```JavaScript
<vue-load-more
	ref = 'loadMore',
	:option='option', // option (require: true)
	v-on:startLoading = 'startLoad',
    v-on:startRefresh = 'startRefresh'>
  <div class="body">
     <p v-for='x in 100'>123123</p>
  </div>
</vue-load-more>



<script src="xxx/vue.js"></script>
<script type="text/javascript" src='vue-loadmore.js'></script>
<script>
var app = new Vue({
  el: "#app",
  data() {
    return {
       option: {
           refresh_message: '快松手',
           loading_message: '别拉了',
           refresh_img: 'XXXX/loading.gif',
           loading_img: 'XXXX/loading.gif'
       }
    }
  }
})
</script>



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
