import profileData from "./data.js";

export default class ProfilePage {
  async render() {
    return `
      <section class="container mx-auto p-4">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img class="h-48 w-full object-cover md:h-full md:w-48" src="${profileData.avatar}" alt="Profile picture">
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">My Profile</div>
              <h1 class="block mt-1 text-lg leading-tight font-medium text-black">${profileData.name}</h1>
              <p class="text-gray-500">${profileData.email}</p>
              <p class="mt-2 text-gray-700">${profileData.bio}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}
