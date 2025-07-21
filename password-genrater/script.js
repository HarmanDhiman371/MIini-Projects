function genPassword() {
    const length = document.getElementById("password-length").value;
    const incuppercase = document.getElementById("upper").checked;
    const inclowercase = document.getElementById("lower").checked;
    const incnumber = document.getElementById("num").checked;
    const inspecialcase = document.getElementById("special").checked;

    const lowerchars = "abcdefghijklmnopqrstuvwxyz";
    const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = '';
    if (incuppercase) characterPool += upperchars;
    if (inclowercase) characterPool += lowerchars;
    if (incnumber) characterPool += numChars;
    if (inspecialcase) characterPool += specialChars;

    if (characterPool === '') {
        alert("Please select at least one character type.");
        return;
    }

    let password = '';
    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById("password").textContent = password;
    // localStorage.setItem("savedPassword", password); 
}

// window.onload = function () {
//     const saved = localStorage.getItem("savedPassword");
//     if (saved) {
//         document.getElementById("password").textContent = saved;
//     }
// }
