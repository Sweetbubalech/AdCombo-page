document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[name="offer"]');
  const privacyCheckbox = document.getElementById("privacy-checkbox");

  function updateButtonState() {
    const isOfferSelected = Array.from(radioButtons).some(
      (radio) => radio.checked
    );
    const isPrivacyAccepted = privacyCheckbox.checked;

    document.querySelectorAll(".buy-now-button").forEach((button) => {
      if (isOfferSelected && isPrivacyAccepted) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });
  }

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      updateButtonState();

      const card = radio.closest(".offer-block");
      const buyNowButton = card.querySelector(".buy-now-button");

      if (radio.checked) {
        buyNowButton.classList.add("selected");
      } else {
        buyNowButton.classList.remove("selected");
      }
    });
  });

  privacyCheckbox.addEventListener("change", updateButtonState);

  document.querySelectorAll(".buy-now-button").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedOffer = document.querySelector(
        'input[name="offer"]:checked'
      ).value;
      alert(`You selected ${selectedOffer} CR. Thank you for your purchase!`);
    });
  });
});
