// // alert("туу будет калькулятор");
// // var rezult = document.getElementById('res').innerHtml;
// // function ac(){
// // 	var zbros = document.getElementById('zbros');
// // 	alert(zbros);
// // }
// // function plus(){
// // 	var pls = document.getElementById('pls').innerHtml;
// // 	alert(pls);
// // }
// // function seven7(){
// // 	var number = document.getElementById('id0').innerHTML;
// // 	number = number
// // 	alert(number);
// // }
// // function three3(){
// // 	var three=document.getElementById('thr');
// // 	three = three.innerHTML;
// // 	alert(three);
// // 	// ++rezult;
// // 	// alert(rezult);
// // 	document.getElementById('res').innerHTML = three; 
// // }
// function func0(){
// 	var getElem = document.getElementById('idZbros').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	// alert(getElem);
// 	document.getElementById('res').innerHTML = 0;
// 	document.getElementById('idZbros').innerHTML = 'AC';
// 	firstMnozh = 0;
// 	secondMnozh = undefined;
// 	sum = 0;
// 	currentSum = 0;
// }
// function func1(){
// 	var getElem = document.getElementById('idZnak').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	alert(getElem);
// }
// function func2(){
// 	var getElem = document.getElementById('idPercent').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	alert(getElem);
// }
// function func3(){
// 	var getElem = document.getElementById('idDelit').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	// alert(getElem);
// 	if(secondMnozh===undefined){
// 		currentFunc = func3;
// 		return;
// 	} else 
// 	if(secondMnozh===0){
// 		document.getElementById('res').innerHTML = 'Ошибка';
// 		error = true;
// 		return;
// 	} else
// 	sum = firstMnozh / secondMnozh;
	
// 	currentSum = sum;
// 	firstMnozh = currentSum;
// 	secondMnozh = undefined;
// }
// function func4(){
// 	var getElem = document.getElementById('idSeven').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	// alert(getElem);
// 	document.getElementById('res').innerHTML = getElem;
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func5(){
// 	var getElem = document.getElementById('idEight').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	// alert(getElem);
// 	document.getElementById('res').innerHTML = getElem;
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func6(){
// 	var getElem = document.getElementById('idNine').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	// alert(getElem);
// 	document.getElementById('res').innerHTML = getElem;
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func7(){
// 	var getElem = document.getElementById('idUmnozh').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	// alert(getElem);
// 	if(secondMnozh===undefined){
// 		currentFunc = func7;
// 		return;
// 	} else
// 	sum = firstMnozh * secondMnozh;
// 	currentSum = sum;
// 	firstMnozh = currentSum;
// 	secondMnozh = undefined;
// }
// function func8(){
// 	var getElem = document.getElementById('idFour').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	document.getElementById('res').innerHTML = getElem;
// 	// alert(getElem);
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func9(){
// 	var getElem = document.getElementById('idFive').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	document.getElementById('res').innerHTML = getElem;
// 	// alert(getElem);
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func10(){
// 	var getElem = document.getElementById('idSix').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	document.getElementById('res').innerHTML = getElem;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	// alert(getElem);
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func11(){
// 	var getElem = document.getElementById('idMinus').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	if(secondMnozh===undefined){
// 		currentFunc = func11;
// 		return;
// 	} else
// 	sum = firstMnozh - secondMnozh;
// 	currentSum = sum;
// 	firstMnozh = currentSum;
// 	secondMnozh = undefined;
// 	// alert(getElem);
// }
// function func12(){
// 	var getElem = document.getElementById('idOne').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	// alert(getElem);
// 	// countREz = fromRez;
// 	document.getElementById('res').innerHTML = getElem;
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func13(){
// 	var getElem = document.getElementById('idTwo').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;

// 	var getElemCopy = getElem;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	// alert(getElem);
// 	// // countREz = fromRez;
// 	// document.getElementById('res').innerHTML = "";
// 	if( parseInt(fromRez)===0 || fromRez==="" ){
// 		document.getElementById('res').innerHTML = "";
// 		document.getElementById('res').innerHTML = getElem;
		
// 	} else{
// 		document.getElementById('res').innerHTML += getElem;
// 			// document.getElementById('res').innerHTML = 0;
// 		getElem = document.getElementById('res').innerHTML;
// 	}
// 	// alert()
// 	for
// 	var check= firstMnozh*10+firstMnozh;
// 	if(firstMnozh===0 || (firstMnozh*10+firstMnozh)===parseInt(getElem)){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func14(){
// 	var getElem = document.getElementById('idThree').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	document.getElementById('idZbros').innerHTML = 'C';
// 	// alert(getElem);
// 	document.getElementById('res').innerHTML = getElem;
// 	// countREz = fromRez;
// 	// first = getElem;
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func15(){
// 	// var getElem = document.getElementById('idPlus').innerHTML;
// 	// var fromRez = document.getElementById('res').innerHTML;
// 	// alert(getElem);
// 	// document.getElementById('res').innerHTML += getElem;
// 	// document.getElementById('res').innerHTML = "";
// 	if(secondMnozh===undefined){
// 		document.getElementById('res').innerHTML = firstMnozh;
		
// 		currentFunc = func15;
// 		return;
// 	} else
// 	sum = firstMnozh + secondMnozh;
// 	currentSum = sum;
// 	firstMnozh = currentSum;
// 	secondMnozh = undefined;
// }
// function func16(){
// 	var getElem = document.getElementById('idZero').innerHTML;
// 	var fromRez = document.getElementById('res').innerHTML;
// 	// alert(getElem);
// 	document.getElementById('res').innerHTML = getElem;
// 	if(firstMnozh===0){
// 		firstMnozh = parseInt(getElem);
// 	} else
// 		secondMnozh = parseInt(getElem);
// }
// function func17(){
// 	var getElem = document.getElementById('idDot').innerHTML;
// 	alert(getElem);
// 	var fromRez = document.getElementById('res').innerHTML;
// 	// document.getElementById('res').innerHTML = getElem;
// }
// function func18(){
// 	// var getElem = document.getElementById('idRavno').innerHTML;
// 	// alert(getElem);
// 	// var fromRez = document.getElementById('res').innerHTML;
// 	// document.getElementById('res').innerHTML += getElem;
// 	// countREz = fromRez.length;
// 	currentFunc();
// 	if(!error){
// 		var fromRez = document.getElementById('res').innerHTML;
// 		document.getElementById('res').innerHTML = sum;
// 	} else
// 	return;
// }
// // var one = func12();
// var firstMnozh = 0;
// var secondMnozh = undefined;
// var sum = 0;
// var currentSum = 0;
// var countREz;
// var cnt=countREz.length;
// var currentFunc;
// var error = false;
// // if(firstMnozh===0){
// // 	firstMnozh = getElem;
// // } else
// // 	secondMnozh = getElem;
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
			currenNumber /= parseFloat(localNumber);
		} else {
			currenNumber = parseFloat(localNumber);
		};

		display.value = currenNumber;
		currentOperation = oper;
	};
	console.log('клик по операции ' + oper);
}

function clear(id){
	display.value = 0;
	newNumber = false;
	currenNumber = 0;
	console.log('клик по кнопке ' + id);
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
	console.log('клик по кнопке '+ symbol)
}

function pressZnak(){
	var currentNumb = parseFloat(display.value);
	currentNumb
	if(currentNumb > 0 ){
		currentNumb -= currentNumb * 2;
	} else if(currentNumb < 0 ){
		currentNumb += currentNumb * 2;
	}
	display.value = currentNumb;
}

function pressPercent(){
	var currentNumb = parseFloat(display.value);
	currentNumb /= 100;
	display.value = currentNumb; 
}