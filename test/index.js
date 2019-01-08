import tape from 'blue-tape'
import DeferredPromise from '../src/deferredPromise'

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

tape('A deferred promise can be resolved from outside scope', async t => {
	const dp = new DeferredPromise()
	await delay(1000)
	dp.resolve()
	await dp.promise
})

tape('A deferred promise can be rejected from outside scope', async t => {
	const dp = new DeferredPromise()
	dp.reject()
	await t.shouldReject(dp.promise)
})
