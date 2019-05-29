import '@hydre/doubt'
import { cache } from '../src'

class Foo {
	#i = 0
	#z = 0

	@cache
	bar() {
		return ++this.#i
	}

	@cache
	get baz() {
		return ++this.#z
	}
}

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
