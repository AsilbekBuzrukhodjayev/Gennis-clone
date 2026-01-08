const my_username = "Asilbek";
const my_parol = "LEGENDA";
function login(event) {

    event.preventDefault();
    const username = document.getElementById("ism").value;
    const password = document.getElementById("parol").value;
    const ismError = document.getElementById("ismError");
    if (my_username === username && my_parol === password) {
        console.log("kirish mumkin")
    } else {
        ismError.textContent = "parol yoki ism xato!!!"
    }

}