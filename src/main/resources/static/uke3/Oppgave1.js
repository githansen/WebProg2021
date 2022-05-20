sjekk=()=>{
    let navn = document.getElementById("navn").value
    let alder = document.getElementById("alder").value
    if(isNaN(alder))alert("Alder er ikke et tall")
    else if(alder < 0)alert("Alder må være større enn 0")
    else document.getElementById("utskrift").innerHTML = "Navn: " + navn + "<br> Alder: "+ alder
}