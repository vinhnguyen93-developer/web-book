//Bắt sự kiện thêm tác giả
$(".btn-addAuthor").click(function() {
    //Get data from input box
    var idAuthor = $(".txt-idAuthor").val();
    var nameAuthor = $(".txt-nameAuthor").val();
    var dateOfBirthAuthor = $(".txt-dateOfBirth-author").val();
    var phoneAuthor = $(".txt-phoneAuthor").val();

    if(idAuthor.length != 5) {
        alertInfo("Mã tác giả phải là 5 ký tự.");
    } else if(nameAuthor == "") {
        alertInfo("Tên tác giả không được để trống.");
    } else if(checkDate(dateOfBirthAuthor) == false) {
        alertInfo("Ngày tháng năm sinh không hợp lệ.");
    } else if(phoneAuthor.length != 10 || isNumber(phoneAuthor) == false) {
        alertInfo("Số điện thoại không hợp lệ.");
    } else {
        alertInfo("Thêm thành công.");
    }
});

//bắt sự kiện reset lại form tác giả
$(".btn-resetAuthor").click(function() {
    resetFormAuthor();
});

//hàm reset lại form tác giả
function resetFormAuthor() {
    $(".txt-idAuthor").val("");
    $(".txt-nameAuthor").val("");
    $(".txt-dateOfBirth-author").val("");
    $(".txt-phoneAuthor").val("");
    $(".txt-addressAuthor").val("");
}