import { placeBid } from '../../../../api/auth/bid.js';
import { loadProfile, saveProfile } from '../../../../api/auth/state.js';
import { renderMessage } from '../../../common/message.js';

export function renderFooter(onClose, isOwner, listing, bidInput, bidList) {
  const footer = document.createElement('div');
  footer.classList.add(
    'modal-footer',
    'd-flex',
    'justify-content-end',
    'gap-2',
    'mt-4'
  );

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('btn', 'btn-outline-secondary', 'min-w-150');
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', onClose);
  footer.append(cancelButton);

  if (!isOwner && bidInput && bidList) {
    const submitButton = document.createElement('button');
    submitButton.classList.add('btn', 'btn-primary', 'min-w-150');
    submitButton.textContent = 'Submit Bid';

    submitButton.addEventListener('click', async () => {
      const amount = Number(bidInput.value.trim());
      const profile = loadProfile();
      const token = localStorage.getItem('token');
      const highestBid = listing.bids?.[0]?.amount || 0;

      if (!amount || amount <= highestBid) {
        const error = renderMessage(
          'error',
          `Bid must be more than ${highestBid} credits`
        );
        bidList.parentElement.append(error);
        return;
      }

      if (amount > profile.credits) {
        const error = renderMessage('error', 'Not enough credits');
        bidList.parentElement.append(error);
        return;
      }

      try {
        await placeBid(listing.id, amount, token);

        profile.credits -= amount;
        saveProfile(profile);

        const bidItem = document.createElement('li');
        bidItem.classList.add('list-group-item');

        const boldAmount = document.createElement('strong');
        boldAmount.classList.add('fw-bold');
        boldAmount.textContent = amount;

        bidItem.append(boldAmount);
        bidItem.append(` by ${profile.name}`);
        bidList.prepend(bidItem);

        bidInput.value = '';

        const success = renderMessage('success', 'Bid placed!');
        bidList.parentElement.append(success);
      } catch (err) {
        const error = renderMessage('error', 'Something went wrong');
        console.error('Something went wrong', err);
        bidList.parentElement.append(error);
      }
    });

    footer.append(submitButton);
  }

  return footer;
}
