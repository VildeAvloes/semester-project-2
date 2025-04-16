export function renderBody(listing, isOwner) {
  const body = document.createElement('div');
  body.classList.add('modal-body');

  const bidsTitle = document.createElement('h3');
  bidsTitle.textContent = 'Current Bids';

  const bidList = document.createElement('ul');
  bidList.classList.add('list-group', 'mb-3');

  const bids = listing.bids || [];
  const sortedBids = [...bids].sort((a, b) => b.amount - a.amount);

  if (sortedBids.length > 0) {
    sortedBids.forEach((bid) => {
      const bidItem = document.createElement('li');
      bidItem.classList.add('list-group-item');

      const boldAmount = document.createElement('strong');
      boldAmount.classList.add('fw-bold');
      boldAmount.textContent = bid.amount;

      bidItem.append(boldAmount);
      bidItem.append(` by ${bid.bidder?.name || 'Anonymous'}`);
      bidList.append(bidItem);
    });
  } else {
    const noBids = document.createElement('li');
    noBids.classList.add('list-group-item');
    noBids.textContent = 'No current bids';
    bidList.append(noBids);
  }

  body.append(bidsTitle, bidList);

  if (!isOwner) {
    const bidInput = document.createElement('input');
    bidInput.setAttribute('type', 'number');
    bidInput.classList.add('form-control');
    bidInput.placeholder = 'Enter your bid';
    body.append(bidInput);
  }

  return body;
}
