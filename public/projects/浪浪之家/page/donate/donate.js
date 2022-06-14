window.onload = function() {
    var liCheck = document.getElementsByName("liCheck"); 
    var decrease = document.getElementsByClassName("decrease");
    var piece = document.getElementsByClassName("piece");
    var increase = document.getElementsByClassName("increase"); 
    var price = document.getElementsByClassName("price"); 
    var smallPrice = document.getElementsByClassName("smallPrice"); 
    var checkAll = document.getElementById("checkAll"); 
    var totalPrice = document.getElementById("totalPrice"); 

    for (var i = 0; i < decrease.length; i++) {

        decrease[i].index = i;
        increase[i].index = i;
        liCheck[i].index = i;

        // 減號的點選事件
        decrease[i].onclick = function() {
            // 判斷件數是否大於0
            if (piece[this.index].innerHTML <= 1) {
                this.disabled = true; //當件數小於等於0時, 將減號按鈕禁用
            }
            // 當前件數-1
            piece[this.index].innerHTML--;
            // 計算小計
            smallPrice[this.index].value = Number(smallPrice[this.index].value) - Number(price[this.index].innerHTML);
            // 如果當前條目是被選中狀態, 則需要將該商品計入總計和總價
            if (liCheck[this.index].checked) { //選中
                totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(price[this.index].innerHTML);
            }
        }
        // 加號的點選事件
        increase[i].onclick = function() {
            // 將對應的減號解禁
            decrease[this.index].disabled = false;
            // 當前件數+1
            piece[this.index].innerHTML++;
            // 計算小計
            smallPrice[this.index].value = Number(smallPrice[this.index].value) + Number(price[this.index].innerHTML);
            // 如果當前條目是被選中狀態, 則需要將該商品計入總計和總價
            if (liCheck[this.index].checked) { //選中
                totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(price[this.index].innerHTML);
            }
        }
        // 核取方塊的狀態改變事件
        var count = 0; //儲存選中個數
        liCheck[i].onchange = function() {
            // 判斷是否選中
            if (this.checked) { //選中狀態
                count++;
                totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(smallPrice[this.index].value); //總計加當前件數
                //  判斷選中個數是否與核取方塊個數一致
            } else { //取消選中狀態
                count--;
                totalPrice.innerHTML = Number(totalPrice.innerHTML) - Number(smallPrice[this.index].value); //總計加當前件數
            }
            count == liCheck.length ? checkAll.checked = true : checkAll.checked = false;
        }
    }
    // 全選核取方塊
    checkAll.onchange = function() {
        totalPrice.innerHTML = 0; //總價置為0
        for (var j = 0; j < liCheck.length; j++) {
            //  將li裡面的核取方塊與全選狀態保持一致
            liCheck[j].checked = this.checked;
            //  判斷是否全選
            if (this.checked) {
                count = liCheck.length;
                totalPrice.innerHTML = Number(totalPrice.innerHTML) + Number(smallPrice[j].value);
            } else {
                count = 0;
            }
        }
    }
}

