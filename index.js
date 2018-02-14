module.exports = function (start, predicate, immutableArray) {
    const {array, length} = immutableArray
    for (let index = start; index < length; ++index) {
        if (predicate(array[index])) {
            return index
        }
    }
    return -1
}
