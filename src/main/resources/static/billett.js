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
        document.getElementById('selectedFilm').innerText='Vennligst velg en film';
    }
    let Antall ;
    try{
        Antall = document.getElementById('Antall').value;
        if (Antall === ''){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('AntallBox').innerText='' +'Vennligst skriv antall personer';
    }
    let Fornavn ;
    try{
        Fornavn = document.getElementById('Fornavn').value;
        if (Fornavn === ''){
            throw new error;
        }
        }
    catch (error  ){
        document.getElementById('FornavnBox').innerText='Vennligst skriv navnet ditt';
    }
    let Etternavn ;
    try{
        Etternavn = document.getElementById('Etternavn').value;
        if (Etternavn === ''){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('EtternavnBox').innerText='Vennligst skriv etternavnet ditt';
    }
    let Telefonnr ;
    try{
        Telefonnr = document.getElementById('Telefonnr').value;
        if (Telefonnr === ''){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('TelefonnrBox').innerText='Vennligst skriv et telefon nummer';
    }
    let Epost ;
    try{
        Epost = document.getElementById('Epost').value;
        if (Epost === ''){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('EpostBox').innerText='Vennligst skriv en e-post adresse';
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
document.getElementById('selectedFilm').innerText ='';
    document.getElementById('AntallBox').innerText ='';
    document.getElementById('FornavnBox').innerText ='';
    document.getElementById('EtternavnBox').innerText ='';
    document.getElementById('TelefonnrBox').innerText ='';
    document.getElementById('EpostBox').innerText ='';


}