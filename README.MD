![][licence] [![][npm]][npmlink] [![][travis]][travislink] [![][npmdl]][npmlink]

# @hydre/commons

[![][discord]][discordlink] [![][twitter]][twitterlink]

[licence]: https://img.shields.io/github/license/HydreIO/commons.svg?style=for-the-badge
[npm]: https://img.shields.io/npm/v/@hydre/commons.svg?logo=npm&style=for-the-badge
[npmlink]: https://www.npmjs.com/package/@hydre/commons
[travis]: https://img.shields.io/travis/com/HydreIO/commons.svg?logo=travis&style=for-the-badge
[travislink]: https://travis-ci.com/HydreIO/commons
[twitter]: https://img.shields.io/badge/follow-us-blue.svg?logo=twitter&style=for-the-badge
[twitterlink]: https://twitter.com/hydreio
[discord]: https://img.shields.io/discord/398114799776694272.svg?logo=discord&style=for-the-badge
[discordlink]: https://discord.gg/bRSpRpD
[npmdl]: https://img.shields.io/npm/dw/@hydre/commons.svg?color=%239C27B0&style=for-the-badge

Javascript commons

## Install

```
npm i @hydre/commons
```

## Use:

### Deferred Promise
Execute a promise outside scope

```js
import { Deferred } from '@hydre/commons'

const def = new Deferred()
def.promise.then(console.log('slt'))

setTimeout(() => {
	def.resolve() // or deferred.reject()
}, 1000)
```

### Decorators

#### @cache

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

### Helpers

#### mixin

Multiple class inheritance *see [exploring-es7-decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)*

```js
import { mixin } from '@hydre/commons'

const TimeStone = mixin({
	get canRewind() {
		return true
	}
})

const PlaysFortnite = mixin({
	isDumb() {
		return true
	}
})

@TimeStone
@PlaysFortnite
class Thanos {
	isDumb() {
		return false
	}
}

new Thanos().isDumb() |> console.log // print true
```