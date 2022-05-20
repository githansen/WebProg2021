CtilF=()=>{
    let C = document.getElementById("celcius").value
    let F = (9/5)*C+32
    document.getElementById("fahrenheit").value=F
}
FtilC=()=>{
    let F = document.getElementById("fahrenheit").value
    let C = (5/9)*(F-32)
    document.getElementById("celcius").value=C
}