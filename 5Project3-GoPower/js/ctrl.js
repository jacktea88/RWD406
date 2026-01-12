
	// 禁止右鍵
        document.oncontextmenu = function(){
            // alert("禁止使用瀏覽器快捷鍵");
            showWarning();
            return false;
        }

        function showWarning(){
            let warning = new bootstrap.Modal(document.querySelector("#warning"));
            warning.show();
        }

        // 禁止keydown
        document.onkeydown = function (e) {
            // alert(e.keyCode)
            if (e.keyCode == 123 || e.keyCode == 17 || e.keyCode == 85) {
            //    alert("禁止使用按鍵");
               showWarning();
               return false; 
            }
            else{
                return true;
            }
            

        }
	
	
	// $(function(){
	// 	document.onkeydown=function(e){
	// 		// alert(e.keyCode)
	// 		if(e.keyCode===17 ||e.keyCode===85||e.keyCode===123){
	// 			return false;
	// 		}else{
	// 			return true;
	// 		}
	// 	}
	// 	$("body").on('contextmenu',function(){
	// 		$("#warning").modal("show")
	// 		return false;
	// 	})
	// })