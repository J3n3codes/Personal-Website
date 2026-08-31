/* =========================
   LANGUAGE INTRODUCTION
   ========================= */

const languageMessage = document.getElementById("language-message");

const languageMessages = [

    "Please select your language",

    "Por favor, seleccione su idioma",

    "Veuillez sélectionner votre langue"

];


let currentMessage = 0;


/* Show the first message */

languageMessage.textContent = languageMessages[currentMessage];


/* Change language every 5 seconds */

setInterval(function () {

    currentMessage++;

    if (currentMessage >= languageMessages.length) {
        currentMessage = 0;
    }

    languageMessage.textContent =
        languageMessages[currentMessage];

}, 5000);


/* =========================
   LANGUAGE SELECTION
   ========================= */

function selectLanguage(language) {

    const notice = document.getElementById("learning-notice");


    /* English */

    if (language === "en") {

        notice.style.display = "none";

    }


    /* Spanish */

    else if (language === "es") {

        notice.style.display = "block";

        notice.textContent =
            "I am still learning Spanish and working on my Spanish skills. " +
            "Please forgive me if I have not stated all the information " +
            "on the Spanish page as fluently or clearly as I would like.";

    }


    /* French */

    else if (language === "fr") {

        notice.style.display = "block";

        notice.textContent =
            "Je suis encore en train d'apprendre le français et de travailler " +
            "à améliorer mes compétences. Veuillez me pardonner si je n'ai pas " +
            "présenté toutes les informations sur la page française aussi " +
            "couramment ou clairement que je le souhaiterais.";

    }

}
