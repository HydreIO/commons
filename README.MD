![][licence] [![][npm]][npmlink] [![][travis]][travislink] [![][depfu]][depfulink]

# deferred-promise

[![][discord]][discordlink] [![][twitter]][twitterlink]

[licence]: https://img.shields.io/github/license/HydreIO/deferred-promise.svg?style=for-the-badge
[npm]: https://img.shields.io/npm/v/@hydre/deferred-promise.svg?logo=npm&style=for-the-badge
[npmlink]: https://www.npmjs.com/package/@hydre/deferred-promise
[travis]: https://img.shields.io/travis/com/HydreIO/deferred-promise.svg?logo=travis&style=for-the-badge
[travislink]: https://travis-ci.com/HydreIO/deferred-promise
[depfu]: https://img.shields.io/depfu/HydreIO/deferred-promise.svg?style=for-the-badge
[depfulink]: https://depfu.com/repos/HydreIO/deferred-promise
[twitter]: https://img.shields.io/badge/follow-us-blue.svg?logo=twitter&style=for-the-badge
[twitterlink]: https://twitter.com/hydreio
[discord]: https://img.shields.io/discord/265104803531587584.svg?logo=discord&style=for-the-badge
[discordlink]: https://discord.gg/Ea6a5cn

A deferred promise.

### Install

`npm i @hydre/deferred-promise`

### Use:

```js
import dPromise from '@hydre/deferred-promise'

const deferred = new dPromise()
deferred.promise.then(console.log('slt'))

setTimeout(() => {
	deferred.resolve // or deferred.reject
}, 1000)
```
