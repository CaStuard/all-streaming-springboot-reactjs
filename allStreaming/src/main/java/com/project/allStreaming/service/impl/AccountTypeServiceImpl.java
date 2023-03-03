package com.project.allStreaming.service.impl;

import com.project.allStreaming.model.AccountType;
import com.project.allStreaming.repo.AccountTypeRepository;
import com.project.allStreaming.service.AccountTypeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountTypeServiceImpl implements AccountTypeService {

    private final AccountTypeRepository accTypeRepository;

    public AccountTypeServiceImpl(AccountTypeRepository accTypeRepository) {
        this.accTypeRepository = accTypeRepository;
    }

    @Override
    public List<AccountType> findAllAccTypes() {
        return accTypeRepository.findAll();
    }

    @Override
    public Optional<AccountType> findById(Long id) {
        return accTypeRepository.findById(id);
    }

    @Override
    public AccountType saveAccType(AccountType accType) {
        return accTypeRepository.save(accType);
    }

    @Override
    public AccountType uptadeAccType(AccountType accType) {
        return accTypeRepository.save(accType);
    }

    @Override
    public void deleteAccType(Long id) {
        accTypeRepository.deleteById(id);
    }
}
