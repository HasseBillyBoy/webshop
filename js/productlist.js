// fetche
fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct *ental
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lave en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector("p").textContent = product.price;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy
    .querySelector(".read-more")
    .setAttribute("href", `product.html?id=${product.id}`);
  // "hvis produktet er udsolgt". vi skal have lavet en betingelse:
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }

  //appende
  document.querySelector(".articlegrid").appendChild(copy);
}

//-- --//
