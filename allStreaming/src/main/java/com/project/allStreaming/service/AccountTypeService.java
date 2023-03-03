package com.project.allStreaming.service;

import com.project.allStreaming.model.AccountType;

import java.util.List;
import java.util.Optional;

public interface AccountTypeService {
    List<AccountType> findAllAccTypes();
    Optional<AccountType> findById(Long id);
    AccountType saveAccType(AccountType accType);
    AccountType uptadeAccType(AccountType accType);
    void deleteAccType(Long id);
}
