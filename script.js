
var numbers = document.querySelectorAll('.number');
var operations = document.querySelectorAll('.operation');
console.log(operations);
var decimalBtn = document.getElementById('idDecimal');
var acBtn = document.getElementById('ac');
var znakBtn = document.getElementById('idZnak');
var percentBtn = document.getElementById('idPercent');
var display = document.getElementById('res');
var currenNumber = 0;
var newNumber = false;
var currentOperation = '';

for(var i=0; i<numbers.length; i++){
	var number = numbers[i];
	number.addEventListener('click' , function(e){
		console.log(e.target.textContent);
		pressNumber(e.target.textContent);
	})
}

for(var i=0; i<operations.length; i++){
	var operation = operations[i];
	operation.addEventListener('click' , function(e){
		console.log(e.target.textContent);
		pressOperations(e.target.textContent);
	})
}
acBtn.addEventListener('click',function(e){
	clear(e.srcElement.id);
})
decimalBtn.addEventListener('click', function(e){
	pressDecimal(e.srcElement.id);
})
znakBtn.addEventListener('click', pressZnak);
percentBtn.addEventListener('click', pressPercent);

function pressNumber(number){
	if(newNumber){
		display.value = number;
		newNumber = false;
	} else{
		if(display.value==="0"){
			display.value = number;
        } else{
             display.value += number;
        };
    };
    changeSize();
	console.log('клик по цифре '+ number)
};

function pressOperations(oper){
	var localNumber = display.value;
	if(newNumber && currentOperation !=='='){
		display.value = currenNumber;
	} else{
		newNumber = true;
		if(currentOperation === '+'){
			currenNumber += parseFloat(localNumber);
		} else if( currentOperation ==='-'){
			currenNumber -= parseFloat(localNumber);
		} else if( currentOperation ==='X'){
			currenNumber *= parseFloat(localNumber);
		} else if( currentOperation ==='/'){
            if(localNumber === '0'){
                document.getElementById('res').style.fontSize = '57px';
                document.getElementById('res').style.color = 'white';
                display.value = 'Ошибка';
                newNumber = false;
                currenNumber = 0;
                return;
            } else 
            currenNumber /= parseFloat(localNumber);
            
		} else {
			currenNumber = parseFloat(localNumber);
		};
        fixedNumber();
        currentOperation = oper;
        changeSize();
	};
	console.log('клик по операции ' + oper);
}

function clear(id){
	display.value = 0;
	newNumber = false;
	currenNumber = 0;
    console.log('клик по кнопке ' + id);
    document.getElementById('res').style.fontSize = '69px';
}

function pressDecimal(symbol){
	var localDecimal = display.value;
	if(newNumber){
		localDecimal = '.0';
		newNumber = false;
	} else {
		if(localDecimal.indexOf('.') === -1){
			localDecimal += '.';
		};
	};
    display.value = localDecimal;
    changeSize();
	console.log('клик по кнопке '+ symbol)
}

function pressZnak(){
	var currentNumb = parseFloat(display.value);
	currentNumb
	if(currentNumb > 0 ){
		currentNumb -= currentNumb * 2;
	} else if(currentNumb < 0 ){
		currentNumb += currentNumb * -2;
	}
	display.value = currentNumb;
}

function pressPercent(){
	var currentNumb = parseFloat(display.value);
	currentNumb /= 100;
    display.value = currentNumb; 
    changeSize();
}
function changeSize(){
    var displayLength = display.value;
    if(displayLength.length < 5){
        document.getElementById('res').style.fontSize = '69px';
    };
    if(displayLength.length > 5){
        document.getElementById('res').style.fontSize = '50px';
    } 
     if(displayLength.length > 8){
        document.getElementById('res').style.fontSize = '40px';
    }
}
function fixedNumber(){
    if ( currenNumber % 1 == 0) {
        display.value = currenNumber;
    } else{
    var fixedCurrenNumber = 0;
    var decimalCount = f(currenNumber);
    // alert(decimalCount);
    if(decimalCount > 6){
        fixedCurrenNumber = currenNumber.toFixed(6);
        display.value = fixedCurrenNumber;
    } else 
        display.value = currenNumber;
    }
}
const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );