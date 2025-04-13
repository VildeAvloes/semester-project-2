export function createErrorMessage(id, message) {
  const errorDiv = document.createElement('div');
  errorDiv.id = `${id}Error`;
  errorDiv.classList.add('invalid-feedback', 'd-none');
  errorDiv.textContent = message;

  return errorDiv;
}
