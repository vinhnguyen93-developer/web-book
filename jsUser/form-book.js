//bắt sự kiện thêm sách
$(".btn-addBook").click(function() {
    //get data from input box
    var idBook = $(".txt-idBook").val();
    var name = $(".txt-nameBook").val();
    var numberBook = $(".txt-numberBook").val();
    var year = $(".txt-yearBook").val();

    if(idBook.length != 5) {
        alertInfo("Mã sách phải là 5 ký tự.");
    } else if(name == "") {
        alertInfo("Tên sách không được để trống.");
    } else if(isNumber(numberBook) == false) {
        alertInfo("Số trang phải là dạng số.");
    } else if(checkDate(year) == false) {
        alertInfo("Năm xuất bản không hợp lệ.");
    } else {
        alertSuccess("Thêm thành công.");
    }
});

//bắt sự kiện reset lại form sách
$(".btn-resetBook").click(function() {
    resertFormAuthor();
});

//hàm reset lại form sách
function resertFormAuthor() {
    $(".txt-idBook").val("");
    $(".txt-nameBook").val("");
    $(".txt-numberBook").val("");
    $(".txt-yearBook").val("");
}