import { buttonDisabledHandler } from "../form/auxiliary-functions.js";
import { emailInput } from "../utils/constants.js";
import { emailIsValid } from "../utils/validation-functions.js";

export function generateEmail() {
  emailInput.addEventListener("input", (e) => {
    const email = e.target;
    const wrapper = email.closest(".form__input-wrapper");

    const emptyError = wrapper.querySelector(".empty-error");
    const incompleteError = wrapper.querySelector(".incomplete-error");

    if (email.value.length === 0) {
      email.classList.add("error-border");
      incompleteError.classList.remove("incomplete-error-visible");
      emptyError.classList.add("empty-error-visible");
      wrapper.classList.remove("has-success");
      buttonDisabledHandler();
      return;
    }

    if (emailIsValid(email.value)) {
      wrapper.classList.add("has-success");
      email.classList.remove("error-border");
      incompleteError.classList.remove("incomplete-error-visible");
      emptyError.classList.remove("empty-error-visible");
      buttonDisabledHandler();
      return;
    }

    emptyError.classList.remove("empty-error-visible");
    incompleteError.classList.add("incomplete-error-visible");
    email.classList.add("error-border");
    wrapper.classList.remove("has-success");
    buttonDisabledHandler();
  });
}
