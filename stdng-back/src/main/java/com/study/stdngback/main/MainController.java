package com.study.stdngback.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/"})
public class MainController {

//    @Autowired
//    private NavigationService navigationService;

//    @GetMapping
//    public ModelAndView initList() {
//
//        ModelAndView mv = new ModelAndView();
//        List<Experience> about = aboutService.findAll();
//        List<Navigation> navigation = navigationService.findAll();
//
//        mv.addObject("about",about);
//        mv.addObject("navigation",navigation);
//        return mv ;
//    }

    @GetMapping(path = {"/test"})
    public String testyo() {
        return "서버떳다떳다비행기";
    }
}
