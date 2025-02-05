// ======================================================================================
// 1. Menjalankan Kode Synchronous
// ======================================================================================
console.log('Mulai bekerja');  // Synchronous code, langsung dieksekusi

// ======================================================================================
// 2. Menjadwalkan Tugas dengan setTimeout
// ======================================================================================
setTimeout(() => {
  console.log('Tugas setelah 2 detik');  // Web API, timer callback
}, 2000);

// ======================================================================================
// 3. Menjadwalkan Tugas dengan Promise
// ======================================================================================
Promise.resolve().then(() => {
  console.log('Tugas prioritas');  // Microtask 1
}).then(() => {
  console.log('Tugas prioritas 2'); // Microtask 2 (bersyarat)
});

Promise.resolve().then(() => {
  console.log('Tugas prioritas 3');  // Microtask 3
});

// ======================================================================================
// 4. Melanjutkan Kode Synchronous
// ======================================================================================
console.log('Lanjut bekerja');  // Synchronous code, langsung dieksekusi

// ======================================================================================
// 5. Penjelasan Event Loop
// ======================================================================================

/*
    Urutan Eksekusi:
     - Pertama, "Mulai bekerja" dicetak.
     - Kemudian, "Lanjut bekerja" dicetak.
     - Setelah semua synchronous code selesai, microtasks dieksekusi:
       - "Tugas prioritas" dicetak.
       - "Tugas prioritas 3" dicetak.
       - "Tugas prioritas 2" dicetak (hanya jika microtask sebelumnya berhasil).
     - Akhirnya, setelah 2 detik, "Tugas setelah 2 detik" dicetak dari setTimeout.

     Hasil Akhir:
     - Urutan output di konsol akan menjadi:
       1. Mulai bekerja
       2. Lanjut bekerja
       3. Tugas prioritas
       4. Tugas prioritas 3
       5. Tugas prioritas 2
       6. Tugas setelah 2 detik
*/

