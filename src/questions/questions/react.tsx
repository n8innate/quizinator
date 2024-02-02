import React, { ReactNode } from 'react';
import styles from '../../App.module.scss'
interface IQuestions {
  topic: string;
  question: string;
  answer: ReactNode;
}

export const reactQuestions: IQuestions[] = [
  {
    topic: 'Core React',
    question: 'What is React?',
    answer: 
      <>
      <p>React(aka React.js or ReactJS) is an <strong>open-source front-end JavaScript library</strong> that is used for building composable user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps based on components in a declarative approach. </p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the history behind React evolution?',
    answer: 
      <>
        <p> The history of ReactJS started in 2010 with the creation of <strong>XHP</strong>. XHP is a PHP extension which improved the syntax of the language such that XML document fragments become valid PHP expressions and the primary purpose was used to create custom and reusable HTML elements. </p>
        <p> The main principle of this extension was to make front-end code easier to understand and to help avoid cross-site scripting attacks. The project was successful to prevent the malicious content submitted by the scrubbing user.</p>
        <p> But there was a different problem with XHP in which dynamic web applications require many roundtrips to the server, and XHP did not solve this problem. Also, the whole UI was re-rendered for small change in the application. Later, the initial prototype of React is created with the name <strong>FaxJ</strong> by Jordan inspired from XHP. Finally after sometime React has been introduced as a new library into JavaScript world.</p>
        <p> <strong>Note:</strong> JSX comes from the idea of XHP</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the major features of React?',
    answer: 
      <>
        <p>The major features of React are:</p>
        <ul>
        <li>Uses <strong>JSX</strong> syntax, a syntax extension of JS that allows developers to write HTML in their JS code.</li>
        <li>It uses <strong>Virtual DOM</strong> instead of Real DOM considering that Real DOM manipulations are expensive.</li>
        <li>Supports <strong>server-side rendering</strong> which is useful for Search Engine Optimizations(SEO).</li>
        <li>Follows <strong>Unidirectional or one-way</strong> data flow or data binding.</li>
        <li>Uses <strong>reusable/composable</strong> UI components to develop the view.</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is JSX?',
    answer: 
      <>
        <p><em>JSX</em> stands for <em>JavaScript XML</em> and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the <strong>React.createElement(type, props, ...children)</strong> function, giving us expressiveness of JavaScript along with HTML like template syntax.</p>
        <p>In the example below, the text inside <strong>&lt;h1&gt;</strong> tag is returned as JavaScript function to the render function.</p>        
        <pre>
          <div className={styles.appCode}>{`
export default function App() {
  return (
      <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
  );
}
          `}</div>
        </pre>
        <p>If you don't use JSX syntax then the respective JavaScript code should be written as below,</p>
        <pre>
          <div className={styles.appCode}>{`
import { createElement } from 'react';

export default function App() {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello, this is a JSX Code!'
  );
}
          `}</div>
        </pre>
        <p><strong>Note:</strong> JSX is stricter than HTML</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the difference between Element and Component?',
    answer: 
      <>
        <p>An <em>Element</em> is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. <em>Elements</em> can contain other <em>Elements</em> in their props. Creating a React element is cheap. Once an element is created, it cannot be mutated.</p>
        <p>The JavaScript representation(Without JSX) of React Element would be as follows:</p>
        <div className={styles.appCode}>{`
            const element = React.createElement("div", { id: "login-btn" }, "Login");
          `}</div>
        <p>and this element can be simiplified using JSX</p>
          <div className={styles.appCode}>{`
            const element = <div id="login-btn">Login</div>;
          `}</div>
        <p>The above <strong>React.createElement()</strong> function returns an object as below:</p>
        <pre>
          <div className={styles.appCode}>{`
{
  type: 'div',
  props: {
    children: 'Login',
    id: 'login-btn'
  }
}
          `}</div>
        </pre>
        <p>Finally, this element renders to the DOM using ReactDOM.render().</p>
        <p>Whereas a <strong>component</strong> can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output:</p>
        <pre>
          <div className={styles.appCode}>{`
const Button = ({ onLogin }) => (
  <div id="login-btn" onClick={onLogin}>Login</div>
);
          `}</div>
        </pre>
        <p>Then JSX gets transpiled to a <strong>React.createElement()</strong> function tree:</p>
        <pre>
          <div className={styles.appCode}>{`
const Button = ({ handleLogin }) =>
React.createElement(
  "div",
  { id: "login-btn", onClick: handleLogin },
  "Login"
);
          `}</div> 
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to create components in React?',
    answer: 
      <>
        <p>Components are the building blocks of creating User Interfaces(UI) in React. There are two possible ways to create a component.</p>
        <ol>
          <li><p><strong>Function Components:</strong> This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the first parameter and return React elements to render the output:</p>
            <pre>
              <div className={styles.appCode}>{`
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
              `}</div> 
            </pre>
          </li>
          <li><p><strong>Class Components:</strong> You can also use ES6 class to define a component. The above function component can be written as a class component:</p>
            <pre>
              <div className={styles.appCode}>{`
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
              `}</div> 
            </pre>            
          </li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'When to use a Class Component over a Function Component?',
    answer: 
      <>
        <p>After the addition of Hooks(i.e. React 16.8 onwards) it is always recommended to use Function components over Class components  in React. Because you could use state, lifecycle methods and other features that were only available in class component present in function component too. </p>
        <p>But even there are two reasons to use Class components over Function components.</p>
        <ol>
          <li>If you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries. </li>
          <li>In older versions, If the component needs <em>state or lifecycle methods</em> then you need to use class component.</li>
        </ol>
        <p>Note: You can also use reusable react error boundary third-party component without writing any class. i.e, No need to use class components for Error boundaries.</p>
        <p>The usage of Error boundaries from the above library is quite straight forward.</p>
        <p>Note when using react-error-boundary: ErrorBoundary is a client component. You can only pass props to it that are serializeable or use it in files that have a "use client"; directive.</p>
        <pre>
          <div className={styles.appCode}>{`
"use client";

import { ErrorBoundary } from "react-error-boundary";

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <ExampleApplication />
</ErrorBoundary>
          `}</div>
        </pre>        
      </>
  },
  {
    topic: 'Core React',
    question: 'What are Pure Components?',
    answer: 
      <>
        <p>Pure components are the components which render the same output for the same state and props. In function components, you can achieve these pure components through memoized <strong>React.memo()</strong> API wrapping around the component. This API prevents unnecessary re-renders by comparing the previous props and new props using shallow comparison. So it will be helpful for performance optimizations. </p>
        <p>But at the same time, it won&#39;t compare the previous state with the current state because function component itself prevents the unnecessary rendering by default when you set the same state again.</p>
        <p>The syntactic representation of memoized components looks like below,</p>
          <div className={styles.appCode}>{`
            const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
          `}</div>
        <p>Below is the example of how child component(i.e., EmployeeProfile) prevents re-renders for the same props passed by parent component(i.e.,EmployeeRegForm).</p>
        <pre>
          <div className={styles.appCode}>{`
import { memo, useState } from 'react';

const EmployeeProfile = memo(function EmployeeProfile({ name, email }) {
  return (<>
        <p>Name:{name}</p>
        <p>Email: {email}</p>
        </>);
});
export default function EmployeeRegForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <>
      <label>
        Name: <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Email: <input value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <hr/>
      <EmployeeProfile name={name}/>
    </>
  );
}
          `}</div>
        </pre>
        <p>In the above code, the email prop has not been passed to child component. So there won&#39;t be any re-renders for email prop change.</p>
        <p>In class components, the components extending <em><strong>React.PureComponent</strong></em> instead of  <em><strong>React.Component</strong></em> become the pure components. When props or state changes, <em>PureComponent</em> will do a shallow comparison on both props and state by invoking <strong>shouldComponentUpdate()</strong> lifecycle method. </p>
        <p><strong>Note:</strong> <strong>React.memo()</strong> is a higher-order component.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is state in React?',
    answer: 
      <>
        <p><em>State</em> of a component is an object that holds some information that may change over the lifetime of the component. The important point is whenever the state object changes, the component re-renders. It is always recommended to make our state as simple as possible and minimize the number of stateful components.</p>
        <p>State is similar to props, but it is private and fully controlled by the component ,i.e., it is not accessible to any other component till the owner component decides to pass it.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are props in React?',
    answer: 
      <>
        <p><em>Props</em> are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.</p>
        <p>The primary purpose of props in React is to provide following component functionality:</p>
        <ol>
          <li>Pass custom data to your component.</li>
          <li>Trigger state changes.</li>
          <li>Use via <strong>this.props.reactProp</strong> inside component&#39;s <strong>render()</strong> method.</li>
        </ol>
        <p>For example, let us create an element with <strong>reactProp</strong> property:</p>
          <div className={styles.appCode}>{`
            <Element reactProp={"1"} />
          `}</div> 
        <p>This reactProp (or whatever you came up with) attribute name then becomes a property attached to React's native props object which originally already exists on all components created using React library.</p>
          <div className={styles.appCode}>{`
            props.reactProp
          `}</div>
        <p>For example, the usage of props in function component looks like below:</p>

        <pre>
          <div className={styles.appCode}>{`
import React from "react";
import ReactDOM from "react-dom";

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" />
      <ChildComponent name="Mary" age="25" />
    </div>
  );
};
          `}</div>
        </pre>
        <p>The properties from props object can be accessed directly using destructing feature from ES6 (ECMAScript 2015). The above child component can be simplified like below.</p>


        <pre>
          <div className={styles.appCode}>{`
const ChildComponent = ({name, age}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the difference between state and props?',
    answer: 
      <>
        <p>In React, both <strong>state</strong> and <strong>props</strong> are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics.
        <strong>state</strong> is managed by the component itself and can be updated using the <strong>setState()</strong> function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Changes in the state trigger a re-render of the component and its children.
        <strong>props</strong> (short for &quot;properties&quot;) are passed to a component by its parent component and are <strong>read-only</strong>, meaning that they cannot be modified by the component itself. props can be used to configure the behavior of a component and to pass data between components.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Why should we not update the state directly?',
    answer: 
      <>
        <p>If you try to update the state directly then it won&#39;t re-render the component.</p>
        
        <pre>
          <div className={styles.appCode}>{`
//Wrong
this.state.message = "Hello world";
          `}</div>
        </pre>
        <p>Instead use <strong>setState()</strong> method. It schedules an update to a component&#39;s state object. When state changes, the component responds by re-rendering.</p>
        <pre>
          <div className={styles.appCode}>{`
//Correct
this.setState({ message: "Hello World" });
          `}</div>
        </pre>
        <p><strong>Note:</strong> You can directly assign to the state object either in <em>constructor</em> or using latest javascript&#39;s class field declaration syntax.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the purpose of callback function as an argument of setState()',
    answer: 
      <>
        <p>The callback function is invoked when setState finished and the component gets rendered. Since <strong>setState()</strong> is <strong>asynchronous</strong> the callback function is used for any post action.</p>
        <p><strong>Note:</strong> It is recommended to use lifecycle method rather than this callback function.</p>
        <pre>
          <div className={styles.appCode}>{`
//Correct
this.setState({ message: "Hello World" });
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the difference between HTML and React event handling?',
    answer: 
      <>
        <p>Below are some of the main differences between HTML and React event handling,</p>
        <ol>
        <li><p>In HTML, the event name usually represents in <em>lowercase</em> as a convention:</p>
          <div className={styles.appCode}>{`
            <button onclick="activateLasers()"></button>
          `}</div>
        <p>Whereas in React it follows <em>camelCase</em> convention:</p>
          <div className={styles.appCode}>{`
            <button onClick={activateLasers}>
          `}</div>
        </li>
        <li><p>In HTML, you can return <strong>false</strong> to prevent default behavior:</p>
        <pre>
          <div className={styles.appCode}>{`
<a
  href="#"
  onclick='console.log("The link was clicked."); return false;'
/>
          `}</div>
            </pre>
            <p>Whereas in React you must call <strong>preventDefault()</strong> explicitly:</p>
            <pre>
              <div className={styles.appCode}>{`
function handleClick(event) {
  event.preventDefault();
  console.log("The link was clicked.");
}
              `}</div>
            </pre>
        </li>
        <li><p>In HTML, you need to invoke the function by appending <strong>()</strong>
        Whereas in react you should not append <strong>()</strong> with the function name. (refer &quot;activateLasers&quot; function in the first point for example)</p>
        </li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to bind methods or event handlers in JSX callbacks?',
    answer: 
      <>
        <p>There are 3 possible ways to achieve this in class components:</p>
          <ol>
            <li><p><strong>Binding in Constructor:</strong> In JavaScript classes, the methods are not bound by default. The same rule applies for React event handlers defined as class methods. Normally we bind them in constructor.</p>
              <pre>
                <div className={styles.appCode}>{`
class User extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("SingOut triggered");
  }
  render() {
    return <button onClick={this.handleClick}>SingOut</button>;
  }
}
                `}</div>
              </pre>
            </li>
            <li><p><strong>Public class fields syntax:</strong> If you don&#39;t like to use bind approach then <em>public class fields syntax</em> can be used to correctly bind callbacks. The Create React App enables this syntax by default.</p>
              <pre>
                <div className={styles.appCode}>{`
handleClick = () => {
  console.log("SingOut triggered", this);
};
                `}</div>
              </pre>
                <div className={styles.appCode}>{`
                  <button onClick={this.handleClick}>SingOut</button>
                `}</div>
            </li>
            <li><p><strong>Arrow functions in callbacks:</strong> It is possible to use <em>arrow functions</em> directly in the callbacks.</p>
              <pre>
                <div className={styles.appCode}>{`
handleClick() {
  console.log('SingOut triggered');
}
render() {
  return <button onClick={() => this.handleClick()}>SignOut</button>;
}
                `}</div>
              </pre>
            </li>
          </ol>
          <p><strong>Note:</strong> If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with <strong>.bind()</strong> or <em>public class fields syntax</em> approach considering performance.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to pass a parameter to an event handler or callback?',
    answer: 
      <>
        <p>You can use an <em>arrow function</em> to wrap around an <em>event handler</em> and pass parameters:</p>
          <div className={styles.appCode}>{`
            <button onClick={() => this.handleClick(id)} />
          `}</div>
        <p>This is an equivalent to calling `.bind`:</p>
          <div className={styles.appCode}>{`
            <button onClick={this.handleClick.bind(this, id)} />
          `}</div>
        <p>Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function</p>
        <pre>
          <div className={styles.appCode}>{`
<button onClick={this.handleClick(id)} />;
handleClick = (id) => () => {
  console.log("Hello, your ticket number is", id);
};
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are synthetic events in React?',
    answer: 
      <>
        <p><strong>SyntheticEvent</strong> is a cross-browser wrapper around the browser&#39;s native event. Its API is same as the browser&#39;s native event, including <strong>stopPropagation()</strong> and <strong>preventDefault()</strong>, except the events work identically across all browsers. The native events can be accessed directly from synthetic events using <strong>nativeEvent</strong> attribute.</p>
        <p>Let&#39;s take an example of BookStore title search component with the ability to get all native event properties</p>
        <pre>
          <div className={styles.appCode}>{`
function BookStore() {
  handleTitleChange(e) {
    console.log('The new title is:', e.target.value);
    // 'e' represents synthetic event
    const nativeEvent = e.nativeEvent;
    console.log(nativeEvent);
    e.stopPropogation();
    e.preventDefault();
  }

  return <input name="title" onChange={handleTitleChange} />
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are inline conditional expressions?',
    answer: 
      <>
        <p>You can use either <em>if statements</em> or <em>ternary expressions</em> which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator <strong>&amp;&amp;</strong>.</p>
        <pre>
          <div className={styles.appCode}>{`
<h1>Hello!</h1>;
{
  messages.length > 0 && !isLogin ? (
    <h2>You have {messages.length} unread messages.</h2>
  ) : (
    <h2>You don't have unread messages.</h2>
  );
  }
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is "key" prop and what is the benefit of using it in arrays of elements?',
    answer: 
      <>
        <p>A <strong>key</strong> is a special attribute you <strong>should</strong> include when mapping over arrays to render data. <em>Key</em> prop helps React identify which items have changed, are added, or are removed.</p>
        <p>Keys should be unique among its siblings. Most often we use ID from our data as <em>key</em>:</p>
          <div className={styles.appCode}>{`
            const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
          `}</div>
        <p>When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:</p>
        <pre>
          <div className={styles.appCode}>{`
const todoItems = todos.map((todo, index) => (
  <li key={index}>{todo.text}</li>
));
          `}</div>
        </pre>
        <p><strong>Note:</strong></p>
        <ol>
          <li>Using <em>indexes</em> for <em>keys</em> is <strong>not recommended</strong> if the order of items may change. This can negatively impact performance and may cause issues with component state.</li>
          <li>If you extract list item as separate component then apply <em>keys</em> on list component instead of <strong>li</strong> tag.</li>
          <li>There will be a warning message in the console if the <strong>key</strong> prop is not present on list items.</li>
          <li>The key attribute accepts either string or number and internally convert it as string type.</li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the use of refs?',
    answer: 
      <>
        <p>The <em>ref</em> is used to return a reference to the element. They <em>should be avoided</em> in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to create refs?',
    answer: 
      <>
        <p>There are two approaches</p>
        <ol>
          <li><p>This is a recently added approach. <em>Refs</em> are created using <strong>React.createRef()</strong> method and attached to React elements via the <strong>ref</strong> attribute. In order to use <em>refs</em> throughout the component, just assign the <em>ref</em> to the instance property within constructor.</p>
            <pre>
              <div className={styles.appCode}>{`
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
              `}</div>
            </pre>
          </li>
          <li><p>You can also use ref callbacks approach regardless of React version. For example, the search bar component&#39;s input element is accessed as follows,
            <pre>
            <div className={styles.appCode}>{`
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.txtSearch = null;
    this.state = { term: "" };
    this.setInputSearchRef = (e) => {
      this.txtSearch = e;
    };
  }
  onInputChange(event) {
    this.setState({ term: this.txtSearch.value });
  }
  render() {
    return (
      <input
        value={this.state.term}
        onChange={this.onInputChange.bind(this)}
        ref={this.setInputSearchRef}
      />
    );
  }
}
            `}</div>
              </pre>
            </p>
          </li>
        </ol>
        <p>You can also use <em>refs</em> in function components using <strong>closures</strong>.
        <strong>Note</strong>: You can also use inline ref callbacks even though it is not a recommended approach.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are forward refs?',
    answer: 
      <>  
        <p><em>Ref forwarding</em> is a feature that lets some components take a <em>ref</em> they receive, and pass it further down to a child.</p>
        <pre>
          <div className={styles.appCode}>{`
const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// Create ref to the DOM button:
const ref = React.createRef();
<ButtonElement ref={ref}>{"Forward Ref"}</ButtonElement>;
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Which is preferred option with in callback refs and findDOMNode()?',
    answer: 
      <>
        <p>It is preferred to use <em>callback refs</em> over <strong>findDOMNode()</strong> API. Because <strong>findDOMNode()</strong> prevents certain improvements in React in the future.</p>
        <p>The <strong>legacy</strong> approach of using <strong>findDOMNode</strong>:</p>
        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />;
  }
}
          `}</div>
        </pre>
        <p>The recommended approach is:</p>
        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.node = createRef();
  }
  componentDidMount() {
    this.node.current.scrollIntoView();
  }

  render() {
    return <div ref={this.node} />;
  }
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Why are String Refs legacy?',
    answer: 
      <>
        <p>If you worked with React before, you might be familiar with an older API where the <strong>ref</strong> attribute is a string, like <strong>ref={'textInput'}</strong>, and the DOM node is accessed as <strong>this.refs.textInput</strong>. We advise against it because <em>string refs have below issues</em>, and are considered legacy. String refs were <strong>removed in React v16</strong>.</p>
        <ol>
          <li>They <em>force React to keep track of currently executing component</em>. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.</li>
          <li>They are <em>not composable</em> — if a library puts a ref on the passed child, the user can&#39;t put another ref on it. Callback refs are perfectly composable.</li>
          <li>They <em>don&#39;t work with static analysis</em> like Flow. Flow can&#39;t guess the magic that framework does to make the string ref appear on <strong>this.refs</strong>, as well as its type (which could be different). Callback refs are friendlier to static analysis.</li>
          <li><p>It doesn&#39;t work as most people would expect with the &quot;render callback&quot; pattern (e.g.<strong>{` <DataGrid renderRow={this.renderRow} />`}</strong>)</p>
          <pre>
            <div className={styles.appCode}>{`
class MyComponent extends Component {
  renderRow = (index) => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent:
    return <input ref={"input-" + index} />;

    // This would work though! Callback refs are awesome.
    return <input ref={(input) => (this["input-" + index] = input)} />;
  };

  render() {
    return (
      <DataTable data={this.props.data} renderRow={this.renderRow} />
    );
  }
}
            `}</div>
          </pre>
          </li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is Virtual DOM?',
    answer: 
      <>
        <p>The <em>Virtual DOM</em> (VDOM) is an in-memory representation of <em>Real DOM</em>. The representation of a UI is kept in memory and synced with the &quot;real&quot; DOM. It&#39;s a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called <em>reconciliation</em>.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How Virtual DOM works?',
    answer: 
      <>
        <p>The <em>Virtual DOM</em> works in three simple steps.</p>
        <ol>
          <li><p>Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.</p></li>
          <li><p>Then the difference between the previous DOM representation and the new one is calculated.</p></li>
          <li><p>Once the calculations are done, the real DOM will be updated with only the things that have actually changed.</p></li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: ' What is the difference between Shadow DOM and Virtual DOM?',
    answer: 
      <>       
        <p>The <em>Shadow DOM</em> is a browser technology designed primarily for scoping variables and CSS in <em>web components</em>. The <em>Virtual DOM</em> is a concept implemented by libraries in JavaScript on top of browser APIs.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is React Fiber?',
    answer: 
      <>
        <p>Fiber is the new <em>reconciliation</em> engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the main goal of React Fiber?',
    answer: 
      <>        
        <p>The goal of <em>React Fiber</em> is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is <strong>incremental rendering</strong>: the ability to split rendering work into chunks and spread it out over multiple frames.</p>
        <p><em>from documentation</em></p>
        <p>Its main goals are:</p>
        <ol>
          <li>Ability to split interruptible work in chunks.</li>
          <li>Ability to prioritize, rebase and reuse work in progress.</li>
          <li>Ability to yield back and forth between parents and children to support layout in React.</li>
          <li>Ability to return multiple elements from render().</li>
          <li>Better support for error boundaries.</li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are controlled components?',
    answer: 
      <>        
        <p>A component that controls the input elements within the forms on subsequent user input is called <strong>Controlled Component</strong>, i.e, every state mutation will have an associated handler function.</p>
        <p>For example, to write all the names in uppercase letters, we use handleChange as below,</p>
        <pre>
          <div className={styles.appCode}>{`
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()})
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are uncontrolled components?',
    answer: 
      <>
        <p>The <strong>Uncontrolled Components</strong> are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.</p>
        <p>In the below UserProfile component, the <strong>name</strong> input is accessed using ref.</p>
        <pre>
          <div className={styles.appCode}>{`
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {"Name:"}
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
          `}</div>
        </pre>
        <p>In most cases, it&#39;s recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the difference between createElement and cloneElement?',
    answer: 
      <>
        <p>JSX elements will be transpiled to <strong>React.createElement()</strong> functions to create React elements which are going to be used for the object representation of UI. Whereas <strong>cloneElement</strong> is used to clone an element and pass it new props.</p>
      </> 
  },
  {
    topic: 'Core React',
    question: 'What is Lifting State Up in React?',
    answer: 
      <>
        <p>When several components need to share the same changing data then it is recommended to <em>lift the shared state up</em> to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the different phases of component lifecycle?',
    answer: 
      <>
        <p>The component lifecycle has three distinct lifecycle phases:</p>
        <ol>
          <li><p><strong>Mounting:</strong> The component is ready to mount in the browser DOM. This phase covers initialization from <strong>constructor()</strong>, <strong>getDerivedStateFromProps()</strong>, <strong>render()</strong>, and <strong>componentDidMount()</strong> lifecycle methods.</p>
          </li>
          <li><p><strong>Updating:</strong> In this phase, the component gets updated in two ways, sending the new props and updating the state either from <strong>setState()</strong> or <strong>forceUpdate()</strong>. This phase covers <strong>getDerivedStateFromProps()</strong>, <strong>shouldComponentUpdate()</strong>, <strong>render()</strong>, <strong>getSnapshotBeforeUpdate()</strong> and <strong>componentDidUpdate()</strong> lifecycle methods.</p>
          </li>
          <li><p><strong>Unmounting:</strong> In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes <strong>componentWillUnmount()</strong> lifecycle method.</p>
          </li>
          </ol>
          <p>It&#39;s worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows</p>
          <ol>
          <li><p><strong>Render</strong> The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.</p>
          </li>
          <li><p><strong>Pre-commit</strong> Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the <strong>getSnapshotBeforeUpdate()</strong>.</p>
          </li>
          <li><p><strong>Commit</strong> React works with the DOM and executes the final lifecycles respectively <strong>componentDidMount()</strong> for mounting, <strong>componentDidUpdate()</strong> for updating, and <strong>componentWillUnmount()</strong> for unmounting.</p>
          </li>
        </ol>
        <p>React 16.3+ Phases (or an <a href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">interactive version</a>)</p>
        <p><img src="../images/phases16.4.png" alt="phases 16.4+"/></p>
        <p>Before React 16.3</p>
        <p><img src="../images/phases.png" alt="phases 16.2"/></p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the lifecycle methods of React?',
    answer: 
      <>
        <p>Before React 16.3</p>
        <ul>
          <li><strong>componentWillMount:</strong> Executed before rendering and is used for App level configuration in your root component.</li>
          <li><strong>componentDidMount:</strong> Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.</li>
          <li><strong>componentWillReceiveProps:</strong> Executed when particular prop updates to trigger state transitions.</li>
          <li><strong>shouldComponentUpdate:</strong> Determines if the component will be updated or not. By default it returns <strong>true</strong>. If you are sure that the component doesn&#39;t need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.</li>
          <li><strong>componentWillUpdate:</strong> Executed before re-rendering the component when there are props &amp; state changes confirmed by <strong>shouldComponentUpdate()</strong> which returns true.</li>
          <li><strong>componentDidUpdate:</strong> Mostly it is used to update the DOM in response to prop or state changes.</li>
          <li><strong>componentWillUnmount:</strong> It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.</li>
        </ul>
        <p>React 16.3+</p>
        <ul>
          <li><strong>getDerivedStateFromProps:</strong> Invoked right before calling <strong>render()</strong> and is invoked on <em>every</em> render. This exists for rare use cases where you need a derived state. Worth reading <a href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html">if you need derived state</a>.</li>
          <li><strong>componentDidMount:</strong> Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.</li>
          <li><strong>shouldComponentUpdate:</strong> Determines if the component will be updated or not. By default, it returns <strong>true</strong>. If you are sure that the component doesn&#39;t need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.</li>
          <li><strong>getSnapshotBeforeUpdate:</strong> Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into <strong>componentDidUpdate()</strong>. This is useful to capture information from the DOM i.e. scroll position.</li>
          <li><strong>componentDidUpdate:</strong> Mostly it is used to update the DOM in response to prop or state changes. This will not fire if <strong>shouldComponentUpdate()</strong> returns <strong>false</strong>.</li>
          <li><strong>componentWillUnmount</strong> It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are Higher-Order Components?',
    answer: 
      <>
        <p>A <em>higher-order component</em> (<em>HOC</em>) is a function that takes a component and returns a new component. Basically, it&#39;s a pattern that is derived from React&#39;s compositional nature.</p>
        <p>We call them <strong>pure components</strong> because they can accept any dynamically provided child component but they won&#39;t modify or copy any behavior from their input components.</p>
          <div className={styles.appCode}>{`
            const EnhancedComponent = higherOrderComponent(WrappedComponent);
          `}</div>
        <p>HOC can be used for many use cases:</p>
        <ol>
        <li>Code reuse, logic and bootstrap abstraction.</li>
        <li>Render hijacking.</li>
        <li>State abstraction and manipulation.</li>
        <li>Props manipulation.</li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to create props proxy for HOC component?',
    answer: 
      <>
        <p>You can add/edit props passed to the component using <em>props proxy</em> pattern like this:</p>
        <pre>
          <div className={styles.appCode}>{`
function HOC(WrappedComponent) {
  return class Test extends Component {
    render() {
      const newProps = {
        title: "New Header",
        footer: false,
        showFeatureX: false,
        showFeatureY: true,
      };

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is context?',
    answer: 
      <>
        <p><em>Context</em> provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
        <p>For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.</p>
          <div className={styles.appCode}>{`
            const { Provider, Consumer } = React.createContext(defaultValue);
          `}</div>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is children prop?',
    answer: 
      <>
        <p><em>Children</em> is a prop (<strong>this.props.children</strong>) that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component&#39;s opening and closing tag will be passed to that component as <strong>children</strong> prop.</p>
        <p>There are several methods available in the React API to work with this prop. These include <strong>React.Children.map</strong>, <strong>React.Children.forEach</strong>, <strong>React.Children.count</strong>, <strong>React.Children.only</strong>, <strong>React.Children.toArray</strong>.</p>
        <p>A simple usage of children prop looks as below,</p>
        <pre>
          <div className={styles.appCode}>{`
const MyDiv = React.createClass({
  render: function () {
    return <div>{this.props.children}</div>;
  },
});

ReactDOM.render(
  <MyDiv>
    <span>{"Hello"}</span>
    <span>{"World"}</span>
  </MyDiv>,
  node
);
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to write comments in React?',
    answer: 
      <>
        <p>The comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.</p>
        <p><strong>{/* */}</strong></p>
        <p>For example, the below comment in JSX</p>
        <pre>
          <div className={styles.appCode}>{`
render() {
  return (
    <div>
      {/* Hello, */}
      <span>World</span>
    </div>
  );
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the purpose of using super constructor with props argument?',
    answer: 
      <>
        <p>A child class constructor cannot make use of <strong>this</strong> reference until the <strong>super()</strong> method has been called. The same applies to ES6 sub-classes as well. The main reason for passing props parameter to <strong>super()</strong> call is to access <strong>this.props</strong> in your child constructors.</p>
        <p><strong>Passing props:</strong></p>
        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props); // prints { name: 'John', age: 42 }
  }
}
          `}</div>
        </pre>
        <p><strong>Not passing props:</strong></p>
        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends React.Component {
  constructor(props) {
    super();

    console.log(this.props); // prints undefined

    // but props parameter is still available
    console.log(props); // prints { name: 'John', age: 42 }
  }

  render() {
    // no difference outside constructor
    console.log(this.props); // prints { name: 'John', age: 42 }
  }
}
          `}</div>
        </pre>
        <p>The above code snippets reveals that <strong>this.props</strong> is different only within the constructor. It would be the same outside the constructor.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is reconciliation?',
    answer: 
      <>
        <p><strong>Reconciliation</strong> is the process through which React updates the Browser DOM and makes React work faster. React use a <strong>diffing algorithm</strong> so that component updates are predictable and faster. React would first calculate the difference between the <strong>real DOM</strong> and the copy of DOM <strong>(Virtual DOM)</strong> when there&#39;s an update of components.
        React stores a copy of Browser DOM which is called <strong>Virtual DOM</strong>. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. This comparison is done by <strong>Diffing Algorithm</strong>.
        Now React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called <em>Reconciliation</em>.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to set state with a dynamic key name?',
    answer: 
      <>
        <p>If you are using ES6 or the Babel transpiler to transform your JSX code then you can accomplish this with <em>computed property names</em>.</p>
        <pre>
          <div className={styles.appCode}>{`
handleInputChange(event) {
  this.setState({ [event.target.id]: event.target.value })
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What would be the common mistake of function being called every time the component renders?',
    answer: 
      <>
        <p>You need to make sure that function is not being called while passing the function as a parameter.</p>
        <pre>
          <div className={styles.appCode}>{`
render() {
  // Wrong: handleClick is called instead of passed as a reference!
  return <button onClick={this.handleClick()}>{'Click Me'}</button>
}
          `}</div>
        </pre>
        <p>Instead, pass the function itself without parenthesis:</p>
        <pre>
          <div className={styles.appCode}>{`
render() {
  // Correct: handleClick is passed as a reference!
  return <button onClick={this.handleClick}>{'Click Me'}</button>
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Is lazy function supports named exports?',
    answer: 
      <>
        <p>No, currently <strong>React.lazy</strong> function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components.
        Let&#39;s take a component file which exports multiple named components,</p>
        <pre>
          <div className={styles.appCode}>{`
// MoreComponents.js
export const SomeComponent = /* ... */;
export const UnusedComponent = /* ... */;
          `}</div>
        </pre>
        <p>and reexport <strong>MoreComponents.js</strong> components in an intermediate file <strong>IntermediateComponent.js</strong></p>
        <pre>
          <div className={styles.appCode}>{`
// IntermediateComponent.js
export { SomeComponent as default } from "./MoreComponents.js";
          `}</div>
        </pre>
        <p>Now you can import the module using lazy function as below,</p>
        <pre>
          <div className={styles.appCode}>{`
import React, { lazy } from "react";
const SomeComponent = lazy(() => import("./IntermediateComponent.js"));
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Why React uses "className" over "class" attribute?',
    answer: 
      <>
        <p>The attribute <strong>class</strong> is a keyword in JavaScript, and JSX is an extension of JavaScript. That&#39;s the principle reason why React uses <strong>className</strong> instead of <strong>class</strong>. Pass a string as the <strong>className</strong> prop.</p>
        <pre>
          <div className={styles.appCode}>{`
render() {
  return <span className={'menu navigation-menu'}>{'Menu'}</span>
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are fragments?',
    answer: 
      <>
        <p>It&#39;s a common pattern or practice in React for a component to return multiple elements. <em>Fragments</em> let you group a list of children without adding extra nodes to the DOM.
        You need to use either <strong>{`<Fragment>`}</strong> or a shorter syntax having empty tag (<strong>{`<></>`}</strong>).</p>
        <p>Below is the example of how to use fragment inside <em>Story</em> component.</p>
        <pre>
          <div className={styles.appCode}>{`
function Story({title, description, date}) {
  return (
      <Fragment>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </Fragment>
    );
}
          `}</div>
        </pre>
        <p>It is also possible to render list of fragments inside a loop with the mandatory <strong>key</strong> attribute supplied.</p>

        <pre>
          <div className={styles.appCode}>{`
function StoryBook() {
  return stories.map(story =>
    <Fragment key={ story.id}>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <p>{story.date}</p>
    </Fragment>
    );
}
          `}</div>
        </pre>
        <p>Ususally you don&#39;t need to use <strong>{`<Fragment>`}</strong> until unless there is a need of <em>key</em> attribute. The usage of shorter syntax looks like below.</p>
        <pre>
          <div className={styles.appCode}>{`
function Story({title, description, date}) {
  return (
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{date}</p>
      </>
    );
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Why fragments are better than container divs?',
    answer: 
      <>
        <p>Below are the list of reasons to prefer fragments over container DOM elements,</p>
        <ol>
          <li>Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.</li>
          <li>Some CSS mechanisms like <em>Flexbox</em> and <em>CSS Grid</em> have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.</li>
          <li>The DOM Inspector is less cluttered.</li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are portals in React?',
    answer: 
      <>
        <p><em>Portal</em> is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</p>
        <div className={styles.appCode}>{`
          ReactDOM.createPortal(child, <span class="hljs-keyword">container</span>);
        `}</div>
        <p>The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are stateless components?',
    answer: 
      <>
        <p>If the behaviour of a component is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the <strong>this</strong> keyword altogether.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are stateful components?',
    answer: 
      <>
        <p>If the behaviour of a component is dependent on the <em>state</em> of the component then it can be termed as stateful component. These <em>stateful components</em> are either function components with hooks or <em>class components</em>.</p>
        <p>Let's take an example of function stateful component which update the state based on click event,</p>
        <pre>
          <div className={styles.appCode}>{`
import React, {useState} from 'react';

const App = (props) => {
const [count, setCount] = useState(0);
handleIncrement() {
  setCount(count+1);
}

return (
  <>
    <button onClick={handleIncrement}>Increment</button>
    <span>Counter: {count}</span>
  </>
  )
}
            `}</div>
        </pre>
        <p>The equivalent class stateful component with a state that gets initialized in the <strong>constructor</strong>.</p>
        <pre>
          <div className={styles.appCode}>{`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement() {
    setState({count: this.state.count + 1})
  }

  render() {
    <>
      <button onClick={() => this.handleIncrement}>Increment</button>
      <span>Count: {count}</span>
    </>
  }
}
            `}</div></pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to apply validation on props in React?',
    answer: 
      <>
        <p>When the application is running in <em>development mode</em>, React will automatically check all props that we set on components to make sure they have <em>correct type</em>. If the type is incorrect, React will generate warning messages in the console. It is disabled in <em>production mode</em> due to performance impact. The mandatory props are defined with <strong>isRequired</strong>.</p>
        <p>The set of predefined prop types:</p>
        <ol>
          <li><strong>PropTypes.number</strong></li>
          <li><strong>PropTypes.string</strong></li>
          <li><strong>PropTypes.array</strong></li>
          <li><strong>PropTypes.object</strong></li>
          <li><strong>PropTypes.func</strong></li>
          <li><strong>PropTypes.node</strong></li>
          <li><strong>PropTypes.element</strong></li>
          <li><strong>PropTypes.bool</strong></li>
          <li><strong>PropTypes.symbol</strong></li>
          <li><strong>PropTypes.any</strong></li>
        </ol>
        <p>We can define <strong>propTypes</strong> for <strong>User</strong> component as below:</p>
        <pre>
          <div className={styles.appCode}>{`
import React from "react";
import PropTypes from "prop-types";

class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };

  render() {
    return (
      <>
        <h1>Welcome, {this.props.name}</h1>
        <h2>Age, {this.props.age}</h2>
      </>
    );
  }
}
            `}</div>
        </pre>
        <p>**Note:** In React v15.5 _PropTypes_ were moved from `React.PropTypes` to `prop-types` library.</p>

        <p>The Equivalent Functional Component:</p>

        <pre>
          <div className={styles.appCode}>{`
import React from "react";
import PropTypes from "prop-types";

function User({ name, age }) {
  return (
    <>
      <h1>Welcome, {name}</h1>
      <h2>Age, {age}</h2>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
            `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the advantages of React?',
    answer: 
      <>
        <p>Below are the list of main advantages of React,</p>
        <ol>
          <li>Increases the application&#39;s performance with <em>Virtual DOM</em>.</li>
          <li>JSX makes code easy to read and write.</li>
          <li>It renders both on client and server side (<em>SSR</em>).</li>
          <li>Easy to integrate with frameworks (Angular, Backbone) since it is only a view library.</li>
          <li>Easy to write unit and integration tests with tools such as Jest.</li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the limitations of React?',
    answer: 
      <>
        <p>Apart from the advantages, there are few limitations of React too,</p>
        <ol>
          <li>React is just a view library, not a full framework.</li>
          <li>There is a learning curve for beginners who are new to web development.</li>
          <li>Integrating React into a traditional MVC framework requires some additional configuration.</li>
          <li>The code complexity increases with inline templating and JSX.</li>
          <li>Too many smaller components leading to over engineering or boilerplate.</li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are error boundaries?',
    answer: 
      <>
        <p><em>Error boundaries</em> are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.</p>
        <p>A class component becomes an error boundary if it defines a new lifecycle method called <strong>componentDidCatch(error, info)</strong> or <strong>static getDerivedStateFromError()</strong>:</p>
        <pre>
          <div className={styles.appCode}>{`
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{"Something went wrong."}</h1>;
    }
    return this.props.children;
  }
}
            `}</div>
        </pre>
        <p>After that use it as a regular component:</p>
        <pre>
          <div className={styles.appCode}>{`
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
            `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How are error boundaries handled in React v15?',
    answer: 
      <>
        <p>React v15 provided very basic support for <em>error boundaries</em> using <strong>unstable_handleError</strong> method. It has been renamed to <strong>componentDidCatch</strong> in React v16.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the recommended ways for static type checking?',
    answer: 
      <>
        <p>Normally we use <em>PropTypes library</em> (<strong>React.PropTypes</strong> moved to a <strong>prop-types</strong> package since React v15.5) for <em>type checking</em> in the React applications. For large code bases, it is recommended to use <em>static type checkers</em> such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the use of react-dom package?',
    answer: 
      <>
        <p>The <strong>react-dom</strong> package provides <em>DOM-specific methods</em> that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:</p>
        <ol>
          <li><strong>render()</strong></li>
          <li><strong>hydrate()</strong></li>
          <li><strong>unmountComponentAtNode()</strong></li>
          <li><strong>findDOMNode()</strong></li>
          <li><strong>createPortal()</strong></li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the purpose of render method of react-dom?',
    answer: 
      <>
        <p>This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.</p>
        <div className={styles.appCode}>{`
          ReactDOM.render(element, container, [callback])
        `}</div>
        <p>If the optional callback is provided, it will be executed after the component is rendered or updated.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is ReactDOMServer?',
    answer: 
      <>
        <p>The <strong>ReactDOMServer</strong> object enables you to render components to static markup (typically used on node server). This object is mainly used for <em>server-side rendering</em> (SSR). The following methods can be used in both the server and browser environments:</p>
        <ol>
          <li><strong>renderToString()</strong></li>
          <li><strong>renderToStaticMarkup()</strong></li>
        </ol>
        <p>For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call <strong>renderToString</strong> to render your root component to a string, which you then send as response.</p>
        <pre><div className={styles.appCode}>{`
// using Express
import { renderToString } from "react-dom/server";
import MyPage from "./MyPage";

app.get("/", (req, res) =&gt; {
  res.write(
    "<span class="hljs-meta">&lt;!DOCTYPE html&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>My Page<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>"
  );
  res.write('<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"content"</span>&gt;</span>');
  res.write(renderToString(<span class="hljs-tag">&lt;<span class="hljs-name">MyPage</span> /&gt;</span>));
  res.write("<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>");
  res.end();
});
        `}</div></pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to use innerHTML in React?',
    answer: 
      <>
        <p>The <strong>dangerouslySetInnerHTML</strong> attribute is React&#39;s replacement for using <strong>innerHTML</strong> in the browser DOM. Just like <strong>innerHTML</strong>, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a <strong>__html</strong> object as key and HTML text as value.</p>
        <p>In this example MyComponent uses <strong>dangerouslySetInnerHTML</strong> attribute for setting HTML markup:</p>
        <pre>
          <div className={styles.appCode}>{`
function createMarkup() {
  return { __html: "First &middot; Second" };
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to use styles in React?',
    answer: 
      <>
        <p>The <div className={styles.appCode}>style</div> attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.</p>
        <pre>
          <div className={styles.appCode}>{`
const divStyle = {
  color: "blue",
  backgroundImage: "url(" + imgUrl + ")",
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
          `}</div>
        </pre>
        <p>Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. <div className={styles.appCode}>node.style.backgroundImage</div>).</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How events are different in React?',
    answer: 
      <>
        <p>Handling events in React elements has some syntactic differences:</p>
        <ol>
          <li>React event handlers are named using camelCase, rather than lowercase.</li>
          <li>With JSX you pass a function as the event handler, rather than a string.</li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What will happen if you use setState() in constructor?',
    answer: 
      <>
        <p>When you use <strong>setState()</strong>, then apart from assigning to the object state React also re-renders the component and all its children. You would get error like this: <em>Can only update a mounted or mounting component.</em> So we need to use <strong>this.state</strong> to initialize variables inside constructor.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the impact of indexes as keys?',
    answer: 
      <>
        <p>Keys should be stable, predictable, and unique so that React can keep track of elements.</p>
        <p>In the below code snippet each element&#39;s key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do.</p>
          <div className={styles.appCode}>{`
              todos.map((todo, index) => <Todo {...todo} key={index} />);
          `}</div>
          <p>If you use element data for unique key, assuming todo.id is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.</p>
          <div className={styles.appCode}>{`
              todos.map((todo) => <Todo {...todo} key={todo.id} />);
          `}</div>
      </>
  },
  {
    topic: 'Core React',
    question: 'Is it good to use setState() in componentWillMount() method?',
    answer: 
      <>
        <p>Yes, it is safe to use <strong>setState()</strong> inside <strong>componentWillMount()</strong> method. But at the same it is recommended to avoid async initialization in <strong>componentWillMount()</strong> lifecycle method. <strong>componentWillMount()</strong> is invoked immediately before mounting occurs. It is called before <strong>render()</strong>, therefore setting state in this method will not trigger a re-render. Avoid introducing any side-effects or subscriptions in this method. We need to make sure async calls for component initialization happened in <strong>componentDidMount()</strong> instead of <strong>componentWillMount()</strong>.</p>
        <pre>
          <div className={styles.appCode}>{`
componentDidMount() {
  axios.get('api/todos')
    .then((result) => {
      this.setState({
        messages: [...result.data]
      })
    })
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What will happen if you use props in initial state?',
    answer: 
      <>
        <p>If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created.</p>
        <p>The below component won&#39;t display the updated input value:</p>
        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      inputValue: this.props.inputValue,
    };
  }

  render() {
    return <div>{this.state.inputValue}</div>;
  }
}
          `}</div>
        </pre>
        <p>Using props inside render method will update the value:</p>

        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      record: [],
    };
  }

  render() {
    return <div>{this.props.inputValue}</div>;
  }
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How do you conditionally render components?',
    answer: 
      <>
        <p>In some cases you want to render different components depending on some state. JSX does not render <strong>false</strong> or <strong>undefined</strong>, so you can use conditional <em>short-circuiting</em> to render a given part of your component only if a certain condition is true.</p>
        <pre>
          <div className={styles.appCode}>{`
const MyComponent = ({ name, address }) => (
  <div>
    <h2>{name}</h2>
    {address && <p>{address}</p>}
  </div>
);
          `}</div>
        </pre>
        <p>If you need an if-else condition then use ternary operator.</p>

        <pre>
          <div className={styles.appCode}>{`
const MyComponent = ({ name, address }) => (
  <div>
    <h2>{name}</h2>
    {address ? <p>{address}</p> : <p>{"Address is not available"}</p>}
  </div>
);
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Why we need to be careful when spreading props on DOM elements?',
    answer: 
      <>
        <p>When we <em>spread props</em> we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with <strong>...rest</strong> operator, so it will add only required props.</p>
        <p>For example,</p>
        <pre>
          <div className={styles.appCode}>{`
const ComponentA = () => (
  <ComponentB isDisplay={true} className={"componentStyle"} />
);

const ComponentB = ({ isDisplay, ...domProps }) => (
  <div {...domProps}>{"ComponentB"}</div>
);
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How you use decorators in React?',
    answer: 
      <>
        <p>You can <em>decorate</em> your <em>class</em> components, which is the same as passing the component into a function. <strong>Decorators</strong> are flexible and readable way of modifying component functionality.</p>
        <pre>
          <div className={styles.appCode}>{`
@setTitle("Profile")
class Profile extends React.Component {
  //....
}

/*
  title is a string that will be set as a document title
  WrappedComponent is what our decorator will receive when
  put directly above a component class as seen in the example above
*/
const setTitle = (title) => (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      document.title = title;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
          `}</div>
        </pre>
        <p><strong>Note:</strong> Decorators are a feature that didn&#39;t make it into ES7, but are currently a <em>stage 2 proposal</em>.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How do you memoize a component?',
    answer: 
      <>
        <p>There are memoize libraries available which can be used on function components.</p>
        <p>For example <strong>moize</strong> library can memoize the component in another component.</p>
        <pre>
          <div className={styles.appCode}>{`
import moize from "moize";
import Component from "./components/Component"; // this module exports a non-memoized component

const MemoizedFoo = moize.react(Component);

const Consumer = () => {
  <div>
    {"I will memoize the following entry:"}
    <MemoizedFoo />
  </div>;
};
          `}</div>
        </pre>
        <p><strong>Update:</strong> Update: Since React v16.6.0, we have a React.memo. It provides a higher order component which memoizes component unless the props change. To use it, simply wrap the component using React.memo before you use it.</p>
        <pre>
          <div className={styles.appCode}>{`
const MemoComponent = React.memo(function MemoComponent(props) {
  /* render using props */
});
OR;
export default React.memo(MyFunctionComponent);
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'How you implement Server Side Rendering or SSR?',
    answer: 
      <>
        <p>React is already equipped to handle rendering on Node servers. A special version of the DOM renderer is available, which follows the same pattern as on the client side.</p>
        <pre>
          <div className={styles.appCode}>{`
import ReactDOMServer from "react-dom/server";
import App from "./App";

ReactDOMServer.renderToString(<App />);
          `}</div>
        </pre>
        <p>This method will output the regular HTML as a string, which can be then placed inside a page body as part of the server response. On the client side, React detects the pre-rendered content and seamlessly picks up where it left off.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to enable production mode in React?',
    answer: 
      <>
        <p>You should use Webpack&#39;s <strong>DefinePlugin</strong> method to set <strong>NODE_ENV</strong> to <strong>production</strong>, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify&#39;s dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is CRA and its benefits?',
    answer: 
      <>
        <p>The <strong>create-react-app</strong> CLI tool allows you to quickly create &amp; run React applications with no configuration step.</p>
        <p>It includes everything we need to build a React app:</p>
        <ol>
          <li>React, JSX, ES6, and Flow syntax support.</li>
          <li>Language extras beyond ES6 like the object spread operator.</li>
          <li>Autoprefixed CSS, so you don’t need -webkit- or other prefixes.</li>
          <li>A fast interactive unit test runner with built-in support for coverage reporting.</li>
          <li>A live development server that warns about common mistakes.</li>
          <li>A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.</li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the lifecycle methods order in mounting?',
    answer: 
      <>
        <p>The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.</p>
        <ol>
          <li><strong>constructor()</strong></li>
          <li><strong>static getDerivedStateFromProps()</strong></li>
          <li><strong>render()</strong></li>
          <li><strong>componentDidMount()</strong></li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the lifecycle methods were deprecated in React v16?',
    answer: 
      <>
        <p>The following lifecycle methods going to be unsafe coding practices and will be more problematic with async rendering.</p>
        <ol>
        <li><strong>componentWillMount()</strong></li>
        <li><strong>componentWillReceiveProps()</strong></li>
        <li><strong>componentWillUpdate()</strong></li>
        </ol>
        <p>Starting with React v16.3 these methods were aliased with <strong>UNSAFE_</strong> prefix, and the unprefixed version will be removed in React v17.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the purpose of getDerivedStateFromProps() lifecycle method?',
    answer: 
      <>
        <p>The new static <strong>getDerivedStateFromProps()</strong> lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or <strong>null</strong> to indicate that the new props do not require any state updates.</p>
        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends React.Component {
  static getDerivedStateFromProps(props, state) {
    // ...
  }
}
          `}</div>
        </pre>
        <p>This lifecycle method along with <strong>componentDidUpdate()</strong> covers all the use cases of <strong>componentWillReceiveProps()</strong>.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the purpose of getSnapshotBeforeUpdate() lifecycle method?',
    answer: 
      <>
        <p>The new <strong>getSnapshotBeforeUpdate()</strong> lifecycle method is called right before DOM updates. The return value from this method will be passed as the third parameter to <strong>componentDidUpdate()</strong>.</p>
        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // ...
  }
}
          `}</div>
        </pre>
        <p>This lifecycle method along with <strong>componentDidUpdate()</strong> covers all the use cases of <strong>componentWillUpdate()</strong>.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Do Hooks replace render props and higher order components?',
    answer: 
      <>
        <p>Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the recommended way for naming components?',
    answer: 
      <>
        <p>It is recommended to name the component by reference instead of using <strong>displayName</strong>.</p>
        <p>Using <strong>displayName</strong> for naming component:</p>
        <pre>
          <div className={styles.appCode}>{`
export default React.createClass({
  displayName: "TodoApp",
  // ...
});
          `}</div>
        </pre>
        <p>The <strong>recommended</strong> approach:</p>
        <pre>
          <div className={styles.appCode}>{`
export default class TodoApp extends React.Component {
  // ...
}
          `}</div>
        </pre>
        <p>also</p>
        <pre>
          <div className={styles.appCode}>{`
const TodoApp = () => {
  //...
};
export default TodoApp;
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the recommended ordering of methods in component class?',
    answer: 
      <>
        <p><em>Recommended</em> ordering of methods from <em>mounting</em> to <em>render stage</em>:</p>
        <ol>
          <li><strong>static</strong> methods</li>
          <li><strong>constructor()</strong></li>
          <li><strong>getChildContext()</strong></li>
          <li><strong>componentWillMount()</strong></li>
          <li><strong>componentDidMount()</strong></li>
          <li><strong>componentWillReceiveProps()</strong></li>
          <li><strong>shouldComponentUpdate()</strong></li>
          <li><strong>componentWillUpdate()</strong></li>
          <li><strong>componentDidUpdate()</strong></li>
          <li><strong>componentWillUnmount()</strong></li>
          <li>click handlers or event handlers like <strong>onClickSubmit()</strong> or <strong>onChangeDescription()</strong></li>
          <li>getter methods for render like <strong>getSelectReason()</strong> or <strong>getFooterContent()</strong></li>
          <li>optional render methods like <strong>renderNavigation()</strong> or <strong>renderProfilePicture()</strong></li>
          <li><strong>render()</strong></li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is a switching component?',
    answer: 
      <>
        <p>A <em>switching component</em> is a component that renders one of many components. We need to use object to map prop values to components.</p>
        <p>For example, a switching component to display different pages based on <strong>page</strong> prop:</p>
        <pre>
          <div className={styles.appCode}>{`
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";

const PAGES = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  contact: ContactPage,
};

const Page = (props) => {
  const Handler = PAGES[props.page] || ContactPage;

  return <Handler {...props} />;
};

// The keys of the PAGES object can be used in the prop types to catch dev-time errors.
Page.propTypes = {
  page: PropTypes.oneOf(Object.keys(PAGES)).isRequired,
};
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Why we need to pass a function to setState()?',
    answer: 
      <>
        <p>The reason behind for this is that <strong>setState()</strong> is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after <strong>setState()</strong> is called. That means you should not rely on the current state when calling <strong>setState()</strong> since you can&#39;t be sure what that state will be. The solution is to pass a function to <strong>setState()</strong>, with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of <strong>setState()</strong>.</p>
        <p>Let&#39;s say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.</p>
        <pre>
          <div className={styles.appCode}>{`
// assuming this.state.count === 0
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
// this.state.count === 1, not 3
          `}</div>
        </pre>
        <p>If we pass a function to <strong>setState()</strong>, the count gets incremented correctly.</p>
        <pre>
          <div className={styles.appCode}>{`
this.setState((prevState, props) => ({
  count: prevState.count + props.increment,
}));
// this.state.count === 3 as expected
          `}</div>
        </pre>        
      </>
  },
  {
    topic: 'Core React',
    question: 'Why function is preferred over object for setState()?',
    answer: 
      <>
        <p>React may batch multiple <strong>setState()</strong> calls into a single update for performance. Because <strong>this.props</strong> and <strong>this.state</strong> may be updated asynchronously, you should not rely on their values for calculating the next state.</p>
        <p>This counter example will fail to update as expected:</p>
        <pre>
          <div className={styles.appCode}>{`
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
          `}</div>
        </pre>
        <p>The preferred approach is to call <strong>setState()</strong> with function rather than object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.</p>
        <pre>
          <div className={styles.appCode}>{`
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment,
}));
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are React Mixins?',
    answer: 
      <>
        <p><em>Mixins</em> are a way to totally separate components to have a common functionality. Mixins <strong>should not be used</strong> and can be replaced with <em>higher-order components</em> or <em>decorators</em>.</p>
        <p>One of the most commonly used mixins is <div className={styles.appCode}>PureRenderMixin</div>. You might be using it in some components to prevent unnecessary re-renders when the props and state are shallowly equal to the previous props and state:</p>
        <p><strong>Mixins are deprecated and should not be used!</strong></p>
        <pre>
          <div className={styles.appCode}>{`
const PureRenderMixin = require("react-addons-pure-render-mixin");

const Button = React.createClass({
  mixins: [PureRenderMixin],
  // ...
});
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Why is isMounted() an anti-pattern and what is the proper solution?',
    answer: 
      <>
        <p>The primary use case for <strong>isMounted()</strong> is to avoid calling <strong>setState()</strong> after a component has been unmounted, because it will emit a warning.</p>
        <pre>
          <div className={styles.appCode}>{`
if (this.isMounted()) {
  this.setState({...})
}
          `}</div>
        </pre>
        <p>Checking <strong>isMounted()</strong> before calling <strong>setState()</strong> does eliminate the warning, but it also defeats the purpose of the warning. Using <strong>isMounted()</strong> is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.</p>
        <p>An optimal solution would be to find places where <strong>setState()</strong> might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in <strong>componentWillUnmount()</strong>, prior to unmounting.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the Pointer Events supported in React?',
    answer: 
      <>
        <p>The following event types are now available in <em>React DOM</em>:</p>
        <ol>
          <li><strong>onPointerDown</strong></li>
          <li><strong>onPointerMove</strong></li>
          <li><strong>onPointerUp</strong></li>
          <li><strong>onPointerCancel</strong></li>
          <li><strong>onGotPointerCapture</strong></li>
          <li><strong>onLostPointerCapture</strong></li>
          <li><strong>onPointerEnter</strong></li>
          <li><strong>onPointerLeave</strong></li>
          <li><strong>onPointerOver</strong></li>
          <li><strong>onPointerOut</strong></li>
        </ol>
      </>
  },
  {
    topic: 'Core React',
    question: 'Why should component names start with capital letter?',
    answer: 
      <>
        <p>If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.</p>
        <pre>
          <div className={styles.appCode}>{`
class SomeComponent extends Component {
  // Code goes here
}
          `}</div>
        </pre>
        <p>You can define component class which name starts with lowercase letter, but when it's imported it should have capital letter. Here lowercase is fine:</p>
        <pre>
          <div className={styles.appCode}>{`
class myComponent extends Component {
  render() {
    return <div />;
  }
}

export default myComponent;
          `}</div>
          </pre>
        <p>While when imported in another file it should start with capital letter:</p>
          <div className={styles.appCode}>{`
            import MyComponent from "./myComponent";
          `}</div>
        <p><strong>What are the exceptions on React component naming?</strong></p>
        <p>The component names should start with an uppercase letter but there are few exceptions to this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names. For example, the below tag can be compiled to a valid component,</p>
        <pre>
          <div className={styles.appCode}>{`
render() {
  return (
    <obj.component/> // React.createElement(obj.component)
  )
}
          `}</div>
        </pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Are custom DOM attributes supported in React v16?',
    answer: 
      <>
        <p>Yes. In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn&#39;t recognize, React would just skip it.</p>
        <p>For example, let&#39;s take a look at the below attribute:</p>
          <div className={styles.appCode}>{`
            <div mycustomattribute={"something"} />
          `}</div>
        <p>Would render an empty div to the DOM with React v15:</p>
        <div className={styles.appCode}>{`
               <div />
        `}</div>     
          <p>In React v16 any unknown attributes will end up in the DOM:</p>
        <div className={styles.appCode}>{`
               <div mycustomattribute="something" />
        `}</div>
        <p>This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the difference between constructor and getInitialState?',
    answer: 
      <>
        <p>You should initialize state in the constructor when using ES6 classes, and <strong>getInitialState()</strong> method when using <strong>React.createClass()</strong>.</p>
        <p><strong>Using ES6 classes:</strong></p>
        <pre>
          <div className={styles.appCode}>{`
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* initial state */
    };
  }
}
          `}</div>
        </pre>
        <p>Using <strong>React.createClass()</strong>:</p>
        <pre>
          <div className={styles.appCode}>{`
const MyComponent = React.createClass({
  getInitialState() {
    return {
      /* initial state */
    };
  },
});
          `}</div>
        </pre>
        <p>Note:<strong>React.createClass()</strong> is deprecated and removed in React v16. Use plain JavaScript classes instead.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Can you force a component to re-render without calling setState?',
    answer: 
      <>
        <p>By default, when your component&#39;s state or props change, your component will re-render. If your <strong>render()</strong> method depends on some other data, you can tell React that the component needs re-rendering by calling <strong>forceUpdate()</strong>.</p>
        <div className={styles.appCode}>{`
        component.forceUpdate(callback);
        `}</div>
        <p>It is recommended to avoid all uses of <strong>forceUpdate()</strong> and only read from <strong>this.props</strong> and <strong>this.state</strong> in <strong>render()</strong>.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the difference between super() and super(props) in React using ES6 classes?',
    answer: 
      <>
        <p>When you want to access <strong>this.props</strong> in <strong>constructor()</strong> then you should pass props to <strong>super()</strong> method.</p>
        <p>Using <strong>super(props)</strong>:</p>
        <pre><div className={styles.appCode}>{`
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props); // { name: 'John', ... }
  }
}
        `}</div></pre>

        <p>Using <strong>super()</strong>:</p>

        <pre><div className={styles.appCode}>{`
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props); // { name: 'John', ... }
  }
}
        `}</div></pre>

        <p>Outside <strong>constructor()</strong> both will display same value for <strong>this.props</strong>.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How to loop inside JSX?',
    answer: 
      <>
        <p>You can simply use <strong>Array.prototype.map</strong> with ES6 <em>arrow function</em> syntax.</p>
        <p>For example, the <strong>items</strong> array of objects is mapped into an array of components:</p>
        
        <pre><div className={styles.appCode}>{`
<tbody>
  {items.map((item) => (
    <SomeComponent key={item.id} name={item.name} />
  ))}
</tbody>
        `}</div></pre>
    
        <p>But you can't iterate using for loop:</p>

        <pre><div className={styles.appCode}>{`
<tbody>
  for (let i = 0; i < items.length; i++) {
    <SomeComponent key={items[i].id} name={items[i].name} />
  }
</tbody>
        `}</div></pre>
        <p>This is because JSX tags are transpiled into <em>function calls</em>, and you can&#39;t use statements inside expressions. This may change thanks to <strong>do</strong> expressions which are <em>stage 1 proposal</em>.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How do you access props in attribute quotes?',
    answer: 
      <>
        <p>React (or JSX) doesn&#39;t support variable interpolation inside an attribute value. The below representation won&#39;t work:</p>        
        <div className={styles.appCode}>{`
          <img className="image" src="images/{this.props.image}" />
        `}</div>      
        <p>But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:</p>
        <div className={styles.appCode}>{`
          <img className="image" src={"images/" + this.props.image} />
        `}</div>       
        <p>Using template strings will also work</p>     
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the main advantages of React.js?',
    answer: 
      <>
        <p>The main advantages of React.js are:</p>
        <ul>
          <li>It enhances the performance of the application</li>
          <li>It can be used from the client-side as well as the server-side</li>
          <li>The readability of code is higher in React.js because of JSX</li>
          <li>It offers easy integration with frameworks such as Angular, Meteor, etc.</li>
          <li>It is easy to write UI test cases with React.js</li>
          <li>If you can include some practical experience demonstrating the advantages of React.</li>js <li>in this React.js interview question, you are likely to impress the recruiter.</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'Describe an event in React.js?',
    answer: 
      <>
      <p>When a user presses a key, clicks the mouse, or performs any action on the machine or when the machine itself triggers an action, these actions are registered as events in React.js.</p>
        <ul>
        <li>In React.js, we use camelCase to name events, instead of the lowercase in HTML</li>
        <li>In React.js, because of JSX, a function is passed as an event handler, instead of the string in HTML</li>
      </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'How do Lists work in React.js?',
    answer: 
      <>
        <p>Lists in React.js are created similar to how they are created in regular Javascript. With lists, data can be displayed in an orderly manner and is useful in displaying menus on websites. For traversing lists, the map() function is used. For example,</p>

        <p>An array of numbers is taken by the map() function and their value is multiplied by 5</p>
        <pre><div className={styles.appCode}>{`
var numbers = [2,4,6,8,10]
const multiplyNums = numbers.map((number => { return (number*5); });
console.log (multiplyNums);

Output: The output in Javascript will be logged in the console. 
The output in the above case is [10, 20, 30, 40, 50]
        `}</div></pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the release date of React?',
    answer: 
      <>
        <p>March 2013</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Can you tell two downsides of React?',
    answer: 
      <>
        <ul>
          <li>It is difficult to integrate with an MVC framework like Rails.</li>
          <li>Users need to have the knowledge about integrating user interface into MVC framework.</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'Explain Flux Concept In React.',
    answer: 
      <>
        <p>It is a new kind of architecture used for client-side web applications. Supports the concept of Unidirectional Data Flow.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is Redux in React?',
    answer: 
      <>
        <p>An open-source JavaScript library for front-end development and acts as a container for JavaScript applications that is used for the applications state management.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Explain the Store feature.',
    answer: 
      <>
        <p>It is a feature of Redux that allows the application to save the entire State at one place. This allows you to get regular updates from the store directly.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'In Redux, what is an action?',
    answer: 
      <>
        <p>In Redux, an action is an object that contains information about an event that has occurred in an application</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the Presentational segment?',
    answer: 
      <>
        <p>It is a component in React that just renders HTML and its only function is presentation markup.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is yield operator in JavaScript?',
    answer: 
      <>
        <p>The yield operator is used to pause and resume a generator function.</p>
        <pre><div className={styles.appCode}>{`
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// Expected output: 0

console.log(iterator.next().value);
// Expected output: 1
        `}</div></pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'List some animation packages in React?',
    answer: 
      <>
        <ul>
          <li>React Motion</li>
          <li>React Transition Group</li>
          <li>React Spring</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is Jest?',
    answer: 
      <>
        <p>Jest is a JavaScript framework created by Facebook and is based on Jasmine. Its feature-rich API helps to get results quickly.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the dispatcher?',
    answer: 
      <>
       <p>It is the central hub of data flow in a Flux application that acts as a directory of callbacks.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Name two differences between Redux and Flux',
    answer: 
      <>
        <ul>
          <li>Unlike Flux, Redux does not use a dispatcher, but instead it uses pure functions to define data mutating functions. It still uses stores and actions, which can be tied directly to React components.</li>
          <li>One big difference with Redux and Flux is the concept of middleware. Redux added the idea of middleware that we can use to manipulate actions as we receive them, both coming in and heading out of our application. </li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is the use of arrow function in React?',
    answer: 
      <>
        <ul>
        <li>Arrow functions are much simpler to write and understand than traditional function expressions. This can make your code more readable and easier to debug.</li>
        <li>Arrow functions have no binding of the keyword <strong>this</strong> meaning that <strong>this</strong> inside an arrow function will refer to the one where it was created rather than where it was called from.</li>
        <li>Arrow functions do not create a new scope, so they can be used in ReactJS without polluting the global scope.</li>
        <li>Arrow functions can be used as arguments to other functions, which can make your code more flexible and expressive.</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'List React component lifecycles',
    answer: 
      <>
        <ul>
          <li>A component mounts when it is added to the screen.</li>
          <li>A component updates when it receives new props or state, usually in response to an interaction.</li>
          <li>A component unmounts when it is removed from the screen.</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is Webpack?',
    answer: 
      <>
        <p>Webpack is a command line tool used to bundle different code files and assets into single large file. It helps minimize Javascript, CSS files, images, etc.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is Babel?',
    answer: 
      <>
        <p>It is an open-source JavaScript compiler that converts the latest JavaScript versions to old ones.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How are ReactJS and React Native different?',
    answer: 
      <>
        <ul>
          <li>ReactJS is a front end open-source JavaScript library for UIs, React Native is an open-source mobile framework for platforms such as Android and iOS.</li>
          <li>React uses HTML, CSS and JavaScript to create interactive user interfaces. React Native, on the other hand, uses native UI components and APIs to create mobile apps.</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'How are ReactJS and React Native similar?',
    answer: 
      <>
        <ul>
          <li>They both use the same core React library.</li>
          <li>They both use the same component-based architecture, which means that developers can break down their applications into smaller, more manageable pieces.</li>
          <li>They both use JavaScript as their programming language, and JSX as their templating language.</li>
          <li>Both React DOM and React Native use virtual DOMs to render their applications.</li>
          <li>Both React DOM and React Native also use the same styling techniques and components, through React Native's is a bit different.</li>
          <li>They both utilize Chrome DevTools for debugging applications.</li>
          <li>They use the same JavaScript APIs.</li>
          <li>Both were developed in Meta. React was developed by a software engineer named Jordan Walke while React Native was born from a hackathon.</li>
       </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'Can browsers understand JSX code? Explain.',
    answer: 
      <>
        <p> No. JSX is a combination of HTML and JavaScript, and browsers are unable to read it.  A transpiler is needed to convert JSX to JavaScript. Web browsers are built to understand and read original JavaScript or JS objects. Since JSX is not a regular JS object, web browsers are unable to read it. For web browsers to read JSX, it must be made compatible by first converting it into regular JS objects. This is achieved by using a transcompiler, such as Babel. While this may seem like a simple ReactJS interview question, knowing answers to such questions can be critical.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is strict mode?',
    answer: 
      <>
        <p>It highlights any potential problems in the application. It achieves this by encapsulating a section of your application as a component. While it does not show any visible element in the development mode (does not impact the performance in the production mode as well), it does give warnings.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Can the values of props be updated?',
    answer: 
      <>
        <p>No, as props are immutable and top-down. This signifies that parent can transmit prop values to a child but the latter cannot modify them.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Can I use web components in React application?',
    answer: 
      <>
        <p>Web components, encapsulated HTML tags for web development, are versatile, framework-agnostic elements native to HTML, usable seamlessly in various environments like React and Angular.</p>
        <p>The web components specification offers a way to create reusable custom HTML elements with three inbuilt technologies: custom elements, shadow DOM and HTML templates.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is prop-types library?',
    answer: 
      <>
        <p>Runtime type checking for React props and similar objects.</p>
        <p>You can use prop-types to document the intended types of properties passed to components. React will check props passed to your components against those definitions, and warn in development if they do not match.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are hooks?',
    answer: 
      <>
        <p>Hooks are features that allow you to “hook into” the features of React state and lifecycle from function components. Hooks do not function inside classes. Without classes, they let you use React. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is windowing?',
    answer: 
      <>
        <p>Windowing is a technique that ensures that our lists only render items visible in the viewport.</p>
        <p>As the user scrolls, we calculate which elements we should display based on the position of the scrollbar and then add and remove those elements as they enter and exit the viewport.</p>
        <p>Rendering DOM elements is one of the most expensive operations web applications perform, and with windowing, we ensure that we render them only when needed.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are some options for handling asynchronous calls in Redux?',
    answer: 
      <>
        <ul>
          <li>Redux Promise</li>
          <li>Redux Saga</li>
          <li>Redux Thunk</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is one-way data flow in React?',
    answer: 
      <>
        <p>React uses unidirectional data flow which means you can transfer data from parent to child and not the other way around.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Explain Concurrent Rendering.',
    answer: 
      <>
        <p>Concurrent rendering is a feature of React that enables components to render, update, and respond to user input simultaneously.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'Are concurrent mode and async mode different?',
    answer: 
      <>
        <p>Both refer to the same thing. Previously concurrent Mode being referred to as "Async Mode" by React team. The name has been changed to highlight React's ability to perform work on different priority levels.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are the components in React?',
    answer: 
      <>
        <p>In a React application, they are independent and reusable bits of code that can be processed separately. A single app may therefore contain multiple components.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is MobX?',
    answer: 
      <>
        <p>It is a simple, scalable, and battle-tested state management solution.It is based on Reactive programming principles.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What does the eslint plugin for hooks do?',
    answer: 
      <>
        <p>It enforces the Rules of Hooks. Precisely, it is a static code analysis tool for finding out faulty patterns in JavaScript code.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What is render hijacking in React?',
    answer: 
      <>
        <p>It is the ability to control what one component will output from another component. Here you wrap a component with a higher order component.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'How can you pass numbers to the React component?',
    answer: 
      <>
        <p>You can pass numbers to React components using curly braces({ }) where strings use quotes</p>
          <div className={styles.appCode}>{`
            <button value={30}>
          `}</div>
      </>
  },
  {
    topic: 'Core React',
    question: 'Explain React memo function.',
    answer: 
      <>
        <p>memo lets you skip re-rendering a component when its props are unchanged.</p>
        <pre><div className={styles.appCode}>{`
import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // ...
});
        `} </div></pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'What are default props?',
    answer: 
      <>
        <p>It is a React component property to set default values for the props argument. They are used for undefined props only and not for null props.</p>
        <pre><div className={styles.appCode}>{`
const ChildComponent = (props) => {
  return <p>Hello, {props.name}!</p>;
};

ChildComponent.defaultProps = {
  name: "Guest",
};
        `} </div></pre>
      </>
  },
  {
    topic: 'Core React',
    question: 'Is it necessary for keys to be globally unique?',
    answer: 
      <>
        <p>While you can use the same keys for two different arrays, they don't need to be globally unique.</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'What methods are invoked during error han',
    answer: 
      <>
        <ul>
          <li><strong>getDerivedStateFromError()</strong>: This lifecycle method renders a fallback UI after an error is thrown. It is called during the render phase, so side effects are not permitted</li>
          <li><strong>componentDidCatch()</strong>: This method is used for logging error information. It is called during the commit phase, so side effects are permitted</li>
        </ul>
      </>
  },
  {
    topic: 'Core React',
    question: 'How do you use of the unmountComponentAtNode method?',
    answer: 
      <>
        <p>The unmountComponentAtNode method in React is used to unmount a React component from the DOM and clean up its event handlers and state. This method is often used when cleaning up the DOM after a React component has been removed or replaced.</p>
        <p>Note: In React 18, unmountComponentAtNode was replaced by root.unmount().</p>
      </>
  },
  {
    topic: 'Core React',
    question: 'When component props defaults to true?',
    answer: 
      <>
        <p>When you pass no value for a prop.  For example, these two are equivalent:</p>
        <div className={styles.appCode}>{`
          <button autocomple >
        `} </div><br/>
        <div className={styles.appCode}>{`
          <button autocomple={true} >
        `} </div>
      </>
  },
  {
    topic: 'Core React',
    question: '',
    answer: 
      <>
      
      </>
  },
]