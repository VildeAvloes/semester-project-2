export function createListingImage(media) {
  const hasValidImage = media?.[0]?.url && media[0].url.startsWith('http');
  const imageUrl = hasValidImage ? media[0].url : null;
  const imageAlt = hasValidImage
    ? media[0].alt || 'Listing image'
    : 'No image available';

  const imageContent = imageUrl
    ? `<img src="${imageUrl}" 
          alt="${imageAlt}"
          class="card-img-top object-fit-cover d-flex align-items-center justify-content-center" 
          onerror="this.onerror=null;
          />`
    : `<div class="card-img-top no-image w-100 bg-info d-flex align-items-center justify-content-center">
            <p class="text-black">Missing image</p>
          </div>`;

  return imageContent;
}
