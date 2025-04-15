export function renderBody(bids = []) {
  const body = document.createElement('div');
  body.classList.add('modal-body');

  const bidsTitle = document.createElement('h5');
  bidsTitle.textContent = 'Current Bids';

  const bidList = document.createElement('ul');
  bidList.classList.add('list-group', 'mb-3');

  if (bids.length === 0) {
    const noBids = document.createElement('li');
    noBids.classList.add('list-group-item');

    noBids.textContent = 'No current bids';
    bidList.append(noBids);
  } else {
    bids.sort((a, b) => b.amount - a.amount);

    bids.forEach((bid) => {
      const bidItem = document.createElement('li');
      bidItem.classList.add('list-group-item');

      const boldAmount = document.createElement('strong');
      boldAmount.classList.add('fw-bold');
      boldAmount.textContent = bid.amount;

      bidItem.append(boldAmount);
      bidItem.append(` by ${bid.bidder?.name || 'Anonymous'}`);
      bidList.append(bidItem);
    });
  }

  const bidInput = document.createElement('input');
  bidInput.setAttribute('type', 'number');
  bidInput.classList.add('form-control');
  bidInput.placeholder = 'Enter your bid';

  body.append(bidsTitle, bidList, bidInput);
  return body;
}
