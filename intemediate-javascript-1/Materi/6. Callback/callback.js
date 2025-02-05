// ======================================================================================
// 1. Fungsi doTask yang menerima nama tugas dan callback  
// ======================================================================================
function doTask(taskName, callback) {
  console.log(`Starting ${taskName}...`);
  callback();
}

// Memanggil doTask dengan nama tugas dan callback  
doTask("Task 1", () => console.log("Task 1 completed!"));

// ======================================================================================
// 2. Fungsi fetchData untuk mengambil data  
// ======================================================================================
function fetchData(data, callback) {
  if (typeof data !== "string") {
    callback(new Error("Data must be a string"), null);
    return; // Menghentikan eksekusi jika data bukan string
  }
  callback(null, data);
}

// Memanggil fetchData dengan callback  
fetchData(1, (err, data) => {
  if (err) {
    console.log(err.message); // Menghasilkan error karena data bukan string  
  } else {
    console.log(data);
  }
});

// ======================================================================================
// 3. Fungsi fetchData dengan status dan callback  
// ======================================================================================
const fetchData2 = (status, callback) => {
  setTimeout(() => {
    console.log("Data fetched!");

    if (status === false) {
      callback(new Error("status is false"), status);
      return;
    }

    callback(null, status);
  }, 3000);
}

// Callback untuk fetchData  
const callbackfunc = (err, status) => {
  if (err) {
    console.log(`Fetching data failed: ${err.message}`);
  } else {
    console.log(`Fetching data succeeded: ${status}`);
  }
}

// Memanggil fetchData  
fetchData2(false, callbackfunc); // Data fetched!  

// ======================================================================================
// 4. HATI-HATI DENGAN CALLBACK HELL 
// ======================================================================================
fetchData2(true, (err, status) => {
  if (err) {
    console.log(`Step 1 failed: ${err.message}`);
  } else {
    console.log(`Step 1 succeeded: ${status}`);
    fetchData(true, (err, status) => {
      if (err) {
        console.log(`Step 2 failed: ${err.message}`);
      } else {
        console.log(`Step 2 succeeded: ${status}`);
        fetchData(false, (err, status) => {
          if (err) {
            console.log(`Step 3 failed: ${err.message}`);
          } else {
            console.log(`Step 3 succeeded: ${status}`);
          }
        });
      }
    });
  }
});  
// ======================================================================================