package com.group42.energy.Report;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {

    private final ReportRepository reportRepository;

    @Autowired
    public ReportService(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    public List<Report> getReports() {
        return reportRepository.findAll();
    }

    public void addNewReport(Report report) {
        reportRepository.save(report);
    }

    public void deleteReport(Integer id) {
        boolean exists = reportRepository.existsById(id);

        if (!exists) {
            throw new IllegalStateException("report with id " + id + " does not exist");
        }

        reportRepository.deleteById(id);
    }

}
