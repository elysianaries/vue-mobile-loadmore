<template lang='pug'>
    #load-more-vue
        .wrap
            .loading(v-if='loading_show')
                span.refresh-mes(v-if='pull_down') {{option.refresh_message || optionDefault.refresh_message}}
                img.refresh-img(v-else :src='option.refresh_img || optionDefault.refresh_img')
            .bottom-loading(v-if='bottom_loading_show')
                span.loading-mes(v-if='pull_up') {{option.loading_message || optionDefault.loading_message}}
                img.loading-img(v-else :src='option.loading_img || optionDefault.loading_img')
            .vue-scroll-body(:style='style', @touchstart='touchStart', @touchmove='touchMove', @touchend='touchEnd')
                slot
</template>


<script>
export default {
    name: 'vueLoadMore',
    components: {

    },
    computed: {
    },
    props: {
        option: {
            type: Object
        }
    },
    methods: {
        touchStart(e) {
            this.touch_start_y = e.targetTouches[0].clientY
            this.touch_start_x = e.targetTouches[0].clientX

            this.domBody = document.getElementsByClassName('vue-scroll-body')[0]
            // this.offsetHeight = this.domBody.offsetHeight
            this.startScrollTop = this.domBody.scrollTop
            // this.scrollHeight = this.domBody.scrollHeight
        },
        touchMove(e) {
            this.offsetHeight = this.domBody.offsetHeight
            this.scrollTop = this.domBody.scrollTop
            this.scrollHeight = this.domBody.scrollHeight

            const move_y = e.targetTouches[0].clientY

            if (this.touch_start_y - move_y < 0 && this.scrollTop === 0) {
                this.gap = Math.abs(this.touch_start_y - move_y + this.startScrollTop)
                this.pull_down = true
                if (this.gap >= 100) {
                    this.style = `top: ${this.gap}px;`
                    this.loading_show = 1
                } else {
                    this.style = `top: ${this.gap}px;`
                }
            } // 顶部向下滑动

            if (this.touch_start_y - move_y > 0 && this.scrollTop === this.scrollHeight - this.offsetHeight) {
                const scroll_gap = this.startScrollTop - this.scrollHeight + this.offsetHeight
                // console.log(this.scrollHeight)
                // console.log(this.offsetHeight)
                this.gap = Math.abs(this.touch_start_y - move_y + scroll_gap)

                this.pull_up = true
                if (this.gap >= 100) {
                    this.style = `top: -${this.gap}px;`
                    this.bottom_loading_show = 1
                } else {
                    this.style = `top: -${this.gap}px;`
                }
            } // 向上滑动

            // console.log(this.touch_start_x - move_x)
        },
        startLoading() {
            this.$emit('startLoading', true)
        },
        startRefresh() {
            this.$emit('startRefresh', true)
        },
        loadingFinish() {
            console.log('finish')
            this.loading_show = 0
            this.bottom_loading_show = 0
            this.style = `top: 0px;  transition: all 0.5s ease-in-out`
        },
        touchEnd() {
            console.log(this.gap)
                // 下拉刷新
            if (this.pull_down) {
                if (this.gap >= 100) {
                    this.startRefresh()
                } else {
                    this.style = `top: 0px;  transition: all 0.2s ease-in-out`
                }
                this.pull_down = false
            }

            if (this.pull_up) {
                if (this.gap >= 100 && this.pull_up) {
                    this.startLoading()
                } else {
                    this.style = `top: 0px;  transition: all 0.2s ease-in-out`
                }
                this.pull_up = false
            }
                // 上拉加载
        }
    },
    data() {
        return {
            touch_start_y: 0,
            touch_start_x: 0,
            startScrollTop: 0,
            gap: 0,
            style: '',
            loading_show: 0,
            offsetHeight: 0,
            scrollTop: 0,
            scrollHeight: 0,
            domBody: {},
            load: 0,
            refresh: 0,
            bottom_loading_show: 0,
            pull_down: false,
            pull_up: false,
            optionDefault: {
                refresh_message: '快松手',
                loading_message: '别拉了',
                refresh_img: 'http://www.elysianaries.top/statics/loading.gif',
                loading_img: 'http://www.elysianaries.top/statics/loading.gif'
            }
        }
    },
    mounted() {

    }
}
</script>

<style lang="sass" scoped>
  #load-more-vue
      position: absolute
      height: 100%
      width: 100%
      background-color: #f5f5f5
  .wrap
      position: relative
      height: 100%
      width: 100%
      margin: 0 auto
      overflow: hidden
      .vue-scroll-body
          position: absolute
          top: 0px
          width: 100%
          height: 100%
          overflow: auto
      .loading
          position: absolute
          text-align: center
          width: 100%
          // background-color: blue
          top: 50px
          color: #000
          img
              width: 5rem
      .bottom-loading
          position: absolute
          bottom: 50px
          text-align: center
          width: 100%
          // background-color: blue
          color: #000
          img
              width: 5rem
</style>
