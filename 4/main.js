// No.4
// In dieser Übung lernen wir wie man auf die Objekt-Inhalte zugreift.
// Verwende den Code aus dem Kommentar.
// Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
// Geheimnisse
// Cola
// Hefter
// Erstelle eine Methode mit der man die Werte ändern kann.
// Erstelle eine Methode die alle Eigenschaften als ein Array zurück gibt.

var unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "eine Datei",
            Ordner2: "Geheimnisse"
        },
        "Untere schublade": "Cola"
    }
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere schublade"]);
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager);


