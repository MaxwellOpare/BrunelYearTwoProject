package com.group42.energy.Report;

import java.text.DecimalFormat;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group42.energy.Email.EmailService;
import com.group42.energy.Email.SendEmailDTO;

@RestController
@RequestMapping(path = "api/v1/report")
public class ReportController {

    private final ReportService reportService;
    private final ReportRepository reportRepository;
    private final EmailService emailService;

    @Autowired
    public ReportController(ReportService reportService, ReportRepository reportRepository, EmailService emailService) {
        this.reportService = reportService;
        this.reportRepository = reportRepository;
        this.emailService = emailService;
    }

    @PostMapping(path = "/send-email")
    public void sendEmail(@RequestBody SendEmailDTO params) {
        emailService.sendEmail(params.recipient, params.title, params.text);
    }

    @GetMapping(path = "/get")
    public List<Report> getReports() {
        return reportService.getReports();
    }

    @PatchMapping(path = "/archive")
    public void archiveReport(@RequestBody String id) {
        Optional<Report> rep = reportRepository.findById(Integer.parseInt(id));

        if (rep.isPresent()) {
            rep.get().setIsArchived(!rep.get().getIsArchived());
            reportRepository.save(rep.get());
        }
    }

    @DeleteMapping(path = "/delete")
    public void deleteReport(@RequestBody String id) {
        Optional<Report> rep = reportRepository.findById(Integer.parseInt(id));
        System.out.println(id);

        if (rep.isPresent()) {
            reportRepository.delete(rep.get());
        }
    }

    @PostMapping(path = "/add")
    public void createReport(@RequestBody Report report) {
        int count = reportService.getReports().size() + 1;
        long epoch = Instant.now().toEpochMilli();

        double wattsCalc = 1 / ((double) report.getWattsPerHour() / (double) report.getNumberOfBulbs()
                / (double) report.getElectricalDevices());
        double hoursCalc = (double) report.getHoursPerDay() / 24;
        double daysCalc = (double) report.getDaysPerWeek() / 7;
        double weeksCalc = (double) report.getWeeksPerYear() / 52;
        double budgetCalc = (double) report.getPersonalBudget() / (double) report.getMoneySpentMonthly();

        double score = (wattsCalc * .3 +
                hoursCalc * .2 +
                daysCalc * .1 +
                weeksCalc * .1 +
                budgetCalc * .3) * 100;

        DecimalFormat number_format = new DecimalFormat("0.00");

        report.setEpochCreated(epoch);
        report.setEfficiencyScore(Double.parseDouble(number_format.format(score)));
        report.setDateCreated("" + java.time.LocalDate.now());
        report.setTitle("Efficiency Report #" + count);
        reportService.addNewReport(report);
    }

    @DeleteMapping(path = "{reportId}")
    public void deleteReport(@PathVariable("reportId") Integer id) {
        reportService.deleteReport(id);
    }

}
