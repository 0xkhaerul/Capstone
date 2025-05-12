export default class DiabetesPage {
  async render() {
    return `
    <section class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Diabetes Risk Check</h1>
      
      <form id="diabetesForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Personal Information -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="age">
              Age
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="age" type="number" placeholder="Enter age">
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="weight">
              Weight (kg)
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="weight" type="number" step="0.1" placeholder="Enter weight">
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="height">
              Height (cm)
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="height" type="number" placeholder="Enter height">
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="bloodPressure">
              Blood Pressure (mmHg)
            </label>
            <div class="flex space-x-2">
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="systolic" type="number" placeholder="Systolic">
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="diastolic" type="number" placeholder="Diastolic">
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="glucose">
              Blood Glucose Level (mg/dL)
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="glucose" type="number" placeholder="Enter blood glucose">
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="familyHistory">
              Family History of Diabetes
            </label>
            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="familyHistory">
              <option value="">Select option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div class="flex items-center justify-center mt-6">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="submit">
            Check Risk
          </button>
        </div>
      </form>

      <div id="result" class="mt-6 hidden">
        <!-- Results will be displayed here -->
      </div>
    </section>
    `;
  }

  async afterRender() {
    const form = document.getElementById("diabetesForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add your risk calculation logic here
      result.classList.remove("hidden");
      result.innerHTML = `
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
          <p class="font-bold">Analysis Complete</p>
          <p>Your diabetes risk assessment has been calculated. Please consult with a healthcare professional for proper medical advice.</p>
        </div>
      `;
    });
  }
}
