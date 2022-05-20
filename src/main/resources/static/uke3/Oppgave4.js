let liste =[]

visRegister = ()=>{
    const person={
        navn: document.getElementById("navn").value,
        adresse: document.getElementById("adresse").value,
        tlf: document.getElementById("tlf").value
    }
    liste.push(person)

    let ut = "<table><tr> <th>Navn</th> <th>Adresse</th> <th>TlfNr</th></tr>"
    let p =0;
    for(let i of liste){
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