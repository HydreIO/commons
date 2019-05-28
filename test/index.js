import '@hydre/doubt'
import { dPromise, cache } from '../src'

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

'A deferred promise'.doubt(async () => {
	const dp = new dPromise()
	await (200).ms()
	dp.resolve()
	'can be resolved from outside scope'.because(dp.promise).succeeds()
	const dp2 = new dPromise()
	await (200).ms()
	dp2.reject()
	'can be rejected from outside scope'.because(dp2.promise).fails()
})

'A cached function'.doubt(() => {
	const foo = new Foo()
	foo.bar()
	foo.bar()
	'should be called only once'.because(foo.bar()).isEqualTo(1)
})

'A cached getter'.doubt(() => {
	const foo = new Foo()
	foo.baz
	foo.baz
	'should be called only once'.because(foo.baz).isEqualTo(1)
})
