function showSkeletons(container, count = 10) {
  container.innerHTML = ''; 
  for (let i = 0; i < count; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = `
      bg-gray-700
      rounded-lg
      p-6
      mb-6
      shadow
      animate-pulse
      space-y-4
    `;
    skeleton.innerHTML = `
      <div class="h-6 bg-gray-600 rounded w-3/4"></div>
      <div class="h-4 bg-gray-600 rounded w-1/2"></div>
      <div class="h-4 bg-gray-600 rounded w-2/3"></div>
      <div class="h-4 bg-gray-600 rounded w-1/3"></div>
    `;
    container.appendChild(skeleton);
  }
}

// Función principal para obtener y mostrar usuarios
async function fetchUsers() {
  const container = document.querySelector('.users-container');
  const errorMessage = document.getElementById('error-message');
  showSkeletons(container);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Error en la respuesta de la API');

    const users = await response.json();
    container.innerHTML = '';

    // Crear una card por usuario
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = `
        card
        bg-gray-800
        border
        border-gray-700
        rounded-lg
        p-6
        mb-6
        shadow-lg
        hover:shadow-2xl
        transition-shadow
        text-gray-100
      `;

      card.innerHTML = `
        <h3 class="text-2xl font-bold mb-3">${user.name}</h3>
        <p class="text-gray-300 mb-1"><strong>Usuario:</strong> ${user.username}</p>
        <p class="text-gray-300 mb-1"><strong>Email:</strong> ${user.email}</p>
        <p class="text-gray-300"><strong>Empresa:</strong> ${user.company.name}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error al cargar los usuarios:', error);
    container.innerHTML = ''; 
    if (errorMessage) {
      errorMessage.textContent = 'Error al cargar los usuarios. Inténtalo de nuevo más tarde.';
      errorMessage.classList.add('text-red-600', 'text-center', 'mt-6', 'text-lg');
    }
  }
}


window.addEventListener('DOMContentLoaded', fetchUsers);