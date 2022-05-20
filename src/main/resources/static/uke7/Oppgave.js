
lagre =()=>{
    const motorvogn = {
        personnr: $("#personnr").val(),
        navn: $("#navn").val(),
        adresse: $("#adresse").val(),
        kjennetegn: $("#kjennetegn").val(),
        bilmerke: $("#merke").val(),
        biltype: $("#type").val()
    }
    $.post("/uke5/registrer", motorvogn, function (){

    })
    hent()
}
hent = ()=>{
    $.get("/uke5/hent", function (data){
        let ut = "<table class='table table-striped'> <th>Personnr</th><th>Navn</th><th>Adresse</th><th>Kjennetegn</th><th>Bilmerke</th><th>Biltype</th>"
        for(let i of data){
            ut += "<tr><td>" + i.personnr +"</td><td>" + i.navn +"</td><td>" + i.adresse + "</td><td>" + i.kjennetegn + "</td><td>" + i.bilmerke + "</td><td>" + i.biltype +"</td></tr>"
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