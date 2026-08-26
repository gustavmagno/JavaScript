var BtnVerifiquePressed = document.querySelector('input#btnVer');
BtnVerifiquePressed.addEventListener('click', BtnVerPressed);


var BtnRandomPressed = document.querySelector('input#btnRandom');
BtnRandomPressed.addEventListener('click', BtnRanPressed);

function BtnVerPressed() {
    var InputVal1 = document.querySelector('input#v1').value;
    var InputVal2 = document.querySelector('input#v2').value;
    var InputVal3 = document.querySelector('input#v3').value;
    var InputVal4 = document.querySelector('input#v4').value;
    var InputVal5 = document.querySelector('input#v5').value;
    var InputVal6 = document.querySelector('input#v6').value;
    var InputVal7 = document.querySelector('input#v7').value;
    var InputVal8 = document.querySelector('input#v8').value;
    var OutputP1 = document.querySelector('p#p1');
    var OutputP2 = document.querySelector('p#p2');
    var OutputP3 = document.querySelector('p#p3');
    var OutputP4 = document.querySelector('p#p4');



    OutputP1.innerHTML = `${InputVal1}, ${InputVal2}, ${InputVal3}, ${InputVal4}, ${InputVal5}, ${InputVal6}, ${InputVal7}, ${InputVal8}`


    var LN = Math.min(InputVal1, InputVal2, InputVal3, InputVal4, InputVal5, InputVal6, InputVal7, InputVal8);

    OutputP2.innerHTML = LN;

    var GN = Math.max(InputVal1, InputVal2, InputVal3, InputVal4, InputVal5, InputVal6, InputVal7, InputVal8);

    OutputP3.innerHTML = GN;


    var AN = (Number(InputVal1) + Number(InputVal2) + Number(InputVal3) + Number(InputVal4) + Number(InputVal5) + Number(InputVal6) + Number(InputVal7) + Number(InputVal8)) / 8;

    OutputP4.innerHTML = AN;
}

function BtnRanPressed() {

}