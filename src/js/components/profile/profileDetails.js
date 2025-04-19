export function renderProfileDetails(profile) {
  const avatar = document.createElement('img');
  avatar.id = 'profile-avatar';
  avatar.src = profile.avatar?.url;
  avatar.alt = 'Avatar';
  avatar.classList.add('rounded-circle', 'me-4');
  avatar.width = 100;
  avatar.height = 100;

  const username = document.createElement('p');
  username.id = 'profile-name';
  username.classList.add('fs-2', 'fw-bold', 'mb-1');
  username.textContent = profile.name;

  const email = document.createElement('p');
  email.id = 'profile-email';
  email.classList.add('mb-1', 'text-secondary');
  email.textContent = profile.email;

  const creditsLabel = document.createElement('p');
  creditsLabel.classList.add('fs-5', 'fw-bold', 'me-2');
  creditsLabel.textContent = 'Credits:';

  const creditsValue = document.createElement('p');
  creditsValue.id = 'profile-credits';
  creditsValue.classList.add('fs-5', 'fw-bold', 'text-secondary');
  creditsValue.textContent = profile.credits ?? '0';

  const creditsContainer = document.createElement('div');
  creditsContainer.classList.add('d-flex');
  creditsContainer.append(creditsLabel, creditsValue);

  const profileInfo = document.createElement('div');
  profileInfo.append(username, email, creditsContainer);

  const profileDetails = document.createElement('div');
  profileDetails.classList.add('d-flex', 'align-items-center', 'mb-4');
  profileDetails.append(avatar, profileInfo);

  return profileDetails;
}
