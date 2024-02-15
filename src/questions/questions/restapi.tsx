import { IQuestions } from '../../types/types';
import styles from '../../App.module.scss';

export const restAPIQuestions: IQuestions[] = [
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is REST?',
    answer: 
      <>
        <p>REST stands for Representational State Transfer.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is a REST API?',
    answer: 
      <>
        <p>An API is an application programming interface, which is a software-to-software interface that allows otherwise separate applications to interact and share data. In a REST API, all data is treated as resources, each one represented by a unique uniform resource identifier (URI).</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What does RESTful web services mean?',
    answer: 
      <>
        <p>REST API is also known as RESTful web services that follow the REST architecture.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are cache-control headers?',
    answer: 
      <>
        <p>Cache-control headers are used to control catching and to attain caching ability. The most commonly used cache-control headers are public, private, and No-Store.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the features of RESTful web services?(8)',
    answer: 
      <>
        <p>REStful web services have the following unique features:</p>
        <ul>
          <li>Client-server decoupling</li>
          <li>Communication support</li>
          <li>Lightweight</li>
          <li>Uniform interface </li>
          <li>Stateless </li>
          <li>Layered system </li>
          <li>Cacheable</li>
          <li>Code on demand</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Define Messaging in terms of RESTful web services.',
    answer: 
      <>
        <p>The technique of sending a message from the REST client to the REST server in the form of an HTTP request and the server responding back with the response as HTTP Response is called Messaging. The messages contained constitute the data and the metadata about the message.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Explain Addressing in RESTful web services.',
    answer: 
      <>
        <p>The process of locating various types of resources with the help of a URL on the REST server is known as ‘addressing’ in RESTful web services. Usually, single or multiple resources are addressed by resources.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Why are REST services easily scalable?',
    answer: 
      <>
        <p>REST services are scalable due to the statelessness that they do not store data on the server even though they are requested and do not require much communication.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are Idempotent methods?',
    answer: 
      <>
        <p>Idempotent methods are known to return the same outcome even after the same request has been made multiple times, and it avoids errors caused by duplicate requests on the client side.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'How can RESTful web services be tested?',
    answer: 
      <>
        <p>The RESTful web services can be tested with the help of tools such as Swagger and Postman, which enable users to inspect query parameters, response headers, and headers, documentation of the endpoints, and conversion of endpoints to XML and JSON.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are payloads in RESTful web services?',
    answer: 
      <>
        <p>Payloads are the request data passed through the POST or GET method and found in the message’s body of an HTTP request in RESTful web services.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is the maximum payload size that can be sent in POST methods?',
    answer: 
      <>
        <p>Theoretically, there is no such maximum limit for payload size that can be sent in POST methods. However, payloads with larger sizes can consume larger bandwidth. Thus the server could take more time to proceed with the request.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Which protocol does REST APIs use?',
    answer: 
      <>
        <p>Protocols are used to communicate with clients where REST APIs use HTTP protocol for it.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'In REST APIs, which markup languages are used to represent the resources?',
    answer: 
      <>
        <p>The resources in REST APIs are represented with the help of XML (extensible markup language) and JSON (JavaScript Object Notation).</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Differentiate POST and PUT methods.',
    answer: 
      <>
        <p>POST Method</p>
        <ul>
          <li>POST can create a resource on the server. </li>
          <li>POST is not idempotent.</li>
          <li>POST responses are cacheable. </li>
        </ul>
        <p>PUT Method </p>
        <ul>
          <li>PUT is used to replace a resource at a specific URI with another resource.</li>
          <li>PUT is idempotent that it will only result in one resource even after calling it multiple times. </li>
          <li>PUT responses are not.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Which HTTP request methods are supported by REST?',
    answer: 
      <>
        <p>REST supports various types of HTTP request methods such as GET, POST, PUT, DELETE, HEAD, OPTIONS, ETC.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is CRUD?',
    answer: 
      <>
        <p>CRUD stands for “Create, Read, Update, Delete.” </p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the main parts of an HTTP response? (4)',
    answer: 
      <>
        <p>The main parts of the HTTP response are:</p>
        <ul>
          <li>HTTP version</li>
          <li>Status line</li>
          <li>HTTP Response Header</li>
          <li>HTTP Response body</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are HTTP Status codes?',
    answer: 
      <>
        <p>These are the standard codes that refer to the predefined status of the task at the server. Following are the status codes formats available:</p>
        <ul>
          <li>1xx - represents informational responses</li>
          <li>2xx - represents successful responses</li>
          <li>3xx - represents redirects</li>
          <li>4xx - represents client errors</li>
          <li>5xx - represents server errors</li>
        </ul>
        <p>Most commonly used status codes are:</p>
        <ul>
          <li>200 - success/OK</li>
          <li>201 - CREATED - used in POST or PUT methods.</li>
          <li>304 - NOT MODIFIED - used in conditional GET requests to reduce the bandwidth use of the network. Here, the body of the response sent should be empty.</li>
          <li>400 - BAD REQUEST - This can be due to validation errors or missing input data.</li>
          <li>401- UNAUTHORIZED - This is returned when there is no valid authentication credentials sent along with the request.</li>
          <li>403 - FORBIDDEN - sent when the user does not have access (or is forbidden) to the resource.</li>
          <li>404 - NOT FOUND - Resource method is not available.</li>
          <li>500 - INTERNAL SERVER ERROR - server threw some exceptions while running the method.</li>
          <li>502 - BAD GATEWAY - Server was not able to get the response from another upstream server.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is a resource?',
    answer: 
      <>
        <p>In REST, A resource is an object with a label and accessible on the server. Resources consist of associated data, a list of methods, and a relationship with other resources on the server.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is a URI?',
    answer: 
      <>
        <p>URI stands for ‘Uniform Resource Identifier.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: '',
    answer: 
      <>
        <p>REST API stores a copy of a server response in a particular location of computer memory to retrieve the server response fast in the future. This method is temporary and called "catching."</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is a real-world example of a REST API?',
    answer: 
      <>
        <p>Public REST APIs are harnessed by weather apps to display weather information and share the related data.</p>
        <p>Airlines use APIs to expose the flight times and prices to allow travel and ticketing sites for businesses. </p>
        <p>Public transportation services use APIs to make their data publicly open to make it available for mapping and navigation apps in real-time.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is the difference between REST and SOAP? (3)',
    answer: 
      <>
        <p>REST(Representational State Transfer)</p>
        <ul>
          <li>It is an architectural design pattern used to develop web services. </li>
          <li>It is faster in speed and more cacheable. </li>
          <li>It inherits only the security measures concerning the protocol that have been implemented.</li>
        </ul>
        <p>SOAP (Simple Object Access Protocol)</p>
        <ul>
          <li>It is a strict protocol used to build secure APIs.  </li>
          <li>It is slower in speed and not cacheable.  </li>
          <li>It is able to define its own security measures.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What do you understand about JAX-RS?',
    answer: 
      <>
        <p>It is a Java-based specification implemented for RESTful services and defined by JEE.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Disadvantages of RESTful web services? (2)',
    answer: 
      <>
        <p>RESTful web services are stateless and do not maintain session simulation responsibility as the client side does not provide a particular session id for it.</p>
        <p>REST is not able to impose the security restriction inherently. However, it inherits them with the help of implementing protocols. Thus, the integration of SSL/TLS authentication needs to be done very carefully for better security measures of the REST APIs. </p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Advantages of REST (6)',
    answer: 
      <>
        <ul>
          <li>HTTP makes the implementation of REST easy. </li>
          <li>REST fits in the existing infrastructure of the web, thus the web application can easily implement the REST. XML and JSON web technologies make REST easy to learn. </li>
          <li>The client and server communication is stateless, thus the integration is easy to build and scalable, and manageable with respect to time. </li>
          <li>The REST architecture can adapt to a huge variety of cases due to its flexibility.</li>
          <li>The lightweight architecture of REST makes it easy to build the applications faster as compared to other types of APIs.</li>
          <li>REST can be tested easily in the browser with the help of API testing tools.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'How do you keep REST APIs secure? (5)',
    answer: 
      <>
        <p>REST APIs can be kept secure with the help of safety measures such as:</p>
        <ul>
          <li>Authentication and authorization</li>
          <li>API Server Validation</li>
          <li>TSl/SSL Encryption</li>
          <li>Rate-limiting for DDoS attacks</li>
          <li>Sensitive information such as username, password, or authentication token should not be visible in URIs</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are “Options” in REST APIs?',
    answer: 
      <>
        <p>It is an HTTP method used to fetch the supported HTTP options or operations that help clients to choose the options in REST APIs. Cross-Origin Resource Sharing (CORS) uses the REST option method.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Different types of API architectures (2) ',
    answer: 
      <>
        <p>There are other two API architectures used, SOAP (Simple Object Access Protocol), and RPC (Remote Procedure Call)</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the different application integration styles?',
    answer: 
      <>
        <p>The different application integration styles are:</p>
        <ul>
          <li>Shared database</li>
          <li>Batch file transfer</li>
          <li>Invoking remote procedure (RPC)</li>
          <li>Swapping asynchronous messages over a message-oriented middleware (MOM)</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'How is JAXB related to RESTful web API?',
    answer: 
      <>
        <p>JAXB is a Java arch used for XML binding in RESTful web API.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is AJAX?',
    answer: 
      <>
        <p>AJAX stands for  Asynchronous javascript and XML.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What does the HEAD method in REST APIs do? ',
    answer: 
      <>
        <p>The HEAD method is used to return the HTTP Header in read-only form and not the Body.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Which frameworks can JAX-RS implement in the RESTful web? (4)',
    answer: 
      <>
        <p>JAX-RS is used to implement frameworks such as Jersey, RESTEasy, Apache, and CFX.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is a Resource?',
    answer: 
      <>
        <p>Resource is defined as an object of a type that includes image, HTML file, text data, and any type of dynamic data.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Why is the proper representation of resources required?',
    answer: 
      <>
        <p>Proper representations of resources in the proper format allow the client to easily understand the format and determine the identification of resources easily.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'How to design Resources representation for RESTful web services? (3)',
    answer: 
      <>
        <ul>
          <li>It should be easy to understand for the client and server.</li>
          <li>It should be complete irrespective of its format structure.</li>
          <li>It should consider the link of the resources to other resources and handle it carefully. </li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Important aspects of RESTful web services implementation.',
    answer: 
      <>
        <ul>
          <li>ResourcesRequest </li>
          <li>Headers</li>
          <li>Request Body</li>
          <li>Response Body</li>
          <li>Status codes</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is the REST API used for?',
    answer: 
      <>
        <p>In the REST API architecture, HTTP requests are used for accessing and using data. The data accessed using REST API can be used to read, update, delete, and create operations concerning resources.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is the difference between API and REST API?',
    answer: 
      <>
        <p>An Application Programming Interface entails rules used to define how different devices or applications communicate with each other and connect to each other. A REST API follows the principles of the REST architectural pattern to create web services. </p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is the full-form of REST API?',
    answer: 
      <>
        <p>REST API is the acronym used for Representational State Transfer Application Program Interface. </p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the features of RESTful Web Services? (7)',
    answer: 
      <>
        <p>Every RESTful web service has the following features:</p>
        <ul>
          <li>The service is based on the Client-Server model.</li>
          <li>The service uses HTTP Protocol for fetching data/resources, query execution, or any other functions.</li>
          <li>The medium of communication between the client and server is called “Messaging”.</li>
          <li>Resources are accessible to the service by means of URIs.</li>
          <li>It follows the statelessness concept where the client request and response are not dependent on others and thereby provides total assuranceof getting the required data.</li>
          <li>These services also use the concept of caching to minimize the server calls for the same type of repeated requests.</li>
          <li>These services can also use SOAP services as implementation protocol to REST architectural pattern.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is URI?',
    answer: 
      <>
        <p>Uniform Resource Identifier is the full form of URI which is used for identifying each resource of the REST architecture. URI is of the format:</p>
        <div className={styles.appCode}>
          {`<protocol>://<service-name>/<ResourceType>/<ResourceID>`}
        </div>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the 2 types of URI?',
    answer: 
      <>
        <p>URN: Uniform Resource Name identifies the resource by means of a name that is both unique and persistent.</p>
        <ul>
            <li>URN doesn’t always specify where to locate the resource on the internet. They are used as templates that are used by other parsers to identify the resource.</li>
            <li>These follow the urn scheme and usually prefixed with urn:. Examples include:
              urn:isbn:1234567890 is used for identification of book based on the ISBN number in a library application.
              urn:mpeg:mpeg7:schema:2001 is the default namespace rules for metadata of MPEG-7 video.</li>
            <li>Whenever a URN identifies a document, they are easily translated into a URL by using “resolver” after which the document can be downloaded.</li>
        </ul>
        <p>URL: Uniform Resource Locator has the information regarding fetching of a resource from its location. Examples include:</p>
        <div className={styles.appCode}>{`
http://abc.com/samplePage.html
ftp://sampleServer.com/sampleFile.zip
file:///home/interviewbit/sampleFile.txt
        `}</div>
        <p>URLs start with a protocol (like ftp, http etc) and they have the information of the network hostname (sampleServer.com) and the path to the document(/samplePage.html). It can also have query parameters.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is the concept of statelessness in REST?',
    answer: 
      <>
        <p>The REST architecture is designed in such a way that the client state is not maintained on the server. This is known as statelessness. The context is provided by the client to the server using which the server processes the client’s request. The session on the server is identified by the session identifier sent by the client.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the HTTP Methods?',
    answer: 
      <>
        <p>HTTP Methods are also known as HTTP Verbs. They form a major portion of uniform interface restriction followed by the REST that specifies what action has to be followed to get the requested resource. Below are some examples of HTTP Methods:</p>
        <ul>
          <li>GET: This is used for fetching details from the server and is basically a read-only operation.</li>
          <li>POST: This method is used for the creation of new resources on the server.</li>
          <li>PUT: This method is used to update the old/existing resource on the server or to replace the resource.</li>
          <li>DELETE: This method is used to delete the resource on the server.</li>
          <li>PATCH: This is used for modifying the resource on the server.</li>
          <li>OPTIONS: This fetches the list of supported options of resources present on the server.</li>
        </ul>
        <p>The POST, GET, PUT, DELETE corresponds to the create, read, update, delete operations which are most commonly called CRUD Operations.</p>
        <p>GET, HEAD, OPTIONS are safe and idempotent methods whereas PUT and DELETE methods are only idempotent. POST and PATCH methods are neither safe nor idempotent.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'While creating URI for web services, what are the best practices that needs to be followed?',
    answer: 
      <>
        <p>Below is the list of best practices that need to be considered with designing URI for web services:</p>
        <ul>
          <li>While defining resources, use plural nouns. Example: To identify user resource, use the name “users” for that resource.</li>
          <li>While using the long name for resources, use underscore or hyphen. Avoid using spaces between words. For example, to define authorized users resource, the name can be “authorized_users” or “authorized-users”.</li>
          <li>The URI is case-insensitive, but as part of best practice, it is recommended to use lower case only.</li>
          <li>While developing URI, the backward compatibility must be maintained once it gets published. When the URI is updated, the older URI must be redirected to the new one using the HTTP status code 300.</li>
          <li>Use appropriate HTTP methods like GET, PUT, DELETE, PATCH, etc. It is not needed or recommended to use these method names in the URI. Example: To get user details of a particular ID, use {`/users/{id}`} instead of /getUser</li>
          <li>Use the technique of forward slashing to indicate the hierarchy between the resources and the collections. Example: To get the address of the user of a particular id, we can use: {`/users/{id}/`}address</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are Idempotent methods? How is it relevant in RESTful web services domain?',
    answer: 
      <>
        <ul>
          <li>Idempotent methods ensure that the responses to a request if called once or ten times or more than that remain the same. This is equivalent to adding any number with 0.</li>
          <li>REST provides idempotent methods automatically. GET, PUT, DELETE, HEAD, OPTIONS, and TRACE are the idempotent HTTP methods. POST is not idempotent.</li>
          <li>POST is not idempotent because POST APIs are usually used for creating a new resource on the server. While calling POST methods N times, there will be N new resources. This does not result in the same outcome at a time.</li>
          <li>Methods like GET, OPTIONS, TRACE, and HEAD are idempotent because they do not change the state of resources on the server. They are meant for resource retrieval whenever called. They do not result in write operations on the server thereby making it idempotent.</li>
          <li>PUT methods are generally used for updating the state of resources. If you call PUT methods N times, the first request updates the resource and the subsequent requests will be overwriting the same resource again and again without changing anything. Hence, PUT methods are idempotent.</li>
          <li>
            <p>DELETE methods are said to be idempotent because when calling them for N times, the first request results in successful deletion (Status Code 200), and the next subsequent requests result in nothing - Status Code 204. The response is different, but there is no change of resources on the server-side.</p>
            <p>However, if you are attempting to delete the resource present, at last, every time you hit the API, such as the request DELETE /user/last which deletes the last user record, then calling the request N times would delete N resources on the server. This does not make DELETE idempotent. In such cases, as part of good practices, it is advisable to use POST requests.</p>
          </li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Can you tell what constitutes the core components of HTTP Request? (5)',
    answer: 
      <>
        <p>In REST, any HTTP Request has 5 main components, they are:</p>
        <ul>
          <li>Method/Verb: This part tells what methods the request operation represents. Methods like GET, PUT, POST, DELETE, etc are some examples.</li>
          <li>URI: This part is used for uniquely identifying the resources on the server.</li>
          <li>HTTP Version: This part indicates what version of HTTP protocol you are using. An example can be HTTP v1.1.</li>
          <li>Request Header: This part has the details of the request metadata such as client type, the content format supported, message format, cache settings, etc.</li>
          <li>Request Body: This part represents the actual message content to be sent to the server.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What constitutes the core components of HTTP Response?',
    answer: 
      <>
        <p>HTTP Response has 4 components:</p>
        <ul>
          <li>Response Status Code: This represents the server response status code for the requested resource. Example- 400 represents a client-side error, 200 represents a successful response.</li>
          <li>HTTP Version: Indicates the HTTP protocol version.</li>
          <li>Response Header: This part has the metadata of the response message. Data can describe what is the content length, content type, response date, what is server type, etc.</li>
          <li>Response Body: This part contains what is the actual resource/message returned from the server.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Define Addressing in terms of RESTful Web Services.',
    answer: 
      <>
        <p>Addressing is the process of locating a single/multiple resources that are present on the server. This task is accomplished by making use of URI (Uniform Resource Identifier). The general format of URI is: </p>
        <div className={styles.appCode}>{`<protocol>://<application-name>/<type-of-resource>/<id-of-resource></id-of-resource>`}</div>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What makes REST services to be easily scalable?',
    answer: 
      <>
        <p>REST services follow the concept of statelessness which essentially means no storing of any data across the requests on the server. This makes it easier to scale horizontally because the servers need not communicate much with each other while serving requests.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Based on what factors, you can decide which type of web services you need to use - SOAP or REST?',
    answer: 
      <>
        <p>REST services have gained popularity due to the nature of simplicity, scalability, faster speed, improved performance, and multiple data format support. But, SOAP has its own advantages too. Developers use SOAP where the services require advanced security and reliability.</p>
        <p>Following are the questions you need to ask to help you decide which service can be used:</p>
        <ul>
          <li>
            <p>Do you want to expose resource data or business logic?</p>
            <p>SOAP is commonly used for exposing business logic and REST for exposing data.</p>
          </li>
          <li>
            <p>Does the client require a formal strict contract?</p>
            <p>If yes, SOAP provides strict contracts by using WSDL. Hence, SOAP is preferred here.</p>
          </li>
          <li>
            <p>Does your service require support for multiple formats of data?</p>
            <p>If yes, REST supports multiple data formats which is why it is preferred in this case.</p>
          </li>
          <li>
            <p>Does your service require AJAX call support?</p>
            <p>If yes, REST can be used as it provides the XMLHttpRequest.</p>
          </li>
          <li>
            <p>Does your service require both synchronous and asynchronous requests?</p>
            <p>SOAP has support for both sync/async operations.</p>
          </li>
          <li>
            <p>REST only supports synchronous calls.</p>
            <p>Does your service require statelessness?</p>
          </li>
          <li>
            <p>If yes, REST is suitable. If no, SOAP is preferred.</p>
            <p>Does your service require a high-security level?</p>
          </li>
          <li>
            <p>If yes, SOAP is preferred. REST inherits the security property based on the underlying implementation of the protocol. Hence, it can’t be preferred at all times.</p>
            <p>Does your service require support for transactions?</p>
          </li>
          <li>
            <p>If yes, SOAP is preferred as it is good in providing advanced support for transaction management.</p>
            <p>What is the bandwidth/resource required?</p>
          </li>
          <li>
            <p>SOAP involves a lot of overhead while sending and receiving XML data, hence it consumes a lot of bandwidth.</p>
            <p>REST makes use of less bandwidth for data transmission.</p>
          </li>
          <li>
            <p>Do you want services that are easy to develop, test, and maintain frequently?</p>
            <p>REST is known for simplicity, hence it is preferred.</p>
          </li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Can we implement transport layer security (TLS) in REST?',
    answer: 
      <>
        <p>Yes, we can. TLS does the task of encrypting the communication between the REST client and the server and provides the means to authenticate the server to the client. It is used for secure communication as it is the successor of the Secure Socket Layer (SSL). HTTPS works well with both TLS and SSL thereby making it effective while implementing RESTful web services. One point to mention here is, the REST inherits the property of the protocol it implements. So security measures are dependent on the protocol REST implements.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Should we make the resources thread safe explicitly if they are made to share across multiple clients?',
    answer: 
      <>
        <p>There is no need to explicitly making the resources thread-safe because, upon every request, new resource instances are created which makes them thread-safe by default.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is Payload in terms of RESTful web services?',
    answer: 
      <>
        <p>Payload refers to the data passes in the request body. It is not the same as the request parameters. The payload can be sent only in POST methods as part of the request body.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Is it possible to send payload in the GET and DELETE methods?',
    answer: 
      <>
        <p>No, the payload is not the same as the request parameters. Hence, it is not possible to send payload data in these methods.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'How can you test RESTful Web Services?',
    answer: 
      <>
        <p>RESTful web services can be tested using various tools like Postman, Swagger, etc. Postman provides a lot of features like sending requests to endpoints and show the response which can be converted to JSON or XML and also provides features to inspect request parameters like headers, query parameters, and also the response headers. Swagger also provides similar features like Postman and it provides the facility of documentation of the endpoints too. We can also use tools like Jmeter for performance and load testing of APIs.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is the maximum payload size that can be sent in POST methods?',
    answer: 
      <>
        <p>Theoretically, there is no restriction on the size of the payload that can be sent. But one must remember that the greater the size of the payload, the larger would be the bandwidth consumption and time taken to process the request that can impact the server performance.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'How does HTTP Basic Authentication work?',
    answer: 
      <>
        <p>While implementing Basic Authentication as part of APIs, the user must provide the username and password which is then concatenated by the browser in the form of “username: password” and then perform base64 encoding on it. The encoded value is then sent as the value for the “Authorization” header on every HTTP request from the browser. Since the credentials are only encoded, it is advised to use this form when requests are sent over HTTPS as they are not secure and can be intercepted by anyone if secure protocols are not used.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'Differentiate between SOAP and REST',
    answer: 
      <>
        <table>
          <thead>
            <th>SOAP</th>
            <th>REST</th>
          </thead>
          <tbody>
            <tr>
              <td>Simple Object Access Protocol</td>
              <td>Representational State Transfer</td>
            </tr>
            <tr>
              <td>A protocol used to implement web services.</td>
              <td>An architectural design pattern for developing web services</td>
            </tr>
            <tr>
              <td>SOAP cannot use REST as it is a protocol.</td>
              <td>REST architecture can have SOAP protocol as part of the implementation.</td>
            </tr>
            <tr>
              <td>Specifies standards that are meant to be followed strictly.</td>
              <td>Defines standards but they need not be strictly followed.</td>
            </tr>
            <tr>
              <td>SOAP client is more tightly coupled to the server which is similar to desktop applications having strict contracts.	</td>
              <td>The REST client is more flexible like a browser and does not depend on how the server is developed unless it follows the protocols required for establishing communication.</td>
            </tr>
            <tr>
              <td>SOAP supports only XML transmission between the client and the server.	</td>
              <td>REST supports data of multiple formats like XML, JSON, MIME, Text, etc.</td>
            </tr>
            <tr>
              <td>SOAP reads are not cacheable.	</td>
              <td>REST read requests can be cached.</td>
            </tr>
            <tr>
              <td>Uses service interfaces for exposing the resource logic.</td>
              <td>Uses URI to expose the resource logic.</td>
            </tr>
            <tr>
              <td>Slower</td>
              <td>Faster</td>
            </tr>
            <tr>
              <td>Since SOAP is a protocol, it defines its own security measures.</td>
              <td>REST only inherits the security measures based on what protocol it uses for the implementation.</td>
            </tr>
            <tr>
              <td>Not commonly preferred, but they are used in cases which require stateful data transfer and more reliability.</td>
              <td>Commonly preferred by developers these days as it provides more scalability and maintainability.</td>
            </tr>
          </tbody>
        </table>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the differences between PUT and POST in REST?',
    answer: 
      <>
        <table>
          <thead>
            <th>PUT</th>
            <th>POST</th>
          </thead>
            <tbody>
            <tr>
              <td>Methods are used to request the server to store the enclosed entity in request. In case, the request does not exist, then new resource has to be created. If the resource exists, then the resource should get updated.</td>
              <td>Method is used to request the server to store the enclosed entity in the request as a new resource.</td>
            </tr>
            <tr>
              <td>URI should have a resource identifier. Example: PUT /users{`/{user-id}`}</td>
              <td>URI should indicate the collection of the resource. Example: POST /users</td>
            </tr>
            <tr>
              <td>Methods are idempotent</td>
              <td>Methods are not idempotent.</td>
            </tr>
            <tr>
              <td>Used when the client wants to modify a single resource that is part of the collection. If a part of the resource has to be updated, then PATCH needs to be used.</td>
              <td>Used to add a new resource to the collection.</td>
            </tr>
            <tr>
              <td>The responses are not cached here despite the idempotency.</td>
              <td>Responses are not cacheable unless the response explicitly specifies Cache-Control fields in the header.</td>
            </tr>
            <tr>
              <td>Used for UPDATE operations.</td>
              <td>Used for CREATE operations</td>
            </tr>
          </tbody>
        </table>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'We can develop webservices using web sockets as well as REST. What are the differences between these two?',
    answer: 
      <>
        <table>
          <thead>
            <th>REST</th>
            <th>Web Sockets</th>
          </thead>
          <tbody>
            <tr>
              <td>Follows stateless architecture, meaning it will not store any session-based data.</td>
              <td>APIs follow the stateful protocol as it necessitates session-based data storage.</td>
            </tr>
            <tr>
              <td>The mode of communication is uni-directional. At a time, only the server or the client will communicate.</td>
              <td>The communication is bi-directional, communication can be done by both client or server at a time.</td>
            </tr>
            <tr>
              <td>Based on the Request-Response Model.</td>
              <td>Follows the full-duplex model.</td>
            </tr>
            <tr>
              <td>Every request will have sections like header, title, body, URL, etc.</td>
              <td>Do not have any overhead and hence suited for real-time communication.</td>
            </tr>
            <tr>
              <td>For every HTTP request, a new TCP connection is set up.</td>
              <td>There will be only one TCP connection and then the client and server can start communicating.</td>
            </tr>
            <tr>
              <td>REST web services support both vertical and horizontal scaling.</td>
              <td>Web socket-based services only support vertical scaling.</td>
            </tr>
            <tr>
              <td>Depends on HTTP methods to get the response.</td>
              <td>Depend on the IP address and port number of the system to get a response.</td>
            </tr>
            <tr>
              <td>Communication is slower here.</td>
              <td>Message transmission happens very faster than REST API.</td>
            </tr>
            <tr>
              <td>Memory/Buffers are not needed to store data here.</td>
              <td>Memory is required to store data.</td>
            </tr>
          </tbody>
        </table>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What is the difference between idempotent and safe HTTP methods?',
    answer: 
      <>
        <p>Safe methods are those that do not change any resources internally. These methods can be cached and can be retrieved without any effects on the resource.</p>
        <p>Idempotent methods are those methods that do not change the responses to the resources externally. They can be called multiple times without any change in the responses.</p>
        <p>The following are what methods are idempotent and what is safe:</p>
        <table>
          <thead>
            <th>HTTP Methods</th>
            <th>Idempotent</th>
            <th>Safe</th>
          </thead>
          <tbody>
            <tr>
              <td>OPTIONS</td>
              <td>yes</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>GET</td>
              <td>yes</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>HEAD</td>
              <td>yes</td>
              <td>yes</td>
            </tr>
            <tr>
              <td>PUT</td>
              <td>yes</td>
              <td>no</td>
            </tr>
            <tr>
              <td>POST</td>
              <td>no</td>
              <td>no</td>
            </tr>
            <tr>
              <td>DELETE</td>
              <td>yes</td>
              <td>no</td>
            </tr>
            <tr>
              <td>PATCH</td>
              <td>no</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the best DATA FORMAT practices for RESTful web services development? (3)',
    answer: 
      <>
        <p>Since REST supports multiple data formats, it is however good practice to develop REST APIs that accept and responds with JSON data format whenever possible. This is because a majority of the client and server technologies have inbuilt support to read and parse JSON objects with ease, thereby making JSON the standard object notation.</p>
        <p>To ensure that the application responds using JSON data format, the response header should have Content-Type set to as application/JSON, this is because certain HTTP clients look at the value of this response header to parse the objects appropriately.</p>
        <p>To ensure that the request sends the data in JSON format, again the Content-Type must be set to application/JSON on the request header.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the best NAMING practices for RESTful web services development? (4)',
    answer: 
      <>
        <ul>
          <li>While naming the resource endpoints, ensure to use plural nouns and not verbs.</li>
          <li>The API endpoints should be clear, brief, easy to understand, and informative.</li>
          <li>Using verbs in the resource name does not contribute much information because an HTTP request already has what the request is doing in its HTTP method/verb.</li>
          <li>An appropriate HTTP verb should be used to represent the task of the API endpoint.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the best NESTING practices for RESOURCE NAMING RESTful web services development? (2)',
    answer: 
      <>
        <ul>
          <li>To represent the hierarchy of resources, use the nesting in the naming convention of the endpoints. In case, you want to retrieve data of one object residing in another object, the endpoint should reflect this to communicate what is happening. For example, to get the address of an author, we can use the GET method for the URI /authors/:id/address</li>
          <li>Please ensure there are no more than 2 or 3 levels of nesting as the name of the URI can become too long and unwieldy.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the best ERROR HANDLING practices for RESTful web services development? (2 + common codes)',
    answer: 
      <>
        <p>Error Handling should be done gracefully by returning appropriate error codes the application has encountered. REST has defined standard HTTP Status codes that can be sent along with the response based on the scenario.</p>
        <p>Error codes should also be accompanied by appropriate error messages that can help the developers to take corrective actions. However, the message should not be too elaborate as well which can help the hacker to hack your application.</p>
        <p>Common status codes are:</p>
        <ul>
          <li>400: Bad Request - client-side error - failed input validation.</li>
          <li>401: Unauthorized - The user is not authenticated and hence does not have authority to access the resource.</li>
          <li>403: Forbidden - User is authenticated but is not authorized to access the resource.</li>
          <li>404: Not Found - The resource is not found.</li>
          <li>500: Internal server error - This is a very generic server-side error that is thrown when the server goes down. This should not be returned by the programmer explicitly.</li>
          <li>502: Bad Gateway - Server did not receive a valid response from the upstream server.</li>
          <li>503: Service Unavailable - Some unexpected things happened on the server such as system failure, overload, etc.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the best LARGE RESOURCE DATA practices for RESTful web services development? (2)',
    answer: 
      <>
        <p>While retrieving huge resource data, it is advisable to include filtering and pagination of the resources. This is because returning huge data all at once can slow down the system and reduce the application performance. Filtering some items reduces the data to some extent. Pagination of data is done to ensure only some results are sent at a time. Doing this can increase the server performance and reduce the burden of the server resources.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the best SECURITY practices for RESTful web services development? (2)',
    answer: 
      <>
        <p>Good security practices are a must while developing REST APIs. The client-server communication must be private due to the nature of data sensitivity. </p>
        <ul>
          <li>Incorporating SSL/TLS is the most important step while developing APIs as this facilitates establishing secure communication. (Note: SSL certificates are easier to get and load on the server.)</li>
          <li>Ensure that not everyone should be able to access the resource. For example, normal users should not access the data of admins or another user. Hence, role-based access controls should be in place to make sure only the right set of users can access the right set of data.</li>
        </ul>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the best CACHING practices for RESTful web services development?',
    answer: 
      <>
        <p>Since REST supports the feature of caching, we can use this feature to cache the data in order to improve the application performance. Caching is done to avoid querying the database for a request repeated times. Caching makes data retrieval fast. </p>
        <p>However, care must be taken to ensure that the cache has updated data and not outdated ones. Frequent cache update measures need to be incorporated. There are many cache providers like Redis that can assist in caching.</p>
      </>
  },
  {
    rating: 0,
    subject: 'restapi',
    topic: 'Basic REST API',
    level: 0,
    question: 'What are the best VERSIONING practices for RESTful web services development?',
    answer: 
      <>
        <p>Versioning needs to be done in case we are planning to make any changes with the existing endpoints. We do not want to break communication between our application and the apps that consume our application while we are working on the API release. The transition has to be seamless. Semantic versioning can be followed. For example, 3.0.1 represents 3rd major version with the first patch. Usually, in the API endpoints, we define /v1,/v2, etc at the beginning of the API path.</p>
      </>
  },
]