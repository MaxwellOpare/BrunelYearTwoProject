package com.group42.energy.Report;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {

    /*
     * @Query("SELECT s FROM Report s WHERE s.user_id = ?1")
     * Optional<Report> findReportByUserId(Integer id);
     */

}
