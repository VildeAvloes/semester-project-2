import { createListing } from '../api/auth/listings/index.js';
import { renderMessage, renderWrapper } from '../components/common/index.js';
import { renderForm, renderInput } from '../components/forms/index.js';

export function createListingPage() {
  document.title = 'Bid Society | Create Listing';

  const { container, col } = renderWrapper('Create Listing', 'col-md-8');
  const form = renderForm();

  const titleObject = renderInput({
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Title of your listing',
  });

  const mediaObject = renderInput({
    id: 'media',
    label: 'Media (Image URL)',
    type: 'url',
    placeholder: 'https://example.com/image.jpg',
  });

  const altTextObject = renderInput({
    id: 'altText',
    label: 'Alt Text for Image',
    type: 'text',
    placeholder: 'Describe the image for accessibility',
  });

  const descriptionObject = renderInput({
    id: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Describe your item',
  });

  const deadlineObject = renderInput({
    id: 'deadline',
    label: 'Deadline',
    type: 'date',
  });

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('d-flex', 'justify-content-end', 'gap-2', 'mt-4');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('btn', 'btn-primary', 'min-w-150');
  submitButton.textContent = 'Create Listing';

  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.classList.add('btn', 'btn-outline-secondary', 'min-w-150');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', () => {
    window.location.hash = '#profile';
  });

  buttonWrapper.append(cancelButton, submitButton);

  form.append(
    titleObject,
    mediaObject,
    altTextObject,
    descriptionObject,
    deadlineObject,
    buttonWrapper
  );

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    form.querySelector('.message-container')?.remove();

    const title = titleObject.querySelector('input')?.value.trim();
    const media = mediaObject.querySelector('input')?.value.trim();
    const altText = altTextObject.querySelector('input')?.value.trim();
    const description = descriptionObject
      .querySelector('textarea')
      ?.value.trim();
    const deadline = deadlineObject.querySelector('input')?.value;

    if (!title || !media || !description || !deadline) {
      const errorMessage = renderMessage('error', 'All fields are required');
      errorMessage.classList.add('message-container');
      form.prepend(errorMessage);
      return;
    }

    try {
      const data = {
        title,
        description,
        endsAt: new Date(deadline).toISOString(),
        media: [
          {
            url: media,
            alt: altText || title,
          },
        ],
      };

      await createListing(data);

      const successMessage = renderMessage(
        'success',
        'Listing created successfully!'
      );
      successMessage.classList.add('message-container');
      form.prepend(successMessage);

      form.reset();

      setTimeout(() => {
        window.location.hash = '#profile';
      }, 1500);
    } catch (error) {
      const errorMessage = renderMessage(
        'error',
        error.message || 'Something went wrong'
      );
      errorMessage.classList.add('message-container');
      form.prepend(errorMessage);
    }
  });

  col.append(form);
  return container;
}
