// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

let numeriCasuali = [];

    for (let i = 0; i < 5; i++) {

        numeriCasuali.push(Math.floor(Math.random()*100) + 1);

    }

console.log(numeriCasuali);

setTimeout(trentaTimer, 3000);

let numeriInseriti = [];

function trentaTimer() {

    for (let x = 0; x < 5; x++) {

        numeriInseriti.push(prompt("Inserisci uno dei 5 numeri visti in precedenza"));
        console.log(numeriInseriti);

    }    
    
}

