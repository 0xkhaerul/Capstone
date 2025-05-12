import { RIWAYAT_DATA } from "./data.js";
import Card from "./components/component.js";

export default class RiwayatPage {
  async render() {
    return `
      <section class="container mx-auto px-4 py-8">
        <div class="text-2xl font-bold mb-6">Riwayat Page</div>
        <div class="flex gap-8">
          <div class="w-1/2">
            <div class="text-xl font-semibold mb-4">Riwayat Pengecekan</div>
            <div id="list-riwayat" class="space-y-4">
              <!-- Riwayat items will be inserted here dynamically -->
            </div>
          </div>
          <div class="w-1/2">
            <div class="text-xl font-semibold mb-4 border">Detail Pengecekan</div>
            <div id="detail-pengecekan" class="border rounded-lg p-4 shadow-md">
              <!-- Detail will be shown here -->
              <p class="text-gray-500">Pilih riwayat untuk melihat detail</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this._riwayatData = RIWAYAT_DATA;
    this._renderRiwayat();
  }

  _renderRiwayat() {
    const riwayatContainer = document.querySelector("#list-riwayat");

    this._riwayatData.forEach((riwayat) => {
      const riwayatItem = Card.createRiwayatItem(riwayat, () => {
        const detailContainer = document.querySelector("#detail-pengecekan");
        detailContainer.innerHTML = Card.showDetail(riwayat);
      });
      riwayatContainer.appendChild(riwayatItem);
    });
  }
}
