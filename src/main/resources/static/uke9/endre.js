endre = ()=>{
   const motorvogn={
     mnr: $("#mnr").val(),
    personnr: $("#personnr").val(),
    navn: $("#navn").val(),
    adresse: $("#adresse").val(),
    kjennetegn: $("#kjennetegn").val(),
    bilmerke: $("#bilmerke").val(),
    biltype: $("#biltype").val(),
   }
   $.post("/uke8/endreen", motorvogn, function (){
       alert("Suksess")
   })
}
$(document).ready(function(){
    let nr = window.location.search.substring(1)
    const url = "/uke8/hentenbil?" + nr
    $.get(url, function(data){
        $("#mnr").val(data.mnr)
        $("#personnr").val(data.personnr)
        $("#navn").val(data.navn)
        $("#adresse").val(data.adresse)
        $("#kjennetegn").val(data.kjennetegn)
        $("#bilmerke").val(data.bilmerke)
        $("#biltype").val(data.biltype)
    });

})