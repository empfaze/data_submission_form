import { buttonDisabledHandler } from "../form/auxiliary-functions.js";
import { phoneInput } from "../utils/constants.js";
import { phoneIsValid } from "../utils/validation-functions.js";

let mobileFirstTouch = true;

export function generatePhone() {
  phoneInput.addEventListener("input", (e) => {
    const phone = e.target;
    const wrapper = phone.closest(".form__input-wrapper");

    const emptyError = wrapper.querySelector(".empty-error");
    const incompleteError = wrapper.querySelector(".incomplete-error");

    if (phone.value.length === 0) {
      phone.classList.add("error-border");
      incompleteError.classList.remove("incomplete-error-visible");
      emptyError.classList.add("empty-error-visible");
      wrapper.classList.remove("has-success");
      buttonDisabledHandler();
      mobileFirstTouch = true;
      return;
    }

    if (phone.value === "+7 (8" && mobileFirstTouch) {
      phone.value = "+7 (";
      mobileFirstTouch = false;
    }

    if (phoneIsValid(phone.value)) {
      wrapper.classList.add("has-success");
      phone.classList.remove("error-border");
      incompleteError.classList.remove("incomplete-error-visible");
      emptyError.classList.remove("empty-error-visible");
      buttonDisabledHandler();
      return;
    }

    emptyError.classList.remove("empty-error-visible");
    incompleteError.classList.add("incomplete-error-visible");
    phone.classList.add("error-border");
    wrapper.classList.remove("has-success");
    buttonDisabledHandler();
  });
}

export function changeMobileFirstTouchValue() {
  mobileFirstTouch = true;
}
