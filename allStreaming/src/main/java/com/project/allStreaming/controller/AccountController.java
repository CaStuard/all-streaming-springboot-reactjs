package com.project.allStreaming.controller;

import com.project.allStreaming.exception.AccountNotFoundException;
import com.project.allStreaming.model.Account;
import com.project.allStreaming.service.AccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin("http://localhost:3000")
public class AccountController {

    private final AccountService accService;

    public AccountController(AccountService accService) {
        this.accService = accService;
    }

    @GetMapping("/accounts")
    public List<Account> findAllAccounts(){
        return accService.findAllAccounts();
    }

    @GetMapping("/account/{id}")
    public Account findAccountById(@PathVariable("id") Long id){
        return accService.findById(id).orElseThrow(()->new AccountNotFoundException(id));
    }

    @PostMapping("/account")
    public Account saveAccount(@RequestBody Account account){
        return accService.saveAccount(account);
    }

    @PutMapping("/account/{id}")
    public Account updateAccount(@RequestBody Account account, @PathVariable Long id){
        return accService.findById(id)
                .map(acc -> {
                    acc.setAccountName(account.getAccountName());
                    acc.setAccountType(account.getAccountType());
                    acc.setAccountState(account.getAccountState());

                    return accService.saveAccount(acc);
                }).orElseThrow(() ->new AccountNotFoundException(id));
    }

    @DeleteMapping("/account/{id}")
    public String deleteAccount(@PathVariable("id") Long id){
        if(accService.findById(id).isEmpty()){
            throw new AccountNotFoundException(id);
        }

        accService.deleteAccount(id);

        return "Account with id "+id+" deleted!";
    }
}
