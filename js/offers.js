

  document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="offer"]');
    const privacyCheckbox = document.getElementById('privacy-checkbox');
    const buyNowButton = document.querySelector('.buy-now-button');
    const oneTimeOffer = document.querySelector('.buy-now-button');
  
    function updateButtonState() {
      const isOfferSelected = Array.from(radioButtons).some(radio => radio.checked);
      const isPrivacyAccepted = privacyCheckbox.checked;
  
      if (isOfferSelected && isPrivacyAccepted) {
        buyNowButton.disabled = false;
      } else {
        buyNowButton.disabled = true;
      }
    }
  
    radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        updateButtonState();
        
        if (radio.checked) {
          buyNowButton.classList.add('selected');
        } else {
          buyNowButton.classList.remove('selected');
        }
      });
    });
  
    privacyCheckbox.addEventListener('change', updateButtonState);

    buyNowButton.addEventListener('click', () => {
      const selectedOffer = document.querySelector('input[name="offer"]:checked').value;
      alert(`You selected ${selectedOffer} CR. Thank you for your purchase!`);
    });
  });