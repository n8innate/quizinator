import { IQuestions } from '../../types/types';
import styles from '../../App.module.scss';

export const backendQuestions: IQuestions[] = [
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'Explain the purpose of the backend?',
    answer: 
      <>
        <p>The backend, also known as the server-side, is the software that powers a website or app. It's responsible for storing and organizing data, handling user requests, and delivering content to the front end.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is a web server?',
    answer: 
      <>
        <p>A web server is a computer that stores and delivers web pages. When you type a URL into your browser, the browser contacts the web server and requests the page. The web server then sends the page back to the browser, which displays it on your screen. Apache and NGINX are some of the most popular web servers used by backend applications.</p>
        <p>Web servers can also host other resources, like images or videos.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is the difference between a GET and a POST request?',
    answer: 
      <>
        <p>GET and POST are two different types of HTTP requests. GET requests are used to retrieve data from a server, while POST requests are used to send data to a server to create or update a resource.</p>
        <p>GET requests are typically used to request data from a server, such as a web page or an image. They can be cached and bookmarked, and they have length restrictions. POST requests are used to send data to a server, such as form submissions or file uploads. They are not cached or bookmarked, and they have no length restrictions.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is an example of when you would use caching?',
    answer: 
      <>
        <p>Caching is used to store frequently accessed data in a temporary storage area so that it can be accessed more quickly. This can improve the performance and scalability of a web application.</p>
        <p>One example of when you would use caching is to store the results of a database query so that it can be retrieved more quickly the next time it is needed. Another example is to cache the results of an expensive computation so that it does not need to be repeated.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'How would you select a cache strategy (e.g., LRU, FIFO)?',
    answer: 
      <>
        <p>The choice of cache strategy depends on the specific requirements of the application. For example, if the application needs to store a fixed number of items, a FIFO (first in, first out) strategy might be appropriate. If the application needs to store the most recently accessed items, an LRU (least recently used) strategy might be appropriate.</p>
        <p>Other factors to consider when selecting a cache strategy include the size of the cache, the frequency of cache hits and misses, and the cost of cache eviction.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What are some common issues with ORMs?',
    answer: 
      <>
        <p>ORMs (object-relational mappers) are tools that allow developers to work with databases using an object-oriented programming language. Some common issues with ORMs include:</p>
        <ul>
          <li><strong>Performance overhead:</strong> ORMs can introduce performance overhead, especially when working with complex queries or large data sets.</li>
          <li><strong>Complexity:</strong> ORMs can be complex to configure and use, especially for developers who are not familiar with the underlying database technology.</li>
          <li><strong>Limitations:</strong> ORMs may not support all of the features of the underlying database, which can limit the flexibility of the application.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'When should you use asynchronous programming?',
    answer: 
      <>
        <p>Asynchronous programming is used to perform tasks that may take a long time to complete, such as reading from a file, making a network request, or performing a complex computation. By using asynchronous programming, you can perform these tasks without blocking the main thread of execution, which can improve the responsiveness and performance of the application.</p>
        <p>Asynchronous programming is also used to perform tasks in parallel, such as processing multiple requests or handling multiple events simultaneously.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is the difference between promises and callbacks?',
    answer: 
      <>
        <p>Callbacks and promises are two different ways of handling asynchronous code in JavaScript.</p>
        <p>Callbacks are functions that are passed as arguments to other functions, and are called when a task is complete. Promises are objects that represent a task that may be completed in the future, and can be used to handle the result or error of the task.</p>
        <p>One key difference between callbacks and promises is that promises can be chained together to handle multiple asynchronous tasks in a more readable and maintainable way.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is a closure?',
    answer: 
      <>
        <p>A closure is a function that has access to its own scope, the scope of its parent function, and the global scope. This allows the function to access variables and parameters from its parent function, even after the parent function has finished executing.</p>
        <p>Closures are commonly used to create private variables and functions, and to maintain state across multiple function calls.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is continuous integration?',
    answer: 
      <>
        <p>Continuous integration is a software development practice in which developers integrate code into a shared repository frequently, usually several times a day. Each integration is verified by an automated build and automated tests, which helps to detect and fix problems early in the development process.</p>
        <p>Continuous integration is often used in combination with continuous delivery and continuous deployment, which are practices that automate the process of deploying code to production environments.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is a software development kit (SDK)?',
    answer: 
      <>
        <p>A software development kit (SDK) is a collection of software tools, libraries, and documentation that developers use to create applications for a specific platform or framework. SDKs are often provided by companies or organizations to enable developers to build applications that integrate with their products or services.</p>
        <p>SDKs typically include tools for building, testing, and debugging applications, as well as libraries for accessing platform-specific features and APIs.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What are the tradeoffs of client-side rendering vs. server-side rendering',
    answer: 
      <>
        <p>Client-side rendering and server-side rendering are two different approaches to rendering web pages. Client-side rendering involves rendering the page in the browser using JavaScript, while server-side rendering involves rendering the page on the server and sending the complete HTML to the browser.</p>
        <p>One tradeoff of client-side rendering is that it can be slower to load and render the page, especially on slower devices or networks. However, it can provide a more interactive and dynamic user experience, and can be easier to maintain and update.</p>
        <p>One tradeoff of server-side rendering is that it can be faster to load and render the page, especially on slower devices or networks. However, it can provide a less interactive and dynamic user experience, and can be more difficult to maintain and update.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What are high-order functions? Why are they useful?',
    answer: 
      <>
        <p>High-order functions are functions that take other functions as arguments, or return functions as results. They are useful because they allow you to write more flexible and reusable code, and to create abstractions that can be applied to a wide range of problems.</p>
        <p>High-order functions are commonly used to implement common programming patterns, such as map, filter, and reduce, and to create new functions by combining existing functions.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: ' What is a microservice?',
    answer: 
      <>
        <p>A microservice is a small, independent service that is designed to perform a specific task or function. Microservices are typically built using a modular architecture, and can be deployed and scaled independently of other services.</p>
        <p>Microservices are commonly used to build large, complex applications, and to enable teams to work on different parts of the application independently. They can also improve the scalability, reliability, and maintainability of an application.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'How would you design an API?',
    answer: 
      <>
        <p>When designing an API, it's important to consider the needs of the application and the users who will be interacting with the API. Some key considerations include:</p>
        <ul>
          <li><strong>Usability:</strong> The API should be easy to use and understand, and should provide clear and consistent interfaces for interacting with the application.</li>
          <li><strong>Security:</strong> The API should be secure, and should provide mechanisms for authenticating and authorizing users.</li>
          <li><strong>Scalability:</strong> The API should be scalable, and should be able to handle a large number of requests and users.</li>
          <li><strong>Performance:</strong> The API should be performant, and should be able to respond to requests quickly and efficiently.</li>
          <li><strong>Maintainability:</strong> The API should be maintainable, and should be easy to update and extend as the needs of the application change.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is the difference between a RESTful and a SOAP API?',
    answer: 
      <>
        <p>RESTful and SOAP are two different architectural styles for building web services. RESTful APIs are based on the principles of REST (representational state transfer), and use standard HTTP methods and status codes to interact with resources. SOAP APIs are based on the XML-based Simple Object Access Protocol (SOAP), and use a more rigid and structured approach to defining and interacting with web services.</p>
        <p>One key difference between RESTful and SOAP APIs is that RESTful APIs are typically more lightweight and flexible, and are easier to use and understand. SOAP APIs are typically more heavyweight and rigid, and are more suitable for complex and enterprise-level applications.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'How do you handle errors when making API calls?',
    answer: 
      <>
        <p>When making API calls, it's important to handle errors in a way that provides useful information to the user and helps to diagnose and fix the problem. Some common strategies for handling errors include:</p>
        <ul>
          <li><strong>Returning meaningful error messages:</strong> When an error occurs, the API should return a meaningful error message that explains what went wrong and how to fix it.</li>
          <li><strong>Using status codes:</strong> The API should use standard HTTP status codes to indicate the success or failure of a request, and to provide information about the nature of the error.</li>
          <li><strong>Logging errors:</strong> The API should log errors so that they can be diagnosed and fixed by the development team.</li>
          <li><strong>Providing fallbacks:</strong> The API should provide fallback mechanisms for handling errors, such as retrying the request or using cached data.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is a database?',
    answer: 
      <>
        <p>A database is a collection of data that is organized and stored in a way that makes it easy to access, manage, and update. Databases are used to store and retrieve data for a wide range of applications, such as websites, mobile apps, and enterprise systems.</p>
        <p>There are many different databases, but the most common ones backend applications use are relational databases like MySQL, PostgreSQL, and Oracle. Databases are usually managed by a database management system (DBMS), which provides an interface for administrators to manage the data. Some backend applications also use NoSQL databases, which are non-relational and often more scalable than relational databases.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'How would you handle optimizing an existing database?',
    answer: 
      <>
        <p>Optimizing an existing database involves identifying and fixing performance bottlenecks, improving the efficiency of queries, and reducing the amount of data that needs to be processed. Some common strategies for optimizing a database include:</p>
        <ul>
          <li><strong>Indexing:</strong> Adding indexes to the database to speed up queries and reduce the amount of data that needs to be scanned.</li>
          <li><strong>Query optimization:</strong> Rewriting queries to make them more efficient, and using tools like the EXPLAIN statement to analyze query performance.</li>
          <li><strong>Database normalization:</strong> Restructuring the database to reduce redundancy and improve data integrity.</li>
          <li><strong>Partitioning:</strong> Splitting large tables into smaller, more manageable pieces to improve performance and scalability.</li>
          <li><strong>Caching:</strong> Using caching to store frequently accessed data in memory, so that it can be retrieved more quickly.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is the difference between a relational and a non-relational database?',
    answer: 
      <>
        <p>Relational databases store data in tables, and use structured query language (SQL) to interact with the data. They are well-suited for applications that require complex queries and transactions, and that have a well-defined schema. Examples of relational databases include MySQL, PostgreSQL, and Oracle.</p>
        <p>Non-relational databases store data in a more flexible and unstructured way, and use different query languages to interact with the data. They are well-suited for applications that require scalability and flexibility, and that have a dynamic or evolving schema. Examples of non-relational databases include MongoDB, Cassandra, and Redis.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'How would you query data from a MongoDB database?',
    answer: 
      <>
        <p>In MongoDB, you can query data using the find method, which returns a cursor that you can iterate over to access the results. You can also use the findOne method to return a single document that matches the query criteria.  For example:</p>
        <pre><div className={styles.appCode}>{`
// Find all documents in a collection
db.collection('users').find({});

// Find a single document in a collection
db.collection('users').findOne({ name: 'Alice' });
        `}</div></pre>
        <p>Queries in MongoDB are expressed using a JSON-like syntax, and can include conditions, projections, and sorting options. You can also use aggregation pipelines to perform more complex queries, such as grouping, sorting, and joining data from multiple collections.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What are some benefits of using a NoSQL database?',
    answer: 
      <>
        <p>NoSQL databases offer several benefits over traditional relational databases, including:</p>
        <ul>
          <li><strong>Scalability:</strong> NoSQL databases are designed to scale out horizontally, which makes them well-suited for applications that need to handle a large amount of data and traffic.</li>
          <li><strong>Flexibility:</strong> NoSQL databases are schema-less, which means that they can store and retrieve data in a more flexible and unstructured way, and can handle dynamic or evolving data models.</li>
          <li><strong>Performance:</strong> NoSQL databases are optimized for read and write performance, and can handle large volumes of data and traffic more efficiently than relational databases.</li>
          <li><strong>Availability:</strong> NoSQL databases are designed to be highly available and fault-tolerant, and can handle hardware and network failures without impacting the availability of the data.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'How would you normalize data in a relational database?',
    answer: 
      <>
        <p>To normalize data in a relational database, you would create separate tables for each entity type and use foreign keys to relate the data. For example, if you had a "users" table and an "orders" table, you would use a foreign key to link the data in the two tables.  </p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'How would you design a software system for scalability?',
    answer: 
      <>
        <p>When designing a software system for scalability, it's important to consider the needs of the application and the users who will be interacting with the system. Some key considerations include:</p>
        <ul>
          <li><strong>Modularity:</strong> The system should be designed in a modular way, so that different parts of the system can be scaled independently of each other.</li>
          <li><strong>Load balancing:</strong> The system should use load balancing to distribute traffic evenly across multiple servers, and to prevent any single server from becoming a bottleneck.</li>
          <li><strong>Caching:</strong> The system should use caching to store frequently accessed data in memory, so that it can be retrieved more quickly.</li>
          <li><strong>Database sharding:</strong> The system should use database sharding to split large databases into smaller, more manageable pieces, and to improve performance and scalability.</li>
          <li><strong>Asynchronous processing:</strong> The system should use asynchronous processing to perform tasks in parallel, and to improve the responsiveness and performance of the application.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What are some common scalability issues? How can they be addressed?',
    answer: 
      <>
        <p>Some common scalability issues include:</p>
        <ul>
          <li><strong>Performance bottlenecks:</strong> Performance bottlenecks can be addressed by identifying and fixing the root cause of the bottleneck, such as slow database queries or inefficient code.</li>
          <li><strong>Resource contention:</strong> Resource contention can be addressed by using load balancing to distribute traffic evenly across multiple servers, and to prevent any single server from becoming a bottleneck.</li>
          <li><strong>Data consistency:</strong> Data consistency can be addressed by using database sharding to split large databases into smaller, more manageable pieces, and to improve performance and scalability.</li>
          <li><strong>Availability:</strong> Availability issues can be addressed by using fault-tolerant and highly available infrastructure, and by using asynchronous processing to handle failures and recover from errors.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'Scale-out vs. scale-up: how are they different? When to apply one, when the other?',
    answer: 
      <>
        <p>Scale-out and scale-up are two different approaches to scaling a system. Scale-out involves adding more servers to handle a larger volume of traffic, while scale-up involves adding more resources to a single server to handle a larger volume of traffic.</p>
        <p>Scale-out is typically used when the system needs to handle a large amount of traffic and data, and when the workload can be distributed across multiple servers. Scale-up is typically used when the system needs to handle a large amount of traffic and data, and when the workload cannot be distributed across multiple servers.</p>
        <p>One advantage of scale-out is that it can provide better fault tolerance and availability, since the workload is distributed across multiple servers. One advantage of scale-up is that it can provide better performance and efficiency, since the workload is concentrated on a single server.</p>
        <p>Scale-out is usually the preferred approach when dealing with web applications or other systems that are highly parallelizable since it allows for near-linear increases in capacity. Scale-up may be more appropriate when working with legacy systems or those that are not efficiently parallelizable.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What are some common security risks when building a web application?',
    answer: 
      <>
        <p>Some common security risks when building a web application include:</p>
        <ul>
          <li><strong>Cross-site scripting (XSS):</strong> XSS attacks occur when an attacker injects malicious scripts into a web application, which can be used to steal sensitive information or perform unauthorized actions.</li>
          <li><strong>SQL injection:</strong> SQL injection attacks occur when an attacker injects malicious SQL code into a web application, which can be used to access or modify the database.</li>
          <li><strong>Cross-site request forgery (CSRF):</strong> CSRF attacks occur when an attacker tricks a user into performing an action on a web application without their knowledge or consent, such as changing their password or transferring funds.</li>
          <li><strong>Session hijacking:</strong> Session hijacking attacks occur when an attacker steals a user's session token and uses it to impersonate the user.</li>
          <li><strong>Authentication and authorization:</strong> Insecure authentication and authorization mechanisms can allow attackers to gain unauthorized access to sensitive data or perform unauthorized actions.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'How would you implement authentication and authorization on a new project?',
    answer: 
      <>
        <p>When implementing authentication and authorization on a new project, it's important to consider the specific requirements of the application and the users who will be interacting with the system. Some key considerations include:</p>
        <ul>
          <li><strong>Authentication:</strong> The system should use a secure and reliable authentication mechanism, such as OAuth, OpenID Connect, or JSON Web Tokens (JWT), to verify the identity of users and to prevent unauthorized access to sensitive data.</li>
          <li><strong>Authorization:</strong> The system should use a flexible and granular authorization mechanism, such as role-based access control (RBAC) or attribute-based access control (ABAC), to control what users can access and what actions they can perform.</li>
          <li><strong>Secure storage:</strong> The system should securely store and manage user credentials, such as passwords and access tokens, to prevent unauthorized access to sensitive data.</li>
          <li><strong>Secure communication:</strong> The system should use secure communication protocols, such as HTTPS, to protect data in transit and to prevent eavesdropping and tampering.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is the difference between a cookie and a session?',
    answer: 
      <>
        <p>Cookies and sessions are two different mechanisms for managing state in a web application. Cookies are small pieces of data that are stored in the user's browser and are sent with every request to the server. Sessions are server-side data stores that are used to store information about the user's interactions with the application.</p>
        <p>One key difference between cookies and sessions is that cookies are stored in the user's browser, while sessions are stored on the server. Another key difference is that cookies can be used to store data between different sessions, while sessions are typically used to store data for a single session.</p>
        <p>Cookies store information such as the user's ID, language preference, or any other preferences. Sessions store information from a series of requests, such as the user's shopping cart or other information that needs to persist across multiple requests.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'How would you unit test a new feature?',
    answer: 
      <>
        <p>When unit testing a new feature, it's important to consider the specific requirements of the feature and the users who will be interacting with the system. Some key considerations include:</p>
        <ul>
          <li><strong>Identifying test cases:</strong> The first step in unit testing a new feature is to identify the test cases that need to be covered, such as positive and negative test cases, edge cases, and boundary cases.</li>
          <li><strong>Writing test cases:</strong> The next step is to write the test cases, using a testing framework such as Jest, Mocha, or Jasmine, and to ensure that the test cases cover all of the requirements of the feature.</li>
          <li><strong>Running test cases:</strong> The final step is to run the test cases, using a continuous integration tool such as Jenkins, Travis CI, or CircleCI, and to ensure that the test cases pass and provide meaningful feedback about the feature.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What are some performance testing steps?',
    answer: 
      <>
        <p>Performance testing is used to evaluate the speed, responsiveness, and stability of a web application under a specific workload. Some common steps for performance testing include:</p>
        <ul>
          <li><strong>Identifying performance goals:</strong> The first step in performance testing is to identify the specific performance goals that need to be met, such as response time, throughput, and resource utilization.</li>
          <li><strong>Creating test scenarios:</strong> The next step is to create test scenarios that simulate the expected workload, such as user interactions, data input, and system interactions.</li>
          <li><strong>Running test scenarios:</strong> The final step is to run the test scenarios, using a performance testing tool such as JMeter, LoadRunner, or Gatling, and to measure and analyze the performance of the application under the expected workload.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'How would you deploy a new version of an application?',
    answer: 
      <>
        <p>When deploying a new version of an application, it's important to consider the specific requirements of the application and the users who will be interacting with the system. Some key considerations include:</p>
        <ul>
          <li><strong>Version control:</strong> The first step in deploying a new version of an application is to use a version control system, such as Git, to manage and track changes to the codebase.</li>
          <li><strong>Continuous integration:</strong> The next step is to use a continuous integration tool, such as Jenkins, Travis CI, or CircleCI, to automate the build, test, and deployment process.</li>
          <li><strong>Rolling deployment:</strong> The final step is to use a rolling deployment strategy to deploy the new version of the application, which involves gradually updating the servers and monitoring the performance and stability of the application.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'How would you roll back a failed deployment?',
    answer: 
      <>
        <p>When rolling back a failed deployment, it's important to consider the specific requirements of the application and the users who will be interacting with the system. Some key considerations include:</p>
        <ul>
          <li><strong>Identifying the failure:</strong> The first step in rolling back a failed deployment is to identify the specific failure that occurred, such as a performance issue, a stability issue, or a security issue.</li>
          <li><strong>Reverting the changes:</strong> The next step is to revert the changes that were made during the deployment, using a version control system, such as Git, to roll back to the previous version of the application.</li>
          <li><strong>Communicating with users:</strong> The final step is to communicate with users and stakeholders about the failure and the rollback, and to provide meaningful feedback about the status of the application.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'Differentiate between software architecture and software design.',
    answer: 
      <>
        <p>Software architecture is the high-level structure of a software system, which defines the components, relationships, and interactions of the system. It is concerned with the overall design and organization of the system, and provides a blueprint for the development and maintenance of the system.</p>
        <p>Software design is the process of defining the detailed structure and behavior of the software system, which includes the design of individual components, modules, and classes. It is concerned with the implementation and realization of the system, and provides a detailed plan for the development and maintenance of the system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'Why is Microservices architecture used?',
    answer: 
      <>
        <p>Microservices architecture is used to build large, complex applications, and to enable teams to work on different parts of the application independently. It can also improve the scalability, reliability, and maintainability of an application.</p>
        <p>Microservices are commonly used to build large, complex applications, and to enable teams to work on different parts of the application independently. They can also improve the scalability, reliability, and maintainability of an application.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What are NoSQL databases? Mention different types of NoSQL databases.',
    answer: 
      <>
        <p>NoSQL databases are non-relational databases that are designed to store and retrieve data in a more flexible and unstructured way, and to handle dynamic or evolving data models. They are well-suited for applications that require scalability and flexibility, and that have a large amount of data and traffic.</p>
        <p>There are several different types of NoSQL databases, including:</p>
        <ul>
          <li><strong>Document databases:</strong> Store data in a document format, such as JSON or XML, and are well-suited for applications that need to store and retrieve complex and nested data structures.</li>
          <li><strong>Key-value stores:</strong> Store data as a collection of key-value pairs, and are well-suited for applications that need to store and retrieve simple and fast data structures.</li>
          <li><strong>Column-family stores:</strong> Store data in a column-oriented format, and are well-suited for applications that need to store and retrieve large amounts of data with high performance and scalability.</li>
          <li><strong>Graph databases:</strong> Store data in a graph format, and are well-suited for applications that need to store and retrieve complex and interconnected data structures.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'Explain SQL injection.',
    answer: 
      <>
        <p>SQL injection is a type of security vulnerability that occurs when an attacker injects malicious SQL code into a web application, which can be used to access or modify the database. It is typically caused by improperly sanitized user input, and can allow an attacker to perform unauthorized actions, such as reading sensitive data, modifying data, or executing arbitrary commands.</p>
        <p>An injection attack can be prevented in the following ways:</p>
        <ul>
          <li>Prepare statements with queries that have defined parameters</li>
          <li>Have pre-defined and stored procedures</li>
          <li>Have a validation process for the input whereby you can blacklist or whitelist the input</li>
          <li>Use the principle of least privilege, i.e. do not provide premium administrator type access to the public database server. So, even if the hacker is able to hack into the application, it would not compromise the integrity of the database as they wouldn’t be able to access it.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'Differentiate between acceptance and functional tests.',
    answer: 
      <>
        <p>Acceptance tests are used to evaluate the overall functionality and usability of a web application, and to ensure that it meets the specific requirements of the users and stakeholders. They are typically performed by the end users or stakeholders, and are used to validate the application from a user's perspective.</p>
        <p>Functional tests are used to evaluate the specific functionality of a web application, and to ensure that it meets the specific requirements of the application. They are typically performed by the development team, and are used to validate the application from a technical perspective.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'Differentiate between clustered and non-clustered indexes?',
    answer: 
      <>
        <p>Clustered and non-clustered indexes are both database indexing methods used to improve query performance by allowing quicker access to data stored in a database table. However, they operate in different ways:</p>
        <p><strong>Clustered Index:</strong></p>
        <ul>
          <li>In a clustered index, the physical order of the rows in the table matches the order of the index. This means that the rows are sorted on the indexed key, and the actual data pages are arranged accordingly.</li>
          <li>There can only be one clustered index per table because the data rows themselves are stored in the order dictated by the clustered index.</li>
          <li>Due to the physical sorting of data, a table can be physically organized only one way, based on the clustered index.</li>
          <li>Typically, the primary key of a table is used to create a clustered index, although it's not mandatory.</li>
          <li>Clustered indexes are efficient for range queries and queries that involve sorting or grouping by the indexed columns.</li>
        </ul>
        <p><strong>Non-Clustered Index:</strong></p>
        <ul>
          <li>A non-clustered index does not alter the physical order of the table's rows. Instead, it creates a separate structure that contains the indexed column(s) and pointers to the corresponding rows in the table.</li>
          <li>Unlike clustered indexes, multiple non-clustered indexes can be created on a single table.</li>
          <li>Non-clustered indexes are efficient for queries that involve searching for specific values or performing joins, as they provide a quick way to locate rows based on the indexed columns.</li>
          <li>Since non-clustered indexes store pointers to the actual rows rather than the rows themselves, they require additional disk space.</li>
        </ul>
        <p>In summary, the main difference lies in how they organize data physically. Clustered indexes reorder the actual table data, while non-clustered indexes create a separate structure to hold indexed values and pointers to the corresponding rows. Each type has its own advantages and is suitable for different types of queries and data access patterns.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is the CAP theorem?',
    answer: 
      <>
        <p>CAP theorem which is also known as Brewer’s theorem states that a distributed databases system can only guarantee two of the three characteristics: consistency, availability, and partition tolerance.</p>
        <ul>
          <li><strong>Consistency:</strong> Every read receives the most recent write or an error.</li>
          <li><strong>Availability:</strong> Every request receives a response, without the guarantee that it contains the most recent write.</li>
          <li><strong>Partition tolerance:</strong> The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.</li>
        </ul>
        <p>The CAP theorem is often used to describe the trade-offs that must be made when designing and implementing distributed computer systems, and to help developers and architects understand the limitations and constraints of such systems.  This theorem is the foundation for modern distributed computing methods. The world's largest traffic companies (e.g. Amazon, Google, Facebook) use this basis for their application architecture.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What does REST stand for?',
    answer: 
      <>
        <p>REST stands for Representational State Transfer. It is an architectural style for building distributed systems, and is based on a set of constraints that define how the system should be designed and implemented.</p>
        <p>RESTful APIs are designed to be simple, lightweight, and scalable, and to provide a flexible and consistent way to interact with resources over the web. They use standard HTTP methods and status codes to interact with resources, and can be used to build a wide range of applications, such as web services, mobile apps, and enterprise systems.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is object-oriented programming?',
    answer: 
      <>
        <p>Object-oriented programming (OOP) is a programming paradigm that is based on the concept of objects, which can contain data and code. It is used to structure and organize code in a way that is more flexible, reusable, and maintainable than traditional procedural programming.</p>
        <p>OOP is based on several key principles, including:</p>
        <ul>
          <li><strong>Encapsulation:</strong> The process of hiding the internal details of an object and exposing only the necessary functionality.</li>
          <li><strong>Inheritance:</strong> The process of creating new classes from existing classes, and reusing and extending the functionality of the existing classes.</li>
          <li><strong>Polymorphism:</strong> The process of using a single interface to represent multiple types of objects, and to provide a consistent way to interact with those objects.</li>
        </ul>
        <p>OOP is commonly used to build large, complex applications, and to enable teams to work on different parts of the application independently. It can also improve the scalability, reliability, and maintainability of an application.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is a constructor?',
    answer: 
      <>
        <p>A constructor is a special method in a class that is used to create and initialize objects of that class. It is typically used to set the initial state of the object, and to perform any necessary setup or initialization tasks.</p>
        <p>In JavaScript, a constructor is defined using the constructor keyword, and is called automatically when a new object is created using the new keyword. For example:</p>
        <pre><div className={styles.appCode}>{`
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person('Alice',
  30);
        `}</div></pre>
        <p>Constructors are commonly used to create and initialize objects in object-oriented programming, and to provide a consistent way to create and manage the state of objects.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What are the various types of constructors?',
    answer: 
      <>
        <p>There are several different types of constructors, including:</p>
        <ul>
          <li><strong>Default constructor:</strong> A constructor that takes no arguments and initializes the object with default values.</li>
          <li><strong>Parameterized constructor:</strong> A constructor that takes one or more arguments and initializes the object with the specified values.</li>
          <li><strong>Copy constructor:</strong> A constructor that takes an object of the same class as an argument and initializes the object with the values of the specified object.</li>
          <li><strong>Static constructor:</strong> A constructor that is called automatically when the class is loaded into memory, and is used to perform any necessary setup or initialization tasks.</li>
          <li><strong>Private constructor:</strong> A constructor that is declared as private and is used to prevent the creation of objects of the class from outside the class.</li>
        </ul>
        <p>Constructors are commonly used to create and initialize objects in object-oriented programming, and to provide a consistent way to create and manage the state of objects.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is serialization and deserialization?',
    answer: 
      <>
        <p>Serialization is the process of converting an object into a format that can be easily stored, transmitted, or reconstructed. It is typically used to save the state of an object to a file or database, or to send the state of an object over a network.  For example:</p>
        <pre><div className={styles.appCode}>{`
const person = {
  name: 'Alice',
  age: 30
};

const serializedPerson = JSON.stringify(person);
        `}</div></pre>
        <p>Deserialization is the process of converting a serialized object back into its original form. It is typically used to load the state of an object from a file or database, or to receive the state of an object over a network.  For example: </p>
        <pre><div className={styles.appCode}>{`
const deserializedPerson = JSON.parse(serializedPerson);
        `}</div></pre>
        <p>Serialization and deserialization are commonly used to store and retrieve objects in object-oriented programming, and to provide a consistent way to manage the state of objects.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is the difference between finally, final, and finalize?',
    answer: 
      <>
        <p><strong>finally:</strong> The finally block is used to execute a block of code, regardless of whether an exception is thrown or not. It is typically used to perform cleanup tasks, such as closing resources or releasing locks. For example:</p>
        <pre><div className={styles.appCode}>{`
try {
  // Code that may throw an exception
} catch (e) {
  // Handle the exception
} finally {
  // Code that is always executed
}
        `}</div></pre>
        <p><strong>final:</strong> The final keyword is used to declare a constant value that cannot be changed. It is typically used to define values that are known at compile time and that should not be modified. For example:</p>
        <pre><div className={styles.appCode}>{`
final int MAX_VALUE = 100;
        `}</div></pre>
        <p><strong>finalize:</strong> The finalize method is a special method in the Object class that is called by the garbage collector when an object is about to be destroyed. It is typically used to perform cleanup tasks, such as releasing resources or closing connections. For example:</p>
        <pre><div className={styles.appCode}>{`
protected void finalize() {
  // Cleanup tasks
}
        `}</div></pre>
        <p>These three concepts are commonly used in object-oriented programming, and provide a consistent way to manage resources and perform cleanup tasks.</p>        
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is the difference between a thread and a process?',
    answer: 
      <>
        <p>A process is an instance of a running program, and is used to execute the code and manage the resources of the program. It has its own memory space, and is typically used to run a single task or application. For example:</p>
        <pre><div className={styles.appCode}>{`
const process = require('process');
        `}</div></pre>
        <p>A thread is a unit of execution within a process, and is used to perform a specific task or operation. It shares the memory space of the process, and is typically used to run multiple tasks or operations concurrently. For example:</p>
        <pre><div className={styles.appCode}>{`
const { Worker } = require('worker_threads');
        `}</div></pre>
        <p>Processes and threads are commonly used to manage the execution of code in operating systems, and to provide a consistent way to manage resources and perform concurrent tasks.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is exception handling?',
    answer: 
      <>
        <p>Exception handling is the process of responding to and recovering from exceptional conditions that occur during the execution of a program. It is typically used to handle errors, unexpected events, and other exceptional conditions, and to provide a consistent way to manage the flow of control and the state of the program.</p>
        <p>Exception handling is commonly used in object-oriented programming, and provides a consistent way to manage errors and unexpected events.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is the difference between MySQL and SQL?',
    answer: 
      <>
        <p>MySQL is an open-source relational database management system (RDBMS) that is based on the SQL (Structured Query Language) standard. It is used to store and retrieve data in a structured way, and to manage the relationships between different types of data.</p>
        <p>SQL is a standard language for interacting with relational databases, and is used to create, read, update, and delete data in a consistent and efficient way. It is used to define the structure of the database, and to perform queries and transactions on the data.</p>
        <p>In summary, MySQL is a specific implementation of the SQL standard, and is used to manage the storage and retrieval of data in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What are the various subsets in SQL?',
    answer: 
      <>
        <p>There are several different subsets in SQL, including:</p>
        <ul>
          <li><strong>Data Definition Language (DDL):</strong> Used to define and manage the structure of the database, such as creating and modifying tables, indexes, and constraints.</li>
          <li><strong>Data Manipulation Language (DML):</strong> Used to manage the data in the database, such as inserting, updating, and deleting rows in tables.</li>
          <li><strong>Data Control Language (DCL):</strong> Used to manage the permissions and security of the database, such as granting and revoking privileges on objects.</li>
          <li><strong>Transaction Control Language (TCL):</strong> Used to manage the transactions in the database, such as committing and rolling back changes to the data.</li>
        </ul>
        <p>These subsets are commonly used to interact with relational databases, and provide a consistent way to define, manage, and control the data and structure of the database.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is RDBMS?',
    answer: 
      <>
        <p>RDBMS stands for Relational Database Management System. It is a type of database management system that is based on the relational model of data, and is used to store and retrieve data in a structured way. It is typically used to manage the relationships between different types of data, and to provide a consistent way to define, manage, and control the data and structure of the database.</p>
        <p>RDBMS is commonly used in object-oriented programming, and provides a consistent way to manage the storage and retrieval of data in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is the "SELECT" statement?',
    answer: 
      <>
        <p>The SELECT statement is used to retrieve data from a database. It is typically used to perform queries on the data, and to retrieve specific columns and rows from one or more tables. For example:</p>
        <pre><div className={styles.appCode}>{`
SELECT column1, column2, ...
FROM table_name
WHERE condition;
        `}</div></pre>
        <p>The SELECT statement is commonly used in object-oriented programming, and provides a consistent way to retrieve and manipulate data in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What are the most common clauses used with SQL SELECT query?',
    answer: 
      <>
        <p>There are several different clauses that can be used with the SQL SELECT query, including:</p>
        <ul>
          <li><strong>WHERE:</strong> Used to filter the rows that are retrieved from the table, based on a specific condition.</li>
          <li><strong>ORDER BY:</strong> Used to sort the rows that are retrieved from the table, based on one or more columns.</li>
          <li><strong>GROUP BY:</strong> Used to group the rows that are retrieved from the table, based on one or more columns.</li>
          <li><strong>HAVING:</strong> Used to filter the groups that are retrieved from the table, based on a specific condition.</li>
          <li><strong>LIMIT:</strong> Used to limit the number of rows that are retrieved from the table, based on a specific number.</li>
        </ul>
        <p>These clauses are commonly used to perform queries on the data in a relational database management system, and provide a consistent way to retrieve and manipulate data.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is OLTP?',
    answer: 
      <>
        <p>OLTP stands for Online Transaction Processing. It is a type of database system that is used to manage and process a large number of transactions in real time. It is typically used to support the day-to-day operations of an organization, and to provide a consistent way to manage and control the data and structure of the database.</p>
        <p>OLTP is commonly used in object-oriented programming, and provides a consistent way to manage the storage and retrieval of data in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What are the differences between OLAP and OLTP?',
    answer: 
      <>
        <p>OLAP stands for Online Analytical Processing, and is used to analyze and process a large amount of data in real time. It is typically used to support the decision-making process of an organization, and to provide a consistent way to manage and control the data and structure of the database.</p>
        <p>OLTP stands for Online Transaction Processing, and is used to manage and process a large number of transactions in real time. It is typically used to support the day-to-day operations of an organization, and to provide a consistent way to manage and control the data and structure of the database.</p>
        <p>In summary, OLAP is used for analysis and decision-making, while OLTP is used for transaction processing and day-to-day operations.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What are SQL comments and how do they work?',
    answer: 
      <>
        <p>SQL comments are used to add explanatory notes or annotations to the SQL code, and are typically used to provide additional information about the code, such as its purpose, its author, or its history. They are not executed by the database, and are used to provide a consistent way to document and explain the code.</p>
        <p>SQL comments can be added to the code using the -- or /* */ syntax, and can be used to add single-line or multi-line comments. For example:</p>
        <pre><div className={styles.appCode}>{`
-- This is a single-line comment

/*
This is a multi-line comment
that spans multiple lines
*/
        `}</div></pre>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Basic Backend',
    level: 0,
    question: 'What is the difference between static and dynamic websites?',
    answer: 
      <>
        <p>Static websites are built using HTML and CSS, and are typically used to display fixed content that does not change frequently. They are easy to build and maintain, and are well-suited for small businesses, personal blogs, and other simple websites.</p>
        <p>Dynamic websites are built using server-side languages such as PHP, Ruby, or Python, and are typically used to display content that changes frequently. They are more complex to build and maintain, and are well-suited for e-commerce sites, social networks, and other interactive websites.</p>
        <p>In summary, static websites are simple and easy to build, while dynamic websites are more complex and flexible.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What does High Availability (HA) mean?',
    answer: 
      <>
        <p>High Availability (HA) is a term used to describe the ability of a system to remain operational and accessible in the event of a failure or disruption. It is typically used to ensure that the system is always available and responsive, and to provide a consistent way to manage and control the reliability and stability of the system.</p>
        <p>Clustering with redundant server nodes is a common way of achieving higher availability for web applications. Availability is usually expressed as a percentage of uptime in a given period of time.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'Why would you choose Microservices architecture?',
    answer: 
      <>
        <p>Microservices architecture is used to build large, complex applications, and to enable teams to work on different parts of the application independently. It can also improve the scalability, reliability, and maintainability of an application.</p>
        <p>Here are some of the pros:</p>
        <ul>
          <li>Microservices are easily adaptable to other frameworks and technologies.</li>
          <li>One process failure does not necessarily affect the whole system.</li>
          <li>Supports both small and large companies.</li>
          <li>It can be used independently and takes relatively little time.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is Containerization?',
    answer: 
      <>
        <p>Containerization is a lightweight form of virtualization that is used to deploy and run applications in a consistent and isolated environment. It is typically used to package and distribute applications, and to provide a consistent way to manage and control the deployment and execution of the applications.</p>
        <p>Containerization means that the operating system is shared between the containers, rather than being cloned for each machine. Docker, for example, is a container virtualization platform that can be used as an alternative to hypervisor-based arrangements.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is an index?',
    answer: 
      <>
        <p>An index is a data structure that is used to improve the performance of queries on a database table. It is typically used to provide a quick way to locate rows based on the indexed columns, and to provide a consistent way to manage and control the retrieval of the data.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is DISTINCT statement? What is its use?',
    answer: 
      <>
        <p>The DISTINCT statement is used in conjunction with the SELECT query to get rid of duplicates and return only unique records. Sometimes, an entire table is filled with duplicate records. The DISTINCT clause in SQL is used to remove duplicates in a SELECT statement's results set.</p>
        <p>For example:</p>
        <pre><div className={styles.appCode}>{`
SELECT DISTINCT column1, column2, ...
FROM table_name;
        `}</div></pre>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is "Trigger" in SQL?',
    answer: 
      <>
        <p>A trigger is a special type of stored procedure that is automatically executed when certain events occur in a database. It is typically used to perform a specific action, such as updating a table or sending an email, when a specific event occurs, such as inserting, updating, or deleting a row in a table.</p>
        <p>Triggers are commonly used to enforce business rules, maintain data integrity, and perform other automated tasks in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Intermediate Backend',
    level: 1,
    question: 'What is the difference between natural join and cross join?',
    answer: 
      <>
        <p>Natural join is a type of join that is used to combine rows from two or more tables based on a related column between them. It is typically used to retrieve rows that have matching values in the related column, and to provide a consistent way to manage and control the retrieval of the data.</p>
        <p>Cross join is a type of join that is used to combine all rows from two or more tables, and to provide a consistent way to manage and control the retrieval of the data.  Produces the cross product or Cartesian product from two tables.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Advanced Backend',
    level: 2,
    question: 'What is a UNIQUE constraint?',
    answer: 
      <>
        <p>A UNIQUE constraint is used to ensure that all values in a column are unique. It is typically used to enforce the uniqueness of the data in a table, and to provide a consistent way to manage and control the integrity of the data.</p>
        <p>For example:</p>
        <pre><div className={styles.appCode}>{`
CREATE TABLE table_name (
  column1 INT UNIQUE,
  column2 VARCHAR(255)
);
        `}</div></pre>
        <p>UNIQUE constraints are commonly used to enforce business rules and maintain data integrity in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Advanced Backend',
    level: 2,
    question: 'What is Database Black Box Testing?',
    answer: 
      <>
        <p>Database black box testing is a type of testing that is used to evaluate the functionality and performance of a database system, without knowing the internal details of the system. It is typically used to test the database from a user's perspective, and to provide a consistent way to manage and control the testing of the system.</p>
        <p>Database black box testing is commonly used to evaluate the functionality and performance of a database system, and to provide a consistent way to manage and control the testing of the system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Advanced Backend',
    level: 2,
    question: 'What is a FOREIGN KEY in SQL?',
    answer: 
      <>
        <p>A FOREIGN KEY is a key used to link two tables together. It is a field in one table that refers to the PRIMARY KEY in another table. It is typically used to enforce referential integrity between the two tables, and to provide a consistent way to manage and control the relationships between the tables.</p>
        <p>For example:</p>
        <pre><div className={styles.appCode}>{`
CREATE TABLE table1 (
  id INT PRIMARY KEY
);

CREATE TABLE table2 (
  id INT PRIMARY KEY,
  table1_id INT,
  FOREIGN KEY (table1_id) REFERENCES table1(id)
);
        `}</div></pre>
        <p>FOREIGN KEY constraints are commonly used to enforce referential integrity and maintain data integrity in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Advanced Backend',
    level: 2,
    question: 'How to display the current date in SQL?',
    answer: 
      <>
        <p>The current date can be displayed in SQL using the GETDATE() function. For example:</p>
        <pre><div className={styles.appCode}>{`
SELECT GETDATE();
        `}</div></pre>
        <p>The GETDATE() function is commonly used to retrieve the current date and time in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Advanced Backend',
    level: 2,
    question: 'How would you find the most expensive queries in an application?',
    answer: 
      <>
        <p>To find the most expensive queries in an application, you can use a database profiling tool or a performance monitoring tool to analyze the execution time and resource usage of the queries. You can also use the EXPLAIN statement in SQL to analyze the query execution plan and identify potential performance bottlenecks.</p>
        <p>For example:</p>
        <pre><div className={styles.appCode}>{`
EXPLAIN SELECT column1, column2, ...
FROM table_name
WHERE condition;
        `}</div></pre>
        <p>These tools and techniques are commonly used to analyze and optimize the performance of queries in a relational database management system.</p>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Advanced Backend',
    level: 2,
    question: 'Which sorting algorithm should you use and when?',
    answer: 
      <>
        <p>The choice of sorting algorithm depends on the size of the data, the distribution of the data, and the specific requirements of the application. Some common sorting algorithms include:</p>
        <ul>
          <li><strong>Bubble sort:</strong> Simple and easy to implement, but not efficient for large datasets.</li>
          <li><strong>Selection sort:</strong> Simple and easy to implement, but not efficient for large datasets.</li>
          <li><strong>Insertion sort:</strong> Simple and efficient for small datasets, but not efficient for large datasets.</li>
          <li><strong>Merge sort:</strong> Efficient for large datasets, but requires additional memory space.</li>
          <li><strong>Quick sort:</strong> Efficient for large datasets, but can be unstable and require additional memory space.</li>
          <li><strong>Heap sort:</strong> Efficient for large datasets, but can be unstable and require additional memory space.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'backend',
    topic: 'Advanced Backend',
    level: 2,
    question: 'Explain the difference between cohesion and coupling?',
    answer: 
      <>
        <p>Cohesion is a measure of how closely related the elements of a module are to each other. It is typically used to evaluate the design and structure of a software system, and to provide a consistent way to manage and control the relationships between the elements.</p>
        <p>Coupling is a measure of how independent the elements of a module are from each other. It is typically used to evaluate the design and structure of a software system, and to provide a consistent way to manage and control the relationships between the elements.</p>
        <p>In summary, cohesion and coupling are used to evaluate the design and structure of a software system, and to provide a consistent way to manage and control the relationships between the elements.</p>
      </>
  },
]

// {
//   rating: 0,
//   subject: 'backend',
//   topic: 'Basic Backend',
//   level: 0,
//   question: '',
//   answer: 
//     <>
//     </>
// },