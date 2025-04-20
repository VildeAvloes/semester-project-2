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

  const messageWrapper = document.createElement('div');
  messageWrapper.classList.add('w-100', 'mt-2');
  form.append(messageWrapper);

  const updateButton = document.createElement('button');
  updateButton.type = 'submit';
  updateButton.classList.add('btn', 'btn-secondary', 'min-w-150', 'mb-3');
  updateButton.textContent = 'Update Avatar';

  inputRow.append(input, updateButton);
  form.append(inputRow);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const avatarUrl = avatarInput.value.trim();

    messageWrapper.innerHTML = '';

    if (!avatarUrl) {
      messageWrapper.append(
        renderMessage('error', 'Please provide a valid Avatar URL')
      );
      return;
    }

    try {
      const updatedUser = await updateAvatar(avatarUrl, token, user.name);

      const profileAvatar = document.getElementById('profile-avatar');
      if (profileAvatar && updatedUser.avatar?.url) {
        profileAvatar.src = updatedUser.avatar.url;
      }

      messageWrapper.append(
        renderMessage('success', 'Avatar was successfully updated!')
      );

      setTimeout(() => {
        messageWrapper.innerHTML = '';
        location.reload();
      }, 1500);
    } catch (error) {
      messageWrapper.innerHTML = '';
      messageWrapper.append(
        renderMessage('error', 'Could not update avatar. Please try again.')
      );
      console.error('Failed to update avatar:', error);
    }
  });

  return form;
}
