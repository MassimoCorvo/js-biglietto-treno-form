const myForm = document.querySelector("form");
console.log(myForm);

const formKm = document.getElementById("formKm");
const formAge = document.getElementById("formAge");

myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const km = Number(formKm.value);
    const age = Number(formAge.value);

    console.log("Km", km);
    console.log("Età", age);

    if (isNaN(km) || isNaN(age) || km <= 0 || age > 120 || age <= 0) {
        if (isNaN(km) || km <= 0) {
            alert("Numero chilometri non valido");
        }

        if (isNaN(age) || age > 120 || age <= 0) {
            alert("Età non valida");
        }
    }

    else {

        let discount;
        const pricePerKm = 0.21;

        if (age < 18) {
            discount = 0.2;
        }

        else if (age >= 65) {
            discount = 0.4;
        }

        else {
            discount = 0;
        }

        const price = km * pricePerKm * (1 - discount);
        document.getElementById("price").innerHTML = "Il prezzo del biglietto è: " + price.toFixed(2) + "€";


    }

    formAge.value = 0;
    formKm.value = 0;


})