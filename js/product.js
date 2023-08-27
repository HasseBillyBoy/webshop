fetch("https://kea-alt-del.dk/t7/api/products/1525")
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

/* 

{id: 1525, gender: 'Unisex', category: 'Accessories', subcategory: 'Bags', articletype: 'Backpacks', …}
agegroup
: 
"Adults-Unisex"
articletype
: 
"Backpacks"
basecolour
: 
"Navy Blue"
brandbio
: 
"PUMA is the World's Fastest Sports Brand"
brandimage
: 
"http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg"
brandname
: 
"Puma"
category
: 
"Accessories"
colour1
: 
"NA"
colour2
: 
"NA"
description
: 
"<p>asfafaf<br> kasjhdkashd</p>"
discount
: 
55
fashiontype
: 
"Fashion"
gender
: 
"Unisex"
id
: 
1525
materialcaredesc
: 
null
parsed
: 
1
price
: 
1299
productdisplayname
: 
"Deck Navy Blue Backpack"
productionyear
: 
2010
relid
: 
1525
season
: 
"Fall"
sizefitdesc
: 
null
soldout
: 
0
styledesc
: 
null
subcategory
: 
"Bags"
usagetype
: 
"Casual"
variantname
: 
"Deck Backpack"*/
