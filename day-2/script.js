// variable untuk simpen data lebih dari satu
const users = [];

function hasilData() {
  const namaUser = document.getElementById("nama").value;
  const umurUser = document.getElementById("umur").value;
  const statusUser = document.getElementById("cekStatus").value;

  // convert umurUser and statusUser
  const convertUser = Number(umurUser);
  const convertStatus = statusUser === "true";

  // data satu
  const dataStatus = {
    name: namaUser,
    umur: convertUser,
    status: convertStatus,
  };
  users.push(dataStatus);

  let tampilData = "";
  users.forEach((users, index) => {
    tampilData += `
    Data ke-${index + 1}:
    Nama: ${users.name}
    Umur: ${users.umur}
    Pelajar: ${users.status ? "Ya" : "Tidak"}
    `;
  });

  let lastData = users[users.length - 1];
  let dataAkhir = `
  Tipe data (data terakhir):
  Nama -> ${typeof lastData.nama}
  Umur -> ${typeof lastData.umur}
  IsStudent -> ${typeof lastData.status}
  `;

  document.getElementById("hasil").innerText = tampilData + "\n" + dataAkhir;
}
