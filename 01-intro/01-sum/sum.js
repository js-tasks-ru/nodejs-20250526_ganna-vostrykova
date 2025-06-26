export default function sum(a, b) {
    const checkNumber = (arg) => typeof arg === 'number'
    if(!checkNumber(a) || !checkNumber(b)) throw new TypeError()
    return a+b
}