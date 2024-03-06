package com.group42.energy.Report;

import com.group42.energy.User.User;
import jakarta.persistence.*;

@Entity
@Table
public class Report {

    @Id
    @SequenceGenerator(name = "report_sequence", sequenceName = "report_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "report_sequence")
    private int reportId;
    private Double efficiencyScore;
    private String reportTitle;
    private String dateCreated;
    private Integer wattsPerHour;
    private Integer hoursPerDay;
    private Integer daysPerWeek;
    private Integer weeksPerYear;
    private Integer numberOfBulbs;
    private Integer moneySpentMonthly;
    private Integer personalBudget;
    private Integer electricalDevices;
    private Boolean isArchived = false;
    private long epochCreated;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Report() {

    }

    public Report(Double eS, String title, String date, Integer wPH, Integer hPD, Integer dPW, Integer wPY,
            Integer nOB, Integer eD, Integer mSM, Integer pB, Boolean avd, long eC) {
        this.reportTitle = title;
        this.efficiencyScore = eS;
        this.dateCreated = date;
        this.wattsPerHour = wPH;
        this.hoursPerDay = hPD;
        this.daysPerWeek = dPW;
        this.weeksPerYear = wPY;
        this.numberOfBulbs = nOB;
        this.moneySpentMonthly = mSM;
        this.personalBudget = pB;
        this.isArchived = avd;
        this.epochCreated = eC;
        this.electricalDevices = eD;
    }

    public void setEpochCreated(long num) {
        this.epochCreated = num;
    }

    public void setElectricalDevices(int eD) {
        this.electricalDevices = eD;
    }

    public int getElectricalDevices() {
        return this.electricalDevices;
    }

    public long getEpochCreated() {
        return this.epochCreated;
    }

    public Boolean getIsArchived() {
        return this.isArchived;
    }

    public void setIsArchived(Boolean state) {
        this.isArchived = state;
    }

    public Integer getId() {
        return this.reportId;
    }

    public Double getEfficiencyScore() {
        return this.efficiencyScore;
    }

    public String getTitle() {
        return this.reportTitle;
    }

    public String getDateCreated() {
        return this.dateCreated;
    }

    public Integer getWattsPerHour() {
        return this.wattsPerHour;
    }

    public Integer getHoursPerDay() {
        return this.hoursPerDay;
    }

    public Integer getDaysPerWeek() {
        return this.daysPerWeek;
    }

    public Integer getWeeksPerYear() {
        return this.weeksPerYear;
    }

    public Integer getNumberOfBulbs() {
        return this.numberOfBulbs;
    }

    public Integer getMoneySpentMonthly() {
        return this.moneySpentMonthly;
    }

    public Integer getPersonalBudget() {
        return this.personalBudget;
    }

    public void setEfficiencyScore(Double score) {
        this.efficiencyScore = score;
    }

    public void setTitle(String title) {
        this.reportTitle = title;
    }

    public void setDateCreated(String date) {
        this.dateCreated = date;
    }

    public void setWattsPerHour(Integer watts) {
        this.wattsPerHour = watts;
    }

    public void setHoursPerDay(Integer hours) {
        this.hoursPerDay = hours;
    }

    public void setDaysPerWeek(Integer days) {
        this.daysPerWeek = days;
    }

    public void setWeeksPerYear(Integer weeks) {
        this.weeksPerYear = weeks;
    }

    public void setNumberOfBulbs(Integer bulbs) {
        this.numberOfBulbs = bulbs;
    }

    public void setMoneySpentMonthly(Integer money) {
        this.moneySpentMonthly = money;
    }

    public void setPersonalBudget(Integer budget) {
        this.personalBudget = budget;
    }

}
