export default class BacaanPage {
  async render() {
    return `
     <section class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Informasi Seputar Diabetes</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <!-- Pengertian Diabetes -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold text-blue-600 mb-4">Apa itu Diabetes?</h2>
          <p class="text-gray-700 mb-4">
            Diabetes adalah penyakit kronis yang terjadi ketika tubuh tidak dapat menghasilkan insulin yang cukup atau tidak dapat menggunakan insulin secara efektif. Insulin adalah hormon yang mengatur gula darah.
          </p>
        </div>

        <!-- Gejala Diabetes -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold text-red-600 mb-4">Gejala Diabetes</h2>
          <ul class="list-disc ml-6 text-gray-700 space-y-2">
            <li>Sering merasa haus dan lapar</li>
            <li>Sering buang air kecil</li>
            <li>Penglihatan kabur</li>
            <li>Mudah lelah</li>
            <li>Berat badan turun tanpa sebab</li>
            <li>Luka yang sulit sembuh</li>
          </ul>
        </div>

        <!-- Bahaya Diabetes -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold text-yellow-600 mb-4">Bahaya Diabetes</h2>
          <div class="text-gray-700 space-y-3">
            <p class="font-semibold">Komplikasi yang dapat terjadi:</p>
            <ul class="list-disc ml-6 space-y-2">
              <li>Penyakit jantung dan pembuluh darah</li>
              <li>Kerusakan ginjal (nefropati)</li>
              <li>Kerusakan saraf (neuropati)</li>
              <li>Kerusakan mata (retinopati)</li>
              <li>Gangguan pada kaki</li>
              <li>Masalah kulit</li>
            </ul>
          </div>
        </div>

        <!-- Cara Mencegah -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-semibold text-green-600 mb-4">Cara Mencegah Diabetes</h2>
          <ul class="list-disc ml-6 text-gray-700 space-y-2">
            <li>Menjaga pola makan sehat dan seimbang</li>
            <li>Rutin berolahraga minimal 30 menit sehari</li>
            <li>Menjaga berat badan ideal</li>
            <li>Menghindari makanan tinggi gula dan lemak</li>
            <li>Rutin memeriksakan kesehatan</li>
            <li>Mengelola stres dengan baik</li>
          </ul>
        </div>

        <!-- Cara Mengatasi -->
        <div class="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
          <h2 class="text-xl font-semibold text-purple-600 mb-4">Cara Mengatasi Diabetes</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 class="font-semibold mb-2">Pengobatan Medis:</h3>
              <ul class="list-disc ml-6 space-y-2">
                <li>Konsumsi obat diabetes sesuai resep dokter</li>
                <li>Pemantauan gula darah rutin</li>
                <li>Suntik insulin jika diperlukan</li>
                <li>Konsultasi rutin dengan dokter</li>
              </ul>
            </div>
            <div>
              <h3 class="font-semibold mb-2">Perubahan Gaya Hidup:</h3>
              <ul class="list-disc ml-6 space-y-2">
                <li>Mengatur pola makan dengan diet diabetes</li>
                <li>Olahraga teratur sesuai kemampuan</li>
                <li>Berhenti merokok</li>
                <li>Membatasi konsumsi alkohol</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="bg-blue-50 rounded-lg p-6 md:col-span-2">
          <p class="text-center text-gray-800">
            Sudahkah Anda mengetahui risiko diabetes Anda? 
            <a href="#/diabetes" class="text-blue-600 hover:text-blue-800 underline">
              Cek risiko diabetes Anda sekarang
            </a>
          </p>
        </div>
      </div>
    </section>
    `;
  }

  async afterRender() {
    // Add any interactive features here if needed
  }
}
