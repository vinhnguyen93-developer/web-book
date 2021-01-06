$(".btn-login").click(function() {
    var userName = $(".text-user").val();
    var password = $(".text-password").val();

    if(userName == "") {
        alertError("Tên đăng nhập không được để trống.");
    } else if(password == "") {
        alertError("Password không được để trống.");
    } else {
        var data = {
            event: "login",
            username: userName,
            pass: password
        }

        queryDataPost("php/login.php", data, function(res) {

            if(res.event == 1) {
                if($(".remember").is(":checked")) {
                    localStorage.setItem("rememberBS", true);
                }

                localStorage.setItem("userNameBook", res.items.username);
                localStorage.setItem("avatarUser", res.items.avatar);
                
                location.href = "index.html";
            } else {
                alertInfo("Tài khoản chưa đúng.");
                $(".text-user").val("");
                $(".text-password").val("");
            }
        });
    }
});