const url = new URL(window.location.href);

let orderId = url.searchParams.get("order_id")

let idConfirmOrder = document.querySelector('#orderId')
idConfirmOrder.innerHTML = orderId;

localStorage.clear()