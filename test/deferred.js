import '@hydre/doubt'
import { Deferred } from '../src'

'A deferred promise'.doubt(async () => {
	const dp = new Deferred()
	await (200).ms()
	dp.resolve()
	'can be resolved from outside scope'.because(dp.promise).succeeds()
	const dp2 = new Deferred()
	await (200).ms()
	dp2.reject()
	'can be rejected from outside scope'.because(dp2.promise).fails()
})