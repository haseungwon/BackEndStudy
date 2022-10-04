const fact = n => {
    let res = 1;
    for (let i = 1; i <= n; i++) res *= i;
    return res;
}
const permutation = (n, r) => fact(n) / fact(n - r);
const combination = (n, r) => permutation(n, r) / fact(r);
const multiPermutation = (n, r) => n ** r;
const multiCombination = (n, r) => combination(n + r - 1, r);

module.exports = {
    combination,
    permutation,
    multiCombination,
    multiPermutation,
};