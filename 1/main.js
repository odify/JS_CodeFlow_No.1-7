//No. 1
// In dieser Übung werden wir Objekte kennenlernen.
// Konvertiere die Liste aus dem Kommentar in ein Objekt.
// Speichere das Objekt in der Variable europäischeUnion.
// Gib sie in der Konsole aus.
// Gib in der Konsole die EigenschaftsNamen aus:
// "(BE)"
// "(NL)"
// "(LU)"
// Addiere BeneluxUnion als neues Objekt zur Liste und addiere darin drei passende Objekte.
// Lösche Doppelte Eigenschaften. 
// Gib das EU Objekt in der Konsole aus.

let europäischeUnion = {
    Belgien: "(BE)",
    Griechenland: "(EL)",
    Litauen: "(LT)",
    Portugal: "(PT)",
    Bulgarien: "(BG)",
    Spanien: "(ES)",
    Luxemburg: "(LU)",
    Rumänien: "(RO)",
    Tschechien: "(CZ)",
    Frankreich: "(FR)",
    Ungarn: "(HU)",
    Slowenien: "(SI)",
    Dänemark: "(DK)",
    Kroatien: "(HR)",
    Malta: "(MT)",
    Slowakei: "(SK)",
    Deutschland: "(DE)",
    Italien: "(IT)",
    Niederlände: "(NL)",
    Finnland: "(FI)",
    Estland: "(EE)",
    Zypern: "(CY)",
    Österreich: "(AT)",
    Schweden: "(SE)",
    Irland: "(IE)",
    Lettland: "(LV)",
    Polen: "(PL)",
    VereinigtesKönigreich: "(UK)"
};


console.log(europäischeUnion);

let BeneluxUnion = {
    Belgien: "(BE)",
    Niederlände: "(NL)",
    Luxemburg: "(LU)"
};
console.log(BeneluxUnion);

console.log(europäischeUnion);














// let countries = ["De", "Fr", "Us"];
// // Object = properties + methods
// //Object Literals
// let user = {
//     email: "spider@super.de",
//     userName: "Spiderman",
//     gender: "male",
//     age: 54,
//     isSuperHero: true,
//     films: ["Spider-Man", "Spider-Man 2"],
//     logIn: () => {
//         //console.log(this)
//         console.log(`${user.userName} is log in`)
//     },
//     logOut: function () {
//         console.log(`${this.userName} is log out`)
//     },
//     describe: function () {
//         console.log(`${this.userName} is ${this.age} old.`)
//     },
//     checkHowSuperHeroIam() {
//         if (this.isSuperHero) {
//             console.log(`${this.userName} ist ein SuperHero`)
//         }
//     }
// }

// console.log(user.userName)

// //display value of an Object

// console.log(user.email) //string
// console.log(user.gender) //string

// console.log(user.age) //number
// console.log(user.isSuperHero) //boolean

// // display array value from an Object with forEach method
// user.films.forEach(film => console.log(film))
// //countries.forEach(country => console.log(country))

// // Call methods from object
// user.logIn()
// user.logOut()
// user.describe()
// user.checkHowSuperHeroIam()
// // this in an arrow function refers  to the window object
// console.log(this)
// //this in methods with function refers to the object

// //update value from Object
// user.age = 30
// console.log(user)