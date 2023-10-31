export let Korpa=[];
export  function AzurirajKorpu(){
    let ukupno=0;
    Korpa.forEach(item =>{
    ukupno+=item.kolicina;
    document.querySelector('.ukupnouKorpi').innerHTML=ukupno;

    });
}
export function ubacivanjeKorpe(AjDiProizvoda,naziv){
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
            kolicina:1
        });
    }
    console.log(Korpa);
AzurirajKorpu();
}