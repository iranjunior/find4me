module.exports = (array) => [...new Set(array.map((object) => object.keywords).flat(Infinity))];
