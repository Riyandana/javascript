let tbl = document.getElementById("tabel");
let no = 1;

class Gempa {
  constructor(lokasi, skala) {
    this.lokasi = lokasi;
    this.skala = skala;
  }
  dampakGempa() {
    if (this.skala <= 2) return (this.dampak = "Bertanya-tanya");
    if (this.skala <= 4) return (this.dampak = "Istighfar + Lari");
    if (this.skala <= 6) return (this.dampak = "Istighfar + Lari + Inget Mati");
    return (this.dampak = "Tawakkal Serahin semua sama Allah");
  }
  infoGempa() {
    tbl.innerHTML += `
        <tr>
        <td>${no++}</td>
        <td>${this.lokasi}</td>
        <td>${this.skala}</td>
        <td>${this.dampakGempa()}</td>
        </tr>
        `;
  }
}
const g1 = new Gempa("Lombok", 7.0);
g1.infoGempa();
const g2 = new Gempa("Palu", 7.4);
g2.infoGempa();
const g3 = new Gempa("Jakarta", 4.0);
g3.infoGempa();
const g4 = new Gempa("Bandung", 4.0);
g4.infoGempa();
const g5 = new Gempa("Surabaya", 2.0);
g5.infoGempa();
const g6 = new Gempa("Medan", 2.0);
g6.infoGempa();
const g7 = new Gempa("Manado", 3.0);
g7.infoGempa();
const g8 = new Gempa("Aceh", 7.6);
g8.infoGempa();
const g9 = new Gempa("Bogor", 1.0);
g9.infoGempa();
const g10 = new Gempa("Kalimantan", 5.0);
g10.infoGempa();
