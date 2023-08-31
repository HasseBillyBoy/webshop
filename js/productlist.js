const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

// fetche
fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
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
  copy.querySelector("p").textContent = "Price: " + product.price + ",-";
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy
    .querySelector(".readMore")
    .setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector(".badge").textContent = product.discount + "%";

  // "hvis produktet er udsolgt". vi skal have lavet en betingelse:
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }
  //hvis productet har afslag i prisen, skal vi have en betingelse:
  if (product.discount) {
    copy.querySelector("article").classList.add("discount");
  }

  //appende
  document.querySelector(".articlegrid").appendChild(copy);
}

//document.querySelector(".article .badge").textContent =
//product.discount + "%";
