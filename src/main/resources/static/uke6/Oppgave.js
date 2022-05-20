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