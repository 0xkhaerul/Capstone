export default class LandingPage {
  async render() {
    return `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-800">
        <div class="container mx-auto px-6 py-16 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Diabetes Risk Checker</h1>
          <p class="text-xl text-blue-100 mb-8">Take control of your health with our advanced diabetes risk assessment tool</p>
          <button class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300">
            Check Your Risk Now
          </button>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-16 px-4">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <div class="text-blue-600 text-4xl mb-4">
              <i class="fas fa-heartbeat"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Quick Assessment</h3>
            <p class="text-gray-600">Get results in minutes with our easy-to-use tool</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <div class="text-blue-600 text-4xl mb-4">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Accurate Results</h3>
            <p class="text-gray-600">Based on WHO standards and medical research</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg text-center">
            <div class="text-blue-600 text-4xl mb-4">
              <i class="fas fa-user-md"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Expert Advice</h3>
            <p class="text-gray-600">Receive personalized health recommendations</p>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="bg-gray-100 py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div class="flex flex-wrap justify-center gap-8">
            <div class="flex-1 min-w-[250px] max-w-sm">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <p class="text-gray-700 text-center">Fill in your basic health information</p>
              </div>
            </div>
            <div class="flex-1 min-w-[250px] max-w-sm">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <p class="text-gray-700 text-center">Complete the risk assessment questionnaire</p>
              </div>
            </div>
            <div class="flex-1 min-w-[250px] max-w-sm">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <p class="text-gray-700 text-center">Get your results and recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-blue-50 py-16 px-4">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Start Your Health Journey Today</h2>
          <p class="text-gray-600 mb-8">Early detection is key to preventing diabetes</p>
          <button class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300">
            Take the Test Now
          </button>
        </div>
      </section>
    </div>
    `;
  }
}
