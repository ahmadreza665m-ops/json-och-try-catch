// const person = {
//     namn: "erik",
//     alder:25,
//     stad: "stockholm"
// }

// const jsontext = JSON.stringify(person)
// //console.log(jsontext)

// const personen = JSON.parse(jsontext)
// console.log(personen.namn)

// const string = '{"namn": "erik","alder":25, "stad":"malmo"}'
// const person = JSON.parse(string)
// console.log(person)


// console.log("start")
// try {
//     console.log(okändvariabel)
// } catch (fel) {
//     console.log("fel uppstod")
// }
// console.log("slut")

// try {
//     console.log(hej)
// } catch (error) {
//     console.log("hoppasn det gick fel")
//     console.log(error.name)
// } finally {
//     console.log("klarrrrt")
// }


// const alder = 15
// try {
//     if (alder < 18) {
//         throw new Error ("du måste vara myndig")
//     }
//     console.log("välkommen")
// } catch (error) {
//     console.log(error.message)
// }


// const tautpengar = (saldo, belopp) => {
//     if (belopp  > saldo ) {
//         throw new Error ("du har inte tillräcklig med pengar")
//     }
//     return saldo - belopp
// }

// try {
//     console.log(tautpengar(500,1200))
// } catch (error) {
//     console.log(error.message)
// }

// const parseuserdata = (jsonstring) => {
//     try {
//         return JSON.parse(jsonstring)
//     } catch (error) {
//         console.log(error-message)
//         return null 
//     } finally {
//         console.log("JSON parsing finished")
//     }
// }

// const person = {namn:"ida",roll:"service"}
// try {
//     const text= JSON.parse(person)
//     console.log(text)
  
// } catch (fel) {
//     console.log("obs fel")
// }



