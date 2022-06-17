//------------ affichage confirmation de la commande -------------------\\

const url = new URL(window.location.href);

let orderId = url.searchParams.get("order_id")

let idConfirmOrder = document.querySelector('#orderId')
idConfirmOrder.innerHTML = orderId;

//___________suppression du panier dans local storage_____________\\

localStorage.clear()

// ================ end ;) :) ===================== \\