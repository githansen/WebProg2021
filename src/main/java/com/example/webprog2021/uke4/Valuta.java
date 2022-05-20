package com.example.webprog2021.uke4;

public class Valuta {
    private String sort;
   private double kurs;

    public Valuta(String sort, double kurs) {
        this.sort = sort;
        this.kurs = kurs;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public double getKurs() {
        return kurs;
    }

    public void setKurs(int kurs) {
        this.kurs = kurs;
    }
}
