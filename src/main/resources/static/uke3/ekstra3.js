const oppgaver = []
skrivUtOppgaver =()=>{
    const liste = $('#liste')


    const oppgave1 = {
        sporsmol: "Når er frist for oblig 1?",
        alternativer: ['1. Februar', '6. Februar', '12. Februar'],
        riktigIndex: 2
    }

    const oppgave2 = {
        sporsmol: "Hvor mange obliger er det i dette faget?",
        alternativer: ['3', '5', 'ingen', '2'],
        riktigIndex: 0
    }

    const oppgave3 = {
        sporsmol: "Hva står API for?",
        alternativer: ['App Program Instruction', 'Application Programming Interface', 'Det er ikke en forkortelse'],
        riktigIndex: 1
    }

    oppgaver.push(oppgave1)
    oppgaver.push(oppgave2)
    oppgaver.push(oppgave3)
    let ut = "";
    counter = 0;
    for(let i of oppgaver){
            ut += "<li>"+ i.sporsmol +"</li>"
        for(let f of i.alternativer){
            ut += "<label>" + f + "</label>" + "<input type='radio' name='oppgave" + counter + "'><br>"
        }
        counter ++
    }
    liste.html(ut)
}
sjekksvar = () =>{
    let riktige=0
    let counter = 0;
    for(let i of oppgaver){
       let selector = '[name="oppgave' + counter + '"]'
        const svar=document.querySelectorAll(selector)
        if(svar[i.riktigIndex].checked)riktige ++;
        counter ++
    }
    alert(riktige + " riktige svar")


}