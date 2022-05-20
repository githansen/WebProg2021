multiplikasjon = () =>{
    let tall1 = document.getElementById("tall1").value
    let tall2 = document.getElementById("tall2").value
    const svar = tall1*tall2
        document.getElementById("utskrift").innerHTML ="Svar: " +svar
}
subtraksjon =()=>{
    let tall1 = document.getElementById("tall1").value
    let tall2 = document.getElementById("tall2").value
    const svar = tall1 - tall2
        document.getElementById("utskrift").innerHTML = "Svar: " +svar
}
addisjon =()=>{
    let tall1 =  document.getElementById("tall1").value
    let tall2 =  document.getElementById("tall2").value
    tall1 = Number(tall1)
    tall2 = Number(tall2)
    const svar = tall1 + tall2
        document.getElementById("utskrift").innerHTML = "Svar: " +svar
}
divisjon =()=>{
    let tall1 = document.getElementById("tall1").value
    let tall2 = document.getElementById("tall2").value
    const svar = tall1/tall2
    document.getElementById("utskrift").innerHTML = "Svar: " +svar
}