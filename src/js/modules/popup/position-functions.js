export function releasePopupPosition() {
  document.body.classList.remove("lock");
  document.body.style.top = "";
  window.scrollTo(0, document.body.dataset.scroll);
  document.body.removeAttribute("data-scroll");
}

export function fixPopupPosition() {
  const height = window.scrollY;
  document.body.dataset.scroll = height;

  document.body.classList.add("lock");
  document.body.style.top = `-${height}px`;
}
