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
    topic: 'Core Typescript',
    level: 0,
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
    topic: 'Core Typescript',
    level: 0,
    question: 'What are Modules in TypeScript.',
    answer: 
      <>
        <p>Modules in TypeScript provide a way to organize and encapsulate code, making it easier to develop, maintain, and test large applications. They allow you to split your code into separate files, keeping each file focused on a specific set of functionality or a single responsibility. Modules are designed to manage dependencies and avoid naming conflicts by using distinct namespaces and imports/exports.</p>
        <p>There are two main types of modules in TypeScript:</p>
        <ol>
          <li><strong>External modules:</strong> Also known as "file modules," they are one module per source file. When you create a new TypeScript file and work with the import and export keywords, you are automatically creating an external module. These are the most commonly used TypeScript modules.</li>
          <li><strong>Ambient modules:</strong> These are used to provide type information for third-party libraries or existing global variables. They are typically declared using a .d.ts file and may be provided by the library developers themselves or created by the community. The declare module syntax is used to define an ambient module.</li>
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
    topic: 'Core Typescript',
    level: 0,
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
    topic: 'Core Typescript',
    level: 0,
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
    topic: 'Core Typescript',
    level: 0,
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
    topic: 'Core Typescript',
    level: 0,
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
    topic: 'Core Typescript',
    level: 0,
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
    topic: 'Core Typescript',
    level: 0,
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
    topic: 'Core Typescript',
    level: 0,
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
    topic: 'Core Typescript',
    level: 0,
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
          <li><strong>Using var keyword</strong> The var keyword creates mutable variables that are function (available within the function in which it is declared) or globally scoped.  Within a function, hoisting makes it available throughout the function, regardless of where declared.  Can be declared without being intialized.</li>
          <li><strong>Type annotations:</strong>
            <ul>
              <li>In TypeScript, you can explicitly set a type for a variable using type annotations, which are written after the variable name followed by a colon. This helps catch type-related errors at compile-time.</li>
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
    level: 0,
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
    level: 0,
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
    level: 0,
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
    level: 0,
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
    level: 0,
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
]

// {
// rating: 0,   
// subject: 'typescript',
// topic: 'Intermediate Typescript',
// level: 0,
// question: '',
//   answer: 
//     <>
//     </>
// },