export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/shopping/index',
    'pages/car/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#FF306A',
    backgroundColor: '#FFFFFF',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath:'assets/images/index_0.png',
        selectedIconPath:'assets/images/index_1.png'
      },
      {
        pagePath: 'pages/shopping/index',
        text: '商城',
        iconPath:'assets/images/shopping_0.png',
        selectedIconPath:'assets/images/shopping_1.png'
      },
      {
        pagePath: 'pages/car/index',
        text: '购物车',
        iconPath:'assets/images/car_0.png',
        selectedIconPath:'assets/images/car_1.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath:'assets/images/my_0.png',
        selectedIconPath:'assets/images/my_1.png'
      },
    ]
  },
})
