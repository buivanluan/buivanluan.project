var str = decodeURIComponent(window.location.href);
var point = str.search(/[?]/);
str = str.slice(point, str.length)
str = str.split('&');
for (var i = 0; i < str.length; i++) {
	str[i] = str[i].slice(str[i].search("=")+1,str[i].length);

}

document.getElementById("name").innerHTML = "Họ và tên :" + str[0] +" "+ str[1];
document.getElementById("account").innerHTML = "Tài khoản :" + str[2] ;
document.getElementById("password").innerHTML = "Mật khẩu :" + str[3] ;
document.getElementById("birth_date").innerHTML = "Ngày sinh :" + str[4] +"," + str[5] +"," + str[6];
document.getElementById("gender").innerHTML = "Giới tính :" + str[7];