export function remToPix(remVal: string) {
  if (remVal.includes("px")) {
    return remVal;
  }
  return `${parseFloat(remVal.replace("rem", "")) * 16}`;
}
