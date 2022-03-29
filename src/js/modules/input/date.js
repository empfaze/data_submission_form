import { buttonDisabledHandler } from "../form/auxiliary-functions.js";
import { birthDateInput } from "../utils/constants.js";
import { dateIsValid } from "../utils/validation-functions.js";

export function generateDate() {
  birthDateInput.addEventListener("input", (e) => {
    const date = e.target;
    const wrapper = date.closest(".form__input-wrapper");

    const emptyError = wrapper.querySelector(".empty-error");
    const incompleteError = wrapper.querySelector(".incomplete-error");

    const day = date.value.split(".")[0];
    const month = date.value.split(".")[1];
    const year = date.value.split(".")[2];

    if (date.value.length === 0) {
      date.classList.add("error-border");
      incompleteError.classList.remove("incomplete-error-visible");
      emptyError.classList.add("empty-error-visible");
      wrapper.classList.remove("has-success");
      buttonDisabledHandler();
      return;
    }

    if (dateIsValid(day, month, year, date.value)) {
      wrapper.classList.add("has-success");
      date.classList.remove("error-border");
      incompleteError.classList.remove("incomplete-error-visible");
      emptyError.classList.remove("empty-error-visible");
      buttonDisabledHandler();
      return;
    }

    emptyError.classList.remove("empty-error-visible");
    incompleteError.classList.add("incomplete-error-visible");
    date.classList.add("error-border");
    wrapper.classList.remove("has-success");
    buttonDisabledHandler();
  });
}
