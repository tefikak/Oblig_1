let billettene =[];
function kjopBillett(){

    let filmnavn = document.getElementById('select').value;
        if (filmnavn ==='' ){
            document.getElementById('selectedFilm').innerText='Vennligst velg en film';
    }
    let Antall = document.getElementById('Antall').value;
        if (Antall === ''){
            document.getElementById('AntallBox').innerText='' +'Vennligst skriv antall personer';
    }
    let Fornavn = document.getElementById('Fornavn').value;
        if (Fornavn === ''){
            document.getElementById('FornavnBox').innerText='Vennligst skriv navnet ditt';
    }

    let Etternavn = document.getElementById('Etternavn').value;

        if (Etternavn === ''){
            document.getElementById('EtternavnBox').innerText='Vennligst skriv etternavnet ditt';
    }
    let Telefonnr = document.getElementById('Telefonnr').value;
        if (Telefonnr === ''){
            document.getElementById('TelefonnrBox').innerText='Vennligst skriv et telefon nummer';
    } else if (!telnr(Telefonnr)){
            document.getElementById('TelefonnrBox').innerText='Vennligst skriv en gyldig telefonnummer'
        }

    let Epost = document.getElementById('Epost').value;
        if (Epost === ''){
            document.getElementById('EpostBox').innerText='Vennligst skriv en e-post adresse';
    } else if (!Email(Epost)){
            document.getElementById('EpostBox').innerText='Vennligst skriv en gyldig e-post adresse'
        }

    function Email(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function telnr(tel) {
        const emailRegex = /^[0-9]{8}$/;
        return emailRegex.test(tel);
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
    let ut= "<table border='5'>";
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