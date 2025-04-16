export function renderBidList(bids = []) {
  const bidListWrapper = document.createElement('div');
  bidListWrapper.classList.add('mt-4');

  const title = document.createElement('h4');
  title.textContent = 'Bids';

  bidListWrapper.append(title);

  if (bids.length === 0) {
    const noBids = document.createElement('p');
    noBids.classList.add('text-muted');
    noBids.textContent = 'No bids yet';
    bidListWrapper.append(noBids);
    return bidListWrapper;
  }

  const list = document.createElement('ul');
  list.classList.add('list-group');

  const sortedBids = [...bids].sort((a, b) => b.amount - a.amount);

  sortedBids.forEach((bid) => {
    const item = document.createElement('li');
    item.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    );

    const name = document.createElement('span');
    name.textContent = bid.bidderName || 'Anonymous';

    const amount = document.createElement('strong');
    amount.textContent = `${bid.amount} credits`;

    item.append(name, amount);
    list.append(item);
  });

  bidListWrapper.append(list);
  return bidListWrapper;
}
