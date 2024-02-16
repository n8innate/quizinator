import { IQuestions } from '../../types/types';
import styles from '../../App.module.scss';

export const typescriptQuestions: IQuestions[] = [
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'Explain TypeScript and its use?',
    answer: 
      <>
        <p>TypeScript is an open-source programming language developed and maintained by Microsoft, which acts as a statically-typed superset of JavaScript. By extending JavaScript with type annotations and interfaces, it enables developers to catch errors during the compilation process rather than at runtime, thus ensuring safer and more efficient code.</p>
        <p>TypeScript is also highly scalable, allowing for the development of large applications with features like namespaces, decorators, and abstract classes. One of its most significant strengths is its seamless integration with the JavaScript ecosystem and modern frameworks like Angular, React, or Vue.js, making it an invaluable tool for any developer looking to create maintainable and robust web applications.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'What are some of the built-in types in TypeScript?',
    answer: 
      <>
        <p>In TypeScript, there are several built-in types available for developers to ensure safer, more accurate code. Some of the most common built-in types include:</p>
        <ul>
          <li>any: Represents any type of value and allows a variable to store multiple types.</li>
          <li>boolean: Represents a boolean value, which can be either true or false.</li>
          <li>number: Represents any numeric value, including integers and floating-point numbers.</li>
          <li>string: Represents a sequence of characters, commonly used for storing textual data.</li>
          <li>null: Represents the absence of a value intentionally assigned to a variable.</li>
          <li>undefined: Represents a variable that has not yet been assigned a value.</li>
          <li>void: Represents the lack of a type, commonly used as the return type for functions that do not return a value.</li>
        </ul>

      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Give an example of generics in TypeScript?',
    answer: 
      <>
        <p>Generics in TypeScript allow for creating reusable and flexible components without compromising on type safety. They enable you to create functions, classes, or interfaces that can work with different types while still providing the benefits of static typing. Here's an example using generics in a TypeScript function:</p>

        <pre>
          <div className={styles.appCode}>{`
function identity<T>(arg: T): T {
  return arg;              
  }
  
let numIdentity = identity<number>(42);

let stridentity = identity<string>('Hello, TypeScript!");
          `}</div>
        </pre>
        <p>In this example, identity{`<T>`} is a generic function that takes an argument arg of type T (a type variable) and returns a value of the same type T. When calling the identity function, you specify the type argument between angle brackets {`<>`}, like identity{`<number>`} or identity{`<string>`}.</p>
        <p>The generic function identity allows you to work with different types without losing type information. In this case, numIdentity will have the type number, and strIdentity will have the type string.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'What are Modules in TypeScript.',
    answer: 
      <>
        <p>Modules in TypeScript provide a way to organize and encapsulate code, making it easier to develop, maintain, and test large applications. They allow you to split your code into separate files, keeping each file focused on a specific set of functionality or a single responsibility. Modules are designed to manage dependencies and avoid naming conflicts by using distinct namespaces and imports/exports.</p>
        <p>There are two main types of modules in TypeScript:</p>
        <ol>
          <li><strong>External modules:</strong> Also known as "file modules," they are one module per source file. When you create a new TypeScript file and work with the import and export keywords, you are automatically creating an external module. These are the most commonly used TypeScript modules.  For example:
            <pre>
              <div className={styles.appCode}>{`
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from './math';
console.log(add(1, 2)); // Output: 3
              `}</div>
            </pre>
          </li>
          <li><strong>Ambient modules:</strong> These are used to provide type information for third-party libraries or existing global variables. They are typically declared using a .d.ts file and may be provided by the library developers themselves or created by the community. The declare module syntax is used to define an ambient module.  For example:
            <pre>
              <div className={styles.appCode}>{`
// math.d.ts
declare module 'math' {
  export function add(a: number, b: number): number;
}

// app.ts
import { add } from 'math';
console.log(add(1, 2)); // Output: 3
              `}</div>
            </pre>            
          </li>
        </ol>

      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'Why choose TypeScript over vanilla JavaScript?',
    answer: 
      <>
        <p>TypeScript offers several advantages over vanilla JavaScript, making it a preferable choice for many developers seeking to build large-scale and maintainable applications. One of the most noticeable benefits of TypeScript is the tools and IDEs that provide a rich environment that helps to find the errors easily. Some other benefits include:</p>
        <ul>
          <li><strong>Advanced autocompletion and IntelliSense:</strong> TypeScript provides enhanced autocompletion, code navigation, and refactoring capabilities through better integration with editors like Visual Studio Code, making the development process faster and more efficient.</li>
          <li><strong>Large-scale application support:</strong> Features like classes, interfaces, generics, and namespaces in TypeScript facilitate the design of modular code, making it well-suited for large and complex applications.</li>
          <li><strong>Improved code readability:</strong> TypeScript's type annotations and advanced OOP features bring clarity to codebases and make it easier to understand, debug, and maintain code written by other developers.</li>
          <li><strong>Strict null checks:</strong> TypeScript enforces strict null checks, which can help catch null or undefined values during compilation, reducing runtime errors related to missing or inaccessible data.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'Do TypeScript files need compilation?',
    answer: 
      <>
        <p>Yes, as TypeScript cannot be interpreted by browsers. Compiling is needed to convert TypeScript to JavaScript. And for compilation, you need the TypeScript compiler. TypeScript has all the features and functionality of JavaScript, with some added features. It improves developer experience, provides features like type aliases, abstract classes, tuple, generics, etc, and it allows developers to add type safety to their projects.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'What are some benefits of TypeScript?',
    answer: 
      <>
        <p>TypeScript offers several benefits that enhance the development process, improve code quality, and streamline collaboration. Some of these benefits include:</p>
        <ul>
          <li><strong>Static typing:</strong> TypeScript adds static typing to JavaScript, which catches type-related errors at compile-time instead of runtime. This allows developers to identify and fix issues early in the development process, reducing bugs and improving overall code quality.</li>
          <li><strong>Code maintainability:</strong> TypeScript's static types, interfaces, and other OOP features contribute to better code readability and maintainability, making it easier for developers to understand and work with shared codebases.</li>
          <li><strong>Better tooling and editor support:</strong> TypeScript provides excellent integration with popular IDEs, resulting in advanced autocompletion, code navigation, and refactoring tools. This improves the development experience and boosts productivity.</li>
          <li><strong>Large-scale application support:</strong> TypeScript's features, such as generics, namespaces, and modules, foster the creation of modular and scalable code, making it an ideal choice for large and complex applications.</li>
          <li><strong>JavaScript ecosystem compatibility:</strong> TypeScript is fully compatible with JavaScript libraries, frameworks, and tools, enabling seamless integration into existing development workflows.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'In TypeScript, can we call the base class constructor from the child class?',
    answer: 
      <>
        <p>
          Yes, in TypeScript, you can call the constructor of the base class from the child class using the super() keyword. This is commonly done in the constructor of the child class to invoke the constructor of the parent (base) class and perform any additional initialization specific to the child class. Here's an example:</p>
        <pre>
          <div className={styles.appCode}>{`
class BaseClass {
  constructor(baseParam: number) {
      // Base class constructor logic
  }
}

class ChildClass extends BaseClass {
    constructor(baseParam: number, childParam: string) {
        super(baseParam); // Calling the constructor of the base class
        // Child class constructor logic
    }
}

const instance = new ChildClass(42, "Hello");
          `}</div>
        </pre>
        <p>In this example, <strong>super(baseParam)</strong> is used in the constructor of <strong>ChildClass</strong> to call the constructor of <strong>BaseClass</strong> with the specified parameter <strong>baseParam</strong>.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'What is the difference between TypeScript and a statically typed language?',
    answer: 
      <>
        <p>TypeScript is optionally statically typed, which means you can tell the compiler to ignore a variable's type. We can assign any type of value to the variable using any data type. During compilation, TypeScript will not perform any error checking.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Is string interpolation possible in TypeScript?',
    answer: 
      <>
        <p>Yes, string interpolation is possible in TypeScript, and it is also known as template literals or template strings. It allows you to embed expressions within string literals, using backticks (`) instead of single or double quotes. To include a variable or expression within the string, use the $&#123; expression &#125; syntax. This feature makes it easier to create more readable and concise strings without resorting to string concatenation.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'How do the extensions .ts and .tsx differ in TypeScript?',
    answer: 
      <>
        <p>The .ts extension is used for TypeScript files that contain only TypeScript code, while the .tsx extension is used for TypeScript files that contain both TypeScript and JSX code. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It is commonly used in React applications.</p>
        <ul>
          <li><strong>.ts:</strong>  used for files that don't require JSX for things like classes, functions, reducers</li>
          <li><strong>.tsx:</strong>  used for files using JSX for building React components</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Differentiate between Classes and Interfaces in TypeScript?',
    answer: 
      <>
        <p>Classes and interfaces are two of the most important features of TypeScript. They are used to define the shape of an object and provide a blueprint for creating objects. However, there are some key differences between them:</p>
        <ul>
          <li><strong>Interfaces:</strong>
            <ol>
              <li>Interfaces are used to describe the structure of an object and define the types of its properties and methods.</li>
              <li>They are purely a compile-time construct and are not part of the JavaScript output.</li>
              <li>Interfaces can be used to define the types of function parameters or variables, and they can also be extended or implemented by other interfaces.</li>
            </ol>
          </li>
          <li><strong>Classes:</strong>
            <ol>
              <li>Classes are used to create objects and define their properties and methods.</li>
              <li>They can be instantiated and used at runtime, and they can also be extended by other classes.</li>
              <li>Classes can implement interfaces, but they cannot extend them.</li>
            </ol>
          </li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'What are Interfaces in TypeScript?',
    answer: 
      <>
        <p>In TypeScript, an interface is a fundamental concept that allows you to define the shape, structure, and contract of an object or a class without implementing its actual functionality. Interfaces let you define custom types by specifying the properties and their respective types that an object should have, and the class that implements the interface must adhere to these specifications. Interfaces can also be used with functions to define specific parameters and return types.</p>
        <p>Interfaces can have optional properties, read-only properties, and method signatures as well as support extending and implementing multiple interfaces.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'What are Decorators in TypeScript?',
    answer: 
      <>
        <p>Decorators in TypeScript are a special kind of declarative syntax used to add metadata or modify the behavior of classes, methods, properties, or parameters. They provide a convenient way to apply reusable logic or behavior across multiple parts of your code without having to manually modify each target element. Decorators are built using higher-order functions, which receive the target element (such as a class or property) as an argument and return a modified version of it or perform specific actions on it.</p>
        <p>Decorators are prefixed with the @ symbol and can be used to:</p>
        <ul>
          <li>Modify the behavior of a class, method, property, or parameter.</li>
          <li>Attach metadata to a class, method, property, or parameter.</li>
          <li>Apply mixins to a class.</li>
        </ul>
        <pre>
          <div className={styles.appCode}>{`
function log(target: any, name: any, descriptor: any) {
  console.log(target, name, descriptor);
}

class MyClass {
  @log
  myMethod() {
    // Method implementation
  }
}
          `}</div>
        </pre>
        <p>In this example, the @log decorator is applied to the myMethod method of the MyClass class. The log function is the decorator factory, which returns the actual decorator function that receives the target, name, and descriptor arguments.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'When should you use interfaces or classes in TypeScript?',
    answer: 
      <>
        <p>In TypeScript, both interfaces and classes are used to define custom types and structures. However, you should choose between interfaces and classes based on your specific requirements:</p>
        <p>Use Interfaces when:</p>
        <ul>
          <li>You want to define the shape, structure, and contract for how an object or a class should look, without implementing its actual functionality.</li>
          <li>You want to enforce specific properties, methods, or their types on an object or a class.</li>
          <li>You need a lightweight approach that only focuses on the type-checking aspect during development.</li>
          <li>You want to describe the structure and requirements for function parameters.</li>
        </ul>
        <p>Use Classes when:</p>
        <ul>
          <li>You want to encapsulate methods and properties within a single entity, including providing a concrete implementation for them.</li>
          <li>You want to use object-oriented concepts like inheritance, abstraction, and encapsulation.</li>
          <li>You need to create instances of the class to interact with.</li>
          <li>You want to use instance-specific state and methods based on concrete implementations.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'How do you use class constants in TypeScript?',
    answer: 
      <>
        <p>You can declare class constants in TypeScript using the keywords <strong>readonly</strong>, <strong>const</strong> and <strong>readonly static</strong>: </p>
        <pre>
          <div className={styles.appCode}>{`
class MyClass {
  readonly myConst = 42;
  const myConst2 = 42;
  static readonly myConst3 = 42;
}
          `}</div>
        </pre>
        <p>Here, <strong>myConst</strong> is an instance property, <strong>myConst2</strong> is a local variable, and <strong>myConst3</strong> is a static property. All three are read-only and cannot be modified after initialization.</p>
        <ul>
          <li><strong>readonly:</strong> Used to declare a read-only instance property.</li>
          <li><strong>const:</strong> Used to declare a read-only local variable.</li>
          <li><strong>readonly static:</strong> Used to declare a read-only static property.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'In TypeScript, what can you do to check null and undefined?',
    answer: 
      <>
        <p>In TypeScript, null and undefined are separate but related types representing the absence or uninitialized state of a value. To check for null or undefined, you can use various language constructs and techniques:</p>
        <ul>
          <li>Equality checks Use the equality operator == or inequality operator != to check for both null and undefined at the same time. You can also use the strict equality === or strict inequality !== operators followed by explicit checks for null and undefined.
            <pre><div className={styles.appCode}>{`
if (value == null) { 
  // Checks null only
}

if (value === null || value === undefined) { 
  // Checks for both null and undefined
}
            }`}</div></pre>            
          </li>
          <li>Optional Chaining Operator The optional chaining operator ?. can be used to access properties and methods on an object that may be null or undefined. If the object is null or undefined, the result of the expression will be undefined. 
              <div className={styles.appCode}>{`const result = obj?.property; // result will be undefined if obj is null or undefined`}</div>
          </li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Are object-oriented principles supported by TypeScript?',
    answer: 
      <>
        <p>TypeScript, being a statically-typed superset of JavaScript, supports many Object-Oriented Programming (OOP) concepts to help you build more structured, maintainable, and reusable code. Some of the important OOP principles supported by TypeScript include:</p>
        <ul>
          <li><strong>Classes:</strong> Classes in TypeScript serve as blueprints for creating objects that share similar properties and methods. They consist of a constructor, properties, and member functions.</li>
          <li><strong>Inheritance:</strong> TypeScript allows you to inherit properties and behaviors from a parent (base) class to a child (derived) class through the extends keyword, which enables code reusability and simplifies complex code structures.</li>
          <li><strong>Interfaces:</strong> Interfaces are used to define the shape, structure, and contract for objects, classes, and functions, specifying properties and methods that should be implemented by classes that adopt the interface.</li>
          <li><strong>Abstraction:</strong> TypeScript supports the creation of abstract classes, which serve as base classes that cannot be instantiated directly and often include unimplemented methods and properties.</li>
          <li><strong>Encapsulation:</strong> TypeScript provides access modifiers (public, private, and protected) to control the visibility and accessibility of class properties and methods, ensuring only intended parts of an object or a class are exposed.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'Explain Getters/Setters in TypeScript.',
    answer: 
      <>
        <p>Getters and setters are special class methods used to control the access and modification of object properties. They provide a flexible and encapsulated way to work with properties while giving you the ability to add additional logic around retrieval and assignment.</p>
        <p>Getters are accessor methods used to retrieve the value of a property. They are defined using the get keyword followed by the method name, and they have no parameters. Getters are accessed like regular properties, but they invoke the getter function internally to compute the result.</p>
        <p>Setters are accessor methods used to update the value of a property. They are defined using the set keyword followed by the method name, and they contain a single parameter representing the new value. Setters are assigned values like regular properties, but they invoke the setter function internally to perform additional logic.</p>
        <p>Getters and setters are defined using the get and set keywords, respectively, followed by the property name. Here's an example:</p>
        <pre>
          <div className={styles.appCode}>{`
class MyClass {
  private _myProperty: string;

  get myProperty(): string {
    return this._myProperty;
  }

  set myProperty(value: string) {
    this._myProperty = value;
  }
}
          `}</div>
        </pre>
        <p>In this example, the myProperty getter and setter are used to control access to the _myProperty private property. The getter returns the value of _myProperty, while the setter assigns a value to it.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'What is a TypeScript Map file?',
    answer: 
      <>
        <p>A TypeScript Map file (.map) is a source map file that contains the mapping between the TypeScript code and the JavaScript code. It is generated by the TypeScript compiler and is used to map the compiled JavaScript code back to the original TypeScript code during debugging. This allows you to debug TypeScript code directly in the browser or in the IDE without having to switch to the compiled JavaScript code.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'What is the difference between String and string in TypeScript?',
    answer: 
      <>
        <p>String is a wrapper object that is used to manipulate strings, while string is a primitive data type that represents textual data. String is a constructor function that can be used to create a new string object, while string is a primitive type that is not an object and has no methods or properties of its own. In practice, you should generally use the string type for working with textual data in TypeScript, as it provides type checking and simpler, more efficient code. In contrast, avoid using the String object unless you have a specific use case that requires the additional functionality it provides.  String is rarely used.</p>
        <pre>
          <div className={styles.appCode}>{` 
const str = new String('Hello, TypeScript!');
console.log(str); // String { "Hello, TypeScript!" }

const str2 = 'Hello, TypeScript!';
console.log(str2); // Hello, TypeScript!
          `}</div>
        </pre>
        <p>Here, str is a String object, while str2 is a string primitive.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Explain Type Erasure in TypeScript?',
    answer: 
      <>
        <p>Type erasure is a process that removes type annotations and other TypeScript-specific syntax from the source code during compilation, resulting in pure JavaScript code. This is done to ensure compatibility with the JavaScript ecosystem and to avoid breaking existing JavaScript code. Type erasure also helps to reduce the size of the compiled JavaScript code and improve performance.</p>
        <p>For example, the following TypeScript code:</p>
        <pre>
          <div className={styles.appCode}>{`
function identity<T>(arg: T): T {
  return arg;
}
          `}</div>
        </pre>
        <p>will be converted to the following JavaScript code:</p>
        <pre>
          <div className={styles.appCode}>{`
function identity(arg) {
  return arg;
}
          `}</div>
        </pre>
        <p>As you can see, the type annotation <strong>&#60;T&#62;</strong> is removed from the function signature.</p>
        <p>Notes on type erasure: </p>
        <ul>
          <li>Runtime type information: TypeScript's type system only exists at compile-time for static type checking. Once compiled to JavaScript, there’s no information about types at runtime, which means you cannot perform type-checks or type-related operations during the execution of the code.</li>
          <li>Compatibility: Type erasure ensures that the generated JavaScript code remains compatible with existing JavaScript libraries, frameworks, and codebases. TypeScript aims to be a strict superset of JavaScript, and type erasure helps maintain that compatibility.</li>
          <li>Performance impact: Type erasure causes TypeScript's static type checking to have no overhead at runtime. The generated JavaScript code doesn't include any additional constructs related to type-checking, which means there is no impact on the overall runtime performance of the application.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'What are enums in TypeScript?',
    answer: 
      <>
        <p>Enums in TypeScript are a special type that allows you to define a set of named constants. They are useful for representing a fixed set of values, such as days of the week, directions, or colors. Enums are defined using the enum keyword followed by the enum name and a list of comma-separated values enclosed in curly braces. Here's an example:</p>
        <pre>
          <div className={styles.appCode}>{`
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
          `}</div>
        </pre>
        <p>Here, Direction is an enum with four possible values: Up, Down, Left, and Right. By default, the values of an enum start at 0 and increment by 1, but you can also assign custom values to each enum member:</p>
        <pre>
          <div className={styles.appCode}>{`
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}
          `}</div>
        </pre>
        <p>Here, the values of the enum members start at 1 and increment by 1.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'List five features of TypeScript.',
    answer: 
      <>
        <p>TypeScript brings several powerful features to JavaScript development, which help in creating safer, more maintainable, and scalable code. Here are some key features of TypeScript:</p>
        <ul>
          <li><strong>Static Typing:</strong> TypeScript introduces static typing, providing type checking during the development stage rather than at runtime. This leads to early detection of errors and better developer tooling.</li>
          <li><strong>Interfaces:</strong> Interfaces define the shape, structure, and contract of objects or classes, allowing for custom types and enforcing a consistent structure across your codebase.</li>
          <li><strong>Classes:</strong> TypeScript supports object-oriented programming concepts like inheritance, encapsulation, and abstraction through classes and their related features, such as constructors, access modifiers, and abstract classes.</li>
          <li><strong>Generics:</strong> Generics enable you to create highly reusable and flexible components that work with a variety of types without sacrificing type safety.</li>
          <li><strong>Type Inference:</strong> TypeScript automatically infers types of variables and expressions when they are not explicitly specified.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'What are the Components of TypeScript?',
    answer: 
      <>
        <p>TypeScript consists of several components that work together to provide powerful features for developers building JavaScript applications:</p>
        <ul>
          <li><strong>Language:</strong> TypeScript extends JavaScript by adding optional static typing, interfaces, classes, decorators, namespaces, and many other features that JavaScript doesn't have natively.</li>
          <li><strong>Compiler:</strong> TypeScript has a dedicated transpiler (tsc) that compiles TypeScript code into plain JavaScript. The TypeScript compiler ensures type safety, checks for errors, and transpiles TypeScript into JavaScript, which can run across different browsers and platforms.</li>
          <li><strong>Language Service:</strong> The TypeScript Language Service provides editor support, such as IntelliSense, code completion, syntax highlighting, and refactoring, for modern development environments like Visual Studio, VSCode, WebStorm, etc. These advanced editing features enable developers to write code efficiently and productively.</li>
          <li><strong>Type Definitions:</strong> TypeScript uses type definition files (.d.ts) to provide type information about external libraries or JavaScript code. Type definitions help TypeScript developers access type information for third-party libraries like jQuery, React, or Express that are written in JavaScript. The DefinitelyTyped repository is a popular source of type definitions for various JavaScript libraries.</li>
          <li><strong>Tooling:</strong> TypeScript has robust integration with popular build tools, test runners, task runners, and bundlers, such as Webpack, Rollup, Gulp, Grunt, Babel, and Jest. These integrations ensure a smooth development, testing, and build process for TypeScript developers.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'Explain variables in TypeScript and how to create them (const, let, annotations).',
    answer: 
      <>
        <p>In TypeScript, variables are memory locations that store values of various data types. To declare and initialize a variable in TypeScript, you use the let or const keyword followed by the variable name, an optional type annotation, and the assignment operator (=) to provide an initial value.</p>
        <p>Creating Variables:</p>
        <ul>
          <li><strong>Using let keyword:</strong> The let keyword is used to create mutable variables that can be reassigned later in your code. It follows block-scoping rules, making the variable available only within the scope in which it is defined. Can be declared without initializing (assigning value).</li>
          <li><strong>Using const keyword</strong> The const keyword creates constant, immutable variables that must be initialized at the time of declaration and cannot be reassigned afterwards. This enforces the value remains constant throughout the execution of the program.  Must be declared and initialized in the same statement.</li>
          <li><strong>Type annotations:</strong>
            <ul>
              <li>In TypeScript, you can explicitly set a type for a variable using type annotations, which are written after the variable name followed by a colon. This helps catch type-related errors at compile-time.  For example:
                <pre>
                  <div className={styles.appCode}>{`
let myVariable: number = 42;
const myConstant: string = "Hello, TypeScript!";
                  `}</div>
                </pre>                
              </li>
              <li>If you do not explicitly set a type for a variable, TypeScript will infer the type based on the initial assigned value, which is known as "type inference".</li>
            </ul>
          </li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Core Typescript',
    level: 0,
    question: 'List the access modifiers that TypeScript supports.',
    answer: 
      <>
        <ul>
          <li><strong>Public:</strong> members of the class including child classes and the instances of the class have access to it.</li>
          <li><strong>Protected:</strong> Here, the members of the class including the child classes can access except the instances of the class.</li>
          <li><strong>Private:</strong> accessible only to the members of the class.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Why do we say that TypeScript is an optionally statically typed language?',
    answer: 
      <>
        <p>TypeScript is referred to as an "optionally statically typed language" because it allows developers to mix both static and dynamic typing within the same codebase. TypeScript provides static type-checking through type annotations, interfaces, and generics, enabling safer and more efficient code development. However, it doesn't enforce static typing for every variable or function, as it's not a requirement for all TypeScript code.</p>
        <p>The language offers a great deal of flexibility, making it easy for developers to migrate from JavaScript and incrementally add static types to their existing JavaScript projects. TypeScript gracefully handles dynamic typing with the built-in any type, which effectively bypasses static type-checking. By using the any type, developers can tell the compiler to treat a particular variable or object as dynamically-typed, retaining JavaScript's dynamic nature when necessary.</p>
        <p>Thus, TypeScript's ability to balance static and dynamic typing, where developers can choose to use one or the other as per their requirements, is what makes it "optionally statically typed."</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'What are modules in TypeScript?',
    answer: 
      <>
        <p>In TypeScript, modules are a way to organize and encapsulate related code, making it easier to reason about, maintain, and manage. They allow developers to split code into separate files, with each module exporting and importing specific components, such as classes, functions, variables, or interfaces. By using modules, you can avoid naming collisions and control the visibility of your code parts.</p>
        <p>Modules in TypeScript can adhere to one of the two popular module systems: CommonJS (used mainly in Node.js applications) or ES Modules (used in modern JavaScript running in browsers).</p>
        <ul>
          <li>Exporting Components: To export a component (class, function, variable, or interface) from a module, you use the export keyword:
            <pre>
              <div className={styles.appCode}>{`
export class MyClass {
  // Class implementation
}

export function myFunction() {
  // Function implementation
}

export const myVariable = 42;

export interface MyInterface {
  // Interface definition
}
            `}</div>
            </pre>
          </li>
          <li>Importing Components: To import and use a component from another module, you use the import statement:
            <pre>
              <div className={styles.appCode}>{`
import { MyClass, myFunction, myVariable, MyInterface } from './my-module';
            `}</div>
            </pre>
          </li>
        </ul>
        <p>Aside from the CommonJS and ES Modules systems, TypeScript supports other module systems, such as AMD, SystemJS, and UMD, enabling compatibility with various runtime environments.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Differentiate between the internal module and the external module?',
    answer: 
      <>
        <p>Modules in TypeScript are used to organize and encapsulate related code, making it easier to reason about, maintain, and manage. There are two types of modules in TypeScript:</p>
        <ul>
          <li><strong>Internal modules:</strong> Also known as "namespaces," they are used to organize and group related code within a single namespace, making it easier to avoid naming collisions. Internal modules are defined using the namespace keyword, and they can be nested within other namespaces. They are commonly used in large-scale applications to organize code into logical groups.
            <pre>
              <div className={styles.appCode}>{`
namespace MyNamespace {
  // Namespace implementation
}
            `}</div>
            </pre>
          </li>
          <li><strong>External modules:</strong> Also known as "file modules," they are one module per source file. When you create a new TypeScript file and work with the import and export keywords, you are automatically creating an external module. These are the most commonly used TypeScript modules.
            <pre>
              <div className={styles.appCode}>{`
export class MyClass {
  // Class implementation
}

export function myFunction() {
  // Function implementation
}

export const myVariable = 42;

export interface MyInterface {
  // Interface definition
}
            `}</div>
            </pre>
          </li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Is function overloading supported in TypeScript?',
    answer: 
      <>
        <p>Yes, TypeScript supports function overloading, allowing you to define multiple function signatures with the same function name but differing parameters. Function overloading enables you to have several ways to call the same function with different argument types and combinations while maintaining type checking capabilities.</p>
        <p>To implement function overloading in TypeScript, you need to define the different overloaded function signatures without their implementation, followed by the actual function implementation with a more generic signature. The implementation must be flexible enough to handle all supported overloads, and TypeScript will enforce the implementation to be compatible with the provided overloaded signatures.</p>
        <pre>
          <div className={styles.appCode}>{`
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;

  // Implementation
}
          `}</div>
        </pre>
        <p>In this example, the add function is overloaded with two different signatures: one for adding numbers and another for adding strings. The actual function implementation is more generic and can handle both cases.</p>
      </>
  },
  {
    rating: 0,
    subject: 'typescript',
    topic: 'Intermediate Typescript',
    level: 1,
    question: 'Explain Mixins',
    answer: 
      <>
        <p>Mixins are a way of creating classes from components that can be reused. Basically, they are built up by combining simpler partial classes. So this means instead of class A extending class B to take its functionality, B takes class A and reuters a new class with additional functionality, And, thus function B is a mixin here.</p>
        <p>Example:</p>
        <pre>
          <div className={styles.appCode}>{`
class A {
  constructor(public a: string) {}
}

class B {
  constructor(public b: string) {}
}

class C implements A, B {
  constructor(public a: string, public b: string) {}
}
          `}</div>
        </pre>
        <p>Here, class C is a mixin of class A and B.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'Explain arrays in TypeScript and how to create them.',
    answer: 
      <>
        <p>Arrays in TypeScript are used to store a collection of elements of the same type. They can be created using the following syntax:</p>
        <pre>
          <div className={styles.appCode}>{`
// Using square brackets
let myArray: number[] = [1, 2, 3, 4, 5];

// Using the Array constructor
let myArray2: Array<number> = [1, 2, 3, 4, 5];
          `}</div>
        </pre>
        <p>Here, myArray and myArray2 are both arrays of numbers, initialized with the specified values. You can also create an empty array and add elements to it later:</p>
        <pre>
          <div className={styles.appCode}>{`
let myEmptyArray: string[] = [];
myEmptyArray.push("Hello");
myEmptyArray.push("TypeScript");
          `}</div>
        </pre>
        <p>Arrays in TypeScript support various operations, such as adding, removing, and accessing elements, as well as iterating over the elements using loops or array methods.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'What are some advantages and disadvantages of using TypeScript?',
    answer: 
      <>
        <p>TypeScript offers several advantages and disadvantages compared to JavaScript:</p>
        <ul>
          <li><strong>Advantages:</strong>
            <ul>
              <li><strong>Static Typing:</strong> TypeScript provides static type checking, which helps catch errors at compile-time and improves code quality and reliability.</li>
              <li><strong>Enhanced Tooling:</strong> TypeScript's language service provides advanced editor support, such as IntelliSense, code completion, and refactoring, making it easier to write and maintain code.</li>
              <li><strong>Improved Maintainability:</strong> TypeScript's features, such as interfaces, classes, and modules, help organize and structure code, making it more maintainable and scalable.</li>
              <li><strong>Compatibility with JavaScript:</strong> TypeScript is a superset of JavaScript, meaning existing JavaScript code can be gradually migrated to TypeScript without major changes.</li>
              <li><strong>Community and Ecosystem:</strong> TypeScript has a large and active community, with a rich ecosystem of libraries, tools, and resources to support development.</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li><strong>Learning Curve:</strong> TypeScript introduces additional concepts and syntax, which may require some time for developers to learn and adapt to.</li>
              <li><strong>Build Process:</strong> TypeScript requires a build step to transpile TypeScript code into JavaScript, which adds complexity to the development and build process.</li>
              <li><strong>Tooling and Integration:</strong> While TypeScript has good support for popular editors and tools, some specialized tools and libraries may have limited TypeScript support.</li>
              <li><strong>Performance Overhead:</strong> TypeScript's static type checking and additional features may introduce a slight performance overhead compared to raw JavaScript.</li>
              <li><strong>Community Adoption:</strong> While TypeScript has gained popularity, not all developers and projects have fully adopted it, which may lead to compatibility and integration challenges.</li>
            </ul>
          </li>
        </ul>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'Explain the features of Arrays in TypeScript.',
    answer: 
      <>
        <ul>
<li>An array declaration allocates memory blocks in a sequential order.</li>
<li>Arrays are immutable. This means that once an array is created, it cannot be resized.</li>
<li>An array element is represented by each memory block.</li>
<li>The subscript/index of an array element is a unique number that identifies the element.</li>
<li>Arrays, like variables, should be declared before being used. Declare an array with the const keyword.</li>
<li>The term "array initialization" refers to the process of filling an array with elements.</li>
<li>The values of array elements can be updated or modified, but they cannot be erased.</li>
        </ul>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'What is the difference between "any" and "unknown" in TypeScript?',
    answer: 
      <>
        <p>The "any" and "unknown" types in TypeScript are both used to represent values of unknown or dynamic types, but they have different characteristics and use cases:</p>
        <ul>
          <li><strong>any:</strong> The "any" type is a dynamic type that can represent any value, including primitives, objects, and functions. It effectively bypasses TypeScript's static type checking, allowing you to perform operations and access properties on any value without type-related errors. While "any" provides maximum flexibility, it sacrifices type safety and can lead to runtime errors if used carelessly. It is often used when migrating existing JavaScript code to TypeScript or when working with third-party libraries that lack type definitions.</li>
          <li><strong>unknown:</strong> The "unknown" type is a safer alternative to "any" that represents values of an unknown type. It is more restrictive than "any" and requires type checking or type assertions before performing operations on the value. This ensures that the value is used in a type-safe manner, preventing type-related errors at runtime. "unknown" is often used when working with values from external sources, such as user input or API responses, where the type is not known in advance.</li>
        </ul>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'What is the tsconfig.json file in TypeScript?',
    answer: 
      <>
        <p>The tsconfig.json file is a configuration file used to specify compiler options and project settings for a TypeScript project. It allows you to define how TypeScript should compile your code, including options for target ECMAScript version, module system, output directory, source maps, and many other settings. The tsconfig.json file is typically located at the root of a TypeScript project and is used by the TypeScript compiler (tsc) to compile the project based on the specified settings.</p>
        <p>Here's an example of a simple tsconfig.json file:</p>
        <pre>
          <div className={styles.appCode}>{`
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "dist",
    "strict": true,
    "sourceMap": true
  },
  "include": [
    "src/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
          `}</div>
        </pre>
        <p>In this example, the tsconfig.json file specifies the compiler options, such as the target ECMAScript version, module system, output directory, strict mode, and source map generation. It also includes and excludes specific files and directories from the compilation process.</p>

      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'How do you convert a string to a number in TypeScript?',
    answer: 
      <>
        <p>In TypeScript, you can convert a string to a number using the built-in parseInt and parseFloat functions, or using the unary plus (+) operator:</p>
        <pre>
          <div className={styles.appCode}>{`
const str = "42";
const num1 = parseInt(str, 10); // Using parseInt
const num2 = parseFloat(str); // Using parseFloat
const num3 = +str; // Using the unary plus operator
          `}</div>
        </pre>
        <p>Here, str is a string containing the number "42". The parseInt function converts the string to an integer using the specified radix (base), while the parseFloat function converts the string to a floating-point number. The unary plus operator also converts the string to a number, but it is less explicit and may lead to unexpected results in some cases.</p>        
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What is contextual typing in TypeScript?',
    answer: 
      <>
        <p>Contextual typing is a feature of TypeScript that infers the type of an expression based on its context, allowing you to write more concise and expressive code. It is particularly useful when working with complex type inference scenarios, such as function return types, object literals, and array literals.</p>
        <p>For example, when you define an object literal, TypeScript can infer the types of the object properties based on the context in which the object is used:</p>
        <pre>
          <div className={styles.appCode}>{`
const person = {
  name: "Alice",
  age: 30,
  email: "
};
          `}</div>
        </pre>
        <p>In this example, TypeScript infers the type of the person object based on the properties and their values, allowing you to access and use the properties with type safety.</p>
        <p>Contextual typing also applies to function return types, where TypeScript can infer the return type of a function based on the return statements and the context in which the function is called.</p>

      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'What is the "never" type in TypeScript?',
    answer: 
      <>
        <p>The "never" type in TypeScript represents the type of values that never occur. It is used to indicate that a function never returns a value or that a variable cannot have any value. The "never" type is often used to represent functions that throw errors, enter infinite loops, or have unreachable code paths.</p>
        <p>For example, a function that always throws an error can be annotated with the "never" return type:</p>
        <pre>
          <div className={styles.appCode}>{`
function throwError(message: string): never {
  throw new Error(message);
}
          `}</div>
        </pre>
        <p>In this example, the throwError function is annotated with the "never" return type, indicating that it never returns a value and always throws an error.</p>
        <p>The "never" type is also used to represent unreachable code paths, such as infinite loops or conditional branches that never execute:</p>
        <pre>
          <div className={styles.appCode}>{`
function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}
          `}</div>
        </pre>
        <p>In this example, the infiniteLoop function is annotated with the "never" return type, indicating that it never returns a value due to the infinite loop.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What is the "readonly" modifier in TypeScript?',
    answer: 
      <>
        <p>The "readonly" modifier in TypeScript is used to make properties of an object immutable, preventing them from being reassigned or modified after the object is created. It is a form of access modifier that enforces read-only access to the property, ensuring that its value remains constant throughout the object's lifetime.</p>
        <p>Here's an example of using the "readonly" modifier:</p>
        <pre>
          <div className={styles.appCode}>{`
class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Alice");
person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
          `}</div>
        </pre>
        <p>In this example, the name property of the Person class is marked as "readonly," preventing it from being modified after the object is created. Any attempt to reassign the name property will result in a compilation error.</p>
        <p>The "readonly" modifier is often used to create immutable data structures and enforce data integrity in TypeScript code.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'What is the "as" keyword used for in TypeScript?',
    answer: 
      <>
        <p>The "as" keyword in TypeScript is used for type assertions, which allow you to explicitly tell the TypeScript compiler that a value has a specific type, even when the compiler cannot infer it automatically. Type assertions are a way to override the default type inference and provide additional type information to the compiler.</p>
        <p>There are two forms of type assertions in TypeScript:</p>
        <ul>
          <li><strong>Angle-bracket syntax:</strong> The angle-bracket syntax is the older form of type assertion, which uses the {`< and >`} characters to specify the target type:
            <pre>
              <div className={styles.appCode}>{`
let value: any = "Hello, TypeScript!";
let length = (value as string).length;
              `}</div>
            </pre>
          </li>
          <li><strong>as keyword syntax:</strong> The as keyword syntax is the newer form of type assertion, which uses the as keyword to specify the target type:
            <pre>
              <div className={styles.appCode}>{`
let value: any = "Hello, TypeScript!";
let length = (value as string).length;
              `}</div>
            </pre>
          </li>
        </ul>
        <p>Both forms of type assertions are functionally equivalent, and you can choose the one that best fits your coding style and preferences.</p>        
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What is the "declare" keyword used for in TypeScript?',
    answer: 
      <>
        <p>The "declare" keyword in TypeScript is used to tell the compiler about the existence of a variable, function, class, or type without providing an actual implementation. It is often used to declare types for external libraries, global variables, or ambient modules that are defined outside the current TypeScript project.</p>
        <p>When you use the "declare" keyword, you are essentially telling the TypeScript compiler to trust that the declared entity exists at runtime, even though it may not be defined within the current TypeScript codebase. This is useful for integrating TypeScript with existing JavaScript libraries or for defining types for global variables and modules.</p>
        <p>Here's an example of using the "declare" keyword to declare a global variable:</p>
        <pre>
          <div className={styles.appCode}>{`
declare var jQuery: (selector: string) => any;
          `}</div>
        </pre>
        <p>In this example, the "declare" keyword is used to declare the global variable jQuery, which is assumed to be available at runtime but is not defined within the current TypeScript project. This allows you to use jQuery in your TypeScript code without causing compilation errors.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What is a lambda function in TypeScript?',
    answer: 
      <>
        <p>A lambda function in TypeScript is a concise way to define an anonymous function using the arrow function syntax {`(=>)`}. It is also known as an arrow function or a fat arrow function. Lambda functions are a modern alternative to traditional function expressions and provide a more compact and expressive syntax for defining functions.</p>
        <p>Here's an example of a lambda function:</p>
        <pre>
          <div className={styles.appCode}>{`
const add = (a: number, b: number): number => a + b;
          `}</div>
        </pre>
        <p>In this example, the add function is defined using the arrow function syntax, with parameters a and b and a return type of number. The body of the function is a single expression that adds the two parameters and returns the result.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'How are objects created in TypeScript?',
    answer: 
      <>
        <p>An Object type in TypeScript refers to any value with properties. It can be defined simply by specifying the properties and the kinds of those properties. As an example:</p>
        <pre>
          <div className={styles.appCode}>{`
let person: { name: string, age: number } = {
  name: "Alice",
  age: 30
};
          `}</div>
        </pre>
        <p>In this example, the person object has two properties: name of type string and age of type number. The object is initialized with the specified values for the properties.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What are tuples in TypeScript?',
    answer: 
      <>
        <p>Tuples in TypeScript are a data structure that allows you to store a fixed-size, ordered collection of elements of different types. They are similar to arrays, but with a fixed number of elements and a specific type for each element. Tuples are defined using the tuple type syntax, which consists of square brackets and a comma-separated list of element types:</p>
        <pre>
          <div className={styles.appCode}>{`
let person: [string, number] = ["Alice", 30];
          `}</div>
        </pre>
        <p>In this example, the person tuple has two elements: a string representing the person's name and a number representing the person's age. The order and types of the elements are fixed and enforced by the tuple type.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What is Namespace and how to declare it?',
    answer: 
      <>
        <p>A namespace in TypeScript is a way to organize and group related code within a single namespace, making it easier to avoid naming collisions. Namespaces are used to create logical groupings of code, similar to modules, but with a different syntax and scoping rules. Namespaces are defined using the namespace keyword, followed by the namespace name and the code within the namespace:</p>
        <pre>
          <div className={styles.appCode}>{`
namespace MyNamespace {
  export class MyClass {
    // Class implementation
  }

  export function myFunction() {
    // Function implementation  
  }

  export const myVariable = 42;

  export interface MyInterface {
    // Interface definition
  }
}
          `}</div>
        </pre>
        <p>In this example, the MyNamespace namespace contains a class, a function, a variable, and an interface, all of which are exported and accessible outside the namespace. Namespaces can be nested within other namespaces, allowing for hierarchical organization of code.</p>        
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What are Rest Parameters in Typescript?',
    answer: 
      <>
        <p>Rest parameters in TypeScript allow you to represent an indefinite number of arguments as an array. They are useful when you want to work with a function that can accept a variable number of arguments, making it more flexible and expressive. Rest parameters are denoted by the ellipsis (...) followed by the parameter name, which collects all remaining arguments into an array:</p>
        <pre>
          <div className={styles.appCode}>{`
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

const result = sum(1, 2, 3, 4, 5); // Returns 15
          `}</div>
        </pre>
        <p>In this example, the sum function uses a rest parameter called numbers, which collects all remaining arguments into an array. The function then uses the reduce method to calculate the sum of the numbers in the array.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain type guards in TypeScript.',
    answer: 
      <>
        <p>Type guards in TypeScript are a way to narrow down the type of a variable within a conditional block, based on a runtime check. They are used to provide additional type information to the TypeScript compiler, allowing you to work with more specific types and avoid type-related errors.</p>
        <p>There are several ways to perform type guards in TypeScript, including:</p>
        <ul>
          <li><strong>typeof type guards:</strong> Using the typeof operator to check the type of a variable:
            <pre>
              <div className={styles.appCode}>{`
function isNumber(value: any): value is number {
  return typeof value === "number";
}
              `}</div>
            </pre>
          </li>
          <li><strong>instanceof type guards:</strong> Using the instanceof operator to check if an object is an instance of a specific class or constructor function:
            <pre>
              <div className={styles.appCode}>{`
function isString(value: any): value is string {
  return value instanceof String;
}
              `}</div>
            </pre>
          </li>
          <li><strong>custom type guards:</strong> Defining custom functions that perform runtime checks and return a type predicate:
            <pre>
              <div className={styles.appCode}>{`
function isEmail(value: any): value is Email {
  return typeof value === "string" && value.includes("@");
}
              `}</div>
            </pre>
          </li>
        </ul>
        <p>By using type guards, you can narrow down the type of a variable within a conditional block and access specific properties or methods of the narrowed type with type safety.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain the "keyof" operator in TypeScript.',
    answer: 
      <>
        <p>The "keyof" operator in TypeScript is a type operator that produces a union type of all the property names of a given type. It is often used to create more flexible and type-safe code when working with object properties and keys.</p>
        <p>Here's an example of using the "keyof" operator:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person; // "name" | "age" | "email"
          `}</div>
        </pre>
        <p>In this example, the PersonKeys type is defined as the union of all property names of the Person type, using the "keyof" operator. This allows you to work with the keys of the Person type in a type-safe manner, such as creating dynamic property access or enforcing specific property names in function parameters.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain the "in" operator in TypeScript.',
    answer: 
      <>
        <p>The "in" operator in TypeScript is used to check if a property exists in an object or if an index exists in an array. It is often used in conditional statements and type guards to perform runtime checks on object properties and array indices.</p>
        <p>Here's an example of using the "in" operator:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age: number;
  email: string;
};

function hasProperty(obj: any, prop: string): boolean {
  return prop in obj;
}

const person: Person = {
  name: "Alice",
  age: 30,
  email: "
};

console.log(hasProperty(person, "name")); // true

console.log(hasProperty(person, "address")); // false
          `}</div>
        </pre>
        <p>In this example, the hasProperty function uses the "in" operator to check if the specified property exists in the person object. The function returns true if the property exists and false if it does not.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain the "as const" assertion in TypeScript.',
    answer: 
      <>
        <p>The "as const" assertion in TypeScript is used to create a readonly, literal type from an expression. It tells the TypeScript compiler to infer the most specific literal type for the expression, making the type immutable and preserving the exact value of the expression.</p>
        <p>Here's an example of using the "as const" assertion:</p>
        <pre>
          <div className={styles.appCode}>{`
const person = {
  name: "Alice",
  age: 30
} as const;

// person: {
//   readonly name: "Alice";
//   readonly age: 30;
// }
          `}</div>
        </pre>
        <p>In this example, the person object is annotated with the "as const" assertion, which creates a readonly, literal type for the object properties. This ensures that the name and age properties are immutable and have the exact values "Alice" and 30, respectively.</p>
        <p>The "as const" assertion is useful for creating immutable, literal types from object and array expressions, providing additional type safety and preventing accidental modifications to the values.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain the "Partial" utility type in TypeScript.',
    answer: 
      <>
        <p>The "Partial" utility type in TypeScript is used to create a new type by making all properties of an existing type optional. It is often used to define partial objects or to create more flexible types when working with optional properties.</p>
        <p>Here's an example of using the "Partial" utility type:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age: number;
  email: string;
};

type PartialPerson = Partial<Person>;

// PartialPerson: {
//   name?: string | undefined;
//   age?: number | undefined;
//   email?: string | undefined;
// }
          `}</div>
        </pre>
        <p>In this example, the PartialPerson type is defined as a partial version of the Person type, with all properties made optional using the "Partial" utility type. This allows you to work with partial objects that may not have all properties defined, providing more flexibility and type safety.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain the "Required" utility type in TypeScript.',
    answer: 
      <>
        <p>The "Required" utility type in TypeScript is used to create a new type by making all properties of an existing type required. It is often used to define stricter types and enforce the presence of specific properties.</p>
        <p>Here's an example of using the "Required" utility type:</p>
        <pre>
          <div className={styles.appCode}>{`
type PartialPerson = {
  name?: string;
  age?: number;
  email?: string;
};

type RequiredPerson = Required<PartialPerson>;

// RequiredPerson: {
//   name: string;
//   age: number;
//   email: string;
// }
          `}</div>
        </pre>
        <p>In this example, the RequiredPerson type is defined as a required version of the PartialPerson type, with all properties made mandatory using the "Required" utility type. This enforces the presence of all properties and ensures that they are not optional or undefined.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain type predicates in TypeScript.',
    answer: 
      <>
        <p>Type predicates in TypeScript are a way to narrow down the type of a variable within a conditional block, based on a runtime check. They are used to provide additional type information to the TypeScript compiler, allowing you to work with more specific types and avoid type-related errors.</p>
        <p>There are several ways to perform type predicates in TypeScript, including:</p>
        <ul>
          <li><strong>typeof type predicates:</strong> Using the typeof operator to check the type of a variable:
            <pre>
              <div className={styles.appCode}>{`
function isNumber(value: any): value is number {
  return typeof value === "number";
}
              `}</div>
            </pre>
          </li>
          <li><strong>instanceof type predicates:</strong> Using the instanceof operator to check if an object is an instance of a specific class or constructor function:
            <pre>
              <div className={styles.appCode}>{`
function isString(value: any): value is string {
  return value instanceof String;
}
              `}</div>
            </pre>
          </li>
          <li><strong>custom type predicates:</strong> Defining custom functions that perform runtime checks and return a type predicate:
            <pre>
              <div className={styles.appCode}>{`
function isEmail(value: any): value is Email {
  return typeof value === "string" && value.includes("@");
}
              `}</div>
            </pre>
          </li>
        </ul>
        <p>By using type predicates, you can narrow down the type of a variable within a conditional block and access specific properties or methods of the narrowed type with type safety.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain type aliases in TypeScript.',
    answer: 
      <>
        <p>Type aliases in TypeScript are a way to create custom named types that can be used to represent complex or reusable types. They are often used to define union types, intersection types, tuple types, and other custom types, providing more expressive and readable code.</p>
        <p>Here's an example of using type aliases:</p>
        <pre>
          <div className={styles.appCode}>{`
type Point = {
  x: number;
  y: number;
};

type Circle = {
  center: Point;
  radius: number;
};

type Rectangle = {
  topLeft: Point;
  bottomRight: Point;
};

type Shape = Circle | Rectangle;
          `}</div>
        </pre>
        <p>In this example, the Point, Circle, Rectangle, and Shape types are defined using type aliases, allowing you to create custom named types for representing geometric shapes. This makes the code more readable and maintainable, and allows you to reuse the types in multiple places.</p>

      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What are mapped types in TypeScript?',
    answer: 
      <>
        <p>Mapped types in TypeScript are a way to create new types by transforming the properties of an existing type. They are often used to create modified or partial versions of existing types, such as making all properties optional, readonly, or nullable.</p>
        <p>Here's an example of using mapped types:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age: number;
  email: string;
};

type PartialPerson = {
  [K in keyof Person]?: Person[K];
};

type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

type NullablePerson = {
  [K in keyof Person]: Person[K] | null;
};
          `}</div>
        </pre>
        <p>In this example, the PartialPerson, ReadonlyPerson, and NullablePerson types are defined using mapped types, which transform the properties of the Person type to create partial, readonly, and nullable versions of the type. This allows you to create more flexible and expressive types based on an existing type.</p>

      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What are Conditional Types in TypeScript?',
    answer: 
      <>
        <p>Conditional types in TypeScript are a way to create types that depend on a condition. They are often used to define more flexible and dynamic types based on runtime checks or type relationships, allowing you to create more expressive and type-safe code.</p>
        <p>Here's an example of using conditional types:</p>
        <pre>
          <div className={styles.appCode}>{`
type Check<T> = T extends string ? "string" : "other";

type A = Check<string>; // "string"
type B = Check<number>; // "other"
          `}</div>
        </pre>
        <p>In this example, the Check type is defined as a conditional type that checks if the type T extends string. If the condition is true, the type evaluates to "string"; otherwise, it evaluates to "other". This allows you to create more flexible and dynamic types based on type relationships.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What are Distributive Conditional Types?',
    answer: 
      <>
        <p>Distributive conditional types in TypeScript are a special type of conditional type that automatically distributes over union types. They are often used to create more flexible and dynamic types based on union types, allowing you to work with multiple types at once.</p>
        <p>Here's an example of using distributive conditional types:</p>
        <pre>
          <div className={styles.appCode}>{`
type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "other";

type A = TypeName<string | number>; // "string" | "number"

type B = TypeName<string | boolean>; // "string" | "boolean"
          `}</div>
        </pre>
        <p>In this example, the TypeName type is defined as a distributive conditional type that distributes over the union type T. This allows you to create more flexible and dynamic types based on union types, providing additional type safety and expressiveness.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain Declaration Files with Typescript and their advantages/disadvantages.',
    answer: 
      <>
        <p>Declaration files in TypeScript are used to provide type information for JavaScript code that does not have built-in TypeScript type definitions. They are often used to define types for third-party libraries, legacy code, or external modules, allowing you to use the code with type safety and IntelliSense in TypeScript projects.</p>
        <p>Advantages of declaration files:</p>
        <ul>
          <li>Enables type safety and IntelliSense for JavaScript code in TypeScript projects.</li>
          <li>Allows you to use third-party libraries and external modules with type annotations and type checking.</li>
          <li>Provides a way to define types for legacy code and existing JavaScript libraries that lack built-in TypeScript support.</li>
        </ul>
        <p>Disadvantages of declaration files:</p>
        <ul>
          <li>Requires additional maintenance and updates to keep the type definitions in sync with the JavaScript code.</li>
          <li>May introduce inconsistencies or inaccuracies if the type definitions do not accurately reflect the JavaScript code.</li>
          <li>Can be challenging to create and maintain for complex or undocumented JavaScript code.</li>
        </ul>
        <p>Overall, declaration files are a powerful tool for integrating JavaScript code with TypeScript projects, but they require careful management and maintenance to ensure accurate and up-to-date type definitions.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What are the Recent Advancements in TypeScript?',
    answer: 
      <>
        <p>Recent advancements in TypeScript include:</p>
        <ul>
          <li><strong>Optional Chaining:</strong> The optional chaining operator (?.) allows you to safely access nested properties and methods without causing runtime errors if the intermediate properties are null or undefined.</li>
          <li><strong>Nullish Coalescing:</strong> The nullish coalescing operator (??) allows you to provide a default value for null or undefined values, without including other falsy values such as empty strings or zero.</li>
          <li><strong>Template Literal Types:</strong> Template literal types allow you to create new types by concatenating string literals and inferring the resulting type based on the concatenation.</li>
          <li><strong>Key Remapping in Mapped Types:</strong> Mapped types now support key remapping, allowing you to create new types by transforming the keys of an existing type.</li>
          <li><strong>Recursive Conditional Types:</strong> Conditional types now support recursive type relationships, allowing you to create more complex and dynamic types based on recursive conditions.</li>
          <li><strong>Improved Editor Support:</strong> TypeScript has improved support for editors and IDEs, including better IntelliSense, code navigation, and refactoring tools.</li>
        </ul>
        <p>These advancements have made TypeScript more powerful, expressive, and type-safe, and have improved the developer experience when working with TypeScript code.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What is Type Assertion? Explain its types.',
    answer: 
      <>
        <p>Type assertion in TypeScript is a way to tell the compiler about the type of a variable, even when the compiler cannot infer it automatically. It is often used to override the default type inference and provide additional type information to the compiler.</p>
        <p>There are two forms of type assertion in TypeScript:</p>
        <ul>
          <li><strong>Angle-bracket syntax:</strong> The angle-bracket syntax is the older form of type assertion, which uses the {`<  >`} characters to specify the target type:
            <pre>
              <div className={styles.appCode}>{`
let value: any = "Hello, TypeScript!";
let length = (<string>value).length;
              `}</div>
            </pre>
          </li>
          <li><strong>as keyword syntax:</strong> The as keyword syntax is the newer form of type assertion, which uses the as keyword to specify the target type:
            <pre>
              <div className={styles.appCode}>{`
let value: any = "Hello, TypeScript!";
let length = (value as string).length;
              `}</div>
            </pre>
          </li>
        </ul>
        <p>Both forms of type assertion are functionally equivalent, and you can choose the one that best fits your coding style and preferences.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What are recursive type aliases in TypeScript?',
    answer: 
      <>
        <p>Recursive type aliases in TypeScript are a way to define types that refer to themselves, allowing you to create complex and recursive data structures. They are often used to represent tree-like data structures, linked lists, and other recursive data types.</p>
        <p>Here's an example of using recursive type aliases:</p>
        <pre>
          <div className={styles.appCode}>{`
type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};
          `}</div>
        </pre>
        <p>In this example, the TreeNode type is defined as a recursive type alias that refers to itself, allowing you to create a tree-like data structure with nodes that can have left and right child nodes of the same type.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'What is void, and when to use the void type?',
    answer: 
      <>
        <p>The void type in TypeScript represents the absence of a value, typically used to indicate that a function does not return a value. It is often used to define functions that perform side effects or do not produce a meaningful result, such as logging, printing, or updating external state.</p>
        <p>Here's an example of using the void type:</p>
        <pre>
          <div className={styles.appCode}>{`
function logMessage(message: string): void {
  console.log(message);
}
          `}</div>
        </pre>
        <p>In this example, the logMessage function is annotated with the void return type, indicating that it does not return a value and only performs a side effect of logging the message to the console.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'How to specify optional properties in TypeScript?',
    answer: 
      <>
        <p>In TypeScript, you can specify optional properties by using the question mark (?) after the property name in an object type. This indicates that the property may be undefined or omitted from the object.</p>
        <p>Here's an example of specifying optional properties:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age?: number;
};

const person1: Person = { name: "Alice" }; // Valid
const person2: Person = { name: "Bob", age: 30 }; // Valid
const person3: Person = { name: "Charlie", age: "30" }; // Error: Type 'string' is not assignable to type 'number | undefined'.
          `}</div>
        </pre>
        <p>In this example, the age property of the Person type is specified as optional by using the question mark (?), allowing it to be omitted or undefined in the object.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What is parameter destructuring?',
    answer: 
      <>
        <p>Parameter destructuring in TypeScript is a way to destructure an object or array parameter into individual variables within a function signature. It allows you to extract specific properties or elements from the parameter and use them directly within the function body.</p>
        <p>Here's an example of using parameter destructuring:</p>
        <pre>
          <div className={styles.appCode}>{`
type Point = {
  x: number;
  y: number;
};

function printPoint({ x, y }: Point) {
  console.log(\`x: \${x}, y: \${y}\`);
}

const point: Point = { x: 10, y: 20 };
printPoint(point); // Output: x: 10, y: 20
          `}</div>
        </pre>
        <p>In this example, the printPoint function uses parameter destructuring to extract the x and y properties from the Point parameter, allowing them to be used directly within the function body.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'Explain the symbol type in TypeScript.',
    answer: 
      <>
        <p>The symbol type in TypeScript represents a unique and immutable value that can be used as an object property key. It is often used to create private or hidden properties on objects, or to define unique identifiers for object properties.</p>
        <p>Here's an example of using the symbol type:</p>
        <pre>
          <div className={styles.appCode}>{`
const key = Symbol("unique key");

let obj = {
  [key]: "value"
};

console.log(obj[key]); // Output: "value"
          `}</div>
        </pre>
        <p>In this example, the key variable is defined as a symbol, which is used as a unique property key for the obj object. This allows you to create private or hidden properties that are not accessible using regular property access.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'Provide the TypeScript syntax to create function overloads.',
    answer: 
      <>
        <p>Function overloads in TypeScript allow you to define multiple function signatures for the same function, each with different parameter and return types. They are often used to provide type safety and IntelliSense for functions with multiple usage patterns or behaviors.</p>
        <p>Here's an example of creating function overloads:</p>
        <pre>
          <div className={styles.appCode}>{`
function formatDate(date: Date): string;
function formatDate(date: string): string;
function formatDate(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return date.toISOString();
}
          `}</div>
        </pre>
        <p>In this example, the formatDate function is defined with two function overloads that specify different parameter types. The actual function implementation then handles both cases and returns a formatted date string.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What is the purpose of noImplicitAny?',
    answer: 
      <>
        <p>The noImplicitAny flag in TypeScript is used to enforce explicit type annotations for variables and function parameters that would otherwise be inferred as the any type. It is often used to provide additional type safety and prevent unintentional use of the any type, which can lead to type-related errors and reduced type safety.</p>
        <p>When the noImplicitAny flag is enabled, the TypeScript compiler will issue an error if it encounters a variable or function parameter with an implicit any type. This encourages developers to provide explicit type annotations and improves the overall type safety of the codebase.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What are abstract classes? When should you use one?',
    answer: 
      <>
        <p>Abstract classes in TypeScript are used to define common behavior and properties that can be shared by multiple derived classes. They are often used to create a base class with common functionality and to define abstract methods that must be implemented by derived classes.</p>
        <p>Here's an example of using an abstract class:</p>
        <pre>
          <div className={styles.appCode}>{`
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}
          `}</div>
        </pre>
        <p>In this example, the Shape class is defined as an abstract class with an abstract area method. The Circle and Rectangle classes then extend the Shape class and implement the area method, providing specific behavior for each shape.</p>
        <p>Abstract classes are useful when you want to define a common interface and behavior for a group of related classes, and when you want to enforce specific method implementations in derived classes.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'What are union types in TypeScript?',
    answer: 
      <>
        <p>Union types in TypeScript allow you to specify that a variable can have one of several different types. They are often used to create more flexible and expressive types, allowing you to work with multiple types at once and provide additional type safety.</p>
        <p>Here's an example of using union types:</p>
        <pre>
          <div className={styles.appCode}>{`
type ID = string | number;

function printID(id: ID) {
  console.log(id);
}

printID("abc123"); // Valid
printID(123); // Valid
printID(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'ID'.
          `}</div>
        </pre>
        <p>In this example, the ID type is defined as a union type of string and number, allowing the printID function to accept arguments of either type. This provides more flexibility and type safety when working with different types of IDs.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Core Typescript',
  level: 0,
  question: 'What are intersection types?',
    answer: 
      <>
        <p>Intersection types in TypeScript allow you to combine multiple types into a single type that has all the properties and methods of each individual type. They are often used to create more complex and expressive types, allowing you to work with combined or composed types.</p>
        <p>Here's an example of using intersection types:</p>
        <pre>
          <div className={styles.appCode}>{`
type Printable = {
  print(): void;
};

type Loggable = {
  log(): void;
};

type Logger = Printable & Loggable;

function createLogger(): Logger {
  return {
    print() {
      console.log("Printing...");
    }
    log() {
      console.log("Logging...");
    }
  };
}
          `}</div>
        </pre>
        <p>In this example, the Printable and Loggable types are defined, and then combined using the & operator to create the Logger type. This allows the createLogger function to return an object that has both print and log methods, providing more flexibility and expressiveness when working with combined types.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain how tuple destructuring works in TypeScript.',
    answer: 
      <>
        <p>Tuple destructuring in TypeScript allows you to extract individual elements from an array or tuple into separate variables. It is often used to work with arrays or tuples in a more expressive and readable manner, and to provide additional type safety when accessing specific elements.</p>
        <p>Here's an example of using tuple destructuring:</p>
        <pre>
          <div className={styles.appCode}>{`
let point: [number, number] = [10, 20];
let [x, y] = point;

console.log(x); // Output: 10

console.log(y); // Output: 20
          `}</div>
        </pre>
        <p>In this example, the point tuple is defined with two elements, and then destructured into the x and y variables. This allows you to work with the individual elements of the tuple in a more expressive and readable manner.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'How do you enforce strict null checks in TypeScript?',
    answer: 
      <>
        <p>To enforce strict null checks in TypeScript, you can enable the strictNullChecks flag in your tsconfig.json file. This flag ensures that null and undefined values are not assignable to variables with non-nullable types, providing additional type safety and preventing null-related errors.</p>
        <p>Here's an example of enabling strict null checks in tsconfig.json:</p>
        <pre>
          <div className={styles.appCode}>{`  
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
          `}</div>
        </pre>
        <p>When the strictNullChecks flag is enabled, the TypeScript compiler will issue an error if it encounters a null or undefined value being assigned to a variable with a non-nullable type. This encourages developers to handle null and undefined values explicitly and improves the overall type safety of the codebase.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What are triple-slash directives?',
    answer: 
      <>
        <p>Triple-slash directives in TypeScript are special comments that are used to provide additional instructions to the TypeScript compiler. They are often used to reference external files, configure module resolution, and provide type definitions for JavaScript libraries.</p>
        <p>Here's an example of using triple-slash directives:</p>
        <pre>
          <div className={styles.appCode}>{`
/// <reference path="types.d.ts" />
/// <reference types="node" />
/// <reference lib="es2015" />
          `}</div>
        </pre>
        <p>In this example, the triple-slash directives are used to reference an external types.d.ts file, include type definitions for the Node.js library, and include the ES2015 standard library for use in the TypeScript project.</p>
        <p>Triple-slash directives are a powerful tool for configuring and extending the behavior of the TypeScript compiler, and are often used to integrate TypeScript with external libraries and modules.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What is an implements clause in TypeScript?',
    answer: 
      <>
        <p>The implements clause in TypeScript is used to specify that a class implements a particular interface. It is often used to enforce that a class provides specific methods and properties defined by an interface, and to provide additional type safety and expressiveness when working with classes and interfaces.</p>
        <p>Here's an example of using the implements clause:</p>
        <pre>
          <div className={styles.appCode}>{`
interface Printable {
  print(): void;
}

class Document implements Printable {
  print() {
    console.log("Printing...");
  }
}
          `}</div>
        </pre>
        <p>In this example, the Document class implements the Printable interface using the implements clause, which enforces that the class provides a print method as defined by the interface. This provides additional type safety and expressiveness when working with classes and interfaces.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What are string literal types?',
    answer: 
      <>
        <p>String literal types in TypeScript allow you to specify that a variable can only have a specific string value. They are often used to create more expressive and type-safe types, and to provide additional type safety when working with specific string values.</p>
        <p>Here's an example of using string literal types:</p>
        <pre>
          <div className={styles.appCode}>{`
type Color = "red" | "green" | "blue";

function printColor(color: Color) {
  console.log(color);
}

printColor("red"); // Valid
printColor("yellow"); // Error: Argument of type '"yellow"' is not assignable to parameter of type 'Color'.
          `}</div>
        </pre>
        <p>In this example, the Color type is defined as a union of specific string values, and then used as the type of the color parameter in the printColor function. This provides additional type safety and expressiveness when working with specific color values.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What are template literal types?',
    answer: 
      <>
        <p>Template literal types in TypeScript allow you to create new types by concatenating string literals and inferring the resulting type based on the concatenation. They are often used to create more expressive and dynamic types, and to provide additional type safety when working with string values.</p>
        <p>Here's an example of using template literal types:</p>
        <pre>
          <div className={styles.appCode}>{`
type Color = "red" | "green" | "blue";
type Size = "small" | "medium" | "large";

type Shirt = \`\${Color} \${Size}\`;

let shirt: Shirt = "red medium"; // Valid

let shirt: Shirt = "yellow small"; // Error: Type '"yellow small"' is not assignable to type 'Shirt'.
          `}</div>
        </pre>
        <p>In this example, the Shirt type is defined using template literal types, which concatenate the Color and Size types to create a new type representing different combinations of color and size. This provides additional type safety and expressiveness when working with string values.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'Explain the concept of inheritance in TypeScript.',
    answer: 
      <>
        <p>Inheritance in TypeScript allows you to create new classes that inherit properties and methods from existing classes. It is often used to create a hierarchy of classes with shared behavior and to provide additional type safety and expressiveness when working with class-based object-oriented programming.</p>
        <p>Here's an example of using inheritance in TypeScript:</p>
        <pre>
          <div className={styles.appCode}>{`
class Animal {
  constructor(public name: string) {}

  speak() {
    console.log(\`The \${this.name} makes a sound\`);
  }
}

class Dog extends
Animal {
  constructor(name: string) {
    super(name);
  }

  speak() {
    console.log(\`The \${this.name} barks\`);
  }
}

let dog = new Dog("Fido");
dog.speak(); // Output: The Fido barks
          `}</div>
        </pre>
        <p>In this example, the Dog class extends the Animal class using inheritance, which allows it to inherit the name property and speak method from the Animal class. This provides additional type safety and expressiveness when working with class-based object-oriented programming.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'What is the function type in TypeScript?',
    answer: 
      <>
        <p>The function type in TypeScript allows you to specify the type of a function, including its parameters and return type. It is often used to provide additional type safety and expressiveness when working with functions, and to enforce specific function signatures and behaviors.</p>
        <p>Here's an example of using the function type:</p>
        <pre>
          <div className={styles.appCode}>{`
type Add = (a: number, b: number) => number;

let add: Add = (a, b) => a + b;

let result = add(10, 20); // Valid
let result = add("10", "20"); // Error: Argument of type '"10"' is not assignable to parameter of type 'number'.
          `}</div>
        </pre>
        <p>In this example, the Add type is defined as a function type that takes two number parameters and returns a number. This provides additional type safety and expressiveness when working with functions, and enforces specific function signatures and behaviors.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Intermediate Typescript',
  level: 1,
  question: 'List some of the utility types provided by TypeScript and explain their usage.',
    answer: 
      <>
        <p>Some of the utility types provided by TypeScript include:</p>
        <ul>
          <li><strong>Partial:</strong> The Partial utility type is used to create a new type by making all properties of an existing type optional. It is often used to define partial versions of existing types, allowing you to work with objects that may have missing or optional properties.</li>
          <li><strong>Required:</strong> The Required utility type is used to create a new type by making all properties of an existing type required. It is often used to define stricter types and enforce the presence of specific properties.</li>
          <li><strong>Readonly:</strong> The Readonly utility type is used to create a new type by making all properties of an existing type readonly. It is often used to define immutable versions of existing types, preventing properties from being modified after creation.</li>
          <li><strong>Record:</strong> The Record utility type is used to create a new type by mapping over the properties of an existing type and transforming their types. It is often used to create dictionary-like types and to define key-value pairs with specific types.</li>
          <li><strong>Pick:</strong> The Pick utility type is used to create a new type by selecting specific properties from an existing type. It is often used to create subtypes with a subset of properties from a larger type.</li>
          <li><strong>Omit:</strong> The Omit utility type is used to create a new type by omitting specific properties from an existing type. It is often used to create subtypes with certain properties removed from a larger type.</li>
        </ul>
        <p>These utility types provide powerful tools for creating and transforming types in TypeScript, and are often used to define more flexible and expressive types for working with objects and data structures.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What does the Omit type do?',
    answer: 
      <>
        <p>The Omit utility type in TypeScript is used to create a new type by omitting specific properties from an existing type. It is often used to create subtypes with certain properties removed from a larger type, providing more flexibility and expressiveness when working with object types.</p>
        <p>Here's an example of using the Omit type:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonWithoutEmail = Omit<Person, "email">;

let person: PersonWithoutEmail = {
  name: "Alice",
  age: 30
};
          `}</div>
        </pre>
        <p>In this example, the PersonWithoutEmail type is defined using the Omit utility type, which creates a new type by omitting the email property from the Person type. This allows you to create a subtype of Person without the email property, providing more flexibility and expressiveness when working with object types.</p>

      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'How to automatically get declaration files for a library in TypeScript?',
    answer: 
      <>
        <p>To automatically get declaration files for a library in TypeScript, you can use the npm install command to install the library and its associated type definitions from the DefinitelyTyped repository. This allows you to use the library with type safety and IntelliSense in TypeScript projects.</p>
        <p>Here's an example of installing a library with its associated type definitions:</p>
        <pre>
          <div className={styles.appCode}>{`
npm install lodash
          `}</div>  
        </pre>
        <p>You can also set the declaration compiler option on true in the tsconfig.json</p>
        <pre>
          <div className={styles.appCode}>{`
{
  "compilerOptions": {
    "declaration": true
  }
}
          `}</div>
        </pre>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'How do you make all properties of an interface optional?',
    answer: 
      <>
        <p>To make all properties of an interface optional in TypeScript, you can use the Partial utility type to create a new type with all properties made optional. This allows you to work with objects that may have missing or optional properties, providing more flexibility and expressiveness when working with object types.</p>
        <p>Here's an example of using the Partial utility type to make all properties of an interface optional:</p>
        <pre>
          <div className={styles.appCode}>{`
interface Person {
  name: string;
  age: number;
  email: string;
}

type PartialPerson = Partial<Person>;

let person: PartialPerson = {
  name: "Alice"
};
          `}</div>
        </pre>
        <p>In this example, the PartialPerson type is defined using the Partial utility type, which creates a new type with all properties of the Person interface made optional. This allows you to work with objects that may have missing or optional properties, providing more flexibility and expressiveness when working with object types.</p>

      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'How can you define a function with optional and default parameters in TypeScript?',
    answer: 
      <>
        <p>To define a function with optional and default parameters in TypeScript, you can use the question mark (?) to specify optional parameters and the equals sign (=) to specify default values. This allows you to create more flexible and expressive function signatures, and to provide additional type safety and expressiveness when working with functions.</p>
        <p>Here's an example of defining a function with optional and default parameters:</p>
        <pre>
          <div className={styles.appCode}>{`
function greet(name: string, message: string = "Hello", times?: number) {
  console.log(\`\${message}, \${name}!\`);
  if (times) {
    for (let i = 0; i < times; i++) {
      console.log(\`Time \${i + 1}\`);
    }
  }
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!
greet("Charlie", "Hey", 3); // Output: Hey, Charlie! Time 1 Time 2 Time 3
          `}</div>
        </pre>
        <p>In this example, the greet function is defined with optional and default parameters, allowing you to call the function with different combinations of arguments and providing more flexibility and expressiveness when working with functions.</p>

      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What is the Pick type in TypeScript?',
    answer: 
      <>
        <p>The Pick utility type in TypeScript is used to create a new type by selecting specific properties from an existing type. It is often used to create subtypes with a subset of properties from a larger type, providing more flexibility and expressiveness when working with object types.</p>
        <p>Here's an example of using the Pick type:</p>
        <pre>
          <div className={styles.appCode}>{`
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonNameAndEmail = Pick<Person, "name" | "email">;

let person: PersonNameAndEmail = {
  name: "Alice",
  email: "
};
          `}</div>
        </pre>
        <p>In this example, the PersonNameAndEmail type is defined using the Pick utility type, which creates a new type by selecting the name and email properties from the Person interface. This allows you to create a subtype of Person with a subset of properties, providing more flexibility and expressiveness when working with object types.</p>        
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What are conditional mapped types in TypeScript?',
    answer: 
      <>
        <p>Conditional mapped types in TypeScript allow you to create new types based on conditional logic and mapping over the properties of an existing type. They are often used to create more dynamic and expressive types, and to provide additional type safety and expressiveness when working with object types.</p>
        <p>Here's an example of using conditional mapped types:</p>
        <pre>
          <div className={styles.appCode}>{`
type NonNullable<T> = T extends null | undefined ? never : T;

type NullablePerson = {
  name: string;
  age: number | null;
  email: string | undefined;
};

type NonNullablePerson = {
  [K in keyof NullablePerson]: NonNullable<NullablePerson[K]>;
};

let person: NonNullablePerson = {
  name: "Alice",
  age: 30,
  email: "
};
          `}</div>
        </pre>
        <p>In this example, the NonNullable mapped type is defined using conditional logic to map over the properties of the NullablePerson type and transform their types to non-nullable versions. This provides additional type safety and expressiveness when working with object types.</p>        
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What is the Exclude type in TypeScript?',
    answer: 
      <>
        <p>The Exclude utility type in TypeScript is used to create a new type by excluding specific properties from an existing type. It is often used to create subtypes with certain properties removed from a larger type, providing more flexibility and expressiveness when working with object types.</p>
        <p>Here's an example of using the Exclude type:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonWithoutEmail = Exclude<keyof Person, "email">;

let person: PersonWithoutEmail = {
  name: "Alice",
  age: 30
};
          `}</div>
        </pre>
        <p>In this example, the PersonWithoutEmail type is defined using the Omit utility type, which creates a new type by omitting the email property from the Person type. This allows you to create a subtype of Person without the email property, providing more flexibility and expressiveness when working with object types.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What is the infer keyword in TypeScript?',
    answer: 
      <>
        <p>The infer keyword in TypeScript is used in conditional types to infer the type of a generic type parameter from another type. It is often used to create more dynamic and expressive types, and to provide additional type safety and expressiveness when working with conditional types.</p>
        <p>Here's an example of using the infer keyword:</p>
        <pre>
          <div className={styles.appCode}>{`
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function add(a: number, b: number): number {
  return a + b;
}

type Result = ReturnType<typeof add>; // Result is inferred as number
          `}</div>
        </pre>
        <p>In this example, the ReturnType conditional type uses the infer keyword to infer the return type of a function from its type. This provides additional type safety and expressiveness when working with conditional types.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: 'What is the keyof T extends U ? X : Y conditional type in TypeScript?',
    answer: 
      <>
        <p>The keyof T extends U ? X : Y conditional type in TypeScript is used to create a new type by applying conditional logic based on the properties of an existing type. It is often used to create more dynamic and expressive types, and to provide additional type safety and expressiveness when working with conditional types.</p>
        <p>Here's an example of using the keyof T extends U ? X : Y conditional type:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age: number;
  email: string;
};

type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
};

type StringKeys = KeysOfType<Person, string>; // StringKeys is inferred as "name" | "email"
          `}</div>
        </pre>
        <p>In this example, the KeysOfType conditional type uses the keyof T extends U ? X : Y conditional type to map over the properties of the Person type and transform their types based on conditional logic. This provides additional type safety and expressiveness when working with conditional types.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
    question: 'What is the keyof T extends K construct in TypeScript?',
    answer: 
      <>
        <p>The keyof T extends K construct in TypeScript is used to create a new type by applying conditional logic based on the properties of an existing type. It is often used to create more dynamic and expressive types, and to provide additional type safety and expressiveness when working with conditional types.</p>
        <p>Here's an example of using the keyof T extends K construct:</p>
        <pre>
          <div className={styles.appCode}>{`
type Person = {
  name: string;
  age: number;
  email: string;
};

type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
};

type PersonStringKeys = StringKeys<Person>; // PersonStringKeys is inferred as "name" | "email"
          `}</div>
        </pre>
        <p>In this example, the StringKeys conditional type uses the keyof T extends K construct to map over the properties of the Person type and transform their types based on conditional logic. This provides additional type safety and expressiveness when working with conditional types.</p>
      </>
  },
  {
  rating: 0,   
  subject: 'typescript',
  topic: 'Advanced Typescript',
  level: 2,
  question: '',
    answer: 
      <>
      </>
  },
]

// {
// rating: 0,   
// subject: 'typescript',
// topic: 'Intermediate Typescript',
// level: 1,
// question: '',
//   answer: 
//     <>
//     </>
// },