export default function displayMessage(messageType, message, target) {
  const element = document.querySelector(target);

  return (element.innerHTML = `<div role="alert" class="p-3 alert-${messageType}">${message}</div>`);
}
