package com.project.allStreaming.controller;

import com.project.allStreaming.exception.AccountTypeNotFoundException;
import com.project.allStreaming.model.AccountType;
import com.project.allStreaming.service.AccountTypeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
public class AccountTypeController {

    private final AccountTypeService accTypeService;

    public AccountTypeController(AccountTypeService accTypeService) {
        this.accTypeService = accTypeService;
    }

    @GetMapping("/accounttypes")
    public List<AccountType> findAllAccTypes(){
        Predicate<AccountType> byState = accType -> !accType.getAccTypeState().equals("Bloqueada");

        return accTypeService.findAllAccTypes().stream().filter(byState).collect(Collectors.toList());
    }

    @GetMapping("/accounttype/{id}")
    public AccountType findAccTypeById(@PathVariable("id") Long id){
        return accTypeService.findById(id).orElseThrow(()->new AccountTypeNotFoundException(id));
    }

    @PostMapping("/accounttype")
    public AccountType saveAccType(@RequestBody AccountType accType){
        return accTypeService.saveAccType(accType);
    }

    @PutMapping("/accounttype/{id}")
    public AccountType updateAccType(@RequestBody AccountType accType, @PathVariable Long id){
        return accTypeService.findById(id)
                .map(acc -> {
                    acc.setAccTypeName(accType.getAccTypeName());
                    acc.setAccTypeState(accType.getAccTypeState());

                    return accTypeService.saveAccType(acc);
                }).orElseThrow(() ->new AccountTypeNotFoundException(id));
    }

    @DeleteMapping("/accounttype/{id}")
    public String deleteAccType(@PathVariable("id") Long id){
        if(accTypeService.findById(id).isEmpty()){
            throw new AccountTypeNotFoundException(id);
        }

        accTypeService.deleteAccType(id);

        return "Account Type with id "+id+" deleted!";
    }
}
