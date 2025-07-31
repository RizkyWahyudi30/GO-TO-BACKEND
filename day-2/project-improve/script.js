function pesanTiket() {
  let namaUser = document.getElementById("nama").value;
  let umurUser = document.getElementById("umur").value;

  // validasi input user nama dan umur
  if (namaUser === "" || umurUser === "") {
    alert("Nama atau umur tidak boleh kosong!");
    return;
  }
}
