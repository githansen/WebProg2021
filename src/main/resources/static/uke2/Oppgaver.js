
const person1 = {
    navn: "Line Jensen",
    adresse: "Askerveien 82",
    tlf: "12334455"
}
const person2 = {
    navn: "Ole Hansen",
    adresse: "Osloveien 82",
    tlf: "99887766"
}
let personliste = [person1, person2]
personliste.sort((a,b) =>{
    return b.tlf - a.tlf
})

visPersonRegister = () =>{
    let ut = "<table><tr> <th>Navn</th> <th>Adresse</th> <th>TlfNr</th></tr>"
    let p =0;
    for(let i of personliste){
        if(p % 2 === 0) {
            ut += "<tr><td>" + i.navn + "</td><td>" + i.adresse + "</td><td>" + i.tlf + "</td></tr>"
        }
        else{
            ut += "<tr> <td><strong>" + i.navn + "</strong></td><td><strong>" + i.adresse + "</strong></td><td><strong>" + i.tlf + "</strong></td></tr>"
        }
            p++;
    }
    ut += "</table>"
    document.getElementById("personRegister").innerHTML = ut;
}