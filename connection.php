<?php
  $servername="localhost";
  $username="root";
  $password="";
  $dbname="contact_us";

  $conn= mysqli_connect($servername,$username,$password,$dbname);

  if($conn->connect_error){
         die('Connection Failed :'.$conn->connect_error);
  }
  else
  {
      $stmt=$conn->prepare("insert into contact_us(name, email_1, subject, message_s) values(?,?,?,?)");
      $stmt->bind_param("ssss", $name, $email_1, $subject, $message_s );
      $stmt->execute();
      $stmt->close();
      $conn->close();
  }

  include(index.html);


?>