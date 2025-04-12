export function profilePage() {
  const container = document.createElement('div');
  container.innerHTML = `
        <h1>Velkommen til profil</h1>
        <p>Dette er hjemmesiden.</p>
      `;
  return container;
}
