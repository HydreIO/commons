import tape from 'tape-promise/tape'
import { dPromise, cache } from '../src'

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

tape('A deferred promise', async t => {
	const dp = new dPromise()
	await delay(200)
	dp.resolve()
	await t.doesNotReject(dp.promise, ...[], 'can be resolved from outside scope')
	const dp2 = new dPromise()
	dp2.reject()
	await t.rejects(dp2.promise, ...[], 'can be rejected from outside scope')
})

tape('A cached function', async t => {
	const foo = new Foo()
	foo.bar()
	foo.bar()
	t.equal(foo.bar(), 1, 'should be called only once')
})

tape('A cached getter', async t => {
	const foo = new Foo()
	foo.baz
	foo.baz
	t.equal(foo.baz, 1, 'should be called only once')
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
