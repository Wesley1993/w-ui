import countDownBehavior from '../behaviors/countdown'
Component({
	externalClasses: [ 'w-class', 'w-class-time', 'w-time-class' ],
	behaviors: [ countDownBehavior ],
	/**
   * 组件的属性列表
   */
	properties: {
		doneText: {
			type: String,
			value: '已结束'
		}
	},

	/**
   * 组件的初始数据
   */
	data: {},

	/**
   * 组件的方法列表
   */
	methods: {}
})
