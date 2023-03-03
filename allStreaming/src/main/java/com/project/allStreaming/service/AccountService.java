package com.project.allStreaming.service;

import com.project.allStreaming.model.Account;

import java.util.List;
import java.util.Optional;

public interface AccountService {
    List<Account> findAllAccounts();
    Optional<Account> findById(Long id);
    Account saveAccount(Account account);
    Account uptadeAccount(Account account);
    void deleteAccount(Long id);
}
