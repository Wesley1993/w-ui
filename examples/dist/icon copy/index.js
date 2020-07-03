Component({
	externalClasses: [ 'w-class', 'w-class-self', 'w-self-class' ],
	options: {
		addGlobalClass: true
	},
	/**
   * 组件的属性列表
   */
	properties: {
		name: String,
		color: {
			type: String,
			value: '#3963bc'
		},
		size: {
			type: String,
			value: '40'
		}
	},
	ready: function () {
		if (!this.properties.name) {
			console.error('请传入Icon组件的name属性')
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
