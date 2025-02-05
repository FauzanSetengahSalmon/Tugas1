// ======================================================================================
// 1. Data Sumber
// ======================================================================================
const data = [
  { id: 1, name: 'bar' },
  { id: 2, name: 'foo' },
  { id: 3, name: 'bar' }
];

// ======================================================================================
// 2. Fungsi untuk Mengambil Data Berdasarkan ID
// ======================================================================================
const getDataById = (id) => {
  const getData = data.filter((item) => item.id === id);

  // Memeriksa apakah data ditemukan
  if (getData.length <= 0) {
    return new Error("Data Tidak Ditemukan").message; // Mengembalikan pesan error jika data tidak ditemukan
  }

  return getData[0]; // Mengembalikan data yang ditemukan
};

// ======================================================================================
// 3. Fungsi Asynchronous untuk Menangani Data
// ======================================================================================
const handleData = async () => {
  try {
    const data1 = await getDataById(1);
    console.log(data1); // Output: { id: 1, name: 'bar' }

    const data2 = await getDataById(2);
    console.log(data2); // Output: { id: 2, name: 'foo' }

    const data3 = await getDataById(3);
    console.log(data3); // Output: { id: 3, name: 'bar' }

    // Mencoba mengambil data yang tidak ada  
    const data4 = await getDataById(4);
    console.log(data4); // Output: Error: Data Tidak Ditemukan
    
  } catch (err) {
    console.log(err); // Menangkap dan mencetak error jika terjadi
  }
};

// ======================================================================================
// 4. Memanggil Fungsi untuk Menangani Data
// ======================================================================================
handleData();
// ======================================================================================
