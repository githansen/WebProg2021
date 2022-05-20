package com.example.webprog2021.uke8;

public class Motorvogn {
    private String personnr, navn, adresse, kjennetegn, bilmerke, biltype;
    private int mnr;

    public Motorvogn(String personnr, String navn, String adresse, String kjennetegn, String bilmerke, String biltype, int bilnr) {
        this.personnr = personnr;
        this.navn = navn;
        this.adresse = adresse;
        this.kjennetegn = kjennetegn;
        this.bilmerke = bilmerke;
        this.biltype = biltype;
        this.mnr = bilnr;
    }

    public Motorvogn(){}
    public String getPersonnr() {
        return personnr;
    }

    public void setPersonnr(String personnr) {
        this.personnr = personnr;
    }

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getKjennetegn() {
        return kjennetegn;
    }

    public void setKjennetegn(String kjennetegn) {
        this.kjennetegn = kjennetegn;
    }

    public String getBilmerke() {
        return bilmerke;
    }

    public void setBilmerke(String bilmerke) {
        this.bilmerke = bilmerke;
    }

    public String getBiltype() {
        return biltype;
    }

    public void setBiltype(String biltype) {
        this.biltype = biltype;
    }

    public int getMnr() {
        return mnr;
    }

    public void setMnr(int bilnr) {
        this.mnr = bilnr;
    }
}
