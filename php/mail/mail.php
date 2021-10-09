<?php
    include 'phpMailer.php';
    include 'SMTP.php';

$mail = new PHPMailer();
$mail->isSMTP();

//Enable SMTP debugging
//SMTP::DEBUG_OFF = off (for production use)
//SMTP::DEBUG_CLIENT = client messages
//SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_SERVER;

//Set the hostname of the mail server
$mail->Host = 'smtp.naver.com';


$mail->Port = 465;


$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;


$mail->SMTPAuth = true;


$mail->Username = 'tyoung917';

//Password to use for SMTP authentication
$mail->Password = '--';
$mail->Chatset ='UTF-8';

//Set who the message is to be sent from
//Note that with gmail you can only use your account address (same as `Username`)
//or predefined aliases that you have configured within your account.
//Do not use user-submitted addresses in here
$mail->setFrom('tyoung917@naver.com', 'young');

//Set an alternative reply-to address
//This is a good place to put user-submitted addresses
$mail->addReplyTo('tyoung917@naver.com', 'young');

//Set who the message is to be sent to
$mail->addAddress('taeyoung917@gmail.com', 'John Doe');

//Set the subject line
$mail->Subject = '메일 테스트 제목';

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML(file_get_contents('contents.html'), __DIR__);

//Replace the plain text body with one created manually
$mail->AltBody = '여기도 메일 내용입니다.';

//Attach an image file
$mail->addAttachment('https://images.unsplash.com/photo-1591105977151-7b370f7de0f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80');


//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
    //Section 2: IMAP
    //Uncomment these to save your message in the 'Sent Mail' folder.
    #if (save_mail($mail)) {
    #    echo "Message saved!";
    #}
}

?>