$(document).ready(function() {
    //cac bien su dung
    var mediateResult, mediateCalculator, checkEqual, checkDot,checkMath, result;
    //nhap so hien so len man hinh
    $("#number-one").on("click", function() {
        pushNumber(1);
    });
    $("#number-two").on("click", function() {
        pushNumber(2);
    });
    $("#number-three").on("click", function() {
        pushNumber(3);
    });
    $("#number-four").on("click", function() {
        pushNumber(4);
    });
    $("#number-five").on("click", function() {
        pushNumber(5);
    });
    $("#number-six").on("click", function() {
        pushNumber(6);
    });
    $("#number-seven").on("click", function() {
        pushNumber(7);
    });
    $("#number-eight").on("click", function() {
        pushNumber(8);
    });
    $("#number-nine").on("click", function() {
        pushNumber(9);
    });
    $("#number-zero").on("click", function() {
        pushNumber(0);
    });
    $("#add").on("click", function() {
        pushMath("+");
    });
    $("#subtr").on("click", function() {
        pushMath("-");
    });
    $("#multi").on("click", function() {
        pushMath("x");
    });
    $("#divine").on("click", function() {
        pushMath("÷");
    });
    $("#dot").on("click", function() {
        pushDot();
    });
    $("#CE").on("click", function() {
        clearNumber();
    });
    $("#equal").on("click", function() {
        resultEqual();
    });
    $("#AC").on("click", function() {
        beginAC();
    });


    // cac ham hien so va tinh toan
    //ham nhap so
    function pushNumber(val) {

        // kiem tra co dau "=" trong hang duoi (#caculator) hay khong?
        checkEqualAppear($("#calculator").html());
        // neu khong co dau bang xuat hien
        if (checkEqual === false) {
            if ($("#result").html() === "0" || $("#result").html() === "+" || $("#result").html() === "-" || $("#result").html() === "x" || $("#result").html() === "÷") {
                $("#result").html(val);
            } else {
                $("#result").html($("#result").html() + val)
            };
            if ($("#calculator").html() === "0" || $("#calculator").html() === "Digit Limit Met") {
                $("#calculator").html(val);
            } else {
                $("#calculator").html($("#calculator").html() + val)
            }

        }
        //khi tran so khoi man hinh bao loi
        errOverflow();
    }
    //ham nhap "+,-,x,÷"
    function pushMath(val) {
        // kiem tra co dau "=" trong hang duoi (#caculator) hay khong?
        checkEqualAppear($("#calculator").html())
        mediateCalculator = $("#calculator").html();
        // kiem tra co phai dang o trang thai loi hay khong?
        if ($("#calculator").html() !== "Digit Limit Met") {
            $("#result").html(val);
            // neu khong co dau bang xuat hien
            if (checkEqual === false) {
                if (mediateCalculator[mediateCalculator.length - 1] === "+" || mediateCalculator[mediateCalculator.length - 1] === "-" || mediateCalculator[mediateCalculator.length - 1] === "x" || mediateCalculator[mediateCalculator.length - 1] === "÷" || mediateCalculator[mediateCalculator.length - 1] === ".") {
                    mediateCalculator = mediateCalculator.slice(0, mediateCalculator.length - 1);
                    $("#calculator").html(mediateCalculator + val);
                } else {
                    $("#calculator").html($("#calculator").html() + val);
                }

            } else {
                $("#calculator").html(result + val);
                $("#result").html(val);

            }
        }
        errOverflow();
    }
    //ham nhap dau cham ngan cach thap phan
    function pushDot() {
        checkDotAppear($("#result").html())
        if (checkDot === false) {
            if ($("#result").html() !== "+" && $("#result").html() !== "-" && $("#result").html() !== "x" && $("#result").html() !== "÷" && $("#calculator").html() !== "Digit Limit Met") {
                $("#result").html($("#result").html() + ".");
                $("#calculator").html($("#calculator").html() + ".")
            }
        }
        if($("#calculator").html() === "Digit Limit Met"){
             $("#calculator").html("0" + ".")
             $("#result").html($("#result").html() + ".");

        }
        errOverflow();
    }
    //ham xoa so
    function clearNumber() {
        mediateResult = $("#result").html();
        mediateCalculator = $("#calculator").html();
        if (mediateResult !== "0") {
            $("#result").html("0");
            checkMathAppear(mediateCalculator);
            if (checkMath === true) {
                mediateCalculator = mediateCalculator.slice(0, mediateCalculator.length - mediateResult.length);
                $("#calculator").html(mediateCalculator);
            } else {
                $("#calculator").html("0");
            }
        } else {
            for (var i = mediateCalculator.length - 1; i >= 0; i--) {
                if (mediateCalculator[i] === "+" || mediateCalculator === "-" || mediateCalculator[i] === "x" || mediateCalculator[i] === "÷") {
                    mediateCalculator = mediateCalculator.slice(0, i);
                    console.log(i)
                    $("#calculator").html(mediateCalculator);
                    break;

                } else {
                    $("#calculator").html("0");
                }
            };
        }
    }
    console.log()

    //ham reset de bat dau lai
    function beginAC() {
        $("#result").html("0");
        $("#calculator").html("0");
    }
    //ham hien thi ket qua
    function resultEqual() {
        mediateCalculator = $("#calculator").html();
        mediateCalculator = mediateCalculator.replace(/x/g, "*");
        mediateCalculator = mediateCalculator.replace(/÷/g, "/");
        result = eval(mediateCalculator).toString();
        checkDotAppear(result);
        if (result.length > 11 && checkDot === true) {
            result = result.slice(0, 11);
            $("#calculator").html(result);
        } else {
            $("#calculator").html($("#calculator").html() + "=" + result);
            mediateCalculator = $("#calculator").html();
            if (mediateCalculator.length > 18) {
                $("#calculator").html(result);
            }
        }

        $("#result").html(result);
        errOverflow();
    }
    //ham loi khi tran so khoi man hinh may tinh
    function errOverflow() {
        mediateResult = $("#result").html();
        mediateCalculator = $("#calculator").html();
        // neu chieu dai cua day so hien thi tran man hinh thi bao loi
        if (mediateCalculator.length > 18 || mediateResult.length > 11) {
            $("#result").html("0");
            $("#calculator").html("Digit Limit Met");

        }
    }
    // kiem tra xem co dau "=" trong day khong
    function checkEqualAppear(val) {
        checkEqual = false;
        for (var i = val.length - 1; i >= 0; i--) {
            if (val[i] === "=") {
                checkEqual = true;
                break;
            };
        }
    }
    // kiem tra xem co dau "." trong day khong
    function checkDotAppear(val) {
        checkDot = false;
        for (var i = 0; i < val.length; i++) {
            if (val[i] === ".") {
                checkDot = true;
                break;
            }
        }
    }
    // kiem tra xem co dau "+,-,x,÷" trong day  k
    function checkMathAppear(val) {
        checkMath = false;
        for (var i = 0; i < val.length; i++) {
            if (val[i] === "+" || val[i] === "-" || val[i] === "x" || val[i] === "÷") {
                checkMath = true;
                break;
            }
        }
    }

});
