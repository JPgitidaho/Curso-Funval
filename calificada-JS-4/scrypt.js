// fetchUsers.js
async function fetchUsers() {
    const container = document.querySelector('.users-container');
    const errorMessage = document.getElementById('error-message');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Error en la respuesta de la API');

        const users = await response.json();

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
        if (errorMessage) {
            errorMessage.textContent = 'Error al cargar los usuarios. Inténtalo de nuevo más tarde.';
            errorMessage.classList.add('text-red-600', 'text-center', 'mt-6', 'text-lg');
        }
    }
}


window.addEventListener('DOMContentLoaded', fetchUsers);
