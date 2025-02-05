// ======================================================================================
// 1. Higher-Order Function
// ======================================================================================

// Fungsi higherOrderFunction yang menerima fungsi callback  
function higherOrderFunction(callback) {  
  // Memanggil fungsi callback dan mengembalikan hasilnya  
  const result = callback();  
  return result;  
}  
  
// Fungsi simpleCallback yang mengembalikan string  
function simpleCallback() {  
  return "Hello from callback!";  
}  
  
// Menggunakan higherOrderFunction dengan simpleCallback  
console.log(higherOrderFunction(simpleCallback)); // Output: "Hello from callback!"

// ======================================================================================
// 2. Fungsi Apply
// ======================================================================================

// Fungsi apply yang menerima fungsi lain dan argumen yang diperlukan  
function apply(operation, ...args) {  
  // Memanggil fungsi operation dengan argumen yang diberikan  
  return operation(...args);  
}  
  
// Fungsi sum untuk menjumlahkan tiga angka  
function sum(a, b, c) {  
  return a + b + c;  
}  
  
// Fungsi discount untuk menghitung harga setelah diskon  
function discount(disc, value) {  
  return value - ((disc / 100) * value);  
}  
  
// Menggunakan fungsi apply untuk menghitung harga produk  
const productPrice = apply(sum, 200, 100, 200); // Hasil: 500  

// Menggunakan fungsi apply untuk menghitung harga setelah diskon  
const withDiscount = apply(discount, 25, productPrice); // Hasil: 375  
  
// Menampilkan hasil perhitungan  
console.log('Product price:', productPrice); // Output: Product price: 500  
console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 375  

// ======================================================================================
// 3. Array Method HOF
// ======================================================================================

// Fungsi arrayMap menggunakan map untuk menggandakan setiap elemen  
function arrayMap() {  
  let arr = [1, 2, 3, 4];  
  return arr.map(num => num * 2);  
}  
  
// Fungsi arrayFilter menggunakan filter untuk menyaring elemen genap  
function arrayFilter() {  
  let arr = [1, 2, 3, 4];  
  return arr.filter(num => num % 2 == 0);  
}  
  
// Fungsi arrayReduce menggunakan reduce untuk menjumlahkan semua elemen  
function arrayReduce() {  
  let arr = [1, 2, 3, 4];  
  return arr.reduce((acc, num) => acc + num, 0);  
}  
  
// Menampilkan hasil dari metode array  
console.log(arrayMap()); // Output: [2, 4, 6, 8]  
console.log(arrayFilter()); // Output: [2, 4]  
console.log(arrayReduce()); // Output: 10  
// ======================================================================================
