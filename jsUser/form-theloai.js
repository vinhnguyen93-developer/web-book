var recordtheloai = 2;
var resalltheloai;

$(".btn-them-theloai").click(() => {
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

        queryDataPost("php/theloai.php", data, (res) => {
            if(res.insert == 1) {
                alertSuccess("Thêm thành công.");
                builddstheloai(theloai_current, recordtheloai);

                $(".txt-matl").val("");
                $(".txt-tentl").val("");
            } else {
                alertError("Something wrong!");
            }
        });  
    }
});

//bắt sự kiện reset lại form thể loại
$(".btn-lamlai-theloai").click(() => {
    resetFormTheLoai();
});

$(".btn-delete-theloai").click(() => {
    var maTl = $(".txt-matl").val();

    bootbox.confirm(
        "Bạn có chắc muốn xoá mã thể loại " + maTl + " hàng này không?", (result) => {
          if (result == true) {
            var data = {
                event: "delete",
                matl: maTl
            }

            queryDataPost("php/theloai.php", data, (res) => {
                if(res.delete) {
                    alertSuccess("Deleted.");
                    builddstheloai(theloai_current, recordtheloai);

                    $(".txt-matl").val("");
                    $(".txt-tentl").val("");
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

//hàm hiển thị dữ liệu lên table
function builddstheloai(page, record) {
   
    var dataSend = {
		event: "getDSTheLoai",
		page: page,
        record: record
    }
    
    $(".listdstheloai").html("<img src='images/input-spinner.gif' width='5px' height='5px'/>");
  
    queryDataPost("php/theloai.php", dataSend, (res) => {
        $(".listdstheloai").html("");
        buildHTMLTheLoaiData(res);
    });
}

function buildHTMLTheLoaiData(res) {
   if(res.total == 0) {
    $(".listdstheloai").html("Chưa có nội dung");	
   }else {  
    var data = res.items;

    resalltheloai = data;

    var stt = 1;
    var currentPage = parseInt(res.page);
    var html = '';
   
    stt = printSTT(recordtheloai, currentPage);
    
    for(item in data) {
        var list = data[item];
      
        html = html +
            '<tr data-matl="' + list.MaTL + '" data-name="' + list.TenTL + '" data-vt="' + item + '">' +			
            '<td>' + stt + '</td>' +
			'<td>' + list.MaTL + '</td>' +
			'<td>' + list.TenTL + '</td>' +
			'<td class="click_sua_the_loai"><i class="fa fa-eye"></i></td>'+
            '</tr>';

        stt++;
        
        $(".listdstheloai").html(html)
    }

    buildSlidePage($(".page-number"), 5, res.page, res.totalpage);
   }
}

var theloai_current = 0;

$(".page-number").on('click', 'button', function() {
    
    theloai_current = $(this).val();
    builddstheloai(theloai_current, recordtheloai);
    
});

$(".listdstheloai").on("click", ".click_sua_the_loai", function() {
    var vt = $(this).parents("tr").attr("data-vt");

    $(".txt-matl").val(resalltheloai[vt].MaTL);
    $(".txt-tentl").val(resalltheloai[vt].TenTL);
});

//sự kiện sửa thể loại
$(".btn-luu-theloai").click(() => {
    var maTl = $(".txt-matl").val();
    var tenTl = $(".txt-tentl").val();


    bootbox.confirm(
        "Bạn có chắc muốn sửa mã thể loại " + maTl + " hàng này không?", (result) => {
          if (result == true) {
            var data = {
                event: "update",
                matl: maTl,
                tentl: tenTl
            }

            queryDataPost("php/theloai.php", data, (res) => {
                if(res.update) {
                    alertSuccess("Sửa thành công.");
                    builddstheloai(theloai_current, recordtheloai);

                    $(".txt-matl").val("");
                    $(".txt-tentl").val("");
                } else {
                    alertError("something wrong!");
                }
            });
          }
        }
      );
});