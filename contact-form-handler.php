<?php

    $name = $_Post['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];



    $email_form = 'avalozp@gmail.com';

    $email_subject = 'New Form Submission';

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";
    
    $to = 'avalozp@gmail.com';

    $headers = "From: $email_form \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";
    
    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>