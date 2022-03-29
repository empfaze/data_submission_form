import { submitButton, inputWrappers } from "../utils/constants.js";

export function buttonDisabledHandler() {
  let successCounter = 0;

  inputWrappers.forEach((wrapper) => {
    if (wrapper.classList.contains("has-success")) successCounter++;
  });

  if (successCounter === 4) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
