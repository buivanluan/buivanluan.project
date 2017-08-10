
	for (var i = 1; i <= 31; i++) {
		document.getElementById("date").innerHTML = document.getElementById("date").innerHTML + '<option value="Ngày ' +i+ '">'+ i +'</option>'
	}
	for (var i = 1; i <= 12; i++) {
		document.getElementById("month").innerHTML = document.getElementById("month").innerHTML + '<option value="Tháng '+ i +'">Tháng '+ i +'</option>'
	}
	for (var i = 2017; i >= 1950; i--) {
		document.getElementById("year").innerHTML = document.getElementById("year").innerHTML + '<option value="Năm '+i+'">'+ i +'</option>'
	}

	$(document).ready(function(){
		$(".create").on('submit',function(){
			var ivalid = true;
			if ($("#lastname").val().trim() == "" || $("#lastname").val().trim().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/) == null) {
				$("#lastname").next("i").css("display","block");
				$("#lastname").css("border-color","red")
				ivalid = false;
			}
			else {
				$("#lastname").next("i").css("display","none");
			}
			if ($("#name").val().trim() == "" || $("#name").val().trim().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/) == null) {
				$("#name").next("i").css("display","block");
				$("#name").css("border-color","red")
				ivalid = false;
			}
			else {
				$("#name").next("i").css("display","none");
			}
			if ($("#account").val().trim() == "" || $("#account").val().trim().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/) == null) {
				$("#account").next("i").css("display","block");
				$("#account").css("border-color","red")
				ivalid = false;
			}
			else {
				$("#account").next("i").css("display","none");
			}
			if ($("#password").val().trim() == "" || $("#password").val().trim().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/) == null) {
				$("#password").next("i").css("display","block");
				$("#password").css("border-color","red")
				ivalid = false;
			}
			else {
				$("#password").next("i").css("display","none");
			}
			if ($("#date").val().trim() == "Ngày" || $("#month").val().trim() == "Tháng" || $("#year").val().trim() == "Năm" ) {
				$("#year").next("i").css("display","block");
				if ($("#date").val().trim() == "Ngày") {$("#date").css("border","1px solid red")}
				if ($("#month").val().trim() == "Tháng") {$("#month").css("border","1px solid red")}
				if ($("#year").val().trim() == "Năm" ) {$("#year").css("border","1px solid red")}
				
				
				
				ivalid = false;
			}
			else {
				$("#year").next("i").css("display","none");
			}
			if ($("input[name=gender]:checked").length == 0 ) {
				$("#boy").next("i").css("display","block");
				if ($("input[name=gender]:checked").length == 0 ) {$("#gender1").css("border","1px solid red")}
				if ($("input[name=gender]:checked").length == 0 ) {$("#gender2").css("border","1px solid red")}	
				
				ivalid = false;
			}
			else {
				$("#boy").next("i").css("display","none");
				

			}

			return ivalid;

		});
		$('input').on("click",function(){
			$(this).next("i").css("display","none");
			$(this).css("border","1px solid #bdc7d8")			
		})
		$('i').on("click",function(){
			$(this).css("display","none");
			$(this).next("input").css("border","1px solid #bdc7d8")		
		})
		$('.rieng').on("click",function(){
			$("#gender1").css("border","none");
			$("#gender2").css("border","none");
			$("#boy").next("i").css("display","none");	

		})
		$('#date').on("click",function(){
			$("#date").css("border","1px solid #bdc7d8");
				
		})
		$('#month').on("click",function(){
			$("#month").css("border","1px solid #bdc7d8");
				
		})
		$('#year').on("click",function(){
			$("#year").css("border","1px solid #bdc7d8");
				
		})
		$('select').on("click",function(){
			$('select').next("i").css("display","none");
		})
        
	});


//















<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script language="javascript">
            function Display() {
                document.write("Thong tin dang ky: <br>"
                        + "Name: " + document.myForm.Name.value + "<br>"
                        + "Email: " + document.myForm.EMail.value + "<br>"
                        + " Ngay sinh: " + document.myForm.NgaySinh.value + "<br>"
                        + "Tuoi: " + document.myForm.Tuoi.value + "<br>"
                        + "Zip Code" + document.myForm.Zip.value + "<br>"
                        + "Pass :" + document.myForm.Pass.value);
            }
            function validate() {
                if (document.myForm.Name.value == "") {
                    alert("Ten khong duoc de trong!!!");
                    document.myForm.Name.focus();
                    return false;
                }
                var emailID = document.myForm.EMail.value;
                atpos = emailID.indexOf("@");
                console.log(atpos);
                dotpos = emailID.lastIndexOf(".");
                if (emailID == "") {
                    alert("Email khong duoc de trong");
                    return false;
                }
                if (atpos < 1 || (atpos - dotpos  2)) {
                    alert("Nhap lai email ID");
                    //  document.myForm.Name.focus();

                    document.myForm.EMail.focus();
                    return false;

                }
                if (document.myForm.NgaySinh.value == "") {
                    alert("Ngay sinh  khong duoc de trong");
                    document.myForm.NgaySinh.focus();
                    return false;
                    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
                    var dtArray = currVal.match(rxDatePattern);
                    if (dtArray == null)
                    {
                        alert("Sai dinh dang.Nhap lai!");
                        return false;
                    }
                    dtMonth = dtArray[3];
                    dtDay = dtArray[1];
                    dtYear = dtArray[5];
                    if (dtMonth < 1 || dtMonth > 12)
                    {
                        alert("Nhap lai thang!");
                        return false;
                    } else if (dtDay < 1 || dtDay > 31)
                    {
                        alert("Nhap lai ngay!");
                        return false;
                    } else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
                    {
                        alert("Nhap lai ngay sinh!");
                        return false;
                    } else if (dtMonth == 2)
                    {
                        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
                        if (dtDay > 29 || (dtDay == 29 && !isleap))
                        {
                            alert("Nhap lai ngay sinh!");
                            return false;
                        }
                    }
                    if (isNaN(document.myForm.Tuoi.value)) {
                        alert("Nhap sai! nhap lai");
                        document.myForm.Tuoi.focus();
                        return false;
                    }
                }
                if (document.myForm.Tuoi.value == "") {
                    alert("Tuoi khong duoc de trong");
                    document.myForm.Tuoi.focus();
                    return false;
                }
                if (document.myForm.Country.value == "-1") {
                    alert("Country khong nhan gia tri am");
                    document.myForm.Country.focus();
                    return false;
                }
                if (document.myForm.Pass.value == "") {
                    alert("Pass khong de trong");
                    document.myForm.Pass.focus();
                    return false;
                }
                if (document.myForm.Zip.value == "" ||
                        isNaN(document.myForm.Zip.value) ||
                        document.myForm.Zip.value.length != 5) {
                    alert("Zip Code  khong dung dinh dang");
                    document.myForm.Zip.focus();
                    return false;
                }
                return true;
            }

        </script>
    </head>
    <body>
        <div>Form Dang Ky Hoc Vien</div>
        <form action="/cgi-bin/test.cgi" name="myForm" onsubmit="return(validate());">
            <table cellspacing="2" cellpadding="2" border="1">
                <tr><td align="left">Name</td>
                    <td><input type="text" name="Name" /></td>
                </tr>
                <tr><td align="left">EMail(ex:abc@mail.com)</td>
                    <td><input type="text" name="EMail" /></td>
                </tr>
                <tr><td align="left">DateOfBirth(DD/MM/YYYY)</td>
                    <td><input type="text" name="NgaySinh" /></td>
                </tr>
                <tr><td align="left">Age</td>
                    <td><input type="text" name="Tuoi" /></td>
                </tr>
                <tr><td align="left">Pass</td>
                    <td><input type="password" name="Pass" /></td>

                <tr><td align="left">Zip Code</td>
                    <td><input type="text" name="Zip" /></td>
                <tr><td align="left">Country</td>
                    <td><select name="Country" >
                            <option value="-1" selected>[Choice your] </option>
                            <option value="1">USA </option>
                            <option value="2">UK</option>
                            <option value="3">INDIA</option>
                        </select></td>

                <tr><td></td>
                    <td><input type="submit" value="Submit" /></td>
                </tr>
                <tr><td></td>
                    <td><input type="button" value="Display" onclick="Display();" /></td>
                </tr>
            </table></form>
        
    </body>

</html>
