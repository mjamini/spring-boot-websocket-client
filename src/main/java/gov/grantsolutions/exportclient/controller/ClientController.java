/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gov.grantsolutions.exportclient.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author jmohanta
 */
@Controller
public class ClientController {
    
    @RequestMapping("/")
    public String index() {
      return "index";
    }
    @GetMapping("/homepage")
    public String homePage(){
        return "homepage.html";
    }
    @GetMapping("/project")
    public String project(){
        return "projectcloseout.html";
    }
    @GetMapping("/budget")
    public String budget(){
        return "budgetcloseout.html";
    }    
    @GetMapping("/administrative")
    public String administrative(){
        return "administrativecloseout.html";
    }    
}
