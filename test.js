const test = require('tape')
const tapSpec = require('tap-spec')

const arrayOf = require('immutable-array.of')
const push = require('immutable-array.push')
const findIndexFrom = require('./')

const array = Object.freeze([5, 2, 3, 4, 5])

test('.findIndexFrom', function (t) {
    t.test('empty array & starting from 0', function (st) {
        const list = arrayOf([])
        const result = findIndexFrom(0, e => e === 5, list)
        st.equal(result, -1, 'it always returns -1')
        st.end()
    })
    t.test('empty array & starting from 3', function (st) {
        const list = arrayOf([])
        const result = findIndexFrom(3, e => e === 5, list)
        st.equal(result, -1, 'it always returns -1')
        st.end()
    })
    t.test('non empty array & starting from 0', function (st) {
        const list = arrayOf(array)
        const result = findIndexFrom(0, e => e === 5, list)
        st.equal(result, 0, 'it returns the first index occurence')
        st.end()
    })
    t.test('non empty array & starting from 1', function (st) {
        const list = arrayOf(array)
        const result = findIndexFrom(1, e => e === 5, list)
        st.equal(result, 4, 'it returns the second index occurence')
        st.end()
    })
    t.test('empty array & starting from outbound index', function (st) {
        const list = arrayOf(array)
        const result = findIndexFrom(array.length, e => e === 5, list)
        st.equal(result, -1, 'it always returns -1')
        st.end()
    })
    t.test('empty array & starting from 0 & list.array.length !== list.length', function (st) {
        const list = arrayOf([])
        push(5, push(5, list))
        const result = findIndexFrom(0, e => e === 5, list)
        st.equal(result, -1, 'it always returns -1')
        st.end()
    })
    t.test('empty array & starting from 3 & list.array.length !== list.length', function (st) {
        const list = arrayOf([])
        push(5, push(5, list))
        const result = findIndexFrom(3, e => e === 5, list)
        st.equal(result, -1, 'it always returns -1')
        st.end()
    })
    t.test('non empty array & starting from 0 & list.array.length !== list.length', function (st) {
        const list = arrayOf(array)
        push(5, push(5, list))
        const result = findIndexFrom(0, e => e === 5, list)
        st.equal(result, 0, 'it returns the first index occurence')
        st.end()
    })
    t.test('non empty array & starting from 1 & list.array.length !== list.length', function (st) {
        const list = arrayOf(array)
        push(5, push(5, list))
        const result = findIndexFrom(1, e => e === 5, list)
        st.equal(result, 4, 'it returns the second index occurence')
        st.end()
    })
    t.test('empty array & starting from outbound index & list.array.length !== list.length', function (st) {
        const list = arrayOf(array)
        push(5, push(5, list))
        const result = findIndexFrom(array.length, e => e === 5, list)
        st.equal(result, -1, 'it always returns -1')
        st.end()
    })

    t.end()
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
