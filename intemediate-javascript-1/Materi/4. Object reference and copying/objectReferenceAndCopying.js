// Contoh Referensi Objek
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 mereferensikan objek yang sama dengan obj1

obj2.name = "Bob"; // Mengubah nama di obj2 juga mengubah obj1

console.log(obj1.name); // Output: Bob

// ======================================================================================
// Bagaimana cara kita menyalin sebuah object tanpa mengubah object yang lainnya?
// ======================================================================================

// Menggunakan Spread Operator
let obj3 = { name: "Alice" };
let obj4 = { ...obj3 }; // Membuat salinan dari obj3

obj4.name = "Bob"; // Mengubah obj4 tidak mengubah obj3
console.log(obj3.name); // Output: "Alice"

// ======================================================================================

// Menggunakan Object.assign()
let obj5 = { name: "Alice", alamat: { jl: "Durian", no: 12 } };
let obj6 = Object.assign({}, obj5); // Membuat salinan dangkal dari obj5

obj6.name = "Bob"; // Mengubah obj6 tidak mengubah obj5
console.log(obj5.name); // Output: "Alice"

// Perubahan pada objek bersarang tidak akan mempengaruhi objek asli
obj6.alamat.jl = "Mangga";
console.log(obj5.alamat.jl); // Output: "Mangga"

// ======================================================================================

// Menggunakan JSON.parse(JSON.stringify()) untuk Salinan Dalam (Deep Copy)
let obj7 = { name: "Alice", alamat: { jl: "Durian", no: 12 } };
let obj8 = JSON.parse(JSON.stringify(obj7)); // Membuat salinan dalam dari obj7

obj8.name = "Bob"; // Mengubah obj8 tidak mengubah obj7
console.log(obj7.name); // Output: "Alice"

// Perubahan pada objek bersarang tidak akan mempengaruhi objek asli
obj8.alamat.jl = "Mangga";
console.log(obj7.alamat.jl); // Output: "Durian"

// ======================================================================================
