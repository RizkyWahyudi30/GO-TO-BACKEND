function pesanTiket() {
  let namaUser = document.getElementById("nama").value;
  let umurUser = document.getElementById("umur").value;

  // validasi input user nama dan umur
  if (namaUser === "" || umurUser === "") {
    alert("Nama atau umur tidak boleh kosong!");
    return;
  }

  const now = new Date();
  const bookingTime = new Date(now.getTime() + 1 * 60 * 1000);

  document.getElementById("jadwalBooking").innerHTML = `
  <h3>Tiket Anda:</h3>
  <p>Nama: ${namaUser}</p>
  <p>Umur: ${umurUser}</p>
  <p>Jadwal Booking: ${bookingTime.toLocaleTimeString()}</p>
  `;

  const countdownTime = document.getElementById("countdown");
  const interval = setInterval(() => {
    const noew = new Date();
    const selisihWaktu = bookingTime - new Date();

    if (selisihWaktu <= 0) {
      clearInterval(interval);
      countdownTime.textContent = "Waktu booking telah berakhir.";
    } else {
      const detik = Math.floor((selisihWaktu / 1000) % 60);
      const menit = Math.floor((selisihWaktu / 1000 / 60) % 60);
      const jam = Math.floor((selisihWaktu / 1000 / 60 / 60) % 60);

      countdownTime.textContent = `Waktu tersisa ${jam
        .toString()
        .padStart(2, "0")}:${menit.toString().padStart(2, "0")}:${detik
        .toString()
        .padStart(2, "0")}`;
    }
  }, 1000);
}
