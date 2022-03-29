import { releasePopupPosition } from "./position-functions.js";
import { successPopup, errorPopup } from "../utils/constants.js";

export function generatePopups() {
  [successPopup, errorPopup].forEach((elem) => {
    elem.addEventListener("click", () => {
      releasePopupPosition();

      switch (elem.id) {
        case "success-popup":
          successPopup.classList.add("invisible");
          break;
        case "error-popup":
          errorPopup.classList.add("invisible");
          break;
      }
    });
  });

  const successWrapper = document.getElementById("success-wrapper");
  successWrapper.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target.closest("#success-btn")) {
      releasePopupPosition();
      successPopup.classList.add("invisible");
    }
  });

  const errorWrapper = document.getElementById("error-wrapper");
  errorWrapper.addEventListener("click", (e) => {
    e.stopPropagation();

    if (e.target.closest("#error-btn")) {
      releasePopupPosition();
      errorPopup.classList.add("invisible");
    }
  });
}
