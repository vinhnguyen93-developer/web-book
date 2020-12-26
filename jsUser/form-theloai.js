$(".btn-them-theloai").click(function() {
    //Lấy dữ liệu từ form
    var maTl = $(".txt-matl").val();
    var tenTl = $(".txt-tentl").val();

    if(maTl.length != 5) {
        alertInfo("Mã thể loại phải là 5 ký tự.");
    } else if(tenTl == "") {
        alertInfo("Tên thể loại không được để trống.")
    } else {
        var data = {
            event: "insert",
            matl: maTl,
            tentl: tenTl
        }

        queryDataPost("php/theloai.php", data, function(res) {
            if(res.insert == 1) {
                alertSuccess("Thêm thành công.");
            } else {
                alertError("Something wrong!");
            }
        });  
    }
});

//bắt sự kiện reset lại form thể loại
$(".btn-lamlai-theloai").click(function() {
    resetFormTheLoai();
});

$(".btn-delete-theloai").click(function() {
    var maTl = $(".txt-matl").val();

    var data = {
        event: "delete",
        matl: maTl
    }

    bootbox.confirm(
        "Bạn có chắc muốn xoá mã thể loại " + maTl + " hàng này không?",
        function (result) {
          if (result == true) {
            var data = {
                event: "delete",
                matl: maTl
            }

            queryDataPost("php/theloai.php", data, function(res) {
                if(res.delete) {
                    alertSuccess("deleted...");
                } else {
                    alertError("something wrong!");
                }
            });
          }
        }
      );
})

//hàm reset lại form thể loại
function resetFormTheLoai() {
    $(".txt-matl").val("");
    $(".txt-tentl").val("");
}

//hàm gửi dữ liệu lên server
function sendData() {
    var dataSend = {
        event: "send data"
    }

    queryDataGet("php/api-process.php", dataSend, function(res) {
        alertInfo(res);
    });

    queryDataPost("php/api-process-post.php", dataSend, function(res) {
        alertInfo("Post: " + res);
    });
}

//sendData();