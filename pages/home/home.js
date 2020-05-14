// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','裤子','鞋子']
  },
  handlebtn(){
    console.log('按钮点击');
  },
  handleTouchstart(){
    console.log('handleTouchstart');
  },
  bindTouchmove(){
    console.log('bindTouchmove');
  },
  bindTouchend(){
    console.log('bindTouchend');
  },
  bindTap(){
    console.log('bindTap');
  },
  bindLongpress(){
    console.log('bindLongpress');
  },
  handleEventClick(event){
    console.log(event);
  },
  bindTouchend(event){
    console.log(event);
  },
  handleInner(event){
    console.log(event);
  },
  handleouter(event){
    console.log(event);
  },
  handleitem(event){
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index);
  },
  // 事件冒泡和事件捕获、
  handleCaptrueView1(){
    console.log('handleCaptrueView1');
  },
  handleBindView1(){
    console.log('handleBindView1');
  },
  handleCaptrueView2(){
    console.log('handleCaptrueView2');
  },
  handleBindView2(){
    console.log('handleBindView2');
  },
  handleCaptrueView3(){
    console.log('handleCaptrueView3');
  },
  handleBindView3(){
    console.log('handleBindView3');
  }
})