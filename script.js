function sendWA() {
  let text = `Halo VA Fashion,
Nama: ${nama.value}
No WA: ${wa.value}
Alamat: ${alamat.value}
Produk: ${produk.value}
Jumlah: ${jumlah.value}
Catatan: ${catatan.value}`;

  let url = `https://wa.me/6285345065361?text=${encodeURIComponent(text)}`;
  window.open(url);
}