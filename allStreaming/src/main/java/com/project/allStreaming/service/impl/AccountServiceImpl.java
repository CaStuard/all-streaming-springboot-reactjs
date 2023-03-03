package com.project.allStreaming.service.impl;

import com.project.allStreaming.model.Account;
import com.project.allStreaming.repo.AccountRepository;
import com.project.allStreaming.service.AccountService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accRepository;

    public AccountServiceImpl(AccountRepository accRepository) {
        this.accRepository = accRepository;
    }

    @Override
    public List<Account> findAllAccounts() {
        return accRepository.findAll();
    }

    @Override
    public Optional<Account> findById(Long id) {
        return accRepository.findById(id);
    }

    @Override
    public Account saveAccount(Account account) {
        return accRepository.save(account);
    }

    @Override
    public Account uptadeAccount(Account account) {
        return accRepository.save(account);
    }

    @Override
    public void deleteAccount(Long id) {
        accRepository.deleteById(id);
    }
}
