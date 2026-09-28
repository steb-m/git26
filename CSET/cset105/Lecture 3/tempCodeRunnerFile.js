function nthTermFibonacci(n) {
    if (n == 1 || n == 2) return 1;
    else return nthTermFibonacci(n - 1) + nthTermFibonacci(n - 2);
}