import {Korpa} from '../script/Korpa.js';
import { Produkti } from '../script/ProduktiSkripta.js';   
let prazanHtml='';
Provjera(); 
console.log(Korpa);
function Provjera()
{
    let nekiNovi;
    Korpa.forEach((produkt)=>
    {
        let AJdi=produkt.id;
Produkti.forEach((produkt)=>
{
if(produkt.id===AJdi)
{
    nekiNovi=produkt;
}
console.log(nekiNovi);
})

    })
}
export function Kreiraj()
{
    Korpa.forEach((stavkaKorpe)=>{
        prazanHtml+=`
        <div class="ElementDiva">
                    <div class="SlikaDiv">
                           <img src="${stavkaKorpe.slika}" class="slikaArtikla">
                    </div>
                    <div class="tekstDiva">
                       <div class="ImeElementa">
                        ${stavkaKorpe.ime}
                       </div>
                       <div class="cijenaElementa">
                         ${stavkaKorpe.CijenaProizvoda}
                       </div>
                       <div class="KolicinaElementa">${stavkaKorpe.kolicina}</div>
                    </div>
                    <div class="OdabirDostave">
        
                    </div>
               </div>
            </div>
        `
        })
}

document.querySelector('.lijeviDiv').innerHTML+=prazanHtml;