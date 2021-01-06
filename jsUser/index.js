var recordtheloai = 2;
// định nghĩa hàm mở form
function openForm(nameForm) {
  $(".form-theloai").addClass("is-hidden");
  $(".form-nxb").addClass("is-hidden");
  $(".form-book").addClass("is-hidden");
  $(".form-tg").addClass("is-hidden");
  $(".form-order").addClass("is-hidden");
  $("." + nameForm).removeClass("is-hidden");
}

// event click
// mở form thông tin thể loại
$(".menu-theloai").click(function () {
  openForm("form-theloai");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml = '<li><a href="#"><i class="fa fa-bars"></i> Danh mục</a></li><li class="active">Thể loại</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
  builddstheloai(0, recordtheloai);
});

// mở form thông tin nhà xuất bản
$(".menu-nxb").click(function () {
  openForm("form-nxb");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml = '<li><a href="#"><i class="fa fa-bars"></i> Danh mục</a></li><li class="active">Nhà xuất bản</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// mở form thông tin sách
$(".menu-book").click(function () {
  openForm("form-book");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml = '<li><a href="#"><i class="fa fa-bars"></i> Danh mục</a></li><li class="active">Sách</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// mở form thông tin tác giả
$(".menu-tg").click(function () {
  openForm("form-tg");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml = '<li><a href="#"><i class="fa fa-bars"></i> Danh mục</a></li><li class="active">Tác giả</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// mở form thông tin đơn đặt hàng
$(".menu-order").click(function () {
  openForm("form-order");

  // khai báo biến chứa nội dung là thẻ html
  var tagHtml = '<li><a href="#"><i class="fa fa-bars"></i> Bán hàng</a></li><li class="active">Đơn đặt hàng</li>';

  //thêm nội dung vào thẻ có chứa class title-breadcrumb
  $(".title-breadcrumb").html(tagHtml);
});

// sự kiện mở modal
$(".list-order").on("click", ".btn-order", function () {
  // mở modal
  $(".show-modal-order").modal("show");
});

//bắt sự kiện nút xoá
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

//Xuất thông báo bằng alert khi thao tác thất bại
function alertError(mes) {
  bootbox.alert({
    size: 'small',
    title: '<span style="color: red"> Thất bại</span>',
    message: mes,
    callback: function() { /* your callback code */}
  });
}

//Xuất thông báo thành công bằng alert khi thao tác thành công
function alertSuccess(mes, callback) {
  bootbox.alert({
    size: 'small',
    title: 'Thành công',
    message: mes,
    callback: callback
  });
}

//Xuất thông báo bằng alert khi hiển thị thông tin
function alertInfo(mes) {
  bootbox.alert({
    size: 'small',
    title: 'Thông báo',
    message: mes,
    callback: function() { /* your callback code */}
  });
}

//hàm kiểm tra một chuỗi có phải là số không
function isNumber(number) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(number);
}

//hàm kiểm tra địa chỉ email
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//hàm check ngày tháng năm
function checkDate(strDate) {
    var comp = strDate.split('/');

    var d = parseInt(comp[0], 10);
    var m = parseInt(comp[1], 10);
    var y = parseInt(comp[2], 10);

    var date = new Date(y,m-1,d);

    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
      return true;
    }
    
    return false;
}

//hàm gửi dữ liệu tới database
function queryDataPost(url, dataSend, callback) {
  $.ajax({
    type: "POST",
    url: url,
    data: dataSend,
    async: true,
    dataType: "json",
    success: callback
  });
}

//hàm lấy dữ liệu từ server
function queryDataGet(url, dataSend, callback) {
  $.ajax({
    type: "GET",
    url: url,
    data: dataSend,
    async: true,
    dataType: "json",
    success: callback
  });
}

//hàm hiển thị phân trang
function buildSlidePage(obj, codan, pageActive, totalPage) {
  var html = "";

  pageActive = parseInt(pageActive);

  for(i = 1 ; i <= codan; i++) {
    if(pageActive - i < 0) break;

    html = '<button type="button" class="btn btn-outline btn-default" value="' + (pageActive - i) + '">' + (pageActive - i + 1) + '</button>' + html;
  }

  if(pageActive > codan){
    html = '<button type="button" class="btn btn-outline btn-default" value="' + (pageActive - i) + '">...</button>' + html;
  }

  html += '<button type="button" class="btn btn-outline btn-default" style="background-color: #5cb85c" value="' + pageActive + '">' + (pageActive + 1) + '</button>';
  
  for(i = 1 ; i <= codan; i++){
    if(pageActive + i >= totalPage) break;

    html = html+'<button  type="button" class="btn btn-outline btn-default" value="' + (pageActive + i) + '">' + (pageActive + i + 1) + '</button>';
  }

  if(totalPage - pageActive > codan + 1){
    html = html + '<button type="button" value="' + (pageActive + i) + '" class="btn btn-outline btn-default">...</button>';
  }

  obj.html(html);
}

//hàm in số thứ tự page
function printSTT(record, pageCurr) {
  if((pageCurr + 1) == 1) {
      return 1;
  }else {
      return record * (pageCurr + 1) - (record - 1);
  }
}

function initUploadImage(idInput, idPreview, callback) {
	'use strict';
	// Initialise resize library
	var resize = new window.resize();
  resize.init();
  
	// Upload photo
	document.querySelector('#'+idInput).addEventListener('change', function (event) {
		event.preventDefault();

		// var input=$("#"+idInput);
		$("#"+idInput).change(function() {
			// $("#"+idpreview).show();
			if (typeof(FileReader) != "undefined") {
			
				var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.ico|.jpg|.jpeg|.gif|.png)$/;
			
				$($(this)[0].files).each(function() {
          var getFile = $(this);
          
					if (regex.test(getFile[0].name.toLowerCase())) {
            var reader = new FileReader();
            
						reader.onload = function(e) {
							$("#imgPreviewStatus").attr("src", e.target.result);
            }
            
						reader.readAsDataURL(getfile[0]);
						//document.getElementById("savepath").value=getfile[0].name;
						//console.log(getfile[0]);
					} else {
						alert(getfile[0].name + " Không phải là file .");
						return false;
					}
				});
			} else {
				alert("Browser does not supportFileReader.");
			}
    });
    
		var files = event.target.files;
		var countFile = files.length;
		for (var i in files) {
      if (typeof files[i] !== 'object') {
        return false;
      }

			(function() {

				var initialSize = files[i].size;

				resize.photo(files[i], 1200, 'file', function (resizedFile) {

				var resizedSize = resizedFile.size;

					upload(resizedFile, function(res) {
						console.log(res);
						var s = callback + "(" + res + ")";
						eval(s);
					});

					// This is not used in the demo, but an example which returns a data URL so yan can show the user a thumbnail before uploading th image.
					resize.photo(resizedFile, 600, 'dataURL', function (thumbnail) {
						//console.log('Display the thumbnail to the user: ', thumbnail);
					});
				});
			} ());
		}

	});
};


var upload = function (photo, callback) {
  var formData = new FormData();
  
  formData.append('photo', photo);
    
  $.ajax({
    url: 'php/up-load-file.php',
    type : 'POST',
    data : formData,
    async: true,
    xhrFields: {
      withCredentials: true
    },
    processData: false,  // tell jQuery not to process the data
    contentType: false,  // tell jQuery not to set contentType
    success : callback
  });
};