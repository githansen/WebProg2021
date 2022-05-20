
lagre =()=>{
    const motorvogn = {
        personnr: $("#personnr").val(),
        navn: $("#navn").val(),
        adresse: $("#adresse").val(),
        kjennetegn: $("#kjennetegn").val(),
        bilmerke: $("#merke").val(),
        biltype: $("#type").val()
    }
    if(!valider(motorvogn)) return;

    $.post("/uke8/registrer", motorvogn, function (){

    })
    hent()
}
valider =(motorvogn)=>{

    if(motorvogn.navn.length == 0 || motorvogn.personnr.length == 0 || motorvogn.adresse.length == 0 || motorvogn.kjennetegn.length == 0)  {
        alert("Fyll ut alle felter")
        return false
    }
    return true
}
hent = ()=>{
    $.get("/uke8/hent", function (data){
        let ut = "<table class='table table-striped'> <th>Personnr</th><th>Navn</th><th>Adresse</th><th>Kjennetegn</th><th>Bilmerke</th><th>Biltype</th>"
        for(let i of data){
            ut += "<tr><td>" + i.personnr +"</td><td>" + i.navn +"</td><td>" + i.adresse + "</td><td>"
                + i.kjennetegn + "</td><td>" + i.bilmerke + "</td><td>" + i.biltype +"</td><td><button class='btn btn-danger' onclick='sletten(" + i.mnr  + ")'>Slett</button></td></tr>"
        }
        ut += "</table>"
        $("#utskrift").html(ut)
    })
}

finntype =()=>{
    console.log($("#merke").val())
    let ut = "<label for='type'> Biltype</label><br><select id='type' class='form-control'>"
    if($("#merke").val() === "bmw"){
        ut +="<option value='M3'>M3 </option><option value='M5'>M5 </option><option value='M7'>M7 </option>"
    }
    else if($("#merke").val() === "audi"){
        ut +="<option value='A3'>A3 </option><option value='A5'>A5 </option><option value='A7'>A7 </option>"
    }
    else{
        ut +="<option value='V40'>V40 </option><option value='V50'>V50 </option><option value='V70'>V70 </option>"

    }
    ut+="</select>"
    $("#finntype").html(ut)
}

sletten =(mnr)=>{
    const url = "/uke8/sletten?mnr=" + mnr
        $.get(url, function(){hent()})

}
slettalle = ()=>{
    $.post("/uke8/slettalle", function(){hent()})
}