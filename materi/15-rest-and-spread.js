"use strict";
// 1. Rest Parameters
function total(...data) {
  return data.reduce((semua, n) => semua + n, 0);
}

console.log(total(1, 2, 3, 4, 5, 20, 40));

// 2. Spread Syntax
// -. Spread Function Call
{
  const angka = [3, 10, 4, 20];

  console.log(Math.max(...angka));
}

// -. Spread Array
{
  const arr1 = [1, 2];
  const arr2 = [4, 5];

  const arrSemua = [...arr1, ...arr2];
  console.log(arrSemua);
}

// -. Shallow Copy
{
  const arr = [1, 2, 3];
  console.log(arr);

  const arrCopy = [...arr];
  arrCopy.push(10);
  console.log(arrCopy);
}

// Overriding Property
{
  const config = {
    tema: "light",
  };

  const custom = {
    tema: "dark",
  };

  const finalTheme = { ...custom, ...config };
  console.log(finalTheme);
}
