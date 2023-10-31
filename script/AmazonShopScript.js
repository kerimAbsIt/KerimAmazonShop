 import {Produkti} from '../script/ProduktiSkripta.js';

    let htmlDioKoda='';
    Produkti.forEach((Produkt)=>
    {
         htmlDioKoda+=`
         <div class="Artikal">
              <div class="DioSaSlikom">
                  <img src="${Produkt.image}" class="slikaArtika" alt="">
              </div>
              <div class="ImeProizvoda">
                <span > ${Produkt.ime}</span>
              </div>
              <div class="OcjenaArtikla">
                  <img src="${Produkt.ocjena.SlikaOcjene}.png"  class="OcjenaArtiklaSlika">
                  <span class="BrojOcjene">${Produkt.ocjena.brojOcjene}</span>
              </div>
              <div class="CijenaArtikla"> <b>
                $${(Produkt.Cijena/100).toFixed(2)}
              </b> </div>
              <div class="IzborBtn">
                       <select name="Izbor" id="BtnSelect">
                        <option value="Standard">Standard </option>
                       </select>
              </div>
              <div class="DodajKosaru">
                <button class="AddToCart" data-product-ime="${Produkt.ime}">Add to cart</button>
              </div>
       </div>
         `
    })
    document.querySelector('.glavniDiv').innerHTML+=htmlDioKoda;
 let konj=[];
    
document.querySelectorAll('.AddToCart').forEach((button)=>{
    button.addEventListener('click',()=>{
    let NazivProizvoda=button.dataset.productIme;
    let IstiProizvod;

    konj.forEach((proizvod)=>{
        if(NazivProizvoda==proizvod.ime)
        {
            IstiProizvod=proizvod;
        }
    });
        if(IstiProizvod)
        {
            IstiProizvod.quantity++;
        }
        else{
            konj.push({
              ime:NazivProizvoda,
              quantity:1
            });
        }
        console.log(konj);
        let ukupno=0;
        konj.forEach(item =>{
        ukupno+=item.quantity;
        });
        console.log(ukupno);
document.querySelector('.ukupnouKorpi').innerHTML=ukupno;
    })



})
