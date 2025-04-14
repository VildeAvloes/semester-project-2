export function renderImage(media) {
  const hasValidImage = media?.[0]?.url && media[0].url.startsWith('http');
  const imageUrl = hasValidImage ? media[0].url : null;
  const imageAlt = hasValidImage
    ? media[0].alt || 'Listing image'
    : 'No image available';

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('ratio', 'ratio-4x3');

  if (imageUrl) {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = imageAlt;
    image.classList.add(
      'img-fluid',
      'object-fit-cover',
      'w-100',
      'h-100',
      'rounded-top'
    );

    imageContainer.append(image);
  } else {
    const fallback = document.createElement('div');
    fallback.classList.add(
      'd-flex',
      'align-items-center',
      'justify-content-center',
      'bg-info',
      'text-black',
      'w-100',
      'h-100',
      'rounded-top'
    );
    fallback.textContent = 'Missing image';
    imageContainer.append(fallback);
  }

  return imageContainer;
}
