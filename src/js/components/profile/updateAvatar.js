export function renderUpdateAvatar() {
  const updateAvatar = document.createElement('div');
  updateAvatar.classList.add('mb-3');

  const avatarLabel = document.createElement('label');
  avatarLabel.setAttribute('for', 'avatarUrl');
  avatarLabel.classList.add('form-label');
  avatarLabel.textContent = 'Update avatar (URL)';

  const avatarInput = document.createElement('input');
  avatarInput.type = 'url';
  avatarInput.classList.add('form-control');
  avatarInput.id = 'avatarUrl';
  avatarInput.placeholder = 'Paste your URL here...';

  const updateButton = document.createElement('button');
  updateButton.id = 'update-avatar';
  updateButton.classList.add('btn', 'btn-secondary', 'mt-2');
  updateButton.textContent = 'Update Avatar';

  updateAvatar.append(avatarLabel, avatarInput, updateButton);

  return updateAvatar;
}
