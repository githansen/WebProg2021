

let liste = []
let counter = 0
leggtil=()=>{
counter ++
    let task = document.getElementById("leggtilmål").value
    let ut = "<li id='rad" + counter + "' style='list-style: none'>" + task + "</li><input type='checkbox' id='mål" + counter + "' onchange='sjekkstatus()'> </li>"
    document.getElementById("utskrift").insertAdjacentHTML('beforeend', ut)
    sjekkstatus()

}
sjekkstatus =()=>{
    for(let i =1; i <= counter; i++){
        let id = "mål"+i
        let id2 = "rad"+i
        if(document.getElementById(id).checked){
           document.getElementById("utskrift2").appendChild(document.getElementById(id2))
          document.getElementById("utskrift2").appendChild(document.getElementById(id))
            document.getElementById(id2).style.textDecoration="underline"

        }
            else{
                document.getElementById("utskrift").appendChild(document.getElementById(id2))
                document.getElementById("utskrift").appendChild(document.getElementById(id))
                document.getElementById(id2).style.textDecoration="none"
            }

    }
}