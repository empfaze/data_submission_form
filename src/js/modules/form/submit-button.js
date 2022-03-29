import { buttonDisabledHandler } from "./auxiliary-functions.js";
import { fixPopupPosition } from "../popup/position-functions.js";
import {
  submitButton,
  nameInput,
  birthDateInput,
  emailInput,
  phoneInput,
  inputWrappers,
  inputs,
  successPopup,
  errorPopup,
} from "../utils/constants.js";
import {
  dateIsValid,
  emailIsValid,
  nameIsValid,
  phoneIsValid,
} from "../utils/validation-functions.js";

import { changeMobileFirstTouchValue } from "../input/phone.js";

export function formInit() {
  function resetForm() {
    nameInput.value = "";
    birthDateInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";

    submitButton.disabled = true;
    inputWrappers.forEach((wrapper) => {
      wrapper.classList.remove("has-success");
    });
  }

  Array.from(inputs).forEach((input) => {
    input.addEventListener("blur", (e) => {
      const input = e.target;
      const wrapper = input.closest(".form__input-wrapper");
      const emptyError = wrapper.querySelector(".empty-error");

      if (input.value.length === 0) {
        input.classList.add("error-border");
        emptyError.classList.add("empty-error-visible");
      }
    });
  });

  submitButton.addEventListener("click", () => {
    const day = birthDateInput.value.split(".")[0];
    const month = birthDateInput.value.split(".")[1];
    const year = birthDateInput.value.split(".")[2];

    const nameValid = nameIsValid(nameInput.value);
    const dateValid = dateIsValid(day, month, year, birthDateInput.value);
    const phoneValid = phoneIsValid(phoneInput.value);
    const emailValid = emailIsValid(emailInput.value);

    fixPopupPosition();
    submitButton.disabled = true;
    submitButton.innerHTML = `Отправляется <span class="submit-spinner"></span>`;

    if (!nameValid || !dateValid || !phoneValid || !emailValid) {
      const wrappers = document.querySelectorAll(".form__input-wrapper");
      wrappers.forEach((wrapper) => {
        wrapper.classList.remove("has-success");
      });
      submitButton.innerHTML = `Отправить заявку`;
      errorPopup.classList.remove("invisible");
      return;
    }

    const form = {
      name: nameInput.value,
      birthDate: birthDateInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
    };
    const url =
      "https://second-approach-training-default-rtdb.europe-west1.firebasedatabase.app/users.json";

    sendRequest(url, form);
  });

  // Request
  async function sendRequest(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Server techical issues. Try again later.");
      }

      successPopup.classList.remove("invisible");
      resetForm();
    } catch (e) {
      errorPopup.classList.remove("invisible");
    } finally {
      submitButton.innerHTML = `Отправить заявку`;
      buttonDisabledHandler();
      changeMobileFirstTouchValue();
    }
  }
}
