let billettene =[];
function kjopBillett(){
    let filmnavn ;
    try{
        filmnavn = document.getElementById('select').value;
        if (filmnavn ===''){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('selectedFilm').innerHTML='Vennligst velg en film';
    }
    let Antall ;
    try{
        Antall = document.getElementById('Antall').value;
        if ((Antall === null) || (Antall === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('AntallBox').innerHTML='' +'Vennligst skriv antall personer';
    }
    let Fornavn ;
    try{
        Fornavn = document.getElementById('Fornavn').value;
        if ((Fornavn ===null) || (Fornavn === '')){
            throw new error;
        }
        }
    catch (error  ){
        document.getElementById('FornavnBox').innerHTML='Vennligst skriv navnet ditt';
    }
    let Etternavn ;
    try{
        Etternavn = document.getElementById('Etternavn').value;
        if ((Etternavn ===null) || (Etternavn === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('EtternavnBox').innerHTML='Vennligst skriv etternavnet ditt';
    }
    let Telefonnr ;
    try{
        Telefonnr = document.getElementById('Telefonnr').value;
        if ((Telefonnr ===null) || (Telefonnr === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('TelefonnrBox').innerHTML='Vennligst skriv et telefon nummer';
    }
    let Epost ;
    try{
        Epost = document.getElementById('Epost').value;
        if ((Epost ===null) || (Epost === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('EpostBox').innerHTML='Vennligst skriv en e-post adresse';
    }

    let billett = {
        filmnavn:filmnavn,
        Antall:Antall,
        Fornavn:Fornavn,
        Etternavn:Etternavn,
        Telefonnr:Telefonnr,
        Epost:Epost
    };
    if (Antall !== "" && Fornavn !== "" && Etternavn !== "" && Telefonnr !== "" && Epost !== ""){
        billettene.push(billett);
    }
    document.getElementById('select').value = '';
    document.getElementById('Antall').value = '';
    document.getElementById('Fornavn').value = '';
    document.getElementById('Etternavn').value = '';
    document.getElementById('Telefonnr').value = '';
    document.getElementById('Epost').value = '';
    visBilettene();
}
function visBilettene() {
    let ut= "<table border='2'>";
    ut += "<tr>";
    ut += "<th>Film</th><th>Antall Person</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>E-post</th>";
ut += "</tr>";
for (let b of billettene){
    ut += "<tr><td>"+ b.filmnavn +"</td><td>"+b.Antall+"</td><td>"+b.Fornavn+"</td><td>"+b.Etternavn+"</td><td>"+b.Telefonnr+"</td><td>"+b.Epost+"</td></tr>"
}
ut += "</table>"
    document.getElementById('billetter').innerHTML = ut;
}
function slettBillettene() {
billettene.splice(0,billettene.length);
visBilettene();
document.getElementById('selectedFilm').innerHTML ='';
    document.getElementById('AntallBox').innerHTML ='';
    document.getElementById('FornavnBox').innerHTML ='';
    document.getElementById('EtternavnBox').innerHTML ='';
    document.getElementById('TelefonnrBox').innerHTML ='';
    document.getElementById('EpostBox').innerHTML ='';


}