var operationsButtonArray=document.getElementsByClassName('operation-button');

function makeOperation(operationCode) {
    var input2=document.getElementById('number2');
    var input1=document.getElementById('number1');
    var number1=Number(input1.value);
    var number2=Number(input2.value);
    if (operationCode==='+') {
        var result=number1+number2;
    } else if (operationCode==='-') {
        var result=number1-number2;
    } else if (operationCode==='*') {
        var result=number1*number2;
    } else {
        var result=number1/number2;
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement=eventObject.currentTarget;
    var operations=clickedElement.innerHTML;
    makeOperation(operations);
}

for (var i = 0; i < operationsButtonArray.length; i++) {
    var button=operationsButtonArray[i];
    button.addEventListener('click',onOperationButtonClick);
}
