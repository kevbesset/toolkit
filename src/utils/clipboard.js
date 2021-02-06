export async function copy(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = {
    position: "absolute",
    left: "-999vw",
  };

  await document.body.appendChild(el);
  await el.select();
  await document.execCommand("copy");
  document.body.removeChild(el);
}
