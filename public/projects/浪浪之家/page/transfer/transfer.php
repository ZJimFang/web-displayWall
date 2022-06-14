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
        <h3>讓渡人資料</h3>
        <p>姓名：<?php echo $_GET['peo']; ?></p>
        <p>生理性別：
            <?php 
                $gen;
                switch($_GET['peogen']){
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
        <p>聯絡電話：<?php echo $_GET['tel']; ?></p>
        <p>Email：<?php echo $_GET['mail']; ?></p>
        <h3>寵物資料</h3>
        <p>預計讓渡時間：<?php echo $_GET['month']; ?></p>
        <p>寵物名字：<?php echo $_GET['petname']; ?></p>
        <p>類別：
            <?php 
                $cd;
                switch($_GET['peogen']){
                    case "1":
                        $cd = "狗";
                        break;
                    case "2":
                        $cd = "貓";                        
                        break;
                };
                echo " {$cd}"
            ?>
        </p>
        <p>性別：
            <?php 
                $mf;
                switch($_GET['peogen']){
                    case "1":
                        $mf = "公";
                        break;
                    case "2":
                        $mf = "母";                        
                        break;
                };
                echo " {$mf}"
            ?>
        </p>
        <p>品種：<?php echo $_GET['var']; ?></p>
        <p>毛色：<?php echo $_GET['hair']; ?></p>
        <p>體型：
            <?php 
                $sl;
                switch($_GET['bdsize']){
                    case "1":
                        $sl = "小";
                        break;
                    case "2":
                        $sl = "中";                        
                        break;
                    case "3":
                        $sl = "大";                        
                        break;
                };
                echo " {$sl}"
            ?>
        </p>
        <p>年齡：<?php echo $_GET['old']; ?></p>
        <p>是否絕育：
            <?php 
                $oper;
                switch($_GET['peogen']){
                    case "1":
                        $oper = "是";
                        break;
                    case "2":
                        $oper = "否";                        
                        break;
                    case "3":
                        $oper = "不清楚";                        
                        break;
                };
                echo " {$oper}"
            ?>
        </p>
        <p>晶片號碼：<?php echo $_GET['idnum']; ?></p>
        <p>特徵：<?php echo $_GET['fea']; ?></p>
        <p>個性：<?php echo $_GET['per']; ?></p>
        <p>病史：<?php echo $_GET['sick']; ?></p>
        <p>不擬飼養原因：<?php echo $_GET['reason']; ?></p>
        <p>補充說明事項：<?php echo $_GET['add']; ?></p>
    </div>
    <input type="button" value="回上一頁" name="back" onclick="history.back()">
    <input type="submit" value="送出" onClick = "window.alert('已送出！');">
</body>
</html>