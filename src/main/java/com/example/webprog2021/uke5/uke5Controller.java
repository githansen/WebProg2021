package com.example.webprog2021.uke5;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController @RequestMapping("/uke5")
public class uke5Controller {

    private ArrayList<Motorvogn> liste = new ArrayList<>();
    @PostMapping("/registrer")
    public void lagre(Motorvogn m){
        liste.add(m);
    }
    @GetMapping("/hent")
    public ArrayList retur(){
        return liste;
    }
}
