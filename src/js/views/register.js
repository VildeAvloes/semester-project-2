export function registerPage() {
  const container = document.createElement('div');
  container.innerHTML = `
        <h1>Velkommen til register</h1>
        <p>Dette er hjemmesiden.</p>
      `;
  return container;
}
