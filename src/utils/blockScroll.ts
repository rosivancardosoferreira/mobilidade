export function blockScroll(state: boolean) {
  document.body.style.position = state ? "fixed" : "static";
}
