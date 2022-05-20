
hent = ()=>{
    const url = "/uke4/temp?mnd=" + $("#mnd").val()
    $.get(url, function (data){
        alert(data)
    })
}