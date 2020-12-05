// định nghĩa hàm mở form
function openForm(nameForm) {
  $(".form-theloai").addClass("is-hidden");
  $(".form-nxb").addClass("is-hidden");
  $(".form-book").addClass("is-hidden");
  $(".form-tg").addClass("is-hidden");
  $("." + nameForm).removeClass("is-hidden");
}

// event click
// mở form thông tin thể loại
$(".menu-theloai").click(function () {
  openForm("form-theloai");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml =
    '<li><a href="#"><i class="fa fa-bars"></i> Danh mục</a></li><li class="active">Thể loại</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// mở form thông tin nhà xuất bản
$(".menu-nxb").click(function () {
  openForm("form-nxb");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml =
    '<li><a href="#"><i class="fa fa-bars"></i> Danh mục</a></li><li class="active">Nhà xuất bản</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// mở form thông tin sách
$(".menu-book").click(function () {
  openForm("form-book");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml =
    '<li><a href="#"><i class="fa fa-bars"></i> Danh mục</a></li><li class="active">Sách</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// mở form thông tin tác giả
$(".menu-tg").click(function () {
  openForm("form-tg");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml =
    '<li><a href="#"><i class="fa fa-bars"></i> Danh mục</a></li><li class="active">Tác giả</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// mở form thông tin đơn đặt hàng
$(".menu-order").click(function () {
  openForm("form-order");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml =
    '<li><a href="#"><i class="fa fa-bars"></i> Bán hàng</a></li><li class="active">Đơn đặt hàng</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// sự kiện mở modal
$(".list-order").on("click", ".btn-order", function () {
  // mở modal
  $(".show-modal-order").modal("show");
});

$(".list-order").on("click", ".btn-delete", function () {
  bootbox.confirm(
    "Bạn có chắc muốn xoá đơn hàng này không?",
    function (result) {
      if (result == true) {
        console.log("deleted...");
      }
    }
  );
});
