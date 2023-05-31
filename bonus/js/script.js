// creo l'array con gli oggetti 
const listaTeam = [
{
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    fotoProfilo: 'wayne-barnett-founder-ceo.jpg'
},
{
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    fotoProfilo: 'angela-caroll-chief-editor.jpg'
},
{
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    fotoProfilo: 'walter-gordon-office-manager.jpg'
},
{
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    fotoProfilo: 'angela-lopez-social-media-manager.jpg'
},
{
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    fotoProfilo: 'scott-estrada-developer.jpg'
},
{
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    fotoProfilo: 'barbara-ramos-graphic-designer.jpg'
},
];

// stampo a console come richiesto dalla milestone 1
//console.log(listaTeam);

//proseguo con la seconda milestone

//recupero il contenitore per le cards
const cards_container = document.getElementById('container');

//creo un ciclo per visualizzare le foto 
for (let i = 0; i < listaTeam.length; i++) {
    //salvo l'array in una variabile
    let team = listaTeam[i];

    //stampo nella console per test
    //console.log(team)

    //creo l'elemento del dom che conterrà le informazioni delle card
    let card = `<div class="card">
        <img src="./img/${team.fotoProfilo}">
        <p>${team.nome}</p>
        <p>${team.ruolo}</p>
    </div>`

    //concateno la card con le info
    cards_container.innerHTML += card; 

};