import {Korpa} from '../script/Korpa.js';
import { Produkti } from '../script/ProduktiSkripta.js';   
let prazanHtml='';
// console.log(Korpa);
// console.log(Produkti);
// Kreiraj(); 

let cartSummaryHTML='';

Korpa.forEach((cartItemss) => {

    let cartItemId = cartItemss.id;
    console.log(cartItemId);
           
        cartSummaryHTML += `
         <div class="ElementDiva">
         <div class="SlikaDiv">
             <img src="${cartItemss.slika}" class="slikaArtika" alt="">
                            
             </div>
        <div class="tekstDiva">
           <div class="ImeElementa">
                    ${cartItemss.ime}
                </div>
                <div class="cijenaElementa">
                    $${(cartItemss.CijenaProizvoda/100).toFixed(2)}
                 </div>
                 <div class="KolicinaElementa">
                 kolicina: ${cartItemss.kolicina}
                 </div>
                 </div>
                 <div class="OdabirDostave">

                    </div>
                </div>
                 </div>
                     `;

});
        

document.querySelector('.lijeviDiv').innerHTML+=cartSummaryHTML;