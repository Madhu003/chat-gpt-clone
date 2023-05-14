export async function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}