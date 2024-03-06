package com.group42.energy.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String recipient, String title, String text) {
        MimeMessage message = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom("ecobilling.project@gmail.com");
            helper.setTo(recipient);
            helper.setSubject(title);
            helper.setText(text, true);
            mailSender.send(message);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send email", e);
        }
    }

    /*
     * public void sendEmail(String recipient, String title, String text) {
     * SimpleMailMessage email = new SimpleMailMessage();
     * email.setFrom("ecobilling.project@gmail.com");
     * email.setTo(recipient);
     * email.setText(text);
     * email.setSubject(title);
     * 
     * mailSender.send(email);
     * }
     */

}
