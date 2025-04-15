import { renderWrapper } from '../components/common/wrapper.js';
import { renderForm } from '../components/forms/form.js';
import { renderInputGroup } from '../components/forms/inputs.js';

export function createListingPage() {
  const { container, col } = renderWrapper('Create Listing', 'col-md-8');
  const form = renderForm();

  const titleGroup = renderInputGroup({
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Title of your listing',
  });

  const mediaGroup = renderInputGroup({
    id: 'media',
    label: 'Media (Image URL)',
    type: 'url',
    placeholder: 'https://example.com/image.jpg',
  });

  const descriptionGroup = renderInputGroup({
    id: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Describe your item',
  });

  const deadlineGroup = renderInputGroup({
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
    titleGroup,
    mediaGroup,
    descriptionGroup,
    deadlineGroup,
    buttonWrapper
  );
  col.append(form);

  return container;
}
