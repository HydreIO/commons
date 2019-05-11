export function cache(...a) {
	let res = undefined
	const [, , { value, get }] = a
	return {
		...a[2],
		[value ? 'value' : 'get'](...a) {
			if (res === undefined) res = value ? this::value(...a) : this::get()
			return res
		}
	}
}
