export default Behavior({
	definitionFilter (defField) {
		const { properties } = defFields
		const propsKey = Object.keys(properties)
		propsKey.forEach((name) => {
			const { options } = properties[name]
			if (options) {
				properties[name].observer = function (newValue) {
					if (!options.includes(newValue) && newValue) {
						console.error(`${name}: ${newValue} must be in the [${options}]`)
					}
				}
			}
		})
	}
})
