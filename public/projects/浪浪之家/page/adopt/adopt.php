<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>確認資訊</title>
</head>
<body>
<h1>確認資訊</h1>
<div>
   <p>想領養的浪浪：
      <?php 
         $pet;
         switch($_GET['ani']){
            case "請選擇":
                $pet = "請選擇";
                break;
            case "姊姊":
                $pet = "姊姊";
                break;
            case "醬油":
                $pet = "醬油";
                break;
            case "愛德華":
                $pet = "愛德華";
                break;
            case "大橘":
                $pet = "大橘";
                break;
            case "小吉":
                $pet = "小吉";
                break;
            case "菲菲":
                $pet = "菲菲";
                break;  
         };
         echo " {$pet}"
      ?> 
   </p>
   <p>領養人姓名：<?php echo $_GET['peo']; ?></p>
   <p>性別：
      <?php 
         $gen;
         switch($_GET['gender']){
            case "1":
                  $gen = "男";
                  break;
            case "2":
                  $gen = "女";                        
                  break;
         };
         echo " {$gen}"
      ?>
   </p>
   <p>年齡：<?php echo $_GET['age']; ?></p>
   <p>Email：<?php echo $_GET['mail']; ?></p>
   <p>聯絡電話：<?php echo $_GET['tel']; ?></p>
   <p>工作：<?php echo $_GET['work']; ?></p>
   <p>經濟來源：<?php echo $_GET['moneysrc']; ?></p>
   <p>家庭成員：<?php echo $_GET['family']; ?></p>
   <p>飼養經驗：
      <?php 
         $ex;
         switch($_GET['petex']){
             case "1":
                 $ex = "是";
                 break;
             case "2":
                 $ex = "否";                        
                 break;
         };
         echo " {$ex}"
      ?>
   </p>
   <p>居住地點＆環境：<?php echo $_GET['place']; ?></p>
   <p>陪伴時間：<?php echo $_GET['time']; ?></p>
   <p>領養原因：<?php echo $_GET['reason']; ?></p>
   <p>是否願意包容、保護牠，讓牠不再流浪，一生安全有家？
      <?php 
         $check;
         switch($_GET['endcheck']){
             case "1":
                 $check = "是";
                 break;
             case "2":
                 $check = "否";                        
                 break;
         };
         echo " {$check}"
      ?>
   </p>

</div>
      <input type="button" value="回上一頁" name="back" onclick="history.back()">
      <input type="submit" value="送出" onClick = "window.alert('已送出！');">
</body>
</html>