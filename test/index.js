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
	i = 0
	z = 0

	@cache
	bar() {
		return ++this.i
	}

	@cache
	get baz() {
		return ++this.z
	}
}
