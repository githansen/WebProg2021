package com.example.webprog2021.uke8;

import com.example.webprog2021.uke5.Motorvogn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@RestController @RequestMapping("/uke8")
public class Uke8Controller {
    @Autowired
    private JdbcTemplate db;
    @PostMapping("/registrer")
    public void lagre(Motorvogn m){
        String sql = "INSERT INTO motorvogn (personnr, adresse, navn, bilmerke, biltype, kjennetegn) VALUES (?,?,?,?,?,?)";
        db.update(sql, m.getPersonnr(), m.getAdresse(), m.getNavn(), m.getBilmerke(), m.getBiltype(),m.getKjennetegn());
    }
    @GetMapping("/hent")
    public List retur(){
        String sql = "SELECT * FROM motorvogn";
        List<Motorvogn> liste = db.query(sql, new BeanPropertyRowMapper(com.example.webprog2021.uke8.Motorvogn.class));
        return liste;
    }
    @GetMapping("/sletten")
    public void sletten(int mnr){
        String sql = "DELETE FROM motorvogn WHERE mnr=?";
        db.update(sql, mnr);
    }
    @PostMapping("/slettalle")
    public void slettalle(){
        String sql = "DELETE FROM motorvogn";
        db.update(sql);
    }
    @GetMapping("/hentenbil")
    public com.example.webprog2021.uke8.Motorvogn henten(int mnr){
        String sql = "SELECT * FROM motorvogn WHERE mnr=?";
        return db.queryForObject(sql, new BeanPropertyRowMapper<>(com.example.webprog2021.uke8.Motorvogn.class), mnr);
    }
    @PostMapping("/endreen")
    public void endreen(com.example.webprog2021.uke8.Motorvogn m){
        System.out.println("HEI");
        String sql = "UPDATE motorvogn SET navn=?, adresse=?, kjennetegn=?," +
                "personnr=?, biltype=?, bilmerke=? WHERE mnr=?";
        db.update(sql, m.getNavn(), m.getAdresse(), m.getKjennetegn(), m.getPersonnr(),
                m.getBiltype(), m.getBilmerke(), m.getMnr());
    }
}
