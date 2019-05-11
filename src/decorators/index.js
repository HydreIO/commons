export function cache(...a) {
	let res = undefined
	const [obj, , { value, get }] = a
	const result = args => (value ? obj::value(args) : obj::get())
	return {
		...a[2],
		[value ? 'value' : 'get'](...a) {
			if (res === undefined) res = result(...a)
			return res
		}
	}
}
