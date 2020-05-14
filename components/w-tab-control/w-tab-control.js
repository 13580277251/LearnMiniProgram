// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleitem(event){
      const index = event.currentTarget.dataset.index
      // console.log(index);
      this.setData({
        currentindex:index
      }) 
      this.triggerEvent('itemClick',{index,title:this.properties.title[index]})
    }
  }
})
