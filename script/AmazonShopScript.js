// import {Kreiraj } from '../placanje/placanje.js';
import {Korpa ,ubacivanjeKorpe, AzurirajKorpu} from '../script/Korpa.js';
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
                <button class="AddToCart" data-product-ime="${Produkt.ime}" data-product-id="${Produkt.id}" data-product-slika=''${Produkt.image
                } data-product-cijena='${Produkt.Cijena}'>Add to cart</button>
              </div>
       </div>
         `
        })
        document.querySelector('.glavniDiv').innerHTML+=htmlDioKoda;

                document.querySelectorAll('.AddToCart').forEach((button)=>{
                    button.addEventListener('click',()=>{
                    let IdProizvoda=button.dataset.productId;
                    let nazivProizvoda=button.dataset.productIme;
                    let SlikaProizvoda=button.dataset.productSlika;
                    let CijenaProizvoda=button.dataset.productCijena;
                    ubacivanjeKorpe(IdProizvoda,nazivProizvoda,SlikaProizvoda,CijenaProizvoda);
                    })})
 
