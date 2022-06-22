beregn=()=>{
    let beløp = Number($("#beløp").val())
    const sort= $("#sort").val()
    const url = "/uke4/valuta?beløp=" +beløp + "&sort=" + sort
    $.get(url, function (data){
        alert(beløp + " " + sort + " er " +  data + " kr")
    })
}