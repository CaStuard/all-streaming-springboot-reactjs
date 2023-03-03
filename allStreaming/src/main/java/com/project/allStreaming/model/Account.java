package com.project.allStreaming.model;

import jakarta.persistence.*;

@Entity
@Table(name = "account")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "acc_id")
    private Long accountId;
    @Column(name = "acc_name")
    private String accountName;
    @Column(name = "acc_type")
    private String accountType;
    @Column(name = "acc_state")
    private String accountState;

    public Account() {
    }

    public Account(Long accountId, String accountName, String accountType, String accountState) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.accountType = accountType;
        this.accountState = accountState;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getAccountState() {
        return accountState;
    }

    public void setAccountState(String accountState) {
        this.accountState = accountState;
    }
}
