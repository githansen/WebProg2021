package com.example.webprog2021.innlogging;

public class User {
    private int kundenr;
    private String fornavn;
    private String etternavn;
    private int telefonnr;
    private String passord;

    public User(String fornavn,String passord, String etternavn, int telefonnr, int kundenr) {
        this.kundenr = kundenr;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.passord = passord;
    }
    public User(){

    }

    public int getKundenr() {
        return kundenr;
    }

    public String getPassord() {
        return passord;
    }

    public void setPassord(String passord) {
        this.passord = passord;
    }

    public void setKundenr(int kundenr) {
        this.kundenr = kundenr;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public int getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        this.telefonnr = telefonnr;
    }
}
