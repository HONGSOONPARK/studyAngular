package com.study.stdngback.main;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface MainRepository extends Repository<Main, Integer> {

    void delete(Main main);

    List<Main> findAll();

    Main findById(int no);

    Main save(Main main);
}
