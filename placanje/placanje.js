import {Korpa} from '../script/Korpa.js';
import { Produkti } from '../script/ProduktiSkripta.js';   
import {FormatCijene} from '../script/Pomocne funkcije/PF.js'
let AmazonLogo=document.querySelector('.AmazonLogo');

AmazonLogo.addEventListener('click',function()
{
    window.location.href='../AmazonHtml.html';
});
let prazanHtml='';
// console.log(Korpa);
// console.log(Produkti);
// Kreiraj(); 

let cartSummaryHTML='';
let ukupnoArtikala=Korpa.length;
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
                 <div class="RadioDiv">
                 <div class=radio1>
                 <label class="NaslovRadio">Odaberite nacin dostave</label>
                 <label for="java" class="radio">Standard [5 KM; 6-9 radnih dana]</label>
                 <input type="radio" class="" id="StandardDostava" name="languages" value="java">
                 
                 </div>
                 
                 <div class="radio2">
                 <label for="python" class="radio" >Brza dostava[ 9 KM; 3-5 radnih dana]</label>
                 <input type="radio" class="" id="BrzaDostava" name="languages" value="python">
 
                 </div>
                 
                 <div class="radio3">
                 <label for="javascript" class="radio">1 Dan dostava[20 KM</label>
                 <input type="radio" class="" id="danDostava" name="languages" value="javascript">
                 
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
let rezCijene=0;       
Korpa.forEach((stavka)=> {
    rezCijene+=+stavka.CijenaProizvoda;
});

document.querySelector('.desniSpan4').innerHTML=+FormatCijene(rezCijene);
document.querySelector('.SpanDesnogDiva').innerHTML='Artikal('+ ukupnoArtikala +')';

document.querySelector('.lijeviDiv').innerHTML+=cartSummaryHTML;

let danDostava=document.getElementById('danDostava');
let BrzaDostava=document.getElementById('BrzaDostava');
let StandardDostava=document.getElementById('StandardDostava');
let iznosDostave=0;
danDostava.addEventListener("change",function(){
         if(danDostava.checked)
         {
            iznosDostave=20 ;
         }
         document.querySelector('.desniSpan3').innerHTML=iznosDostave;
         PromjenaDetalja();

})
BrzaDostava.addEventListener("change",function(){
    if(BrzaDostava.checked)
    {
       iznosDostave=9;
    }
    document.querySelector('.desniSpan3').innerHTML=iznosDostave;
PromjenaDetalja();
})
StandardDostava.addEventListener("change",function(){
    if(StandardDostava.checked)
    {
       iznosDostave=5 ;
    }
    document.querySelector('.desniSpan3').innerHTML=iznosDostave;
    PromjenaDetalja();

})
let finalniIznosDostave=Number(document.querySelector('.desniSpan3').innerHTML);
let finalniIznosProizvoda=Number(document.querySelector('.desniSpan4').innerHTML);
document.querySelector('.desniSpan3').innerHTML=iznosDostave;
function PromjenaDetalja()
{
   finalniIznosProizvoda=Number(document.querySelector('.desniSpan4').innerHTML);
   finalniIznosDostave=Number(document.querySelector('.desniSpan3').innerHTML);

    let ukupniRacun=document.querySelector('.desniSpan2');
    ukupniRacun.innerHTML='$'+Number(finalniIznosDostave+finalniIznosProizvoda);
}
