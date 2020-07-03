export default Behavior({
	behaviors: [],
	properties: {
		time: {
			type: Date,
			value: new Date().getTime() + 86400000,
			observer: function (newVal, oldVal) {
				if (newVal && !oldVal) {
					this.getLasetTime()
				}
			}
		}
	},
	data: {
		initAddTime: 0,
		timer: null,
		date: []
	},
	ready: function () {
		this.getLasetTime()
	},
	detached: function () {
		if (this.data.isClearInterval) {
			clearInterval(this.data.timer)
		}
	},
	pageLifetimes: {
		hide () {},
		show () {}
	},
	methods: {
		//自动补零
		zeroPadding (num) {
			num = num.toString()
			return num[1] ? num : '0' + num
		},
		init () {
			clearInterval(this.data.timer)
			const timer = setTimeout(() => {
				this.getLasetTime.call(this)
			}, 1000)
			this.setData({
				timer
			})
		},
		getLasetTime () {
			let { time, status, timeType, initAddTime, countdownType } = this.data
		}
	}
})
