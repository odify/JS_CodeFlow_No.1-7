// No.6
// In dieser Übung lernen wir, wie man auf die Objekte mit Hilfe von Befehl forEach() zugreift.
// Verwende den Code aus dem Kommentarbereich.
// Greife auf die Eigenschaften des Objekts zu und gib mit forEach() im HTML aus:

// Alle Künstlers 
// Alle Title
// Alle Formate

// Bonus Aufgabe:
// Alle Releases Jahr älter als 1975.

var myMusic1 = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];



myMusic1.forEach(x => {
    console.log(x.kunstler);
})


myMusic1.forEach(x => {
    console.log(x.title);
})


myMusic1.forEach(x => {
    console.log(`${x.kunstler} formats are ${x.formate}`);
})



myMusic1.forEach(x => {

    if (x.release_jahr > 1975) {
        console.log(`${x.title} from ${x.kunstler} released in ${x.release_jahr}.`);
    }


})