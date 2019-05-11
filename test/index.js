import tape from 'blue-tape'
import { dPromise, cache } from '../src'

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

tape('A deferred promise can be resolved from outside scope', async t => {
	const dp = new dPromise()
	await delay(1000)
	dp.resolve()
	await dp.promise
})

tape('A deferred promise can be rejected from outside scope', async t => {
	const dp = new dPromise()
	dp.reject()
	await t.shouldReject(dp.promise)
})

tape('A cached function should be called only once', async t => {
	const foo = new Foo()
	foo.bar()
	foo.bar()
	t.equal(foo.bar(), 1)
})

tape('A cached getter should be called only once', async t => {
	const foo = new Foo()
	foo.baz
	foo.baz
	t.equal(foo.baz, 1)
})

class Foo {
	@cache
	bar() {
		if (!this.i) this.i = 0
		return ++this.i
	}

	@cache
	get baz() {
		if (!this.z) this.z = 0
		return ++this.z
	}
}
