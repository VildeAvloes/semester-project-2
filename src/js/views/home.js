export function homePage() {
  const container = document.createElement('div');
  container.innerHTML = `
      <h1>Velkommen til Hjem</h1>
      <p>Dette er hjemmesiden.</p>
    `;
  return container;
}
