![][licence] [![][npm]][npmlink] [![][travis]][travislink]

# @hydre/commons

[![][discord]][discordlink] [![][twitter]][twitterlink]

[licence]: https://img.shields.io/github/license/HydreIO/deferred-promise.svg?style=for-the-badge
[npm]: https://img.shields.io/npm/v/@hydre/deferred-promise.svg?logo=npm&style=for-the-badge
[npmlink]: https://www.npmjs.com/package/@hydre/deferred-promise
[travis]: https://img.shields.io/travis/com/HydreIO/deferred-promise.svg?logo=travis&style=for-the-badge
[travislink]: https://travis-ci.com/HydreIO/deferred-promise
[twitter]: https://img.shields.io/badge/follow-us-blue.svg?logo=twitter&style=for-the-badge
[twitterlink]: https://twitter.com/hydreio
[discord]: https://img.shields.io/discord/265104803531587584.svg?logo=discord&style=for-the-badge
[discordlink]: https://discord.gg/Ea6a5cn

A deferred promise.

### Install

`npm i @hydre/commons`

### Use:

#### Deferred Promise
Execute a promise outside scope

```js
import { dPromise } from '@hydre/commons'

const deferred = new dPromise()
deferred.promise.then(console.log('slt'))

setTimeout(() => {
	deferred.resolve() // or deferred.reject()
}, 1000)
```

#### Decorators

> @cache
Call the function/getter only once and keep the result in memory

```js
import { cache } from '@hydre/commons'

class Foo {

	@cache
	bar() {
		console.log('This line will be printed only once')
		return new myApiCall()
	}

	@cache
	get baz() {
		return 5 + 5
	}
}
```