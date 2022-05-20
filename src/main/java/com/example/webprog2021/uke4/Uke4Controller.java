package com.example.webprog2021.uke4;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.DecimalFormat;
import java.util.ArrayList;

@RestController @RequestMapping("/uke4")
public class Uke4Controller {
    private final Integer[] tempArray = new Integer[]{-3,-2,2,7,12,16,18,17,12,7,3,-2};
    ArrayList<Valuta> valutaRegister = new ArrayList<>();
    Valuta v1 = new Valuta("USD", 0.12);
    Valuta v2 = new Valuta("EUR", 0.09);
    Valuta v3 = new Valuta("DKK", 0.98);

    @GetMapping("/valuta")
    public String valuta(double beløp, String sort){
        sort = sort.toUpperCase();
        valutaRegister.add(v1);
        valutaRegister.add(v2);
        valutaRegister.add(v3);
        for(Valuta i : valutaRegister){
            if(sort.equals(i.getSort())){
                DecimalFormat df = new DecimalFormat("###,###.##");
                double svar = beløp*i.getKurs();
                return df.format(svar);
            }
        }
        return "";
    }
    @GetMapping("/temp")
    public double gjennomsnitt(String mnd){
        mnd = mnd.toLowerCase();
        mnd = mnd.substring(0,3);
            switch(mnd){
                case "jan":
                    return tempArray[0];
                case "feb":
                    return tempArray[1];
                case "mar":
                    return tempArray[2];
                case "apr":
                    return tempArray[3];
                case "mai":
                    return tempArray[4];
                case "jun":
                    return tempArray[5];
                case "jul":
                    return tempArray[6];
                case "aug":
                    return tempArray[7];
                case "sep":
                    return tempArray[8];
                case "okt":
                    return tempArray[9];
                case "nov":
                    return tempArray[10];
                case "des":
                    return tempArray[11];
                default:
                    return -999;
            }

        }
}
