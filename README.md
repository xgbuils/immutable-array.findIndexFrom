# immutable-array.findIndexFrom

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`immutable-array.findIndexFrom` returns the index of the first item that matches with a predicate starting from some index. If any item doesn't match, then returns -1.

## Install

``` bash
$ npm install immutable-array.findIndexFrom --save
```

## Usage
``` javascript
const ImmutableArray = {
    of: require('immutable-array.of'),
    findIndexFrom: require('immutable-array.findIndexFrom')
}

const array = ImmutableArray.of([5, 2, 3, 4, 5]) // {array: [1, 2, 3, 4, 5], length: 5}
ImmutableArray.findIndexFrom(0, e => e === 5, array) // 0
ImmutableArray.findIndexFrom(1, e => e === 5, array) // 4
```

## Other related libraries
- [immutable-array.of]()
- [immutable-array.push]()
- [immutable-array.reduce]()
- [immutable-array.every]()

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/immutable-array.findIndexFrom.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/immutable-array.findIndexFrom
  [3]: https://badge.fury.io/js/immutable-array.findIndexFrom.svg
  [4]: https://badge.fury.io/js/immutable-array.findIndexFrom
  [5]: https://coveralls.io/repos/github/xgbuils/immutable-array.findIndexFrom/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/immutable-array.findIndexFrom?branch=master
  [7]: https://david-dm.org/xgbuils/immutable-array.findIndexFrom.svg
  [8]: https://david-dm.org/xgbuils/immutable-array.findIndexFrom
