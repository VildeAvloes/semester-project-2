import { updateAvatar } from '../../api/auth/profile/avatar.js';
import { loadProfile } from '../../api/auth/state.js';
import { renderMessage } from '../common/message.js';

export function renderUpdateAvatarComp() {
  const updateAvatarComp = document.createElement('div');
  updateAvatarComp.classList.add('d-flex', 'mb-4', 'flex-column');

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('d-flex', 'align-items-end');

  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('me-2', 'flex-grow-1', 'flex-column');

  const avatarLabel = document.createElement('label');
  avatarLabel.setAttribute('for', 'avatarUrl');
  avatarLabel.classList.add('form-label');
  avatarLabel.textContent = 'Update avatar (URL)';

  const avatarInput = document.createElement('input');
  avatarInput.type = 'url';
  avatarInput.classList.add('form-control');
  avatarInput.id = 'avatarUrl';
  avatarInput.placeholder = 'Paste your URL here...';

  inputWrapper.append(avatarLabel, avatarInput);

  const messageContainer = document.createElement('div');
  messageContainer.id = 'avatar-message';

  const updateButton = document.createElement('button');
  updateButton.id = 'update-avatar';
  updateButton.classList.add('btn', 'btn-secondary', 'ms-auto');
  updateButton.textContent = 'Update Avatar';

  updateButton.addEventListener('click', async () => {
    const avatarUrl = avatarInput.value.trim();
    const user = loadProfile();
    const token = localStorage.getItem('token');

    if (!avatarUrl) {
      const errorMessage = renderMessage(
        'error',
        'Please provide a valid Avatar URL'
      );
      messageContainer.innerHTML = '';
      messageContainer.appendChild(errorMessage);
      return;
    }

    try {
      await updateAvatar(avatarUrl, token, user.name);
      localStorage.setItem('userAvatarUrl', avatarUrl);

      const profileAvatar = document.getElementById('profile-avatar');
      profileAvatar.src = avatarUrl;

      const successMessage = renderMessage(
        'success',
        'Avatar was successfully updated!'
      );
      messageContainer.innerHTML = '';
      messageContainer.appendChild(successMessage);
    } catch (error) {
      const errorMessage = renderMessage(
        'error',
        'Could not update avatar. Please try again.'
      );
      messageContainer.innerHTML = '';
      messageContainer.appendChild(errorMessage);

      throw new Error('Failed to update avatar', error);
    }
  });

  contentWrapper.append(inputWrapper, updateButton);
  updateAvatarComp.append(contentWrapper, messageContainer);

  return updateAvatarComp;
}
