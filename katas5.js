// implemente aqui as funções de teste

const array1 = [0,1,2,3,4,5,6,7,8,9,10]
const array2 = [1,3,5,7,9,11]
const array3 = [1,3,5,3,7,3,1,1,5]
const array4 = [2,4,6,4,4,6]

function reverseString(text){
	return text.split("").reverse().join("")
}

function reverseSentence(text){
	return text.split(" ").reverse().join(" ")
}

function minimumValue(array){
	return array.sort((a,b) => a - b)[0]
	
}
function maxValue(array){
	let last = array.length - 1
	return array.sort((a,b) => a - b)[last]
}
function calculateRemainder(x,y){
	return x%y
}
function distinctValues(array){
	let result = []
	for(let i = 0; i < array.length; i++){
		if(result.indexOf(array[i]) < 0){
			result.push(array[i])
		}
	}
	return result.join(",")
}

function countValues(array){
	let result = []
	let arryN = array.filter((elem, index) => array.indexOf(elem) === index)
	let count = 0
	for(let i = 0; i < arryN.length; i++){
		count = 0
		for(let j = 0; j < array.length; j++){
			if(arryN[i] === array[j]){
				count++
			}
			
		}
		let oi = `${arryN[i]}(${count})`
			result.push(oi)
	}
	return result.join(",")
}


function evaluateExpression(exp, numbers){
	let array = exp.split(" ") 
	let number = 0
	let result = []
	for(let i = 0 ; i < array.length; i++){
		if(array[i] === "a"){
			
			 number = numbers.a
			 result.push(number)
		}
		else if(array[i] === "b"){
			 number = numbers.b
			 result.push(number)	
		}
		else if(array[i] === "c"){
			 number = numbers.c
			 result.push(number)	
		}
		else if(array[i] === "d"){
			 number = numbers.d
			 result.push(number)
		}else{
			result.push(array[i])
		}
	}
	let test = result
	let count = result[0]
	for(let i = 0; i < result.length; i++){
		if(result[i] === "+"){
			count += result[i+1]
		}
		if(result[i] === "-"){
			count -= result[i+1]
		}
	}

return count
}







//Testes 

function testeReverseString1() {
	let result = reverseString("Kenzie Academy");
	let expected = "ymedacA eizneK";
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testeReverseString2() {
	let result = reverseString("Matheus Bueno");
	let expected = "oneuB suehtaM";
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testeReverseSentence1() {
	let result = reverseSentence("O matheus gosta de voce");
	let expected = "voce de gosta matheus O";
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testeReverseSentence2() {
	let result = reverseSentence("Voce gosta de cachorros");
	let expected = "cachorros de gosta Voce";
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue1() {
	let result = minimumValue(array1);
	let expected = 0;
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2(){
	let result = minimumValue(array2);
	let expected = 1;
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaxValue1() {
	let result = maxValue(array1);
	let expected = 10;
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaxValue2(){
	let result = maxValue(array2);
	let expected = 11;
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder1(){
	let result = calculateRemainder(2,4);
	let expected = 2;
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCalculateRemainder2(){
	let result = calculateRemainder(5,10);
	let expected = 5;
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues1(){
	let result = distinctValues(array3);
	let expected = "1,3,5,7"
	console.assert(result === expected, `esperado: ${expected} obtido: ${result}`)
}


function testDistinctValues2(){
	let result = distinctValues(array4);
	let expected = "2,4,6"
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
} 

function testCountValues1(){
	let result = countValues(array3);
	let expected = "1(3),3(3),5(2),7(1)";
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCountValues2(){
	let result = countValues(array4);
	let expected = "2(1),4(3),6(2)";
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testEvaluateExpression1() {
	let result = evaluateExpression("a + b + c + d", {a: 1, b: 7, c: 3, d: 14});
	let expected = 25
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function testEvaluateExpression2() {
	let result = evaluateExpression("a - b - c - d", {a: 4, b: 4, c: 4, d: 4});
	let expected = -8
	console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

testeReverseString1()
testeReverseString2()
testeReverseSentence1()
testeReverseSentence2()
testMinimumValue1()
testMinimumValue2()
testMaxValue1()
testMaxValue2()
testCalculateRemainder1()
testCalculateRemainder2()
testDistinctValues1()
testDistinctValues2()
testCountValues1()
testCountValues2()
testEvaluateExpression1() 
testEvaluateExpression2() 
