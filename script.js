// Get elements
const galleryImages = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');

// Open popup when an image is clicked
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImage.src = image.src;
    popupImage.alt = image.alt;
  });
});

// Close popup
function closePopup() {
  popup.style.display = 'none';
  popupImage.src = ''; // Clear the src to avoid unnecessary loading
}

// Close popup on outside click
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});
