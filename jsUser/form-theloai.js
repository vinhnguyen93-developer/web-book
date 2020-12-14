$(".btn-them-theloai").click(function() {
    //Lấy dữ liệu từ form
    var maTl = $(".txt-matl").val();
    var tenTl = $(".txt-tentl").val();

    if(maTl.length != 5) {
        alertInfo("Mã thể loại phải là 5 ký tự.");
    } else if(tenTl == "") {
        alertInfo("Tên thể loại không được để trống.")
    } else {
        alertSuccess("Thêm thành công.");
    }
});

//bắt sự kiện reset lại form thể loại
$(".btn-lamlai-theloai").click(function() {
    resetFormTheLoai();
})

//hàm reset lại form thể loại
function resetFormTheLoai() {
    $(".txt-matl").val("");
    $(".txt-tentl").val("");
}