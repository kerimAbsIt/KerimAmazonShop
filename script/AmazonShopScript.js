let Produkti=[
    {
        image:"Ikone proizvoda lol/freebudsPro3",
        ime:'Huawei Freebuds Pro 3' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:87
        },
        Cijena: 14990,

    } ]
    let htmlDioKoda='';
    Produkti.forEach((Produkt)=>
    {
         htmlDioKoda+=`
         <div class="Artikal">
              <div class="DioSaSlikom">
                  <img src="${Produkt.image}.jpg" class="slikaArtika" alt="">
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
                        <option value="crne">crne</option>
                        <option value="plave">plave</option>
                        <option value="bijele">bijele</option>
                       </select>
              </div>
              <div class="DodajKosaru">
                <button class="AddToCart">Add to cart</button>
              </div>
       </div>
         `
    })
    document.querySelector('.glavniDiv').innerHTML+=htmlDioKoda;
