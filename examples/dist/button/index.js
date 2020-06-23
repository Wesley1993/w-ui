import validator from '../behaviors/validator'

Component({
	externalClasses: [ 'w-class', 'w-label-class', 'w-hover-class', 'w-img-class', 'w-icon-class' ],
	behaviors: [ validator ],
	/**
   * 组件的属性列表
   */
	properties: {
		// button组件标识
		name: {
			type: String,
			name: 'wui'
		},
		type: {
			type: String,
			value: 'default',
			options: [ 'info', 'warning', 'success', 'error', 'default' ]
		},
		plain: Boolean,
		size: {
			type: String,
			value: 'medium',
			options: [ 'mini', 'small', 'medium', 'large' ]
		},
		shape: {
			type: String,
			value: 'circle',
			options: [ 'square', 'circle', 'semicircle' ]
		},
		disabled: {
			type: Boolean,
			value: false
		},
		loading: {
			type: Boolean,
			value: false
		},
		width: Number,
		height: Number,
		icon: String,
		image: String,
		bgColor: String,
		iconColor: String,
		iconSize: String
	},

	/**
   * 组件的初始数据
   */
	data: {},

	/**
   * 组件的方法列表
   */
	methods: {
		// button点击事件
		handleTap () {
			if (this.data.disabled || this.data.loading) return false
			this.triggerEvent(
				'wtap',
				{},
				{
					bubbles: true,
					composed: true
				}
			)
		}
	}
})
