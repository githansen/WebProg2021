package com.example.webprog2021.innlogging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;


public class Controller {
@Autowired
private JdbcTemplate db;

private Logger logger =  LoggerFactory.getLogger(Controller.class);
private HttpSession session;


    public List hent(HttpServletResponse response) throws IOException{ //Hent brukere med betingelse om at man er innlogget
        String sql= "Select * from Persontabell";

        if(session.getAttribute("Innlogget")!= null){
            try {
                List<User> liste = db.query(sql, new BeanPropertyRowMapper<>(User.class)); //Hent liste over brukere dersom man er logget inn
                return liste;
            }
            catch(Exception e){
                logger.error("Feil i DB");
                response.sendError(HttpStatus.INTERNAL_SERVER_ERROR.value(), "FEILMELDING");
                return null;
            }
            }
        else return null;
    }


    public boolean Lagreperson(User o){ //Lagre med kryptering
        String sql = "INSERT INTO Persontabell (Fornavn, Etternavn, Telefonnr,Passord) VALUES (?,?,?,?)";
        try {
            db.update(sql, o.getFornavn(), o.getEtternavn(), o.getTelefonnr(),krypterpassord(o.getPassord()));
            return true;
        }
        catch(Exception e){
            logger.error("Feil i lagrekunde" + e);
            return false;
        }
    }
    public boolean lagreutenkryptering(User o){ // Lagre uten kryptering
        String sql = "INSERT INTO Persontabell (Fornavn, Etternavn, Telefonnr,Passord) VALUES (?,?,?,?)";
        try {
            db.update(sql, o.getFornavn(), o.getEtternavn(), o.getTelefonnr(),o.getPassord());
            return true;
        }
        catch(Exception e){
            logger.error("Feil i lagrekunde" + e);
            return false;
        }
    }
    private String krypterpassord(String passord){
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder(11);
        return bcrypt.encode(passord);
    }

    public boolean sjekkPassordUtenKryptering(User o){ //SJekk passord uten kryptering

        Object[] param = new Object[]{o.getFornavn(),o.getPassord()};
        String sql = "SELECT * FROM Persontabell WHERE Fornavn=? and passord=?";
        try{
            int antall = db.queryForObject(sql,param,Integer.class);
            if (antall>0){
                session.setAttribute("Innlogget", o);
                return true;
            }
            return false;
        }
        catch (Exception e){
            logger.error("Feil i sjekkNavnOgPassord : "+e);
            return false;
        }
    }


        //Sjekk passord om passordet er kryptert
    public boolean sjekkpassord(User o, HttpServletResponse response) throws IOException { //Om det skal sendes tilbake
        String sql = "SELECT count(*) FROM Persontabell WHERE Fornavn=?";


      boolean suksess = false;
        try {
            User dbperson = db.queryForObject(sql, BeanPropertyRowMapper.newInstance(User.class), o.getFornavn());
            suksess = decrypt(o.getPassord(), dbperson.getPassord()); //Sjekker passord
        }
        catch(Exception e){
            logger.error("Fant ikke bruker");
            response.sendError(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Fant ikke bruker");
        }

        if(suksess){
            session.setAttribute("Innlogget", o); //Setter session om passord er riktig
            return true;
        }
        else return false; //returnerer false
    }


    public boolean decrypt(String passord, String hashpassord){
        BCryptPasswordEncoder BCrypt = new BCryptPasswordEncoder();
        return BCrypt.matches(passord,hashpassord);
    }

}
