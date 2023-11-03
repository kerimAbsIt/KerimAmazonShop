import {Korpa} from '../script/Korpa.js';
import { Produkti } from '../script/ProduktiSkripta.js';
import {FormatCijene} from '../script/Pomocne funkcije/PF.js'
import { IzbrisiArtikal } from '../script/Korpa.js';
let AmazonLogo=document.querySelector('.AmazonLogo');
AmazonLogo.addEventListener('click',function()
{
    window.location.href='../AmazonHtml.html';
});
let KerimLogo=document.querySelector('.KerimLogo');
KerimLogo.addEventListener('click',function()
{
    window.location.href='../Ikone proizvoda lol/SmijesnaSlika.jpeg';
})
let prazanHtml='';
// console.log(Korpa);
// console.log(Produkti);
// Kreiraj();
IzracunajUkupnuCijenu();
IzracunajArtikle();
let cartSummaryHTML='';
let ukupnoArtikala=Korpa.length;
UpdateLijevogDiva(Korpa);
function UpdateLijevogDiva(Korpa)
{
    Korpa.forEach((cartItemss) => {

        let cartItemId = cartItemss.id;
        console.log(cartItemId);
    
            cartSummaryHTML += `
             <div class="ElementDiva kontejner${cartItemss.id}">
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
                     <button class="izbrisiButton" data-product-id=${cartItemss.id}>Izbrisi</button>
                     </div>
                     <div class="RadioDiv">
                     <div class=radio1>
                     <label class="NaslovRadio">Odaberite nacin dostave</label>
                     <label for="java" class="radio">Standard [$5 ; 6-9 radnih dana]</label>
                     <input type="radio" class="" id="StandardDostava" name="languages" value="java">
    
                     </div>
    
                     <div class="radio2">
                     <label for="python" class="radio" >Brza dostava[$9; 3-5 radnih dana]</label>
                     <input type="radio" class="" id="BrzaDostava" name="languages" value="python">
    
                     </div>
    
                     <div class="radio3">
                     <label for="javascript" class="radio">1 Dan dostava[$20 1 dan] </label>
                     <input type="radio" class="" id="danDostava" name="languages" value="javascript">
    
                     </div>
    
    
                     </div>
                     <div class="OdabirDostave">
    
                        </div>
                    </div>
                     </div>
                         `;
    
    });
IzracunajUkupnuCijenu();
}

document.addEventListener('DOMContentLoaded',function()
{
  localStorage.removeItem('Korpa');
  UpdateLijevogDiva();
});
function IzracunajUkupnuCijenu()
{
        let rezCijene=0;
        Korpa.forEach((stavka)=> {
        rezCijene+=+stavka.CijenaProizvoda;
      });
        document.querySelector('.desniSpan4').innerHTML=+FormatCijene(rezCijene);
};

function PromjenaDetalja()
{if(Korpa.length===0)
    {
        document.querySelector('.desniSpan4').innerHTML="0";
      document.querySelector('.desniSpan2').innerHTML="0";
      document.querySelector('.desniSpan3').innerHTML="0";

    }
    else{
        let finalniIznosDostave=Number(document.querySelector('.desniSpan3').innerHTML);
        IzracunajUkupnuCijenu();
        // finalniIznosDostave=Number(document.querySelector('.desniSpan3').innerHTML);
            IzracunajCijenuSaDostavom();         
    }
    // let finalniIznosProizvoda=Number(document.querySelector('.desniSpan4').innerHTML);
    }
function IzracunajCijenuSaDostavom()
{
    let finalniIznosProizvoda=Number(document.querySelector('.desniSpan4').innerHTML);
   let finalniIznosDostave=Number(document.querySelector('.desniSpan3').innerHTML);
    let ukupniRacun=document.querySelector('.desniSpan2');
    ukupniRacun.innerHTML='$'+Number(finalniIznosDostave+finalniIznosProizvoda);

}
 
function IzracunajArtikle()
{
    let ukupnoArtikala=Korpa.length;
    document.querySelector('.SpanDesnogDiva').innerHTML='Artikal('+ ukupnoArtikala +')';
    document.querySelector('.updateNaslov').innerHTML=ukupnoArtikala;
}

document.querySelector('.lijeviDiv').innerHTML+=cartSummaryHTML;

let danDostava=document.getElementById('danDostava');
let BrzaDostava=document.getElementById('BrzaDostava');
let StandardDostava=document.getElementById('StandardDostava');
let iznosDostave=0;
danDostava.addEventListener("change",function(){
    if(Korpa.length===0)
    {
        iznosDostave=0;
        document.querySelector('.desniSpan3').innerHTML=iznosDostave;
    }
else    
    if(danDostava.checked)
         {
            iznosDostave=20 ;
         }
         document.querySelector('.desniSpan3').innerHTML=iznosDostave;
         PromjenaDetalja();

})
BrzaDostava.addEventListener("change",function(){
    if(Korpa.length===0)
    {
        iznosDostave=0;
    }
else
{
    if(BrzaDostava.checked)
    {
       iznosDostave=9;
    }
}
document.querySelector('.desniSpan3').innerHTML=iznosDostave;
PromjenaDetalja();
})
StandardDostava.addEventListener("change",function(){
    if(Korpa.length===0)
    {
        iznosDostave=0;
    }
else
{
    if(StandardDostava.checked)
    {
       iznosDostave=5 ;
    }
}
    document.querySelector('.desniSpan3').innerHTML=iznosDostave;
    PromjenaDetalja();

})
// let finalniIznosDostave=Number(document.querySelector('.desniSpan3').innerHTML);

// let finalniIznosProizvoda=Number(document.querySelector('.desniSpan4').innerHTML);

document.querySelector('.desniSpan3').innerHTML=iznosDostave;

let IzbrisiBtn1=document.querySelectorAll('.izbrisiButton');

IzbrisiBtn1.forEach((artkl)=>
{
    artkl.addEventListener('click',()=>{

//        <div class="ElementDiva" data-product-id=${cartItemss.id}>
let UzetiId=artkl.dataset.productId;
var kontejneri=document.querySelector(`.kontejner${UzetiId}`);
        IzbrisiArtikal(UzetiId);
        kontejneri.style.background="red";
        setTimeout(function() {
            BrisiKontejner(kontejneri);
        }, 2000);
        PromjenaDetalja();
        IzracunajArtikle();
        console.log(kontejneri);
    })})


function BrisiKontejner(kontejner)
{
    kontejner.remove();
}