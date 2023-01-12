document.querySelector("#bouton").addEventListener("click", () => {
    const taille = document.getElementById("taille").value
    const poids = document.getElementById("poids").value
    const result = document.querySelector("#result")
   

    if(!isNaN(parseInt(taille)) && taille >100 && taille < 250)
    {
        if(!isNaN(parseInt(poids)) && poids < 400 && poids > 20)
        {
            imc = (poids*10000)/(taille*taille);
            imc = Math.round(imc);
            console.log(imc) 
            switch (true) {
                case (imc > 0 &&  imc < 18 ): result.innerHTML = "Votre imc est de "+imc+" vous êtes en insuffisance pondérale." 
                result.style.color = "#000"
                break;
                case (imc>=18 && imc < 25): result.innerHTML = "Votre imc est de "+imc+" vous une imc normal."
                result.style.color = "#14ff3d"
                break;
                case (imc>=25 && imc < 30) : result.innerHTML = "Votre imc est de "+imc+" vous êtes en surpoids."
                result.style.color = "#e62150"
                break;
                case(imc>=30 && imc < 35) : result.innerHTML = "Votre imc est de "+imc+" vous êtes en obésité modérée."
                result.style.color = "#69b0dc"
                break;
                case(imc>=35 && imc < 40) : result.innerHTML = "Votre imc est de "+imc+" vous êtes en obésité sévère."
                result.style.color = "#f5c4dd"
                break;
                case(imc >= 40) : result.innerHTML = "Votre imc est de "+imc+" vous êtes en obésité massive, la c'est bouillant."
                result.style.color = "#f17a32"
                break;
              }
        }
        else
        {
            alert("Erreur, entrez uniquement des valeurs numérique")
        }
    }
    else
    {
        alert("Erreur, entrez uniquement des valeurs numérique")
    }
    
    
})