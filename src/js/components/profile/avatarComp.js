import { loadProfile } from '../../api/auth/index.js';
import { load } from '../../storage/index.js';
import { updateAvatar } from '../../api/auth/profile/avatar.js';
import { renderForm, renderInput } from '../forms/index.js';
import { renderMessage } from '../common/index.js';

export function renderUpdateAvatar() {
  const user = loadProfile();
  const token = load('token');

  const form = renderForm();
  form.classList.remove('p-4');
  form.classList.add('mb-4');

  const inputRow = document.createElement('div');
  inputRow.classList.add('d-flex', 'align-items-end', 'gap-2');

  const input = renderInput({
    id: 'avatarUrl',
    label: 'Update avatar (URL)',
    type: 'url',
    placeholder: 'Paste your URL here...',
  });
  input.classList.add('flex-grow-1');

  const avatarInput = input.querySelector('input');
  const messageContainer = input.querySelector(`#avatarUrl-message`);

  const updateButton = document.createElement('button');
  updateButton.type = 'submit';
  updateButton.classList.add('btn', 'btn-secondary', 'min-w-150', 'mb-3');
  updateButton.textContent = 'Update Avatar';

  inputRow.append(input, updateButton);
  form.append(inputRow, messageContainer);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const avatarUrl = avatarInput.value.trim();

    if (!avatarUrl) {
      messageContainer.innerHTML = '';
      messageContainer.append(
        renderMessage('error', 'Please provide a valid Avatar URL')
      );
      return;
    }

    try {
      await updateAvatar(avatarUrl, token, user.name);
      localStorage.setItem(`profileAvatar_${user.name}`, avatarUrl);

      const profileAvatar = document.getElementById('profile-avatar');
      if (profileAvatar) profileAvatar.src = avatarUrl;

      messageContainer.innerHTML = '';
      const successMessage = renderMessage(
        'success',
        'Avatar was successfully updated!'
      );
      messageContainer.append(successMessage);

      setTimeout(() => {
        successMessage.remove();
      }, 2000);
    } catch (error) {
      messageContainer.innerHTML = '';
      messageContainer.append(
        renderMessage('error', 'Could not update avatar. Please try again.')
      );
      console.error('Failed to update avatar:', error);
    }
  });

  return form;
}
