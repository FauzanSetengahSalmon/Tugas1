// ======================================================================================
// 1. Fungsi Regular
// ======================================================================================
function fungsiRegular() {
  return "Ini Fungsi Regular"; // Mengembalikan string dari fungsi regular
}

// Memanggil fungsi regular
console.log(fungsiRegular()); // Output: "Ini Fungsi Regular"

// ======================================================================================
// 2. Fungsi Arrow
// ======================================================================================
const fungsiArrow = () => {
  return "Ini Fungsi Arrow"; // Mengembalikan string dari fungsi arrow
}

// Memanggil fungsi arrow
console.log(fungsiArrow()); // Output: "Ini Fungsi Arrow"

// ======================================================================================
// 3. Sintaks Dasar Arrow Function
// ======================================================================================

// a. Tanpa Parameter
const tanpaParameter = () => "Tidak Ada Parameter"; // Mengembalikan string tanpa parameter
console.log(tanpaParameter()); // Output: "Tidak Ada Parameter"

// b. Satu Parameter
const satuParameter = x => x * 2; // Mengalikan parameter dengan 2
console.log(satuParameter(5)); // Output: 10

// c. Beberapa Parameter
const beberapaParameter = (x, y) => x + y; // Menjumlahkan dua parameter
console.log(beberapaParameter(3, 4)); // Output: 7

// d. Menggunakan Kurung Kurawal
const denganKurungKurawal = (x, y) => {
  const hasil = x * y; // Mengalikan dua parameter
  return hasil; // Mengembalikan hasil
}
console.log(denganKurungKurawal(3, 4)); // Output: 12

// ======================================================================================
// 4. Contoh Penggunaan dalam Array
// ======================================================================================
let arr = [1, 2, 3, 4, 5];

// Fungsi Regular vs Fungsi Arrow
// ======================================================================================
function arrayMapRegular() {
  return arr.map(function (x) { 
    return x * 2; // Mengalikan setiap elemen dengan 2 menggunakan fungsi regular
  });
}

// Memanggil fungsi regular untuk memetakan array
console.log(arrayMapRegular()); // Output: [2, 4, 6, 8, 10]

// ======================================================================================
// Fungsi Arrow untuk Memetakan Array
// ======================================================================================
const arrayMapArrow = () => arr.map(x => x * 2); // Mengalikan setiap elemen dengan 2 menggunakan fungsi arrow

// Memanggil fungsi arrow untuk memetakan array
console.log(arrayMapArrow()); // Output: [2, 4, 6, 8, 10]