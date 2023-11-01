export let Korpa=JSON.parse(localStorage.getItem('Korpa'));
// export let Korpa=[];
export  function AzurirajKorpu(){
    let ukupno=0;
    Korpa.forEach(item =>{
    ukupno+=item.kolicina;
    document.querySelector('.ukupnouKorpi').innerHTML=ukupno;

    });
}
export function ubacivanjeKorpe(AjDiProizvoda,naziv,SlikaProizvoda,CijenaProizvoda){
    let IstiProizvod;
Korpa.forEach((proizvod)=>{
    if(AjDiProizvoda===proizvod.id)
    {
        IstiProizvod=proizvod;
    }
});
    if(IstiProizvod)
    {
        IstiProizvod.kolicina++;
    }
    else{
        Korpa.push({
            id:AjDiProizvoda,
            ime:naziv,
            kolicina:1,
            slika:SlikaProizvoda,
            CijenaProizvoda:CijenaProizvoda
        });
    }
    console.log(Korpa);
AzurirajKorpu();
SacuvajPodatkeKorpe();
}
function SacuvajPodatkeKorpe()
{
    localStorage.setItem('Korpa',JSON.stringify(Korpa));
}