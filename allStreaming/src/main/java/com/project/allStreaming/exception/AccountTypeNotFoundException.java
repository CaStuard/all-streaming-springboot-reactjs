package com.project.allStreaming.exception;

public class AccountTypeNotFoundException extends RuntimeException{
    public AccountTypeNotFoundException(Long id){
        super("Account Type with id "+id+" not found!");
    }
}
