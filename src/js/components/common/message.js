export function renderMessage(type, message) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('mt-2');

  if (type === 'success') {
    messageContainer.classList.add('text-success');
  } else if (type === 'error') {
    messageContainer.classList.add('text-danger');
  }

  messageContainer.textContent = message;

  return messageContainer;
}
