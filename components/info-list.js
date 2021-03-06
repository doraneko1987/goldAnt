// components/component-tag-name.js
Component({
  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ''
    },
    isShow: {
      type: Boolean,
      value: false
    }
  },
  observers: {
    'isShow': function (val) {
      if (!this._hasLoadData) {
        this.getData();
      }
      let show = !val ? 'tab-hide' : ''
      this.setData({
        showClass: show
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    showClass: '',
    infoList: [],
    _hasLoadData: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getData() {
      this._hasLoadData = true;
      this.setData({
        infoList: [{
          imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
          title: '湛江市赤坎区安铺人鸡饭店',
          address: '广东省湛江市赤坎区金城新区127号'
        }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }, {
            imgUrl: 'https://img-blog.csdnimg.cn/20190927151132530.png',
            title: '湛江市赤坎区安铺人鸡饭店',
            address: '广东省湛江市赤坎区金城新区127号'
          }]
      })
    }
  }
})
