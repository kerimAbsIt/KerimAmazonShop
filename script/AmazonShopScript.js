let Produkti=[
    {
        image:"/Ikone proizvoda lol/freebudsPro3.jpg",
        ime:'Huawei Freebuds Pro 3' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:87
        },
        Cijena: 14990,

    },
    {
        image:"/Ikone proizvoda lol/mate50pro.jpg",
        ime:'Huawei Mate 50 Pro' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:24
        },
        Cijena: 1099000,

    },
    {
        image:'/Ikone proizvoda lol/MatePad11.5.jpg',
        ime:'Huawei Matepad 11' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:45
        },
        Cijena: 78999,

    },
    {
        image:"/Ikone proizvoda lol/sound Joy.jpg",
        ime:'Huawei Sound Joy' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:566
        },
        Cijena: 8990,

    },
    {
        image:"/Ikone proizvoda lol/matebookx.png",
        ime:'Huawei Matebook X' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:98
        },
        Cijena: 134900,

    },
    {
        image:"/Ikone proizvoda lol/p60pro.jpg",
        ime:'Huawei P60 Pro' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:155
        },
        Cijena: 119900,

    },
    {
        image:"/Ikone proizvoda lol/p40pro.jpg",
        ime:'Huawei P40 Pro' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:22
        },
        Cijena: 56999,

    },
    {
        image:"/Ikone proizvoda lol/matebookd13.png",
        ime:'Huawei Matebook D13' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:82
        },
        Cijena: 69900,

    },
    {
        image:"/Ikone proizvoda lol/p50pro.png",
        ime:'Huawei P50 Pro' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:11
        },
        Cijena: 78849,

    },
    {
        image:"/Ikone proizvoda lol/matebookd14.jpg",
        ime:'Huawei Matebook D14' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:23
        },
        Cijena: 134877,

    },
    {
        image:"/Ikone proizvoda lol/soundx (2).jpg",
        ime:'Huawei Sound X' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:80
        },
        Cijena: 17800,

    },
    {
        image:"/Ikone proizvoda lol/mateXS2.jpg",
        ime:'Huawei Mate XS2' ,
        ocjena :{
            SlikaOcjene:'ocjenaArtikla',
            brojOcjene:66
        },
        Cijena: 121900,

    },

]
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
                        <option value="crne">crne</option>
                        <option value="plave">plave</option>
                        <option value="bijele">bijele</option>
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
    })



})