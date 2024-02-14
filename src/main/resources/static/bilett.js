let bilettene =[];
function kjoppBilett(){
    let filmnavn ;
    try{
        filmnavn = document.getElementById('select').value;
        if (filmnavn ===''){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('selectedFilm').innerHTML='Velg en film';
    }
    let Antall ;
    try{
        Antall = document.getElementById('Antall').value;
        if ((Antall === null) || (Antall === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('box1').innerHTML='' +
            'Skriv antallet biletter';
    }
    let Fornavn ;
    try{
        Fornavn = document.getElementById('Fornavn').value;
        if ((Fornavn ===null) || (Fornavn === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('box2').innerHTML='Skriv Et navn';
    }
    let Etternavn ;
    try{
        Etternavn = document.getElementById('Etternavn').value;
        if ((Etternavn ===null) || (Etternavn === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('box3').innerHTML='Skriv et etternavn';
    }
    let Telefonnr ;
    try{
        Telefonnr = document.getElementById('Telefonnr').value;
        if ((Telefonnr ===null) || (Telefonnr === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('box4').innerHTML='Skriv et telefonnr';
    }
    let Epost ;
    try{
        Epost = document.getElementById('Epost').value;
        if ((Epost ===null) || (Epost === '')){
            throw new error;
        }
    }
    catch (error){
        document.getElementById('box5').innerHTML='Skriv en epost adresse';
    }

    let bilett = {
        filmnavn:filmnavn,
        Antall:Antall,
        Fornavn:Fornavn,
        Etternavn:Etternavn,
        Telefonnr:Telefonnr,
        Epost:Epost
    };
    if (Antall !== "" && Fornavn !== "" && Etternavn !== "" && Telefonnr !== "" && Epost !== ""){
        bilettene.push(bilett);
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
    let ut= "<table border = '1'>";
    ut += "<tr>";
    ut += "<th>Film<th/><th>Antall<th/><th>Foranavn<th/><th>Etternavn<th/><th>Telefonnr<th/><th>Epost<th/>";
ut += "</tr>";
for (let b of bilettene){
    ut += "<tr><td>"+ b.filmnavn + "<tr><td>"+b.Antall+"<tr><td>"+b.Fornavn+"<tr><td>"+b.Etternavn+"<tr><td>"+b.Telefonnr+"<tr><td>"+b.Epost+"<tr><td>"
}
ut += "<table>"
    document.getElementById('biletter').innerHTML = ut;
}
function slettBilettene() {
bilettene.splice(0,bilettene.length);
visBilettene();
document.getElementById('selectedFilm').innerHTML ='';
    document.getElementById('box1').innerHTML ='';
    document.getElementById('box2').innerHTML ='';
    document.getElementById('box3').innerHTML ='';
    document.getElementById('box4').innerHTML ='';
    document.getElementById('box5').innerHTML ='';


}