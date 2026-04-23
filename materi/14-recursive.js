function faktorial(n) {
  if (n <= 1) return 1;
  return n * faktorial(n - 1);
}

console.log(faktorial(100));
