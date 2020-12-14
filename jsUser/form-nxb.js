$(".btn-themnxb").click(function() {
    //Lấy dữ liệu từ form
    var maNxb = $(".txt-manxb").val();
    var tenNxb = $(".txt-tennxb").val();
    var phoneNxb = $(".txt-phone").val();
    //var addressNxb = $(".txt-address").val();
    var emailNxb = $(".txt-email").val();

    if(maNxb.length != 5) {
        alertInfo("Mã nhà xuất bản phải là 5 ký tự.");
    } else if(tenNxb == "") {
        alertInfo("Tên nhà xuất không được để trống.")
    } else if(phoneNxb == "" || phoneNxb.length != 10 || isNumber(phoneNxb) == false) {
        alertInfo("Số điện thoại hợp lệ.")
    } else if(validateEmail(emailNxb) == false) {
        alertInfo("Email không hợp lệ.")
    } else {
        alertSuccess("Thêm thành công.")
    }
});

//bắt sự kiện cho nút làm lại
$(".btn-lamlainxb").click(function() {
    resetFormNxb();
})

//hàm reset lại input box
function resetFormNxb() {
    $(".txt-manxb").val("");
    $(".txt-tennxb").val("");
    $(".txt-phone").val("");
    $(".txt-address").val("");
    $(".txt-email").val("");
}