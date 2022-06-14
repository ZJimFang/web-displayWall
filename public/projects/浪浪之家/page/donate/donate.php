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
        <table>
            <tr>
                <td>總計：</td>
                <td>$
                <?php   
                    echo ($_GET['sprice1']+$_GET['sprice2']+$_GET['sprice3']+$_GET['sprice4']+$_GET['sprice5']+$_GET['sprice6']);   
                ?>                   
                元</td>
            </tr>
            <tr>
                <td>1. 狗飼料：</td>
                <td><?php echo ($_GET['sprice1']/500); ?>件
                $<?php echo $_GET['sprice1']; ?>元</td>
            </tr>
            <tr>
                <td>2. 貓飼料：</td>
                <td><?php echo ($_GET['sprice2']/600); ?>件
                $<?php echo $_GET['sprice2']; ?>元</td>

            </tr>
            <tr>
                <td>3. 狗食罐頭：</td>
                <td><?php echo ($_GET['sprice3']/40); ?>件
                $<?php echo $_GET['sprice3']; ?>元</td>
            </tr>
            <tr>
                <td>4. 貓食罐頭：</td>
                <td><?php echo ($_GET['sprice4']/35); ?>件
                $<?php echo $_GET['sprice4']; ?>元</td>
            </tr>
            <tr>
                <td>5. 狗食罐頭：</td>
                <td><?php echo ($_GET['sprice5']/950); ?>件
                $<?php echo $_GET['sprice5']; ?>元</td>
            </tr>
            <tr>
                <td>6. 貓食罐頭：</td> 
                <td><?php echo ($_GET['sprice6']/850); ?>件
                $<?php echo $_GET['sprice6']; ?>元</td>              
            </tr>
            
            <tr><th>聯絡資料</th></tr>
            <tr>
                <td>姓名：</td>
                <td>
                    <?php echo $_GET['name']; ?>
                </td>
            </tr>
            <tr>
                <td>聯絡電話：</td>
                <td><?php echo $_GET['tel']; ?></td>
            </tr>
            <tr>
                <td>信用卡：</td>
                <td>
                    卡號：
                    <?php echo $_GET['password1']; ?>
                    - <?php echo $_GET['password2']; ?>
                    - <?php echo $_GET['password3']; ?>
                    - <?php echo $_GET['password4']; ?>
                    / 有效期限：
                    <?php 
                        $yr;
                        switch($_GET['year']){
                            case "– – – –":$yr = "– – – –";break;
                            case "bb":$yr = "2022";break;
                            case "bc":$yr = "2023";break;
                            case "bd":$yr = "2024";break;
                            case "be":$yr = "2025";break;
                            case "bf":$yr = "2026";break;
                            case "bg":$yr = "2027";break;
                            case "bh":$yr = "2028";break;
                            case "bi":$yr = "2029";break;
                            case "co":$yr = "2030";break;
                            case "ca":$yr = "2031";break;
                            case "cb":$yr = "2032";break;
                            case "cc":$yr = "2033";break;
                            case "cd":$yr = "2034";break;
                            case "ce":$yr = "2035";break;
                            case "cf":$yr = "2036";break;
                            case "cg":$yr = "2037";break;
                            case "ch":$yr = "2038";break;
                            case "ci":$yr = "2039";break;
                            case "do":$yr = "2040";break;
                            case "da":$yr = "2041";break;
                            case "db":$yr = "2042";break;
                            case "dc":$yr = "2043";break;
                            case "dd":$yr = "2044";break;
                            case "de":$yr = "2045";break;
                            case "df":$yr = "2046";break;
                            case "dg":$yr = "2047";break;
                        };
                        echo " {$yr}"
                    ?> 年
                    <?php 
                        $mn;
                        switch($_GET['month']){
                            case "– –":$mn = "– –";break;
                            case "Jan":$mn = "01";break;
                            case "Feb":$mn = "02";break;       
                            case "Mar":$mn = "03";break;  
                            case "Apr":$mn = "04";break;    
                            case "May":$mn = "05";break;
                            case "Jun":$mn = "06";break;
                            case "Jul":$mn = "07";break;
                            case "Aug":$mn = "08";break;
                            case "Sep":$mn = "09";break;    
                            case "Oct":$mn = "10";break;
                            case "Nov":$mn = "11";break;
                            case "Dec":$mn = "12";break;
                        };
                        echo " {$mn}"
                    ?> 月
                    / 安全碼：
                    <?php echo $_GET['safeword']; ?>
                </td>
            </tr>
            <tr>
                <td>備註：</td>
                <td><?php echo $_GET['talk']; ?></td>
            </tr>
            <tr>
                <td colspan="5" style="text-align: right;">
                    <input type="button" name="back" onclick="self.location=document.referrer" value="回上一頁">
                    <input type="submit" value="提交" onClick = "window.alert('已送出！');">
                </td>
            </tr>
        </table>
    </div>
</body>
</html>