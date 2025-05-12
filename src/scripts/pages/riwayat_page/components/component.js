export default class Card {
  static createRiwayatItem(riwayat, onClickHandler) {
    const statusClass =
      riwayat.status === "Selesai" ? "bg-green-500" : "bg-yellow-500";

    const riwayatElement = document.createElement("div");
    riwayatElement.classList.add(
      "border",
      "rounded-lg",
      "p-4",
      "shadow-md",
      "cursor-pointer",
      "hover:bg-gray-50"
    );
    riwayatElement.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-lg font-semibold">${riwayat.namaPelanggan}</h3>
          <p class="text-gray-600">${riwayat.layanan}</p>
          <p class="text-gray-500 text-sm">${riwayat.tanggal}</p>
        </div>
        <div>
          <span class="text-lg font-bold">Rp ${riwayat.totalBiaya.toLocaleString()}</span>
          <span class="${statusClass} text-white px-3 py-1 rounded-full text-sm ml-2">${
      riwayat.status
    }</span>
        </div>
      </div>
    `;

    riwayatElement.addEventListener("click", () => onClickHandler());

    return riwayatElement;
  }

  static showDetail(riwayat) {
    return `
      <div class="space-y-4">
        <h3 class="text-xl font-bold">${riwayat.namaPelanggan}</h3>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-gray-600">Layanan</p>
            <p class="font-semibold">${riwayat.layanan}</p>
          </div>
          <div>
            <p class="text-gray-600">Tanggal</p>
            <p class="font-semibold">${riwayat.tanggal}</p>
          </div>
          <div>
            <p class="text-gray-600">Status</p>
            <span class="${
              riwayat.status === "Selesai" ? "bg-green-500" : "bg-yellow-500"
            } text-white px-3 py-1 rounded-full text-sm">${
      riwayat.status
    }</span>
          </div>
          <div>
            <p class="text-gray-600">Total Biaya</p>
            <p class="font-bold">Rp ${riwayat.totalBiaya.toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;
  }
}
