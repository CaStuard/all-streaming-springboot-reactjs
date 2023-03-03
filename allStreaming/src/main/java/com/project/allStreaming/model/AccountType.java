package com.project.allStreaming.model;

import jakarta.persistence.*;

@Entity
@Table(name = "account_type")
public class AccountType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "acctype_id")
    private Long accTypeId;
    @Column(name = "acctype_name")
    private String accTypeName;
    @Column(name = "acctype_state")
    private String accTypeState;

    public AccountType() {
    }

    public AccountType(Long accTypeId, String accTypeName, String accTypeState) {
        this.accTypeId = accTypeId;
        this.accTypeName = accTypeName;
        this.accTypeState = accTypeState;
    }

    public Long getAccTypeId() {
        return accTypeId;
    }

    public void setAccTypeId(Long accTypeId) {
        this.accTypeId = accTypeId;
    }

    public String getAccTypeName() {
        return accTypeName;
    }

    public void setAccTypeName(String accTypeName) {
        this.accTypeName = accTypeName;
    }

    public String getAccTypeState() {
        return accTypeState;
    }

    public void setAccTypeState(String accTypeState) {
        this.accTypeState = accTypeState;
    }
}
