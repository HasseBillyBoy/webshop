const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then(headersReceived)
  .then(dataReceived);

function headersReceived(response) {
  console.log(response);
  return response.json();
}

function dataReceived(data) {
  // do something with the data
  showProduct(data);
}

function showProduct(product) {
  console.log(product);
  document.querySelector(".horizontalhalf h2").textContent =
    product.productdisplayname;
  document.querySelector(
    "img:nth-child(2)"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".horizontalhalf p:nth-child(2)").textContent =
    product.price;
}
