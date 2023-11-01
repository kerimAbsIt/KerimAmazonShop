import {Korpa} from '../script/Korpa.js';
import { Produkti } from '../script/ProduktiSkripta.js';   
import {FormatCijene} from '../script/Pomocne funkcije/PF.js'

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
                    $${FormatCijene(cartItemss.CijenaProizvoda)}
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
document.addEventListener('DOMContentLoaded',function()
{
  localStorage.removeItem('Korpa');
  Korpa=[];
});        

document.querySelector('.lijeviDiv').innerHTML+=cartSummaryHTML;