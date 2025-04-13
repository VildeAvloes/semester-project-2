export function renderUpdateAvatar() {
  const updateAvatar = document.createElement('div');
  updateAvatar.classList.add(
    'mb-3',
    'd-flex',
    'justify-content-start',
    'align-items-end'
  );

  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('me-2', 'flex-grow-1');

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

  const updateButton = document.createElement('button');
  updateButton.id = 'update-avatar';
  updateButton.classList.add('btn', 'btn-secondary', 'ms-auto', 'mt-2');
  updateButton.textContent = 'Update Avatar';

  updateAvatar.append(inputWrapper, updateButton);

  return updateAvatar;
}
