// No.3
// In dieser Übung lernen wir, wie man auf die Objekte zugreift.

// Verwende den Code aus dem Kommentarbereich.
// Greife auf die Werte dieses Objekts zu:
// "Nala"
// "Droopy"
// Alle Hundenamen
// Erstelle eine Methode, mit der man die Hundenamen ändern kann.

var unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);