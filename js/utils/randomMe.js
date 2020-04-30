/**
 * A function to return a real number between min and max
 * @param {*} min The minimum value to be return
 * @param {*} max The max Value to be return
 * @return A number between min and max params
 */
let randomMe = function (min,max){
    return min + (Math.random() *  max);
}

module.exports = { randomMe };