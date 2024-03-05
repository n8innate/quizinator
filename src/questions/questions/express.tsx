import { IQuestions } from '../../types/types';
import styles from '../../App.module.scss';

export const expressQuestions: IQuestions[] = [
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What are the benefits of using Node.js.',
    answer: 
      <>
        <ul>
          <li>Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.</li>
          <li>It is an event-driven, non-blocking I/O model that makes it lightweight and efficient.</li>
          <li>Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.</li>
        </ul>
        <p>Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It is an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'Explain global installation of dependencies.',
    answer: 
      <>
        <p>Global installation of dependencies is done by using the -g flag. This installs the package globally and makes it available to use in the terminal. This is useful for packages that are used across multiple projects or for command line tools.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'Explain REPL in Node.js.',
    answer: 
      <>
        <p>REPL stands for Read Eval Print Loop. It represents a computer environment like a Windows console or Unix/Linux shell where a command is entered and system responds with an output in interactive mode. Node.js or Node comes bundled with a REPL environment. It performs the following tasks:</p>
        <ul>
          <li><strong>Read:</strong> It reads input from the user, typically JavaScript code or expressions.</li>
          <li><strong>Eval:</strong> It evaluates the input provided by the user. This means it interprets and executes the JavaScript code.</li>
          <li><strong>Print:</strong> It prints the result of the evaluated expression or code to the console.</li>
          <li><strong>Loop:</strong> After printing the result, it loops back to the read phase, waiting for further input from the user. This loop continues until the user exits the REPL session.</li>
        </ul>
        <p>In essence, REPL provides an interactive environment where users can quickly experiment with JavaScript code, test small snippets, or explore the behavior of functions and modules.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'Define Node.js.',
    answer: 
      <>
        <p>Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It is an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'Is Node.js cross-platform?',
    answer: 
      <>
        <p>Yes, Node.js is cross-platform. It is available for Microsoft Windows, Linux, and macOS.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What is Node red?',
    answer: 
      <>
        <p>Node-RED is a flow-based development tool for visual programming developed originally by IBM for wiring together hardware devices, APIs and online services as part of the Internet of Things. Node-RED provides a browser-based flow editor that makes it easy to wire together flows using the wide range of nodes in the palette. Flows can be then deployed to the runtime in a single-click.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'How is operational error different from programming error?',
    answer: 
      <>
        <p>Operational errors are not bugs, but problems with the system, like request timeout or hardware failure. On the other hand, programming errors are actual bugs in the program.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What is unit testing?',
    answer: 
      <>
        <p>Unit testing is a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What is the blocking code?',
    answer: 
      <>
        <p>Blocking code is synchronous code that blocks the execution of the program until it is finished. It is the opposite of non-blocking code, which does not delay the execution of further code.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'Are there any disadvantages of Node.js?',
    answer: 
      <>
        <p>Node.js is not suitable for CPU-intensive tasks. It is single-threaded, which means that it cannot handle multiple requests at the same time. Moreover, if a relational database is used with Node.js, it behaves strangely, preventing favorable outcomes that the users can be sure of. Since Node.js does not support multiple threads, it is better suited for lightweight applications but not large-scale or heavy applications.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'Give some examples of async functions.',
    answer: 
      <>
        <p>setTimeout, setInterval, and readFile are some examples of async functions.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'Which library provides Node.js with a JavaScript engine?',
    answer: 
      <>
        <p>V8 is the library that provides Node.js with a JavaScript engine.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What tasks can be done asynchronously with the help of an event loop?',
    answer: 
      <>
        <p>File operations, I/O operations, and heavy computation tasks can be done asynchronously with the help of an event loop.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What is an event loop in Node.js?',
    answer: 
      <>
        <p>An event loop is a mechanism that allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded. It is a loop that picks events from the event queue and pushes their callbacks to the call stack when the call stack is empty.  For example:</p>
        <pre><div className={styles.appCode}>{`
  const fs = require('fs');
  fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  console.log('Hi there!');
        `}</div></pre>
        <p>When the file is read, the event loop pushes the callback to the call stack and executes it. Then, it prints 'Hi there!'. This is how the event loop works in Node.js.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What are some security best practices for Node.js?',
    answer: 
      <>
        <p>Some security best practices for Node.js are:</p>
        <ul>
          <li>Use the latest version of Node.js.</li>
          <li>Use npm audit to check for vulnerabilities in your application.</li>
          <li>Use a security linter like eslint-plugin-security to catch common security issues.</li>
          <li>Use a security-focused package manager like Snyk to monitor your dependencies for vulnerabilities.</li>
          <li>Use a security-focused web framework like Express.js to help prevent common web vulnerabilities like CSRF, XSS, and SQL injection.</li>
          <li>Use a security-focused database like MongoDB to help prevent common database vulnerabilities like SQL injection and NoSQL injection.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What are the clauses used in promise object in Node.js?',
    answer: 
      <>
        <p>Promise object in Node.js has three clauses:</p>
        <ul>
          <li><strong>Resolve:</strong> Is called when the promise is fulfilled.</li>
          <li><strong>Reject:</strong> Is called when the promise is rejected.</li>
          <li><strong>Finally:</strong> Is called when the promise is settled, whether it is fulfilled or rejected.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What is Ajax?',
    answer: 
      <>
        <p>Ajax stands for Asynchronous JavaScript and XML. It is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page. Data can be retrieved using the XMLHttpRequest object. Despite the name, the use of XML is not required, as JSON is often used instead.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'How to obtain the IP address of the user in Node.js?',
    answer: 
      <>
        <p>The IP address of the user can be obtained in Node.js using the req.connection.remoteAddress property. For example:</p>
        <pre><div className={styles.appCode}>{`
  const express = require('express');
  const app = express();
  app.get('/', (req, res) => {
    const ip = req.connection.remoteAddress;
    res.send(ip);
  }
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  }
        `}</div></pre>
        <p>This will return the IP address of the user when they visit the root route of the application.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'How do you install the Node body-parser module?',
    answer: 
      <>
        <p>The body-parser module is deprecated. It is now included in the express module. You can use it by calling express.json() and express.urlencoded() as middleware in your application. For example:</p>
        <pre><div className={styles.appCode}>{`
  const express = require('express');
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
        `}</div></pre>
        <p>This will parse JSON and URL-encoded data in the body of the request and make it available in the req.body object.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'Explain the function of exit code in Node.js.',
    answer: 
      <>
        <p>Exit code in Node.js is used to end the process. It is a number that is passed to the process.exit() method to indicate the reason for the process ending. For example:</p>
        <pre><div className={styles.appCode}>{`
  process.exit(1);
        `}</div></pre>
        <p>This will end the process with an exit code of 1, indicating that the process ended with an error.</p>
        <p>Common exit codes include:</p>
        <ul>
          <li><strong>0:</strong> The process ended successfully.</li>
          <li><strong>1:</strong> The process ended with an error.</li>
          <li><strong>2:</strong> The process ended due to a misuse of the command line interface.</li>
          <li><strong>3:</strong> The process ended due to an internal JavaScript error.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'What causes server latency and prevents scalability in Node.js?',
    answer: 
      <>
        <p>        Several factors can cause server latency and prevent scalability in Node.js. Some of the most common ones include:</p>
        <ul>
          <li><strong>Blocking I/O:</strong> Can cause the server to become unresponsive while waiting for I/O operations to complete. This can be especially problematic in Node.js, which is designed to handle many concurrent connections. To avoid this, Node.js provides non-blocking I/O operations.</li>
          <li><strong>Inefficient code:</strong> Can cause unnecessary processing and slow down the server. This can be caused by poor algorithmic choices, excessive use of synchronous operations, or inefficient data structures.</li>
          <li><strong>Insufficient hardware resources:</strong> Insufficient hardware resources, such as CPU, memory, or network bandwidth, can cause the server to become overloaded and unresponsive. This can be especially problematic in high traffic scenarios.</li>
          <li><strong>Improper configuration:</strong> Can cause performance issues. This can be caused by incorrect network settings, improper load balancing, or other misconfigurations.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'How does Node.js convert JavaScript code to C++?',
    answer: 
      <>
        <p>Node.js uses the V8 JavaScript engine to convert JavaScript code to C++. The V8 engine is an open-source JavaScript engine developed by Google for use in Google Chrome. It compiles JavaScript code to native machine code, which allows it to run much faster than traditional interpreters. Node.js uses the V8 engine to execute JavaScript code, and it can also use the V8 engine to compile JavaScript code to C++ for use in native modules.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'Define event programming.',
    answer: 
      <>
        <p>Event programming is a programming paradigm that is based on the concept of events and event-driven programming. In event-driven programming, the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs. When an event occurs, the program responds by executing a function or method that is associated with the event. This allows the program to be highly responsive and to handle multiple concurrent events at the same time.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'Define control function in Node.js.',
    answer: 
      <> 
        <p>Control function in Node.js is a function that is used to control the flow of the program. It is a function that is called when an event occurs, and it is responsible for handling the event and determining the next steps in the program. Control functions are a key part of event-driven programming, and they are used to create highly responsive and interactive programs.  For example:</p>
        <pre><div className={styles.appCode}>{`
  const fs = require('fs');
  fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  }
  console.log('Hi there!');
        `}</div></pre>
        <p>In this example, the control function is the arrow function that is passed to the readFile method. It is responsible for handling the event of reading the file and determining the next steps in the program.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'What is modularization in Node.js and when is it used?',
    answer: 
      <>
        <p>Modularization in Node.js is the process of breaking down a program into smaller, more manageable modules. Each module is responsible for a specific part of the program, and it can be developed, tested, and maintained independently of the rest of the program. Modularization is used to create more maintainable and scalable programs, and it is especially useful for large and complex applications. It allows developers to work on different parts of the program simultaneously, and it makes it easier to reuse code and share it between different projects.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'Explain how blocking is prevented in Node.js.',
    answer: 
      <>
        <p>Blocking is prevented in Node.js by using non-blocking I/O operations. Non-blocking I/O operations allow the program to continue executing while waiting for I/O operations to complete. This is achieved by using callbacks, promises, or async/await to handle the results of the I/O operations. By using non-blocking I/O operations, Node.js can handle many concurrent connections and remain responsive even when performing I/O operations.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Intermediate Express',
    level: 1,
    question: 'What are the layers in Node.js application architecture?',
    answer: 
      <>
        <p>Node.js application architecture typically consists of three layers:</p>
        <ul>
          <li><strong>Application layer:</strong> Contains the business logic and application-specific code. It is responsible for handling requests, processing data, and generating responses.</li>
          <li><strong>Service layer:</strong> Contains the service-specific code and is responsible for interacting with external services, such as databases, APIs, and other services.</li>
          <li><strong>Infrastructure layer:</strong> Contains the infrastructure-specific code and is responsible for handling low-level concerns, such as network communication, file I/O, and other infrastructure-related tasks.</li>
        </ul>
        <p>These layers help to organize the code and separate concerns, making it easier to develop, test, and maintain the application.</p>
      </>
  },
  {
    rating: 0,
    subject: 'express',
    topic: 'Basic Express',
    level: 0,
    question: 'What is an asynchronous queue?  Name input arguments they use.',
    answer: 
      <>
        <p>An asynchronous queue is a data structure that allows asynchronous tasks to be executed in a sequential order. It is often used to control the flow of asynchronous operations and to limit the number of concurrent operations. The input arguments used in an asynchronous queue typically include:</p>
        <ul>
          <li><strong>Task:</strong> The task to be executed asynchronously.</li>
          <li><strong>Callback:</strong> The callback function to be called when the task is complete.</li>
        </ul>
        <p>For example:</p>
        <pre><div className={styles.appCode}>{`
  const asyncQueue = require('async/queue');
  const queue = asyncQueue((task, callback) => {
    console
  }
  queue.push({ name: 'Task 1' }, (err) => {
    if (err) throw err;
    console.log('Task 1 is complete');
  }
  queue.push({ name: 'Task 2' }, (err) => {
    if (err) throw err;
    console.log('Task 2 is complete');
  }
        `}</div></pre>
        <p>In this example, the input arguments used in the asynchronous queue are the task and the callback function.</p>
      </>
  },
]

// {
//   rating: 0,
//   subject: 'express',
//   topic: 'Basic Express',
//   level: 0,
//   question: '',
//   answer: 
//     <>
//     </>
// },