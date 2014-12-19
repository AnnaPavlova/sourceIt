window.onload = function simpleCalc() {
    var firstValue = document.getElementById('first-value').value;
    var secondValue = document.getElementById('second-value').value;
    var resultField = document.getElementById('result');
    var calculate = document.getElementById('btn-calc');
    var operators = document.getElementById('operators').getElementsByTagName("a");
    var symb;

    for (var i = 0, len = operators.length; i < len; i++){
        var operatorBtn = operators[i];
        switch (i) {
            case 0:
                operatorBtn.onclick = function(e){
                    e.preventDefault();
                    symb = '+';
                }
                break
            case 1:
                operatorBtn.onclick = function(e){
                    e.preventDefault();
                    symb = '-';
                }
                break
            case 2:
                operatorBtn.onclick = function(e){
                    e.preventDefault();
                    symb = '*';
                }
                break
            case 3:
                operatorBtn.onclick = function(e){
                    e.preventDefault();
                    symb = '/';
                }
                break
            default:
        }
    }
    calculate.onclick = function (){
        simpleCalc();
        /* после реализации вычитал, что eval - зло, но что-то другое придумывать уже не было сил, каюсь */
        resultField.value = eval(firstValue + symb + secondValue);

    };
}
// ***