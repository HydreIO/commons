export default class {
	promise = new Promise((ok, no) => {
		this.resolve = ok
		this.reject = no
	})
}
