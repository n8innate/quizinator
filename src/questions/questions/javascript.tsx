import { IQuestions } from "../../types/types";
import styles from "../../App.module.scss";

export const javascriptQuestions: IQuestions[] = [
	{
		rating: 0,
		subject: 'javascript',
		topic: "Basic JavaScript",
		level: 0,
		question:
			"What are the different data types present in JavaScript? (Primitive [7] and Non-primitive [9] types)",
		answer: (
			<>
				<p>
					To know the type of a JavaScript variable, we can use the typeof
					operator.
				</p>
				<p>
					<strong>Primitive types</strong>
				</p>
				<ul>
					<li>
						<strong>String:</strong> Represents a series of characters and is
						written with quotes. A string can be represented using a single or a
						double quote.
					</li>
					<li>
						<strong>Number:</strong> Represents a number and can be written with
						or without decimals.
					</li>
					<li>
						<strong>BigInt:</strong> Used to store numbers which are above the
						limitation of the Number data type. It can store large integers and
						is represented by adding “n” to an integer literal.
					</li>
					<li>
						<strong>Boolean:</strong> Represents a logical entity and can have
						only two values : true or false. Booleans are generally used for
						conditional testing.
					</li>
					<li>
						<strong>Undefined:</strong> When a variable is declared but not
						assigned, it has the value of undefined and it’s type is also
						undefined.
					</li>
					<li>
						<strong>Null:</strong> Represents a non-existent or a invalid value.
					</li>
					<li>
						<strong>Symbol:</strong> A data type introduced in the ES6 version
						of JavaScript. It is used to store an anonymous and unique value.
					</li>
				</ul>
				<p>
					Primitive data types can store only a single value. To store multiple
					and complex values, non-primitive data types are used.
				</p>
				<p>
					<strong>Non-primitive types</strong>
				</p>
				<ul>
					<li>
						<strong>Object:</strong> Used to store collection of data as
						key/value pairs.
					</li>
					<li>
						<strong>Dates:</strong> Used to store date and time.
					</li>
					<li>
						<strong>Array:</strong> Used to store multiple values in a single
						variable and can be accessed using an index.
					</li>
					<li>
						<strong>Typed Arrays:</strong> Used to store binary data in the form
						of integers, floats, or doubles.
					</li>
					<li>
						<strong>Maps:</strong> Used to store key-value pairs and remembers
						the original insertion order of the keys.
					</li>
					<li>
						<strong>Sets:</strong> Used to store unique values of any type.
					</li>
					<li>
						<strong>WeakMaps:</strong> Used to store key-value pairs where the
						key is an object.
					</li>
					<li>
						<strong>WeakSets:</strong> Used to store unique objects only.
					</li>
					<li>
						<strong>JSON</strong> Used to store and exchange data.
					</li>
				</ul>
				<p>
					Note: It is important to remember that any data type that is not a
					primitive data type, is of Object type in JavaScript.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Basic JavaScript",
		level: 0,
		question: "Explain Hoisting in JavaScript.",
		answer: (
			<>
				<p>
					Hoisting is the default behaviour of JavaScript where all the variable
					and function declarations are moved on top.
				</p>
				<p>
					This means that irrespective of where the variables and functions are
					declared, they are moved on top of the scope. The scope can be both
					local and global.
				</p>
				<pre>
					<div className={styles.appCode}>{`
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;
        `}</div>
				</pre>

				<pre>
					<div className={styles.appCode}>{`
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 
        `}</div>
				</pre>

				<pre>
					<div className={styles.appCode}>{`
// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething(); // Outputs 33 since the local variable “x” is hoisted inside the local scope
        `}</div>
				</pre>
				<p>
					Note: Variable initializations are not hoisted, only variable
					declarations are hoisted:
				</p>
				<pre>
					<div className={styles.appCode}>{`
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;
        `}</div>
				</pre>
				<p>
					Note: To avoid hoisting, you can run JavaScript in strict mode by
					using “use strict” on top of the code:
				</p>
				<pre>
					<div className={styles.appCode}>{`
"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Basic JavaScript",
		level: 0,
		question:
			"What is the difference between “==” and “===” operators in JavaScript?",
		answer: (
			<>
				<p>
					Both are comparison operators. The difference between both the
					operators is that “==” is used to compare values whereas, “ === “ is
					used to compare both values and types.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Basic JavaScript",
		level: 0,
		question:
			"What are some differences between var, let and const keywords in JavaScript.",
		answer: (
			<>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>var</th>
							<th>let</th>
							<th>const</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Released</td>
							<td>1995 (official ES1 1997)</td>
							<td>ES6 (2015)</td>
							<td>ES6 (2015)</td>
						</tr>
						<tr>
							<td>Stored in global state</td>
							<td>yes</td>
							<td>no</td>
							<td>no</td>
						</tr>
						<tr>
							<td>Function scope</td>
							<td>yes</td>
							<td>yes</td>
							<td>yes</td>
						</tr>
						<tr>
							<td>Block scope</td>
							<td>no</td>
							<td>yes</td>
							<td>yes</td>
						</tr>
						<tr>
							<td>Can be reassigned/reinitialized</td>
							<td>yes</td>
							<td>yes</td>
							<td>no</td>
						</tr>
						<tr>
							<td>Can be redeclared</td>
							<td>yes</td>
							<td>no</td>
							<td>no</td>
						</tr>
						<tr>
							<td>Can be hoisted</td>
							<td>yes</td>
							<td>no</td>
							<td>no</td>
						</tr>
					</tbody>
				</table>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Basic JavaScript",
		level: 0,
		question: "Explain Implicit Type Coercion in JavaScript. (3)",
		answer: (
			<>
				<p>
					Implicit type coercion in JavaScript is the automatic conversion of
					value from one data type to another. It takes place when the operands
					of an expression are of different data types.
				</p>
				<ul>
					<li>
						<strong>String coercion:</strong> String coercion takes place while
						using the ‘ + ‘ operator. When a number is added to a string, the
						number type is always converted to the string type.
						<p>
							Note: ‘ + ‘ operator when used to add two numbers, outputs a
							number. The same ‘ + ‘ operator when used to add two strings,
							outputs the concatenated string
						</p>
					</li>
					<li>
						<strong>Boolean Coercion:</strong> Takes place when using logical
						operators, ternary operators, if statements, and loop checks. To
						understand boolean coercion in if statements and operators, we need
						to understand truthy and falsy values. Truthy values are those which
						will be converted (coerced) to true. Falsy values are those which
						will be converted to false. All values except false, 0, 0n, -0, “”,
						null, undefined, and NaN are truthy values.
						<p>
							Logical operators in JavaScript, unlike operators in other
							programming languages, do not return true or false. They always
							return one of the operands.
						</p>
						<p>
							OR ( | | ) operator - If the first value is truthy, then the first
							value is returned. Otherwise, always the second value gets
							returned.
						</p>
						<p>
							AND ( && ) operator - If both the values are truthy, always the
							second value is returned. If the first value is falsy then the
							first value is returned or if the second value is falsy then the
							second value is returned.
						</p>
					</li>
					<li>
						<strong>Equality Coercion:</strong> Equality coercion takes place
						when using ‘ == ‘ operator, which compares values and not types.
						While this is a simple way to explain == operator, it’s not
						completely true because coercion takes place. It converts both the
						operands to the same type and then compares them.
						<p>
							Note: Coercion does not take place when using the ‘===’ operator.
							Both operands are not converted to the same type in the case of
							‘===’ operator.
						</p>
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Basic JavaScript",
		level: 0,
		question:
			"Is JavaScript a statically typed or a dynamically typed language?",
		answer: (
			<>
				<p>
					JavaScript is a dynamically typed language, so the type of a variable
					is checked during run-time in contrast to a statically typed language,
					where the type of a variable is checked during compile-time. Since
					JavaScript is a loosely(dynamically) typed language, variables in JS
					are not associated with any type. A variable can hold the value of any
					data type.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Basic JavaScript",
		level: 0,
		question: "Describe NaN property in JavaScript? (3)",
		answer: (
			<>
				<ul>
					<li>
						NaN property represents the “Not-a-Number” value. It indicates a
						value that is not a legal number.
					</li>
					<li>typeof of NaN will return a Number.</li>
					<li>
						To check if a value is NaN, we use the isNaN() function, which
						converts the given value to a Number type, and then equates to NaN.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "Explain passed by value and passed by reference.",
		answer: (
			<>
				<p>
					In JavaScript, primitive data types are passed by value and
					non-primitive data types are passed by reference.
				</p>
				<p>
					For understanding passed by value and passed by reference, we need to
					understand what happens when we create a variable and assign a value
					to it,
				</p>
				<div className={styles.appCode}>{`var x = 2;`}</div>
				<pre>
					<div className={styles.appCode}>{``}</div>
				</pre>
				<p>
					In the above example, we created a variable x and assigned it a value
					of “2”. In the background, the “=” (assign operator) allocates some
					space in the memory, stores the value “2” and returns the location of
					the allocated memory space. Therefore, the variable x in the above
					code points to the location of the memory space instead of pointing to
					the value 2 directly.
				</p>
				<pre>
					<div className={styles.appCode}>{`
var y = 234;
var z = y;
        `}</div>
				</pre>
				<p>
					In the above example, the assign operator knows that the value
					assigned to y is a primitive type (number type in this case), so when
					the second line code executes, where the value of y is assigned to z,
					the assign operator takes the value of y (234) and allocates a new
					space in the memory and returns the address. Therefore, variable z is
					not pointing to the location of variable y, instead, it is pointing to
					a new location in the memory.
				</p>
				<div className={styles.appCode}>{`y = 23;`}</div>
				<p>
					Primitive data types when passed to another variable, are passed by
					value. If we update the value of y to 23, z retains the value 234
					because instead of just assigning the same address to another
					variable, the value is passed and new space of memory is created.
				</p>
				<pre>
					<div className={styles.appCode}>{`
var obj = { foo: "bar" };
var obj2 = obj;
        `}</div>
				</pre>
				<p>
					In the above example, the assign operator directly passes the location
					of the variable obj to the variable obj2. In other words, the
					reference of the variable obj is passed to the variable obj2.
				</p>
				<div className={styles.appCode}>{`obj.foo = "bizz"`}</div>
				<p>
					The value for obj and obj2 both update since both the variables are
					pointing to the same address.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is an Immediately Invoked Function?",
		answer: (
			<>
				<p>
					An Immediately Invoked Function ( known as IIFE and pronounced as
					IIFY) is a function that runs as soon as it is defined (AKA
					self-invoking functions).
				</p>
				<pre>
					<div className={styles.appCode}>{`
(function(){ 
  // Do something;
})();
      `}</div>
				</pre>
				<p>
					Note the wrapping parenthesis. While executing JavaScript code,
					whenever the compiler sees the word “function”, it assumes that we are
					declaring a function in the code. Therefore, if we do not use the
					wrapping parentheses, the compiler throws an error because it thinks
					we are declaring a function, and by the syntax of declaring a
					function, a function should always have a name.
				</p>
				<p>
					Also note the open/close parenthesis at the end (before the
					semicolon). From the definition of an IIFE, we know that our code
					should run as soon as it is defined. A function runs only when it is
					invoked. If we do not invoke the function, the function declaration is
					returned. Therefore to invoke the function, we use the final set of
					parenthesis.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is strict mode?",
		answer: (
			<>
				<p>
					Starting ECMAScript 5, Strict Mode allows you to write a code or a
					function in a "strict" operational environment. In most cases, this
					language is 'not particularly severe' when it comes to throwing
					errors. In 'Strict mode,' however, all forms of errors, including
					silent errors, will be thrown. As a result, debugging becomes a lot
					simpler. Thus programmer's chances of making an error are lowered.
				</p>
				<p>Some characteristics of strict mode in JavaScript:</p>
				<ul>
					<li>Duplicate arguments are not allowed by developers.</li>
					<li>
						In strict mode, you won't be able to use the JavaScript keyword as a
						parameter or function name.
					</li>
					<li>
						The 'use strict' keyword is used to define strict mode at the start
						of the script. Strict mode is supported by all browsers.
					</li>
					<li>
						You are not be allowed to create global variables in 'Strict Mode.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "Explain Higher Order Functions in JavaScript",
		answer: (
			<>
				<p>
					Functions that operate on other functions, either by taking them as
					arguments or by returning them, are called higher-order functions.
					Higher-order functions are a result of functions being first-class
					citizens in JavaScript. Examples of higher-order functions:
				</p>
				<pre>
					<div className={styles.appCode}>{`
function higherOrder(fn) {
  fn();
}
   
higherOrder(function() { console.log("Hello world") });  
function higherOrder2() {
  return function() {
    return "Do something";
  }
}      
var x = higherOrder2();
x()   // Returns "Do something"
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "Explain “this” keyword.",
		answer: (
			<>
				<p>
					A function's this keyword behaves a little differently in JavaScript
					compared to other languages. It also has some differences between
					strict mode and non-strict mode. In most cases, the value of this is
					determined by how a function is called (runtime binding). It can't be
					set by assignment during execution, and it may be different each time
					the function is called. The Function.prototype.bind() method can set
					the value of a function's this regardless of how it's called, and
					arrow functions don't provide their own this binding (it retains the
					this value of the enclosing lexical context).
				</p>
				<pre>
					<div className={styles.appCode}>{`
function doSomething() {
  console.log(this);
}
    
doSomething();
        `}</div>
				</pre>
				<p>
					Since the function is invoked in the global context, the function is a
					property of the global object. Therefore, the output of the above code
					will be the global object. Since we ran the above code inside the
					browser, the global object is the window object.
				</p>
				<pre>
					<div className={styles.appCode}>{`
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
// Expected output: 42
        `}</div>
				</pre>
				<p>
					In the above code, at the time of invocation, the func function is a
					property of the object test, therefore, this keyword will refer to the
					object test, and hence the output will be 42.
				</p>
				<pre>
					<div className={styles.appCode}>{`
var obj = {
  foo:  "bar",
  getFoo: function(){
  console.log(this.foo);
}
   
}
     
var getFoo = obj.getFoo;
     
var obj2 = {foo:"bizz", getFoo };
obj2.getFoo();        
        `}</div>
				</pre>
				<p>
					The output will be “bizz”. Although the getFoo function is declared
					inside the object obj, at the time of invocation, getFoo() is a
					property of obj2, therefore the “this” keyword will refer to obj2.
				</p>
				<p>
					The shortcut for understanding the “this” keyword is, whenever the
					function is invoked, check the object before the dot. The value of
					"this" keyword will always be the object before the dot. If there is
					no object before the dot, as in the first example above, the value of
					this keyword will be the global object.
				</p>
				<pre>
					<div className={styles.appCode}>{``}</div>
				</pre>
				<p></p>
				<pre>
					<div className={styles.appCode}>{``}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is the call() method?",
		answer: (
			<>
				<p>
					It’s a predefined method in JavaScript that invokes a method
					(function) with a given "this" value and arguments provided
					individually and allows an object to use the method (function) of
					another object.
				</p>
				<pre>
					<div className={styles.appCode}>{`
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// Expected output: "cheese"        
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is the apply() method?",
		answer: (
			<>
				<p>
					The apply() method is similar to the call() method, but takes
					arguments as an array instead of individual arguments. This method
					returns a new function, where the value of “this” keyword will be
					bound to the owner object, which is provided as a parameter.
				</p>
				<pre>
					<div className={styles.appCode}>{`
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is the bind() method?",
		answer: (
			<>
				<p>
					The bind() method of Function instances creates a new function that,
					when called, calls this function with its this keyword set to the
					provided value, and a given sequence of arguments preceding any
					provided when the new function is called.
				</p>
				<pre>
					<div className={styles.appCode}>{`
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42      
      `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is the test() method?",
		answer: (
			<>
				<p>
					The test() method of RegExp instances executes a search with this
					regular expression for a match between a regular expression and a
					specified string. Returns true if there is a match; false otherwise.
				</p>
				<p>
					JavaScript RegExp objects are stateful when they have the global or
					sticky flags set (e.g., /foo/g or /foo/y). They store a lastIndex from
					the previous match. Using this internally, test() can be used to
					iterate over multiple matches in a string of text (with capture
					groups).
				</p>
				<pre>
					<div className={styles.appCode}>{`
const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 0

console.log(globalRegex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 9

console.log(globalRegex.test(str));
// Expected output: false
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is the exec() method?",
		answer: (
			<>
				<p>
					The exec() method of RegExp instances executes a search with this
					regular expression for a match in a specified string and returns a
					result array, or null.
				</p>
				<pre>
					<div className={styles.appCode}>{`
const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log('Found ' + array1[0] + '. Next starts at ' + regex1.lastIndex + '.');  // Expected output: "Found foo. Next starts at 9."
  // Expected output: "Found foo. Next starts at 19."
}        
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Advanced JavaScript",
		level: 2,
		question: "What is currying in JavaScript?",
		answer: (
			<>
				<p>
					Currying is an advanced technique to transform a function of arguments
					n, to n functions of one or fewer arguments. Example of a curried
					function:
				</p>
				<pre>
					<div className={styles.appCode}>{`
function add (a) {
  return function(b){
    return a + b;
  }
}

add(3)(4)       
        `}</div>
				</pre>
				<p>
					If we have a function f(a,b), then the function after currying, will
					be transformed to f(a)(b). By using the currying technique, we do not
					change the functionality of a function, we just change the way it is
					invoked.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are some advantages of using External JavaScript?",
		answer: (
			<>
				<p>
					External JavaScript is the JavaScript Code (script) written in a
					separate file with the extension ".js", and then we link that file
					inside the {`<head>`} or {`<body>`} element of the HTML file where the
					code is to be placed. Some advantages of external JavaScript are:
				</p>
				<ul>
					<li>It allows teams to collaborate on HTML and JavaScript files.</li>
					<li>Improves code reusability.</li>
					<li>Improves code readability</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "Explain scope in JavaScript.",
		answer: (
			<>
				<p>
					Scope in JS determines the accessibility of variables and functions at
					various parts of one’s code. In general terms, the scope will let us
					know at a given part of code, what are variables and functions we can
					or cannot access. There are three types of scopes in JS:
				</p>
				<ul>
					<li>
						<strong>Global Scope:</strong> Variables or functions declared in
						the global namespace have global scope, which means all the
						variables and functions having global scope can be accessed from
						anywhere inside the code.
					</li>
					<li>
						<strong>Function Scope:</strong> Any variables or functions declared
						inside a function have local/function scope, which means that all
						the variables and functions declared inside a function, can be
						accessed from within the function and not outside of it.
					</li>
					<li>
						<strong>Block Scope:</strong> Block scope is related to the
						variables declared using let and const. Variables declared with var
						do not have block scope. Block scope tells us that any variable
						declared inside a block {}, can be accessed only inside that block
						and cannot be accessed outside of it.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "Explain scope chain in JavaScript.",
		answer: (
			<>
				<p>
					JavaScript engine uses Scope to find variables. If the JavaScript
					engine does not find the variable in local scope, it tries to check
					for the variable in the outer scope. If the variable does not exist in
					the outer scope, it tries to find the variable in the global scope. If
					the variable is not found in the global space as well, a reference
					error is thrown.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Advanced JavaScript",
		level: 2,
		question: "Explain closures in JavaScript.",
		answer: (
			<>
				<p>
					A closure is the combination of a function bundled together (enclosed)
					with references to its surrounding state (the lexical environment). In
					other words, a closure gives you access to an outer function’s scope
					from an inner function. A closure is created when a function is
					returned from another function, and the returned function has access
					to the variables of the outer function, even after the outer function
					has finished executing.
				</p>
				<pre>
					<div className={styles.appCode}>{`
function outerFunction() {
  var outerVariable = "I am from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

var innerFunc = outerFunction();
innerFunc(); // Outputs "I am from outer function"
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are some advantages of JavaScript?",
		answer: (
			<>
				<ul>
					<li>JavaScript is easy to learn and implement.</li>
					<li>
						JavaScript is a client-side scripting language, so it runs on the
						user’s computer and does not require any resources from the web
						server.
					</li>
					<li>
						JavaScript is a versatile language and can be used for a wide range
						of applications.
					</li>
					<li>
						JavaScript is a lightweight language and is easy to integrate with
						other languages.
					</li>
					<li>
						JavaScript is a powerful language and can be used to create complex
						applications.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are object prototypes?",
		answer: (
			<>
				<p>
					All JavaScript objects inherit properties from a prototype. For
					example:
				</p>
				<ul>
					<li>Date objects inherit properties from the Date prototype</li>
					<li>Math objects inherit properties from the Math prototype</li>
					<li>Array objects inherit properties from the Array prototype.</li>
				</ul>
				<p>
					The top of the chain is Object.prototype. Every prototype inherits
					properties and methods from the Object.prototype.
				</p>
				<p>
					A prototype is a blueprint of an object. The prototype allows us to
					use properties and methods on an object even if the properties and
					methods do not exist on the current object.
				</p>
				<p>
					For example, we do not have to define a property or method called
					"push" because of prototypes. Array objects inherit properties from
					the Array prototype. The JavaScript engine sees that the method push
					does not exist on the current array object and therefore, looks for
					the method push inside the Array prototype and it finds the method.
				</p>
				<p>
					Whenever the property or method is not found on the current object,
					the JavaScript engine will always try to look in its prototype and if
					it still does not exist, it looks inside the prototype's prototype and
					so on.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are callbacks?",
		answer: (
			<>
				<p>
					A callback is a function that will be executed after another function
					gets executed. In JavaScript, functions are treated as first-class
					citizens, they can be used as an argument of another function, can be
					returned by another function, and can be used as a property of an
					object. Functions that are used as an argument to another function are
					called callback functions and are executed after another function gets
					executed.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are three types of errors in JavaScript?",
		answer: (
			<>
				<ul>
					<li>
						<strong>Syntax errors:</strong> These are errors that occur when the
						JavaScript engine encounters incorrect syntax. Syntax errors are
						detected during the parsing of the code.
					</li>
					<li>
						<strong>Runtime errors:</strong> These are errors that occur during
						the execution of the code. Runtime errors are not detected during
						the parsing of the code, but only when the code is executed.
					</li>
					<li>
						<strong>Logical errors:</strong> These are errors that occur when
						the code does not do what it is intended to do. Logical errors are
						not detected by the JavaScript engine, but by the programmer.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is memoization?",
		answer: (
			<>
				<p>
					Memoization is a form of caching where the return value of a function
					is cached based on its parameters. If the parameter of that function
					is not changed, the cached version of the function is returned.
					Memoization is an important tool for optimizing expensive function
					calls. Here's a simple example:{" "}
				</p>
				<pre>
					<div className={styles.appCode}>{`
function memoizedAddTo10(){
  var cache = {};

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]
    }
    else{
      cache[num] = num + 10;
      return cache[num];
    }
  }
}
var memoizedFunc = memoizedAddTo10();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return        
        `}</div>
				</pre>
				<p>
					Note: Although using memoization saves time, it results in larger
					consumption of memory since we are storing all the computed results.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is recursion?",
		answer: (
			<>
				<p>
					Recursion is a technique to iterate over an operation by having a
					function call itself repeatedly until it arrives at a result. The
					following function calculates the sum of all the elements in an array
					by using recursion:
				</p>
				<pre>
					<div className={styles.appCode}>{`
function computeSum(arr){
  if(arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + computeSum(arr);
  }
}
computeSum([7, 8, 9, 99]); // Returns 123        
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are constructor functions?",
		answer: (
			<>
				<p>
					Constructor functions are used to create objects. If we want to create
					multiple objects having similar properties and methods, constructor
					functions are used.
				</p>
				<p>
					Note- The name of a constructor function should always be written in
					Pascal Notation: every word should start with a capital letter.
				</p>
				<pre>
					<div className={styles.appCode}>{`
function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var person1 = new Person("Frank", 22, "male");
console.log(person1);

var person2 = new Person("Susan", 37, "female");
console.log(person2);      
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is DOM?",
		answer: (
			<>
				<p>
					DOM stands for Document Object Model. DOM is a programming interface
					for HTML and XML documents. When the browser tries to render an HTML
					document, it creates an object based on the HTML document called DOM.
					Using this DOM, we can manipulate or change various elements inside
					the HTML document.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question:
			"Which method is used to retrieve a character from a certain index?",
		answer: (
			<>
				<p>
					The charAt() function of the JavaScript string finds a char element at
					the supplied index. The index number begins at 0 and continues up to
					n-1, Here n is the string length. The index value must be positive,
					higher than, or the same as the string length.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is BOM?",
		answer: (
			<>
				<p>
					Browser Object Model is known as BOM. It allows users to interact with
					the browser. A browser's initial object is a window. As a result, you
					may call all of the window's functions directly or by referencing the
					window. The document, history, screen, navigator, location, and other
					attributes are available in the window object.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is client-side versus server-side JavaScript?",
		answer: (
			<>
				<p>
					Client-side JavaScript is made up of two parts, a fundamental language
					and predefined objects for performing JavaScript in a browser.
					JavaScript for the client is automatically included in the HTML pages.
					At runtime, the browser understands this script.
				</p>
				<p>
					Server-side JavaScript, involves the execution of JavaScript code on a
					server in response to client requests. It handles these requests and
					delivers the relevant response to the client, which may include
					client-side JavaScript for subsequent execution within the browser.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are arrow functions?",
		answer: (
			<>
				<p>
					Arrow functions were introduced in the ES6 version of JavaScript and
					offer shorter syntax for declaring functions. Arrow functions can only
					be used as a function expression.
				</p>
				<p>
					Arrow functions are declared without the function keyword. If there is
					only one returning expression then the return keyword is not needed.
					Also, for functions having just one line of code, curly braces {} can
					be omitted.
				</p>
				<p>
					If the function takes in only one argument, then the parenthesis ()
					around the parameter can be omitted as shown in the code above.{" "}
				</p>
				<p>
					The biggest difference between the traditional function expression and
					the arrow function is the handling of the "this" keyword. By general
					definition, "this" always refers to the object that is calling the
					function. In the arrow functions, there is no binding of "this", so
					inside an arrow function "this" does not refer to the object calling
					it. It rather inherits its value from the parent scope which is the
					window object in this case.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Advanced JavaScript",
		level: 2,
		question: "What is the Prototype Design Pattern?",
		answer: (
			<>
				<p>
					The Prototype Design Pattern is a creational design pattern that is
					used to create objects. It is used when the type of objects to create
					is determined by a prototypical instance, which is cloned to produce
					new objects. This pattern is used to create new objects by copying an
					existing object, known as the prototype. The prototype object is
					cloned to produce a new object. The prototype object is used as a
					blueprint for each object the constructor creates. The new object is
					created by copying the prototype object and then customizing it.
				</p>
				<p>
					JavaScript uses the prototype design pattern for inheritance. In
					JavaScript, each object has a prototype object. The prototype object
					is a reference to another object. When an object is created, it
					inherits all the properties and methods from its prototype object. The
					prototype object is used to add new properties and methods to all
					objects of a certain type.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is the rest parameter",
		answer: (
			<>
				<p>
					The rest parameter ( … ) allows us to create functions that can take a
					variable number of arguments. Any number of arguments will be
					converted into an array using the rest parameter. It also helps in
					extracting all or some parts of the arguments. Rest parameters can be
					used by applying three dots (...) before the parameters.
				</p>
				<pre>
					<div className={styles.appCode}>{`
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
        `}</div>
				</pre>
				<p>
					Note: The rest parameter should always be used at the last parameter
					of a function.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is the spread operator?",
		answer: (
			<>
				<p>
					Spread operator (…) sytax is exactly the same as the rest parameter,
					but is used for spreading arrays and object literals. We also use
					spread operators where one or more arguments are expected in a
					function call.
				</p>
				<pre>
					<div className={styles.appCode}>{`
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question:
			"What are some different ways to create an object in JavaScript? (4)",
		answer: (
			<>
				<ul>
					<li>
						<strong>Object Literals:</strong> This is the most common way to
						create an object. It is created by wrapping the properties and
						methods in curly braces.
					</li>
					<li>
						<strong>Object.create() method:</strong> This method creates a new
						object, using an existing object as the prototype of the newly
						created object.
					</li>
					<li>
						<strong>Constructor Functions:</strong> Constructor functions are
						used to create objects. If we want to create multiple objects having
						similar properties and methods, constructor functions are used.
					</li>
					<li>
						<strong>Class:</strong> ES6 introduced the class keyword which is
						used to create objects. The class keyword is a more modern way to
						create objects.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are promises?",
		answer: (
			<>
				<p>
					A promise is an object that represents the eventual completion or
					failure of an asynchronous operation. A promise is a proxy for a value
					not necessarily known when the promise is created. It allows us to
					associate handlers with an asynchronous action's eventual success
					value or failure reason. This lets asynchronous methods return values
					like synchronous methods: instead of the final value, the asynchronous
					method returns a promise of having a value at some point in the
					future.
				</p>
				<p>
					There are three states of a promise: pending, fulfilled, and rejected.
					A promise is in the pending state when it is created. It is in the
					fulfilled state when the operation is successful and in the rejected
					state when the operation fails.
				</p>
				<p>Here is an example of a promise:</p>
				<pre>
					<div className={styles.appCode}>{`
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }
  , 1000);
}
);
promise.then((value) => {
  console.log(value);
}
);
        `}</div>
				</pre>
				<p>Output: Success!</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are classes?",
		answer: (
			<>
				<p>
					Introduced in the ES6 version, classes provide syntactical sugar for
					declareing constructor functions. Unlike functions, classes are not
					hoisted. A class cannot be used before it is declared. A class can
					inherit properties and methods from other classes by using the extend
					keyword. All the syntaxes inside the class must follow the strict
					mode(‘use strict’) of JavaScript. An error will be thrown if the
					strict mode rules are not followed.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Advanced JavaScript",
		level: 2,
		question: "What are generator functions?",
		answer: (
			<>
				<p>
					Generator functions are a special class of functions that can be
					stopped midway and then continue from where they had stopped.
					Generator functions are declared with the function* keyword instead of
					the normal function keyword. In normal functions, we use the return
					keyword to return a value and as soon as the return statement gets
					executed, the function execution stops. Generator functions, when
					called, do not execute the code, instead, they return a generator
					object. This generator object handles the execution and consists of a
					method called next() which, when called, executes the code until the
					nearest yield statement, and returns the yield value.
				</p>
				<pre>
					<div className={styles.appCode}>{`
function* generatorFunction(){
  yield 1;
  yield 2;
  yield 3;
}
const generator = generatorFunction();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
          `}</div>
				</pre>
				<p>Generator functions can be used to return iterators.</p>
				<pre>
					<div className={styles.appCode}>{`
function* iteratorFunc() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
      count++;
      yield i;
  }
  return count;
}

let iterator = iteratorFunc();
console.log(iterator.next()); // {value:0,done:false}
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:true}         
          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Advanced JavaScript",
		level: 2,
		question: "What is a WeakSet?",
		answer: (
			<>
				<p>
					A Set is a collection of unique and ordered elements. Just like Set,
					WeakSet is also a collection of unique and ordered elements with some
					key differences:
				</p>
				<ul>
					<li>
						WeakSet can only contain objects and not any other type of values.
					</li>
					<li>
						Unlike Set, WeakSet only has three methods, add() , delete() and
						has().
					</li>
					<li>
						WeakSet is not iterable, so it does not have the keys() and values()
						methods.
					</li>
					<li>WeakSet does not have a size property.</li>
					<li>
						An object inside the weakset is referenced weakly. This means, that
						if the object inside the weakset does not have a reference, it will
						be garbage collected
					</li>
				</ul>
				<pre>
					<div className={styles.appCode}>{`
let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // Output: true
weakSet.delete(obj);
console.log(weakSet.has(obj)); // Output: false
          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "Why do we use callbacks?",
		answer: (
			<>
				<p>
					A callback function is a method that is sent as an input to another
					function is executed inside the main function after it has completed
					execution.
				</p>
				<p>
					JavaScript is a scripting language that is based on events. Instead of
					waiting for a reply before continuing, JavaScript will continue to run
					while monitoring for additional events. Callbacks are a technique of
					ensuring that a particular code does not run until another code has
					completed its execution.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Advanced JavaScript",
		level: 2,
		question: "What is a WeakMap?",
		answer: (
			<>
				<p>
					Maps are used to store key-value pairs. The key-value pairs can be of
					both primitive and non-primitive types. WeakMaps are similar to Maps
					with key differences:
				</p>
				<ul>
					<li>
						WeakMap can only contain objects as keys and not any other type of
						values.
					</li>
					<li>
						WeakMap is not iterable, so it does not have the keys() and values()
						methods.
					</li>
					<li>WeakMap does not have a size property.</li>
					<li>
						An object inside the weakmap is referenced weakly. This means, that
						if the object inside the weakmap does not have a reference, it will
						be garbage collected
					</li>
				</ul>
				<pre>
					<div className={styles.appCode}>{`
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "value");
console.log(weakMap.get(obj)); // Output: value
weakMap.delete(obj);
console.log(weakMap.get(obj)); // Output: undefined
          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is Object Destructuring?",
		answer: (
			<>
				<p>
					Object destructuring is a way to extract elements from an object or an
					array:
				</p>
				<pre>
					<div className={styles.appCode}>{`
const person = {
  name: "John",
  age: 25,
};
const {name, age} = person;
          `}</div>
				</pre>
				<p>
					Here, we are extracting the name and age properties from the person
					object and assigning them to the variables name and age.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Advanced JavaScript",
		level: 2,
		question: "How are prototypal and classical inheritance different? (3)",
		answer: (
			<>
				<p>
					Prototypal inheritance is a pattern where objects can inherit
					properties from other objects. In prototypal inheritance, objects can
					inherit properties from other objects. In classical inheritance,
					objects inherit properties from classes. In classical inheritance,
					classes are used to create objects. In prototypal inheritance, objects
					are used to create objects.
				</p>
				<p>
					Prototypal inheritance is a more flexible pattern than classical
					inheritance. In prototypal inheritance, objects can inherit properties
					from multiple objects. In classical inheritance, objects can inherit
					properties from only one class.
				</p>
				<p>
					Prototypal inheritance is a more dynamic pattern than classical
					inheritance. In prototypal inheritance, objects can inherit properties
					from other objects at runtime. In classical inheritance, objects
					inherit properties from classes at compile time.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What is a Temporal Dead Zone?",
		answer: (
			<>
				<p>
					Temporal Dead Zone is a behaviour that occurs with variables declared
					using let and const keywords. It is a behaviour where we try to access
					a variable before it is initialized. Examples of temporal dead zone:
				</p>
				<pre>
					<div className={styles.appCode}>{`
console.log(x); // Output: ReferenceError: x is not defined
let x = 10;
          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "What are the three main categories of design patterns?",
		answer: (
			<>
				<ul>
					<li>
						<strong>Creational Patterns:</strong> These patterns deal with
						object creation mechanisms, trying to create objects in a manner
						suitable to the situation.
					</li>
					<li>
						<strong>Structural Patterns:</strong> These patterns deal with
						object composition. They describe ways to compose objects to obtain
						new functionality.
					</li>
					<li>
						<strong>Behavioral Patterns:</strong> These patterns deal with
						object collaboration. They describe how objects interact and
						distribute responsibility.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "Is JavaScript a pass-by-reference or pass-by-value language?",
		answer: (
			<>
				<p>
					The variable's data is always a reference for objects, hence it's
					always pass by value. As a result, if you supply an object and alter
					its members inside the method, the changes continue outside of it. It
					appears to be pass by reference in this case. However, if you modify
					the values of the object variable, the change will not last,
					demonstrating that it is indeed passed by value.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question:
			"What are the differences in the way Async/Await and Generators achieve the same functionality?",
		answer: (
			<>
				<p>
				Async/await and generators are both features in JavaScript that can be used to handle asynchronous operations and achieve similar functionality. However, they have different approaches and syntax.
				</p>
				<p>
				Async/await is a more recent addition to JavaScript and provides a more straightforward and intuitive way to write asynchronous code. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and reason about.  Here's an example of using async/await:
				</p>
				<pre>
					<div className={styles.appCode}>{`
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

			`}</div>
				</pre>
				<p>In this example, the fetchData function is declared as async, which means it can use the await keyword inside it. The await keyword is used to pause the execution of the function until the awaited promise is resolved or rejected. This allows you to write asynchronous code in a more sequential and readable manner.</p>
				<p>On the other hand, generators are a feature introduced in ES6 that allow you to define functions that can be paused and resumed. They are denoted by the function* syntax and use the yield keyword to pause the execution of the generator function and return a value.  Here's an example of using generators:</p>

				<pre>
					<div className={styles.appCode}>{`
function* generateSequence() {
	yield 1;
	yield 2;
	yield 3;
}

const sequence = generateSequence();

console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
					`}</div>
				</pre>
				<p>In this example, the generateSequence function is a generator function that yields a sequence of values. When calling generateSequence(), it returns an iterator object that can be used to iterate over the yielded values using the next() method.</p>
				<p>While both async/await and generators can be used to handle asynchronous operations, async/await provides a more straightforward and readable syntax for writing asynchronous code. Generators, on the other hand, are more versatile and can be used for other purposes like creating iterators or implementing custom control flow.</p>
				<p>It's worth noting that async/await is built on top of promises, whereas generators are a more general-purpose feature.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: "Intermediate JavaScript",
		level: 1,
		question: "How do you turn an Object into an Array []?",
		answer: (
			<>
				<p>
					<div
						className={styles.appCode}
					>{`let obj = { id: "1", name: "user22", age: "26", work: "programmer" };`}</div>
				</p>
				<pre>
					<div className={styles.appCode}>{`
//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "work"]
					`}</div>
				</pre>
				<pre>
					<div className={styles.appCode}>{`
// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "user22r", "26", "programmer"]					
					`}</div>
				</pre>
				<pre>
					<div className={styles.appCode}>{`
// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "user22"],["age", "26"],["work", “programmer"]]					
					`}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'How do you get the status of a CheckBox?',
		answer:
			<>
				<p>The DOM Input Checkbox Property is used to set or return the checked status of a checkbox field. This property is used to reflect the HTML Checked attribute.</p>

				<pre><div className={styles.appCode} >{`document.getElementById("mycheckbox").checked;`}</div></pre>
				<p>If the CheckBox is checked then it returns True.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What is the difference between JavaScript and Jscript?',
		answer:
			<>
			<p>JavaScript</p>
			<ul>
				<li>It is a scripting language developed by Netscape.</li>
				<li>It is used to design client and server-side applications.</li>
				<li>It is completely independent of Java language.</li>
			</ul>
				<p>Jscript</p>
				<ul>
					<li>It is a scripting language developed by Microsoft.</li>
					<li>It is used to design active online content for the word wide Web.</li>
				</ul>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What does var myArray = [[]]; statement declares? ',
		answer:
			<>
				<p>In JavaScript, this statement is used to declare a two-dimensional array.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'How can an HTML element can be accessed in JavaScript code? (4)',
		answer:
			<>
				<ul>
					<li><strong>getElementById() Method:</strong> It is used to get the element by its id name.</li>
					<li><strong>getElementsByClass() Method:</strong> It is used to get all the elements that have the given classname.</li>
					<li><strong>getElementsByTagName() Method:</strong> It is used to get all the elements that have the given tag name.</li>
					<li><strong>querySelector() Method:</strong> This function takes CSS style selector and returns the first selected element.</li>
				</ul>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the difference between innerHTML & innerText? ',
		answer:
			<>
				<p>The innerText property sets or returns the text content as plain text of the specified node, and all its descendants whereas the innerHTML property sets or returns the plain text or HTML contents in the elements. Unlike innerText, inner HTML lets you work with HTML rich text and doesn’t automatically encode and decode text.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What is an event bubbling in JavaScript?',
		answer:
			<>
				<p>Consider a situation an element is present inside another element and both of them handle an event. When an event occurs in bubbling, the innermost element handles the event first, then the outer, and so on.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 			<>
		<p>What will be the output of the following code?</p>
			<pre><div className={styles.appCode} >
{`let X = { foo: 1 }; 
let Output = (function () { 
 delete X.foo; 
 return X.foo; 
})();   
console.log(output);`}
			</div></pre>
	</>,
		answer:
			<>
				<p>Here the delete will delete the property of the object. X is the object with the foo property and it is a self-invoking function that will delete the foo property from object X so the result will be undefined.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'How are JavaScript and ECMA Script related? ',
		answer:
			<>
				<p>JavaScript is the main language that has to maintain some rules and regulations which is ECMA Script, these rules also bring new features for the language JavaScript.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'How to hide JavaScript code from old browsers that don’t support JavaScript?',
		answer:
			<>
				<p>To hide the JavaScript codes from the old browsers that don’t support JavaScript you can use</p>
				<div className={styles.appCode} >{`<!-- before <script> tag and another //--> after </script> tag`}</div>
				<p>Old browsers that will take that as a long comment of HTML. New browsers that support JavaScript will take that as an online comment.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: <>
		<p>What will be the output of the following code?</p>
			<pre><div className={styles.appCode} >
{`let output = (function(x) {
delete x;
return x;
})(0);

document.write(output);`}</div></pre>
	</>,
		answer:
			<>
				<p>The output will be 0. The delete operator is used to delete the operator of the object but the X is not the object here it is a local variable. The delete operator doesn’t affect local variables.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: <>
		<p>In JavaScript, answer if the following expressions result in true or false.</p>
		<pre><div className={styles.appCode} >
{`"0" == 0   // true or false ? 
"" == 0   // true or false ? 
"" == "0"   // true or false ?
`}</div></pre>
	</>,
		answer:
			<>
				<p>The result will be True for 1st and 2nd case and False for the 3rd case.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question:
			<>
				<p>Consider the following JavaScript code and try to find any issues in this code:</p>
				<pre><div className={styles.appCode} >
	{`function duplicate(array) {
  for (var i = 0; i < array.length; i++) {
    array.push(array[i]);
  }
  return array;
}

const arr = [1, 2, 3];
const newArr = duplicate(arr);
console.log(newArr);
				`}</div></pre>
			</>,
		answer:
			<>
				<p>In this code snippet, we are required to create a new array containing the duplicated elements of the input array. Upon initial inspection, the code appears to create a new array newArr, by duplicating each element from the original array arr. However, a critical issue arises within the duplicate function itself.</p>
				<p>The duplicate function uses a loop to go through each item in the given array. But inside the loop, it is adding a new element at the end of the array, using the push() method. This makes the array longer each time, creating a problem where the loop never stops. The loop condition {`(i < array.length)`} always stays true because the array keeps getting bigger. This makes the loop go on forever, causing the program to get stuck.</p>
				<p>To address the problem of the infinite loop caused by the growing array length, you can store the initial length of the array in a variable before entering the loop. Then, you can use this initial length as the limit for the loop iteration. This way, the loop will only run for the original elements in the array and won’t be affected by the array’s growth due to duplicates being added. Here is the modified version of the code:</p>
				<pre><div className={styles.appCode} >{`
function duplicate(array) {
  var initialLength = array.length; // Store the initial length
  for (var i = 0; i < initialLength; i++) {
    array.push(array[i]); // Push a duplicate of each element
  }
  return array;
}

const arr = [1, 2, 3];
const newArr = duplicate(arr);
console.log(newArr);				
				`}</div></pre>
				<p>The output will show the duplicated elements at the end of the array, and the loop won’t result in an infinite loop:</p>
				<pre><div className={styles.appCode} >{`[1, 2, 3, 1, 2, 3]`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What is the difference between prototype and __proto__?',
		answer:
			<>
				<p>The prototype property is an attribute associated with constructor functions in JavaScript. Constructor functions are used to create objects in JavaScript. When you define a constructor function, you can also attach properties and methods to its prototype property. These properties and methods then become accessible to all instances of objects created from that constructor. Thus, theprototype property serves as a common repository for methods and properties that are shared among instances.  Consider the following code snippet:</p>
				<pre><div className={styles.appCode} >{`
// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function() {
  console.log('Hello, my name is ' + this.name + '.');
};

// Creating instances
const person1 = new Person("Bob Smith");
const person2 = new Person("Susan Jones");

// Calling the shared method
person1.sayHello();  // Output: Hello, my name is Bob Smith.
person2.sayHello();  // Output: Hello, my name is Susan Jones.				
				`}</div></pre>
				<p>In this example, we have a constructor function named Person. By extending the Person.prototype with a method like sayHello, we're adding this method to the prototype chain of all Person instances. This allows each instance of Person to access and utilize the shared method. Instead of each instance having its own copy of the method.</p>
				<p>On the other hand, the __proto__ property, often pronounced as "dunder proto," exists in every JavaScript object. In JavaScript, everything, except primitive types, can be treated as an object. Each of these objects has a prototype, which serves as a reference to another object. The __proto__ property is simply a reference to this prototype object. The prototype object is used as a fallback source for properties and methods when the original object doesn’t possess them. By default, when you create an object, its prototype is set to Object.prototype.</p>
				<p>When you attempt to access a property or method on an object, JavaScript follows a lookup process to find it. This process involves two main steps:</p>
				<p><strong>Object’s Own Properties:</strong> JavaScript first checks if the object itself directly possesses the desired property or method. If the property is found within the object, it’s accessed and used directly.</p>
				<p><strong>Prototype Chain Lookup:</strong> If the property is not found in the object itself, JavaScript looks at the object’s prototype (referenced by the __proto__ property) and searches for the property there. This process continues recursively up the prototype chain until the property is found or until the lookup reaches the Object.prototype.</p>
				<p>If the property is not found even in the Object.prototype, JavaScript returns undefined, indicating that the property does not exist.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What are the differences between JavaScript and Java?',
		answer:
			<>
				<p>Java is an object-oriented and structured programming language, which helps to run web pages on different platforms. The java code should be compiled on the compiler. JavaScript is an object-oriented scripting language. In which, the scripts are optimized for both server and client-side. JavaScript is introduced to perform HTML pages.</p>
				<p>Are you looking forward to becoming a JavaScript Developer? Check out the JavaScript Training and get certified.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the Different between Null and Undefined?',
		answer:
			<>
				<p>Both null and undefined have an empty value.  Undefined is when a value for a variable has not been assigned.  Null is when a variable has been assigned a value of null.  Null is an object.  Undefined is a type.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'How do you retrieve HTML element by class?',
		answer:
			<>
				<p>By using the getElementsByClassName() method:</p>
				<pre><div className={styles.appCode} >{`
let elements = document.getElementsByClassName("example");
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What is the difference between Attributes and properties?',
		answer:
			<>
				<p>Attributes are key value pairs defined on the HTML markup.  For example:</p>
				<pre><div className={styles.appCode} >{`
<input type="text" value="Hello World">
				`}</div></pre>
				<p>Properties are key value pairs defined on the DOM.  For example:</p>
				<pre><div className={styles.appCode} >{`
let input = document.querySelector('input');
console.log(input.value);
				`}</div></pre>

			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the difference between the slice() and splice() array methods?',
		answer:
			<>
				<p>The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.  The original array will not be modified. For example: </p>
				<pre><div className={styles.appCode} >{`
let fruits = ['apple', 'banana', 'cherry', 'date'];
let citrus = fruits.slice(1, 3);
console.log(citrus);
// Output: ['banana', 'cherry']

console.log(fruits);
// Output: ['apple', 'banana', 'cherry', 'date']
				`}</div></pre>

				<p>The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.  For example: </p>
				<pre><div className={styles.appCode} >{`
let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2, 'lemon', 'kiwi');
console.log(fruits);
// Output: ['apple', 'lemon', 'kiwi', 'date']
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the confirm() method?',
		answer:
			<>
				<p>The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.  The confirm() method returns true if the user clicks "OK", and false if the user clicks "Cancel".</p>
				<pre><div className={styles.appCode} >{`
let result = confirm("Do you want to continue?");
console.log(result);
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the open() method?',
		answer:
			<>
				<p>The open() method opens a new browser window, or a new tab, depending on the browser settings and the parameter values.</p>
				<pre><div className={styles.appCode} >{`
window.open("http://www.google.com");
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the alert() method?',
		answer:
			<>
				<p>The alert() method displays an alert box with a specified message and an OK button.</p>
				<pre><div className={styles.appCode} >{`
alert("Hello World!");
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the close() method?',
		answer:
			<>
				<p>The close() method closes the current window.</p>
				<pre><div className={styles.appCode} >{`
window.close();
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the setTimeout() method?',
		answer:
			<>
				<p>The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.</p>
				<pre><div className={styles.appCode} >{`
setTimeout(function(){ alert("Hello"); }, 3000);
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the setInterval() method?',
		answer:
			<>
				<p>The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).</p>
				<pre><div className={styles.appCode} >{`
setInterval(function(){ alert("Hello"); }, 3000);
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the clearTimeout() method?',
		answer:
			<>
				<p>The clearTimeout() method clears a timer set with the setTimeout() method.</p>
				<pre><div className={styles.appCode} >{`
let myVar = setTimeout(function(){ alert("Hello"); }, 3000);
clearTimeout(myVar);
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is the isNan() method?',
		answer:
			<>
				<p>The isNaN() method determines whether a value is NaN (Not-A-Number).</p>
				<pre><div className={styles.appCode} >{`
console.log(isNaN("Hello"));
// Output: true
console.log(isNaN(123));
// Output: false
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Explain the View state versus Session state?',
		answer:
			<>
				<p>ViewState and SessionState are used for client-side state management and server-side state management respectively.</p>
				<p><strong>ViewState</strong> is used to store the state of the page and its controls. </p>
				<ul>
					<li>Used to store the state of the page and its controls.</li>
					<li>Stored in the page itself.</li>
					<li>Only be visible from a single page and not multiple pages.</li>
					<li>Retains values in the event of a postback (exchange of information between servers to report a user's action on a website, network, or app) operation occurring.</li>
					<li>Values are lost/cleared when new page is loaded.</li>
				</ul>
				<p><strong>SessionState</strong> is used to store the state of the user. </p>
				<ul>
					<li>Used to store the state of the user.</li>
					<li>Stored on the server.</li>
					<li>State value availability is across all pages available in a user session.</li>
					<li>User data remains in the server. Data is available to user until the browser is closed or there is session expiration.</li>
					<li>Can be cleared by engineer, user or in case of timeouts.</li>
				</ul>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'How do you empty an array in JavaScript? (3)',
		answer:
			<>
				<p>There are a few ways to empty an array in JavaScript:</p>
				<pre><div className={styles.appCode} >{`
let array = [1, 2, 3, 4, 5];
array = [];
console.log(array);
// Output: []
				`}</div></pre>
				<pre><div className={styles.appCode} >{`
let array = [1, 2, 3, 4, 5];
array.length = 0;
console.log(array);
// Output: []
				`}</div></pre>
				<pre><div className={styles.appCode} >{`
let array = [1, 2, 3, 4, 5];
array.splice(0, array.length);
console.log(array);
// Output: []
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'How do you check if a variable is an array in JavaScript?',
		answer:
			<>
				<p>You can use the Array.isArray() method to check if a variable is an array in JavaScript.</p>
				<pre><div className={styles.appCode} >{`
console.log(Array.isArray([1, 2, 3]));
// Output: true
console.log(Array.isArray("Hello"));
// Output: false
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'How do you check if a variable is a number in JavaScript?',
		answer:
			<>
				<p>You can use the typeof operator to check if a variable is a number in JavaScript.</p>
				<pre><div className={styles.appCode} >{`
console.log(typeof 123);
// Output: number
console.log(typeof "Hello");
// Output: string
				`}</div></pre>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you create a cookie in JavaScript?',
		answer:
			<>
				<p>You can create a cookie in JavaScript using the document.cookie property.</p>
				<pre><div className={styles.appCode} >{`
document.cookie = "name=John";
document.cookie = "age=30";
				`}</div></pre>
				<p>By default, cookies are created as session cookies, which are deleted when the browser is closed. You can also set an expiration date for the cookie by specifying the expires attribute.</p>
				<pre><div className={styles.appCode} >{`
document.cookie = "name=John; expires=Thu, 18 Dec 2023 12:00:00 UTC";
document.cookie = "age=30; expires=Thu, 18 Dec 2023 12:00:00 UTC";
				`}</div></pre>
				<p>You can also set other attributes such as domain, path, and secure for the cookie.</p>
				<pre><div className={styles.appCode} >{`
document.cookie = "name=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; domain=example.com; path=/; secure";
document.cookie = "age=30; expires=Thu, 18 Dec 2023 12:00:00 UTC; domain=example.com; path=/; secure";
				`}</div></pre>
				<p>Note: A cookie with the Secure attribute is only sent to the server with an encrypted request over the HTTPS protocol. It's never sent with unsecured HTTP (except on localhost), which means man-in-the-middle attackers can't access it easily. Insecure sites (with http: in the URL) can't set cookies with the Secure attribute. However, don't assume that Secure prevents all access to sensitive information in cookies. For example, someone with access to the client's hard disk (or JavaScript if the HttpOnly attribute isn't set) can read and modify the information.  </p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What are two ways to redirect pages in JavaScript?',
		answer:
			<>
				<p>You can redirect pages in JavaScript using the window.location property or the window.location.href property.</p>
				<pre><div className={styles.appCode} >{`
window.location = "http://www.example.com";
window.location.href = "http://www.example.com";
				`}</div></pre>
				<p>Both methods will redirect the browser to the specified URL.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Basic JavaScript',
		level: 0,
		question: 'What is a date object in JavaScript?',
		answer:
			<>
				<p>A date object in JavaScript is used to work with dates and times. It allows you to create, manipulate, and format dates and times. You can create a date object using the new Date() constructor.</p>
				<pre><div className={styles.appCode} >{`
let date = new Date();
console.log(date);

let date = new Date("2023-12-18T12:00:00Z");
console.log(date);
				`}</div></pre>
				<p>The date object provides methods to get and set the year, month, day, hour, minute, second, and millisecond components of a date. It also provides methods to format dates and times as strings, and to perform date and time arithmetic.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What are escape characters in JavaScript?',
		answer:
			<>
				<p>Escape characters are used to include special characters in strings in JavaScript. They are preceded by a backslash (\) and are used to represent characters that are difficult or impossible to type directly. For example:</p>
				<pre><div className={styles.appCode} >{`
let str = "This is a \"quote\".";
console.log(str);
// Output: This is a "quote".
				`}</div></pre>
				<p>Some common escape characters include:</p>
				<ul>
					<li>\' - single quote</li>
					<li>\" - double quote</li>
					<li>\` - backtick</li>
					<li>\\ - backslash</li>
					<li>\n - newline</li>
					<li>\r - carriage return</li>
					<li>\t - tab</li>
					<li>\b - backspace</li>
					<li>\f - form feed</li>
				</ul>
				<p>Escape characters are also used to represent characters that are difficult or impossible to type directly, such as control characters or non-printable characters.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What are number objects in JavaScript?',
		answer:
			<>
				<p>Number objects in JavaScript are used to work with numbers. They provide methods to perform mathematical operations, such as addition, subtraction, multiplication, and division. You can create a number object using the new Number() constructor.</p>
				<pre><div className={styles.appCode} >{`
let num = new Number(123);
console.log(num);
// Output: Number {123}

let num = new Number("123");
console.log(num);
// Output: Number {123}

let num = new Number("Hello");
console.log(num);
// Output: Number {NaN}
				`}</div></pre>
				<p>The number object provides methods to convert numbers to strings, to format numbers as strings, and to perform mathematical operations on numbers. It also provides methods to get and set the value of a number object.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What are Sets in JavaScript?',
		answer:
			<>
				<p>Sets are a new object type with ES6 (ECMAScript 2015) that allow you to create collections of unique values. A Set is a collection of values, where each value may occur only once. You can create a set using the new Set() constructor.</p>
				<pre><div className={styles.appCode} >{`
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);
// Output: Set {1, 2, 3}
				`}</div></pre>
				<p>Sets provide methods to add and remove values, to check if a value exists in the set, and to get the size of the set. They also provide methods to iterate over the values in the set.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What are Maps in JavaScript?',
		answer:
			<>
				<p>Maps are a new object type with ES6 (ECMAScript 2015) that allow you to create collections of key-value pairs. A Map is a collection of key-value pairs, where each key may occur only once. You can create a map using the new Map() constructor.</p>
				<pre><div className={styles.appCode} >{`
let map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map);
// Output: Map(2) {"name" => "John", "age" => 30}
				`}</div></pre>
				<p>Maps provide methods to add and remove key-value pairs, to get the value associated with a key, and to check if a key exists in the map. They also provide methods to iterate over the key-value pairs in the map.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What is functional programming in JavaScript?',
		answer:
			<>
				<p>Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means that the program logic is expressed without explicitly describing the flow control. Functional programming is based on the idea of using functions to transform data, and it emphasizes the use of pure functions, which are functions that always produce the same output for the same input and do not have any side effects.</p>
				<p>Functional programming in JavaScript is supported by features such as first-class functions, higher-order functions, and lambda expressions. It allows you to write more concise and expressive code, and it can help you write more maintainable and scalable applications.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What is object-oriented programming in JavaScript?',
		answer:
			<>
				<p>Object-oriented programming (OOP) is a programming paradigm that uses objects and classes to design and build applications. It is based on the concept of objects, which can contain data and code, and can interact with each other. OOP emphasizes the use of classes to create objects, and it provides features such as inheritance, encapsulation, and polymorphism to help you write more maintainable and scalable applications.</p>
				<p>Object-oriented programming in JavaScript is supported by features such as prototypes, constructors, and classes. It allows you to write more modular and reusable code, and it can help you write more maintainable and scalable applications.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Explain the JavaScript event delegation model.',
		answer:
			<>
				<p>Event delegation is a technique in JavaScript that allows you to attach a single event listener to a parent element, instead of attaching multiple event listeners to individual child elements. This can be useful when you have a large number of child elements, or when child elements are dynamically added or removed from the DOM.</p>
				<p>When an event occurs on a child element, the event bubbles up to the parent element, and the event listener attached to the parent element can handle the event. This allows you to handle events on child elements without having to attach event listeners to each individual child element.</p>
				<p>Event delegation can help you write more efficient and maintainable code, and it can help you avoid memory leaks and performance issues caused by attaching too many event listeners to the DOM.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Explain NaN and how it used in JavaScript.',
		answer:
			<>
				<p>NaN stands for "Not-A-Number" and is a special value in JavaScript that represents an invalid number. It is returned when a mathematical operation cannot be performed, such as dividing by zero, or when a value is not a valid number, such as a string that cannot be converted to a number.</p>
				<p>NaN is a property of the global object, and it is a value of the Number data type. It is used to indicate that a value is not a valid number, and it can be used to check if a value is a valid number using the isNaN() function.</p>
				<pre><div className={styles.appCode} >{`
console.log(NaN);
// Output: NaN

console.log(typeof NaN);
// Output: number

console.log(isNaN(NaN));
// Output: true
				`}</div></pre>
				<p>NaN is often used to handle errors and edge cases in JavaScript, and it can be used to check if a value is a valid number before performing a mathematical operation.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'How do you dynamically add and remove HTML elements in JavaScript?',
		answer:
			<>
				<p>You can dynamically add and remove HTML elements in JavaScript using the DOM (Document Object Model) API. The DOM API provides methods to create, modify, and remove HTML elements, and it allows you to interact with the structure and content of a web page.</p>
				<p>To dynamically add HTML elements, you can use the createElement() method to create a new element, and the appendChild() method to add the new element to the DOM.</p>
				<pre><div className={styles.appCode} >{`
let div = document.createElement("div");
div.textContent = "Hello, world!";
document.body.appendChild(div);
				`}</div></pre>
				<p>To dynamically remove HTML elements, you can use the removeChild() method to remove an element from the DOM.</p>
				<pre><div className={styles.appCode} >{`
let div = document.querySelector("div");
document.body.removeChild(div);
				`}</div></pre>
				<p>These methods allow you to dynamically modify the structure and content of a web page, and they can be used to create interactive and dynamic user interfaces.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'How do you handle errors in JavaScript?',
		answer:
			<>
				<p>You can handle errors in JavaScript using the try...catch...finally statement. The try...catch...finally statement allows you to catch and handle errors that occur in your code, and it provides a way to execute cleanup code regardless of whether an error occurs.</p>
				<pre><div className={styles.appCode} >{`
try {
	// Code that may throw an error
	throw new Error("Something went wrong");
} catch (error) {
	// Code to handle the error
	console.error(error.message);
} finally {
	// Code to execute regardless of whether an error occurs
	console.log("Cleanup code");
}
				`}</div></pre>
				<p>The try block contains the code that may throw an error, and the catch block contains the code to handle the error. The finally block contains the cleanup code that will be executed regardless of whether an error occurs.</p>
				<p>The try...catch...finally statement allows you to handle errors in your code, and it provides a way to gracefully recover from errors and prevent them from crashing your application.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'How do you use the fetch API to make HTTP requests in JavaScript?',
		answer:
			<>
				<p>The fetch API is a modern, built-in way to make HTTP requests in JavaScript. It provides a simple and flexible interface for fetching resources from the network, and it supports promises and async/await for handling asynchronous code.</p>
				<p>You can use the fetch() function to make a GET request to a URL and handle the response using the then() method.</p>
				<pre><div className={styles.appCode} >{`
fetch("https://api.example.com/data")
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
				`}</div></pre>
				<p>You can also use the fetch() function to make other types of requests, such as POST requests, and to send data in the request body.</p>
				<pre><div className={styles.appCode} >{`
fetch("https://api.example.com/data", {
	method: "POST",
	body: JSON.stringify({ name: "John" }),
	headers: {
		"Content-Type": "application/json"
	}
})
	.then(response => response.json())
	.then(data => console.log(data))
				`}</div></pre>
				<p>The fetch API provides a modern and powerful way to make HTTP requests in JavaScript, and it is widely supported in modern browsers and Node.js.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'How do you use the async/await syntax to handle asynchronous code in JavaScript?',
		answer:
			<>
				<p>The async/await syntax is a modern way to handle asynchronous code in JavaScript. It provides a more readable and expressive way to work with promises and asynchronous operations, and it allows you to write asynchronous code that looks and behaves like synchronous code.</p>
				<p>You can use the async keyword to define an asynchronous function, and the await keyword to wait for a promise to resolve inside the function.</p>
				<pre><div className={styles.appCode} >{`
async function fetchData() {
	try {
		let response = await fetch("https://api.example.com/data");
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}
				`}</div></pre>
				<p>The async/await syntax provides a more natural and intuitive way to work with asynchronous code, and it can help you write more maintainable and scalable applications.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you dynamically load external JavaScript files in JavaScript?',
		answer:
			<>
				<p>You can dynamically load external JavaScript files in JavaScript using the document.createElement() method to create a new script element, and the document.head.appendChild() method to add the new script element to the DOM.</p>
				<pre><div className={styles.appCode} >{`
let script = document.createElement("script");
script.src = "https://example.com/script.js";
document.head.appendChild(script);
				`}</div></pre>
				<p>This will load the external JavaScript file and execute it in the context of the current page. You can also use the onload and onerror events to handle the loading and error events of the script element.</p>
				<pre><div className={styles.appCode} >{`
script.onload = function() {
	console.log("Script loaded");
}

script.onerror = function() {
	console.error("Script failed to load");
}
				`}</div></pre>
				<p>This allows you to dynamically load external JavaScript files and handle the loading and error events of the script element.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you dynamically load external CSS files in JavaScript?',
		answer:
			<>
				<p>You can dynamically load external CSS files in JavaScript using the document.createElement() method to create a new link element, and the document.head.appendChild() method to add the new link element to the DOM.</p>
				<pre><div className={styles.appCode} >{`
let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://example.com/style.css";
document.head.appendChild(link);
				`}</div></pre>
				<p>This will load the external CSS file and apply it to the current page. You can also use the onload and onerror events to handle the loading and error events of the link element.</p>
				<pre><div className={styles.appCode} >{`
link.onload = function() {
	console.log("CSS loaded");
}

link.onerror = function() {
	console.error("CSS failed to load");
}
				`}</div></pre>
				<p>This allows you to dynamically load external CSS files and handle the loading and error events of the link element.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you dynamically load external images in JavaScript?',
		answer:
			<>
				<p>You can dynamically load external images in JavaScript using the Image() constructor to create a new image element, and the onload and onerror events to handle the loading and error events of the image element.</p>
				<pre><div className={styles.appCode} >{`
let image = new Image();
image.src = "https://example.com/image.jpg";
image.onload = function() {
	console.log("Image loaded");
}
image.onerror = function() {
	console.error("Image failed to load");
}
				`}</div></pre>
				<p>This will load the external image and trigger the onload or onerror event when the image has finished loading or has failed to load.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you use the localStorage API to store data in the browser?',
		answer:
			<>
				<p>The localStorage API is a built-in way to store data in the browser. It provides a simple and persistent key-value store that is available across browser sessions and page reloads.</p>
				<p>You can use the localStorage.setItem() method to store a key-value pair in the localStorage, and the localStorage.getItem() method to retrieve the value associated with a key.</p>
				<pre><div className={styles.appCode} >{`
localStorage.setItem("name", "John");
let name = localStorage.getItem("name");
console.log(name);
// Output: John
				`}</div></pre>
				<p>The localStorage API provides methods to add, remove, and clear items, and it allows you to store and retrieve data in the browser for use in your web applications.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you dynamically add and remove event listeners in JavaScript?',
		answer:
			<>
				<p>You can dynamically add and remove event listeners in JavaScript using the addEventListener() and removeEventListener() methods. The addEventListener() method allows you to attach an event listener to an element, and the removeEventListener() method allows you to remove an event listener from an element.</p>
				<p>To dynamically add an event listener, you can use the addEventListener() method to attach an event listener to an element.</p>
				<pre><div className={styles.appCode} >{`
let button = document.querySelector("button");
button.addEventListener("click", function() {
	console.log("Button clicked");
}
				`}</div></pre>
				<p>To dynamically remove an event listener, you can use the removeEventListener() method to remove an event listener from an element.</p>
				<pre><div className={styles.appCode} >{`
let button = document.querySelector("button");
let handleClick = function() {
	console.log("Button clicked");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
				`}</div></pre>
				<p>These methods allow you to dynamically add and remove event listeners in JavaScript, and they can be used to create interactive and dynamic user interfaces.</p>				
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you dynamically create and modify CSS styles in JavaScript?',
		answer:
			<>
				<p>You can dynamically create and modify CSS styles in JavaScript using the style property of an element. The style property provides access to the inline style of an element, and it allows you to create and modify CSS styles using JavaScript.</p>
				<p>To dynamically create a CSS style, you can use the style property to set the value of a CSS property.</p>
				<pre><div className={styles.appCode} >{`
let div = document.querySelector("div");
div.style.backgroundColor = "red";
div.style.color = "white";
				`}</div></pre>
				<p>To dynamically modify a CSS style, you can use the style property to get and set the value of a CSS property.</p>
				<pre><div className={styles.appCode} >{`
let div = document.querySelector("div");
div.style.backgroundColor = "blue";
div.style.color = "white";
				`}</div></pre>
				<p>These methods allow you to dynamically create and modify CSS styles in JavaScript, and they can be used to create interactive and dynamic user interfaces.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you dynamically add or remove classes from HTML elements in JavaScript?',
		answer:
			<>
				<p>You can dynamically add or remove classes from HTML elements in JavaScript using the classList property of an element. The classList property provides access to the classes of an element, and it allows you to add, remove, and toggle classes using JavaScript.</p>
				<p>To dynamically add a class, you can use the add() method of the classList property to add a class to an element.</p>
				<pre><div className={styles.appCode} >{`
let div = document.querySelector("div");
div.classList.add("active");
				`}</div></pre>
				<p>To dynamically remove a class, you can use the remove() method of the classList property to remove a class from an element.</p>
				<pre><div className={styles.appCode} >{`
let div = document.querySelector("div");
div.classList.remove("active");
				`}</div></pre>
				<p>These methods allow you to dynamically add or remove classes from HTML elements in JavaScript, and they can be used to create interactive and dynamic user interfaces.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you dynamically add or remove attributes from HTML elements in JavaScript?',
		answer:
			<>
				<p>You can dynamically add or remove attributes from HTML elements in JavaScript using the setAttribute() and removeAttribute() methods of an element. The setAttribute() method allows you to add an attribute to an element, and the removeAttribute() method allows you to remove an attribute from an element.</p>
				<p>To dynamically add an attribute, you can use the setAttribute() method to add an attribute to an element.</p>
				<pre><div className={styles.appCode} >{`
let div = document.querySelector("div");
div.setAttribute("data-id", "123");
				`}</div></pre>
				<p>To dynamically remove an attribute, you can use the removeAttribute() method to remove an attribute from an element.</p>
				<pre><div className={styles.appCode} >{`
let div = document.querySelector("div");
div.removeAttribute("data-id");
				`}</div></pre>
				<p>These methods allow you to dynamically add or remove attributes from HTML elements in JavaScript, and they can be used to create interactive and dynamic user interfaces.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'How do you dynamically add or remove object properties in JavaScript?',
		answer:
			<>
				<p>You can dynamically add or remove object properties in JavaScript using the dot notation or square bracket notation. The dot notation allows you to add or remove properties using the property name directly, and the square bracket notation allows you to add or remove properties using a variable or an expression.</p>
				<p>To dynamically add a property, you can use the dot notation or square bracket notation to add a property to an object.</p>
				<pre><div className={styles.appCode} >{`
let obj = {};
obj.name = "John";
obj["age"] = 30;
				`}</div></pre>
				<p>To dynamically remove a property, you can use the delete operator to remove a property from an object.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
delete obj.name;
delete obj["age"];
				`}</div></pre>
				<p>These methods allow you to dynamically add or remove object properties in JavaScript, and they can be used to create interactive and dynamic data structures.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Compare and constrast Object.freeze(), Object.seal(), and Object.preventExtensions() in JavaScript.',
		answer:
			<>
				<p>Object.freeze(), Object.seal(), and Object.preventExtensions() are methods in JavaScript that allow you to control the mutability of objects.</p>
				<p><strong>Object.freeze()</strong> is a method that prevents the addition, deletion, and modification of properties of an object. It makes the object immutable, and it prevents any changes to the object's properties.</p>
				<pre><div className={styles.appCode} >{`	
let obj = { name: "John", age: 30 };
Object.freeze(obj);
obj.name = "Jane";
console.log(obj);
// Output: { name: "John", age: 30 }
				`}</div></pre>
				<p><strong>Object.seal()</strong> is a method that prevents the addition and deletion of properties of an object, but it allows the modification of existing properties. It makes the object non-extensible, and it prevents the addition and deletion of properties.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
Object.seal(obj);
obj.name = "Jane";
obj.city = "New York";
console.log(obj);
// Output: { name: "Jane", age: 30 }
				`}</div></pre>
				<p><strong>Object.preventExtensions()</strong> is a method that prevents the addition of properties to an object, but it allows the deletion and modification of existing properties. It makes the object non-extensible, and it prevents the addition of properties.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
Object.preventExtensions(obj);
obj.name = "Jane";
obj.city = "New York";
console.log(obj);
// Output: { name: "Jane", age: 30 }
				`}</div></pre>
				<p>These methods allow you to control the mutability of objects in JavaScript, and they can be used to create immutable and non-extensible objects.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Compare and contrast Object.assign() and the spread operator in JavaScript.',
		answer:
			<>
				<p>Object.assign() and the spread operator are both used to copy and merge objects in JavaScript, but they have some key differences.</p>
				<p><strong>Object.assign()</strong> is a method that is used to copy the values of all enumerable own properties from one or more source objects to a target object. It creates a shallow copy of the source objects and assigns their values to the target object.</p>
				<pre><div className={styles.appCode} >{`
let obj1 = { name: "John" };
let obj2 = { age: 30 };
let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
// Output: { name: "John", age: 30 }
				`}</div></pre>
				<p>The spread operator is a syntax that is used to copy the values of all enumerable own properties from one or more source objects to a target object. It creates a shallow copy of the source objects and assigns their values to the target object.</p>
				<pre><div className={styles.appCode} >{`
let obj1 = { name: "John" };
let obj2 = { age: 30 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// Output: { name: "John", age: 30 }
				`}</div></pre>
				<p>While Object.assign() and the spread operator are similar in functionality, they have some key differences. Object.assign() is a method that is used to copy and merge objects, and it is supported in all modern browsers and Node.js. The spread operator is a syntax that is used to copy and merge objects, and it is supported in all modern browsers and Node.js.</p>				
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Compare and contrast Object.keys(), Object.values(), and Object.entries() in JavaScript.',
		answer:
			<>
				<p>Object.keys(), Object.values(), and Object.entries() are methods in JavaScript that allow you to work with the properties of objects.</p>
				<p><strong>Object.keys()</strong> is a method that returns an array of the enumerable own property names of an object. It returns an array of strings that represent the keys of the object.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
let keys = Object.keys(obj);
console.log(keys);
// Output: ["name", "age"]
				`}</div></pre>
				<p><strong>Object.values()</strong> is a method that returns an array of the enumerable own property values of an object. It returns an array of values that represent the values of the object.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
let values = Object.values(obj);
console.log(values);
// Output: ["John", 30]
				`}</div></pre>
				<p><strong>Object.entries()</strong> is a method that returns an array of the enumerable own property key-value pairs of an object. It returns an array of arrays that represent the key-value pairs of the object.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
let entries = Object.entries(obj);
console.log(entries);
// Output: [["name", "John"], ["age", 30]]
				`}</div></pre>
				<p>These methods allow you to work with the properties of objects in JavaScript, and they can be used to create dynamic and expressive code.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Compare and constrast Object.prototype.hasOwnProperty(), Object.prototype.propertyIsEnumerable(), and Object.prototype.isPrototypeOf() in JavaScript.',
		answer:
			<>
				<p>Object.prototype.hasOwnProperty(), Object.prototype.propertyIsEnumerable(), and Object.prototype.isPrototypeOf() are methods in JavaScript that allow you to work with the properties of objects.</p>
				<p><strong>Object.prototype.hasOwnProperty()</strong> is a method that returns a boolean indicating whether the object has the specified property as an own property. It returns true if the object has the property, and false if it does not.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
console.log(obj.hasOwnProperty("name"));
// Output: true
console.log(obj.hasOwnProperty("city"));
// Output: false
				`}</div></pre>
				<p><strong>Object.prototype.propertyIsEnumerable()</strong> is a method that returns a boolean indicating whether the specified property is enumerable. It returns true if the property is enumerable, and false if it is not.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
console.log(obj.propertyIsEnumerable("name"));
// Output: true
console.log(obj.propertyIsEnumerable("toString"));
// Output: false
				`}</div></pre>
				<p><strong>Object.prototype.isPrototypeOf()</strong> is a method that returns a boolean indicating whether the object is a prototype of another object. It returns true if the object is a prototype, and false if it is not.</p>
				<pre><div className={styles.appCode} >{`
function Person() {}
let person = new Person();
console.log(Person.prototype.isPrototypeOf(person));
// Output: true
				`}</div></pre>
				<p>These methods allow you to work with the properties of objects in JavaScript, and they can be used to create dynamic and expressive code.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Compare and contrast Object.prototype.toString(), Object.prototype.valueOf(), and Object.prototype.toLocaleString() in JavaScript.',
		answer:
			<>
				<p>Object.prototype.toString(), Object.prototype.valueOf(), and Object.prototype.toLocaleString() are methods in JavaScript that allow you to work with the values of objects.</p>
				<p><strong>Object.prototype.toString()</strong> is a method that returns a string representing the object. It returns a string that represents the object, and it is often used to get the type of an object.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
console.log(obj.toString());
// Output: [object Object]
				`}</div></pre>
				<p><strong>Object.prototype.valueOf()</strong> is a method that returns the primitive value of the object. It returns the primitive value of the object, and it is often used to get the value of an object.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
console.log(obj.valueOf());
// Output: { name: "John", age: 30 }
				`}</div></pre>
				<p><strong>Object.prototype.toLocaleString()</strong> is a method that returns a string representing the object. It returns a string that represents the object, and it is often used to get the localized string of an object.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
console.log(obj.toLocaleString());
// Output: [object Object]
				`}</div></pre>
				<p>These methods allow you to work with the values of objects in JavaScript, and they can be used to create dynamic and expressive code.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Compare and contrast Object.freeze and const in JavaScript.',
		answer:
			<>
				<p>Object.freeze and const are both used to create immutable values in JavaScript, but they have some key differences.</p>
				<p><strong>Object.freeze</strong> is a method that is used to create an immutable object. It makes the object immutable, and it prevents any changes to the object's properties.</p>
				<pre><div className={styles.appCode} >{`
let obj = { name: "John", age: 30 };
Object.freeze(obj);
obj.name = "Jane";
console.log(obj);
// Output: { name: "John", age: 30 }
				`}</div></pre>
				<p><strong>const</strong> is a keyword that is used to create a read-only reference to a value. It makes the reference immutable, and it prevents the reference from being reassigned to a different value.</p>
				<pre><div className={styles.appCode} >{`
const obj = { name: "John", age: 30 };
obj.name = "Jane";
console.log(obj);
// Output: { name: "Jane", age: 30 }
				`}</div></pre>
				<p>While Object.freeze and const are similar in functionality, they have some key differences. Object.freeze is a method that is used to create an immutable object, and it is supported in all modern browsers and Node.js. const is a keyword that is used to create a read-only reference to a value, and it is supported in all modern browsers and Node.js.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What is a JavaScript cookie?',
		answer:
			<>
				<p>A cookie is a small piece of data that is stored on the client's computer by a web server. It is often used to store user preferences and other information that can be used to personalize the user experience.</p>
				<p>Cookies are sent to the client's computer by the web server, and they are stored in the client's web browser. They can be used to store information such as user preferences, shopping cart contents, and login credentials, and they can be accessed and modified by both the client and the server.</p>
				<p>Cookies are often used to personalize the user experience, track user behavior, and store session information. They can be used to create interactive and dynamic web applications, and they can be used to create a more personalized and engaging user experience.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Explain deferred scripts in JavaScript.',
		answer:
			<>
				<p>Deferred scripts are a way to load and execute JavaScript files in a web page. They allow you to load JavaScript files in the background while the rest of the page is being loaded, and they allow you to defer the execution of the JavaScript files until after the page has finished loading.</p>
				<p>Deferred scripts are often used to improve the performance of web pages by loading JavaScript files asynchronously and deferring their execution until after the page has finished loading. They can be used to create faster and more responsive web applications, and they can be used to create a more engaging and interactive user experience.</p>
				<p>Deferred scripts are supported in all modern browsers and can be used to create dynamic and expressive web applications.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'Compare and constrast break and continue in JavaScript.',
		answer:
			<>
				<p>The break and continue statements are used to control the flow of loops in JavaScript, but they have some key differences.</p>
				<p><strong>break</strong> is a statement that is used to exit a loop. It terminates the current loop and continues with the next statement after the loop.</p>
				<pre><div className={styles.appCode} >{`
for (let i = 0; i < 5; i++) {
	if (i === 3) {
		break;
	}
	console.log(i);
}
// Output: 0 1 2
				`}</div></pre>
				<p><strong>continue</strong> is a statement that is used to skip the current iteration of a loop. It skips the current iteration and continues with the next iteration of the loop.</p>
				<pre><div className={styles.appCode} >{`
for (let i = 0; i < 5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}
// Output: 0 1 2 4
				`}</div></pre>
				<p>While break and continue are similar in functionality, they have some key differences. break is a statement that is used to exit a loop, and it is supported in all modern browsers and Node.js. continue is a statement that is used to skip the current iteration of a loop, and it is supported in all modern browsers and Node.js.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'Why wrap the contents of a JavaScript file in an IIFE?',
		answer:
			<>
				<p>An IIFE (Immediately Invoked Function Expression) is a way to create a self-contained scope for the contents of a JavaScript file. It allows you to encapsulate the code and prevent it from polluting the global scope, and it allows you to create a private scope for the code.</p>
				<p>By wrapping the contents of a JavaScript file in an IIFE, you can prevent the code from interfering with other code on the page, and you can create a private scope for the code. This can help you write more modular and maintainable code, and it can help you avoid naming conflicts and other issues caused by global variables.</p>
				<p>An IIFE is often used to create a module or library in JavaScript, and it can be used to create a more organized and maintainable codebase.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What are the advantages and disadvantages of using the module pattern in JavaScript?',
		answer:
			<>
				<p>The <strong>module pattern</strong> is a way to create self-contained and reusable code in JavaScript. It allows you to encapsulate the code and prevent it from polluting the global scope, and it allows you to create a private scope for the code.  The <strong>module pattern</strong> is quite similar to an <strong>IIFE (immediately invoked functional expression)</strong>, but a module always returns an object instead of a function.</p>
				<p>The advantages of using the module pattern in JavaScript include:</p>
				<ul>
					<li>Encapsulation: The module pattern allows you to encapsulate the code and prevent it from polluting the global scope.</li>
					<li>Reusability: The module pattern allows you to create self-contained and reusable code that can be used in different parts of your application.</li>
					<li>Private scope: The module pattern allows you to create a private scope for the code, which can help you avoid naming conflicts and other issues caused by global variables.</li>
				</ul>
				<p>The disadvantages of using the module pattern in JavaScript include:</p>
				<ul>
					<li>Complexity: The module pattern can add complexity to the code, and it can make it harder to understand and maintain.</li>
					<li>Performance: The module pattern can have a performance impact, and it can slow down the execution of the code.</li>
					<li>Compatibility: The module pattern may not be supported in all browsers and environments, and it may require additional polyfills or shims to work properly.</li>
				</ul>
				<p>While the module pattern has some advantages and disadvantages, it is often used to create modular and maintainable code in JavaScript, and it can be used to create a more organized and maintainable codebase.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What are the advantages and disadvantages of using the revealing module pattern in JavaScript?',
		answer:
			<>
				<p>The <strong>revealing module pattern</strong> is a way to create self-contained and reusable code in JavaScript. It is quite similar to the module pattern, but in the module pattern we define functions in returning object. In <strong>revealing module pattern</strong>, we define functions in closure area and only use variable names in the returning object.</p>
				<p>The advantages of using the <strong>revealing module pattern</strong> in JavaScript include:</p>
				<ul>
					<li>Encapsulation: The revealing module pattern allows you to encapsulate the code and prevent it from polluting the global scope.</li>
					<li>Reusability: The revealing module pattern allows you to create self-contained and reusable code that can be used in different parts of your application.</li>
					<li>Private scope: The revealing module pattern allows you to create a private scope for the code, which can help you avoid naming conflicts and other issues caused by global variables.</li>
					<li>Explicitness: The revealing module pattern makes it clear which members of the module are public and which are private, which can make the code easier to understand and maintain.</li>
				</ul>
				<p>The disadvantages of using the revealing module pattern in JavaScript include:</p>
				<ul>
					<li>Complexity: The revealing module pattern can add complexity to the code, and it can make it harder to understand and maintain.</li>
					<li>Performance: The revealing module pattern can have a performance impact, and it can slow down the execution of the code.</li>
					<li>Compatibility: The revealing module pattern may not be supported in all browsers and environments, and it may require additional polyfills or shims to work properly.</li>
				</ul>
				<p>While the revealing module pattern has some advantages and disadvantages, it is often used to create modular and maintainable code in JavaScript, and it can be used to create a more organized and maintainable codebase.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What are the advantages and disadvantages of using the singleton pattern in JavaScript?',
		answer:
			<>
				<p>The <strong>singleton pattern</strong> is a way to create a single instance of a class in JavaScript. It is often used to create a global object that can be accessed from anywhere in the application, and it can be used to create a shared state that is available across different parts of the application.</p>
				<p>The advantages of using the <strong>singleton pattern</strong> in JavaScript include:</p>
				<ul>
					<li>Global access: The singleton pattern allows you to create a global object that can be accessed from anywhere in the application.</li>
					<li>Shared state: The singleton pattern allows you to create a shared state that is available across different parts of the application.</li>
					<li>Lazy initialization: The singleton pattern allows you to delay the creation of the instance until it is actually needed, which can improve the performance of the application.</li>
				</ul>
				<p>The disadvantages of using the <strong>singleton pattern</strong> in JavaScript include:</p>
				<ul>
					<li>Global state: The singleton pattern can create a global state that is accessible from anywhere in the application, which can make it harder to understand and maintain the code.</li>
					<li>Dependency management: The singleton pattern can create dependencies between different parts of the application, which can make it harder to test and maintain the code.</li>
					<li>Performance: The singleton pattern can have a performance impact, and it can slow down the execution of the code.</li>
				</ul>
				<p>While the singleton pattern has some advantages and disadvantages, it is often used to create a global object that can be accessed from anywhere in the application, and it can be used to create a shared state that is available across different parts of the application.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What are the advantages and disadvantages of monolithic versus microservice architectures in JavaScript?',
		answer:
			<>
				<p>A monolithic architecture is a way to create a single, self-contained application that contains all of the code and functionality of the application. It is often used to create large and complex applications that require a high degree of integration and coordination between different parts of the application.</p>
				<p>The advantages of using a monolithic architecture in JavaScript include:</p>
				<ul>
					<li>Integration: A monolithic architecture allows you to create a single, self-contained application that contains all of the code and functionality of the application.</li>
					<li>Coordination: A monolithic architecture allows you to create large and complex applications that require a high degree of integration and coordination between different parts of the application.</li>
					<li>Performance: A monolithic architecture can have a performance advantage, and it can be faster and more responsive than a microservice architecture.</li>
				</ul>
				<p>The disadvantages of using a monolithic architecture in JavaScript include:</p>
				<ul>
					<li>Complexity: A monolithic architecture can add complexity to the code, and it can make it harder to understand and maintain.</li>
					<li>Scalability: A monolithic architecture can have a scalability disadvantage, and it can be harder to scale and maintain than a microservice architecture.</li>
					<li>Flexibility: A monolithic architecture can have a flexibility disadvantage, and it can be harder to change and adapt than a microservice architecture.</li>
				</ul>
				<p>A microservice architecture is a way to create a distributed application that is composed of small, independent services that communicate with each other over a network. It is often used to create large and complex applications that require a high degree of scalability and flexibility.</p>
				<p>The advantages of using a microservice architecture in JavaScript include:</p>
				<ul>
					<li>Scalability: A microservice architecture allows you to create a distributed application that is composed of small, independent services that can be scaled and maintained independently.</li>
					<li>Flexibility: A microservice architecture allows you to create a distributed application that is composed of small, independent services that can be changed and adapted independently.</li>
					<li>Resilience: A microservice architecture allows you to create a distributed application that is composed of small, independent services that can be resilient to failure and errors.</li>
				</ul>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Intermediate JavaScript',
		level: 1,
		question: 'What’s the difference between window vs document?',
		answer:
			<>
				<p>The <strong>window</strong> object represents the browser window, and it is the top-level object in the browser's JavaScript environment. It contains properties and methods that are related to the browser window, such as the location, history, and navigator.</p>
				<p>The <strong>document</strong> object represents the web page that is loaded in the browser window, and it is a property of the window object. It contains properties and methods that are related to the web page, such as the title, URL, and elements of the page.</p>
				<p>While the window and document objects are related, they have some key differences. The window object represents the browser window, and it contains properties and methods that are related to the browser window. The document object represents the web page, and it contains properties and methods that are related to the web page.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What’s the difference between window.onload vs document.onload?',
		answer:
			<>
				<p>The <strong>window.onload</strong> event is fired when the browser window has finished loading all of its content, including images, scripts, and stylesheets. It is a global event that is fired on the window object, and it can be used to execute code after the window has finished loading.</p>
				<p>The <strong>document.onload</strong> event is fired when the web page has finished loading all of its content, including images, scripts, and stylesheets. It is a global event that is fired on the document object, and it can be used to execute code after the web page has finished loading.</p>
				<p>While the window.onload and document.onload events are related, they have some key differences. The window.onload event is fired when the browser window has finished loading, and it is a global event that is fired on the window object. The document.onload event is fired when the web page has finished loading, and it is a global event that is fired on the document object.</p>
			</>
	},
	{
		rating: 0,
		subject: 'javascript',
		topic: 'Advanced JavaScript',
		level: 2,
		question: 'What is polymorphism?',
		answer:
			<>
				<p>Polymorphism is a concept in object-oriented programming that allows objects of different types to be treated as objects of a common type. It allows you to create code that can work with objects of different types, and it allows you to create code that can be reused with different types of objects.</p>
				<p>Polymorphism is often used to create more flexible and maintainable code, and it is often used to create code that can work with different types of objects. It can be used to create more expressive and dynamic code, and it can be used to create a more organized and maintainable codebase.</p>
				<p>Polymorphism is a key concept in object-oriented programming, and it is often used to create more flexible and maintainable code in JavaScript.</p>
			</>
	},
	{
		rating: 0,
	subject: 'javascript', 
	topic: 'Basic JavaScript',
		level: 0,
		question: 'What’s the difference between Function Declaration and Function Expression?',
		answer:
			<>
				<p>A <strong>function declaration</strong> is a way to define a function in JavaScript. It is a statement that starts with the keyword function, followed by the name of the function, a list of parameters, and the body of the function. It can be used to define a function that can be called anywhere in the code, and it can be used to create a reusable and maintainable codebase.</p>
				<pre><div className={styles.appCode} >{`
function greet(name) {
	console.log("Hello, " + name + "!");
}
greet("John");
// Output: Hello, John!
				`}</div></pre>
				<p>A <strong>function expression</strong> is a way to define a function in JavaScript. It is an expression that starts with the keyword function, followed by an optional name, a list of parameters, and the body of the function. It can be used to define a function that can be assigned to a variable, and it can be used to create a more flexible and dynamic codebase.</p>
				<pre><div className={styles.appCode} >{`
let greet = function(name) {
	console.log("Hello, " + name + "!");
}
greet("John");
// Output: Hello, John!
				`}</div></pre>
				<p>While function declarations and function expressions are similar in functionality, they have some key differences. Function declarations are hoisted to the top of the scope, and they can be called anywhere in the code. Function expressions are not hoisted, and they can only be called after they have been defined.</p>
			</>
	},
	{
		rating: 0,
	subject: 'javascript', 
	topic: 'Intermediate JavaScript',
		level: 0,
		question: 'How do you remove Duplicates from a JavaScript Array?',
		answer:
			<>
				<p>You can remove duplicates from a JavaScript array using the filter() method and the indexOf() method. The filter() method allows you to create a new array that contains only the unique elements of the original array, and the indexOf() method allows you to check if an element is already present in the new array.</p>
				<pre><div className={styles.appCode} >{`
let arr = [1, 2, 3, 4, 3, 2, 1];
let uniqueArr = arr.filter((value, index, self) => {
	return self.indexOf(value) === index;
}
console.log(uniqueArr);
// Output: [1, 2, 3, 4]
				`}</div></pre>
				<p>This code creates a new array that contains only the unique elements of the original array, and it removes any duplicates from the array.</p>
				
			</>
	},
];

// {
//   rating: 0,
// subject: 'javascript', 
// topic: 'Basic JavaScript',
//   level: 0,
//   question: '',
//   answer:
//     <>
//     </>
// },
