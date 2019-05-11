export function cache(...a) {
	let res = undefined
	const [obj, , { value, get }] = a
	const result = () => (value ? obj::value(arguments) : obj::get())
	return {
		...a,
		[value ? 'value' : 'get']() {
			if (res === undefined) res = result()
			return res
		}
	}
}
