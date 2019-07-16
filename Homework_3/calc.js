/*
 * Implement all your JavaScript in this file!
 */

var opt;
var term1;
var term2;
var oldInput = "";

var eval = function () {
 	if(opt == undefined || term2 == undefined) {
 		return;
 	}
 	else if(opt == "+") {
 		$("#display").val(term1 + term2);
 	}
 	else if(opt == "-") {
 		$("#display").val(term1 - term2);	
 	}
 	else if(opt == "*") {
 		$("#display").val(term1 * term2);	
 	}
 	else {
 		$("#display").val(term1 / term2);	
 	}

 	opt = undefined;
 	term1 = undefined;
 	term2 = undefined;
 	oldInput = "";
 }

 $(".number").click(function () {
 	// body...
 	oldInput = oldInput + $(this).val();
 	if(opt == undefined) {
 		term1 = parseInt(oldInput);
 		$("#display").val(term1);
 	}
 	else {
 		term2 = parseInt(oldInput);
 		$("#display").val(term2);
 	}
 	// console.log(this.value);
 });


 $(".operation").click(function () {
 	if(opt == undefined) {
 		opt = $(this).html();
 		oldInput = "";
 	}
 	else {
 		eval();
 		term1 = parseInt($("#display").val());
 		opt = $(this).html();
 		// oldInput = "";
 	}
 	console.log(opt);
 });


 $("#equalsButton").click(eval);

 $("#clearButton").click(function (){
 	opt = undefined;
	term1 = undefined;
	term2 = undefined;
	oldInput = "";
	$("#display").val("");
 });









