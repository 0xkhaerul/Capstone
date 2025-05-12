export default class PanduanPage {
  async render() {
    return `
    <section class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Panduan Pemeriksaan Diabetes</h1>
      
      <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Cara Melakukan Pemeriksaan Risiko Diabetes</h2>
          
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Persiapan Sebelum Pemeriksaan</h3>
              <p class="text-gray-600">Siapkan data-data berikut sebelum melakukan pemeriksaan:</p>
              <ul class="list-disc ml-6 mt-2 text-gray-600">
                <li>Usia Anda saat ini</li>
                <li>Berat badan dalam kilogram (kg)</li>
                <li>Tinggi badan dalam sentimeter (cm)</li>
                <li>Tekanan darah (mmHg)</li>
                <li>Kadar glukosa darah (mg/dL)</li>
                <li>Riwayat diabetes dalam keluarga</li>
              </ul>
            </div>

            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Langkah-langkah Pemeriksaan</h3>
              <ol class="list-decimal ml-6 space-y-2 text-gray-600">
                <li>Isi formulir dengan data pribadi Anda secara lengkap</li>
                <li>Pastikan data tekanan darah terdiri dari nilai sistolik dan diastolik</li>
                <li>Masukkan hasil pemeriksaan kadar glukosa darah</li>
                <li>Pilih "Ya" jika memiliki riwayat diabetes dalam keluarga, "Tidak" jika tidak ada</li>
                <li>Klik tombol "Check Risk" untuk melihat hasil analisis</li>
              </ol>
            </div>

            <div class="border-l-4 border-yellow-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-700 mb-2">Catatan Penting</h3>
              <ul class="list-disc ml-6 text-gray-600">
                <li>Hasil pemeriksaan ini hanya bersifat prediktif</li>
                <li>Konsultasikan dengan tenaga medis untuk diagnosis yang akurat</li>
                <li>Lakukan pemeriksaan rutin ke dokter untuk monitoring kesehatan</li>
              </ul>
            </div>

            <div class="mt-6 bg-blue-50 p-4 rounded-lg">
              <p class="text-blue-800 text-center">
                Untuk melakukan pemeriksaan risiko diabetes, silahkan kunjungi halaman 
                <a href="#/diabetes" class="text-blue-600 hover:text-blue-800 underline">Diabetes Risk Check</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}
