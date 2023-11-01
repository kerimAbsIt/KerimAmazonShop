import {Korpa} from '../script/Korpa.js';
import { Produkti } from '../script/ProduktiSkripta.js';   
let prazanHtml='';
console.log(Korpa);
console.log(Produkti);
// Kreiraj(); 

let cartSummaryHTML = '';

Korpa.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  Produkti.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  cartSummaryHTML += `
  <div class="ElementDiva">
  <div class="SlikaDiv">
      <img src="${matchingProduct.image}" class="slikaArtika" alt="">
      
  </div>
  <div class="tekstDiva">
     <div class="ImeElementa">
      ${matchingProduct.ime}
     </div>
     <div class="cijenaElementa">
       ${matchingProduct.cijena}
     </div>
     <div class="KolicinaElementa">${stavkaKorpe.kolicina}</div>
  </div>
  <div class="OdabirDostave">

      </div>
  </div>
   </div>
       `;

});
        

document.querySelector('.lijeviDiv').innerHTML+=prazanHtml;