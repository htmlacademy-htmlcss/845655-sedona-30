const buttonSearchHotel = document.querySelector(".search-hotel_button");
const modal = document.querySelector(".modal");
const modalSearchForm = modal.querySelector(".search-form");

const inputArrivalDate = modalSearchForm.querySelector("[name=arrival-date]");
const inputDepartureDate = modalSearchForm.querySelector("[name=departure-date]");
const inputAdults = modalSearchForm.querySelector("[name=adults]");
const inputChildrens = modalSearchForm.querySelector("[name=childrens]");
const buttonMinusAdults = modalSearchForm.querySelector(".button__amount-persons_minus-adults");
const buttonPlusAdults = modalSearchForm.querySelector(".button__amount-persons_plus-adults");
const buttonMinusChildrens = modalSearchForm.querySelector(".button__amount-persons_minus-childrens");
const buttonPlusChildrens = modalSearchForm.querySelector(".button__amount-persons_plus-childrens");

let isStorageSupport = true;
let storageArrivalDate = "";
let storageDepartureDate = "";
let storageAdults = "";
let storageChildren = "";

try {
    storageArrivalDate = localStorage.getItem("arrival-date");
    storageDepartureDate = localStorage.getItem("departure-date");
    storageAdults = localStorage.getItem("adults");
    storageChildren = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

buttonSearchHotel.addEventListener("click", function(evt){
    evt.preventDefault();
    modal.classList.toggle("modal-show");
    modalSearchForm.classList.remove("modal_error");
    if (modal.classList.contains("modal-show")) {
        inputArrivalDate.focus();
        if (storageArrivalDate && storageDepartureDate && storageAdults && storageChildren) {
            inputArrivalDate.value = storageArrivalDate;
            inputDepartureDate.value = storageDepartureDate;
            inputAdults.value = storageAdults;
            inputChildrens.value = storageChildren;
        }
    }
});

modalSearchForm.addEventListener("submit", function(evt){
    if (!inputArrivalDate.value || !inputDepartureDate.value || !inputAdults.value || !inputChildrens.value) {
        evt.preventDefault();
        modalSearchForm.classList.remove("modal_error");
        modalSearchForm.offsetWidth = modalSearchForm.offsetWidth;
        modalSearchForm.classList.add("modal_error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("arrival-date", inputArrivalDate.value);
            localStorage.setItem("departure-date", inputDepartureDate.value);
            localStorage.setItem("adults", inputAdults.value);
            localStorage.setItem("children", inputChildrens.value);
        }
    }
});

buttonMinusAdults.addEventListener('click', function() {
    if (inputAdults.value > 1) {
      inputAdults.value = +inputAdults.value - 1;
    }
  });

  buttonPlusAdults.addEventListener('click', function() {
    inputAdults.value = +inputAdults.value + 1;
  });

  buttonMinusChildrens.addEventListener('click', function() {
    if (inputChildrens.value > 1) {
      inputChildrens.value = +inputChildrens.value - 1;
    }
  });

   buttonPlusChildrens.addEventListener('click', function() {
    inputChildrens.value = +inputChildrens.value + 1;
  });