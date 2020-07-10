export default Behavior({
	behaviors: [],
	properties: {
		time: {
			type: Date,
			value: new Date().getTime() + 86400000,
			observer: function (newVal, oldVal) {
				if (newVal && !oldVal) {
					this.getLatestTime()
				}
			}
		},
		status: {
			type: Boolean,
			value: true,
			observer: function (newVal, oldVal) {
				if (newVal) {
					this.init()
				} else if (!newVal) {
					clearInterval(this.data.timer)
				}
			}
		},
		timeType: {
			type: String,
			value: 'datetime'
		},
		format: {
			type: String,
			value: '{%d}天{%h}时{%m}分{%s}秒'
		},
		isZeroPad: {
			type: Boolean,
			value: true
		},
		countdownType: {
			type: String,
			value: 'normal'
		},
		isClearInterval: {
			type: Boolean,
			value: true
		}
	},
	data: {
		initAddTime: 0,
		timer: null,
		date: []
	},
	ready: function () {
		this.getLatestTime()
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
		getLatestTime () {
			let { time, status, timeType, initAddTime, countdownType } = this.data
			let countDownTime = time
			if (countdownType === 'normal') {
				// 当countdownType===normal时，不影响之前的代码
				countDownTime = typeof time === 'string' ? countDownTime.replace(/-/g, '/') : countDownTime
				countDownTime = Math.ceil((new Date(countDownTime).getTime() - new Date().getTime()) / 1000)
			}

			if (countDownTime < 0 && timeType !== 'second') {
				this._getTimeValue(0)
				this.CountdownEnd()
				return
			}

			if (countDownTime - initAddTime > 0) {
				this.getLatestForCountDown(countDownTime)
			} else if (countDownTime - initAddTime < 0) {
				this.getLatestForAddTime(countDownTime)
			} else if (countDownTime - initAddTime === 0) {
				if (initAddTime <= 0) {
					this._getTimeValue(countDownTime)
				}
				this.CountdownEnd()
			} else if (countdownType == 'anniversary') {
				// 当countdownType === anniversary时，为纪念日模式
			}
		},
		getLatestForAddTime (countDownTime) {
			let { initAddTime } = this.data
			if (initAddTime !== Math.abs(countDownTime)) {
				initAddTime++
			}
		},
		getLatestForCountDown (countDownTime) {},
		_getTimeValue (countDownTime) {},
		_findTimeName (fomatArray, str) {},
		CountdownEnd () {
			this.triggerEvent('lined', {})
		}
	}
})
