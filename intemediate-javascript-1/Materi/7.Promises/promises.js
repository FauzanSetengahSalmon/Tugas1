// ======================================================================================
// 1. Definisi Promise
// ======================================================================================
const myPromises = (status) => {
  return new Promise((resolve, reject) => {
    // Memeriksa status dan menentukan apakah akan resolve atau reject
    if (status === true) {
      resolve({ message: "success", status }); // Mengembalikan objek dengan pesan sukses
    } else {
      reject({ message: "error", status }); // Mengembalikan objek dengan pesan error
    }
  });
};

// ======================================================================================
// 2. Menggunakan Promise
// ======================================================================================
myPromises(true) // Ganti true dengan false untuk menguji kondisi reject
  .then((result) => {
    // Menangani hasil yang berhasil
    console.log(result); // Output: { message: "success", status: true }
  })
  .catch((err) => {
    // Menangani kesalahan
    console.log(err); // Output: { message: "error", status: false }
  })
  .finally(() => {
    // Menjalankan kode ini setelah promise selesai, baik berhasil maupun gagal
    console.log("Promises Selesai");
  });