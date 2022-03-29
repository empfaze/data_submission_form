import { buttonDisabledHandler } from "../form/auxiliary-functions.js";
import { nameInput } from "../utils/constants.js";
import { nameIsValid } from "../utils/validation-functions.js";

export function generateName() {
  nameInput.addEventListener("input", (e) => {
    const name = e.target;
    const wrapper = name.closest(".form__input-wrapper");

    const emptyError = wrapper.querySelector(".empty-error");
    const incompleteError = wrapper.querySelector(".incomplete-error");

    if (name.value.length === 0) {
      name.classList.add("error-border");
      incompleteError.classList.remove("incomplete-error-visible");
      emptyError.classList.add("empty-error-visible");
      wrapper.classList.remove("has-success");
      buttonDisabledHandler();
      return;
    }

    if (nameIsValid(name.value)) {
      wrapper.classList.add("has-success");
      name.classList.remove("error-border");
      incompleteError.classList.remove("incomplete-error-visible");
      emptyError.classList.remove("empty-error-visible");
      buttonDisabledHandler();
      return;
    }

    emptyError.classList.remove("empty-error-visible");
    incompleteError.classList.add("incomplete-error-visible");
    name.classList.add("error-border");
    wrapper.classList.remove("has-success");
    buttonDisabledHandler();
  });
}
