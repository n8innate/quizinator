import styles from "../../App.module.scss";
import { IQuestions } from "../../types/types";

export const reactQuestions: IQuestions[] = [
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is React?",
		answer: (
			<>
				<p>
					React(aka React.js or ReactJS) is an{" "}
					<strong>open-source front-end JavaScript library</strong> that is used
					for building composable user interfaces, especially for single-page
					applications. It is used for handling view layer for web and mobile
					apps based on components in a declarative approach.{" "}
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is the history behind React?",
		answer: (
			<>
				<p>
					{" "}
					The history of ReactJS started in 2010 with the creation of{" "}
					<strong>XHP</strong>. XHP is a PHP extension which improved the syntax
					of the language such that XML document fragments become valid PHP
					expressions and the primary purpose was used to create custom and
					reusable HTML elements.{" "}
				</p>
				<p>
					{" "}
					The main principle of this extension was to make front-end code easier
					to understand and to help avoid cross-site scripting attacks. The
					project was successful to prevent the malicious content submitted by
					the scrubbing user.
				</p>
				<p>
					{" "}
					But there was a different problem with XHP in which dynamic web
					applications require many roundtrips to the server, and XHP did not
					solve this problem. Also, the whole UI was re-rendered for small
					change in the application. Later, the initial prototype of React is
					created with the name <strong>FaxJ</strong> by Jordan inspired from
					XHP. Finally after sometime React has been introduced as a new library
					into JavaScript world.
				</p>
				<p>
					{" "}
					<strong>Note:</strong> JSX comes from the idea of XHP
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What are the major features of React?",
		answer: (
			<>
				<p>The major features of React are:</p>
				<ul>
					<li>
						Uses <strong>JSX</strong> syntax, a syntax extension of JS that
						allows developers to write HTML in their JS code.
					</li>
					<li>
						It uses <strong>Virtual DOM</strong> instead of Real DOM considering
						that Real DOM manipulations are expensive.
					</li>
					<li>
						Supports <strong>server-side rendering</strong> which is useful for
						Search Engine Optimizations(SEO).
					</li>
					<li>
						Follows <strong>Unidirectional or one-way</strong> data flow or data
						binding.
					</li>
					<li>
						Uses <strong>reusable/composable</strong> UI components to develop
						the view.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is JSX?",
		answer: (
			<>
				<p>
					<em>JSX</em> stands for <em>JavaScript XML</em> and it is an XML-like
					syntax extension to ECMAScript. Basically it just provides the
					syntactic sugar for the{" "}
					<strong>React.createElement(type, props, ...children)</strong>{" "}
					function, giving us expressiveness of JavaScript along with HTML like
					template syntax.
				</p>
				<p>
					In the example below, the text inside <strong>&lt;h1&gt;</strong> tag
					is returned as JavaScript function to the render function.
				</p>
				<pre>
					<div className={styles.appCode}>{`
export default function App() {
  return (
      <h1 className="greeting">{"Hello, this is a JSX Code!"}</h1>
  );
}
          `}</div>
				</pre>
				<p>
					If you don't use JSX syntax then the respective JavaScript code should
					be written as below,
				</p>
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
				<p>
					<strong>Note:</strong> JSX is stricter than HTML
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is the difference between an Element and a Component?",
		answer: (
			<>
				<p>
					An <em>Element</em> is a plain object describing what you want to
					appear on the screen in terms of the DOM nodes or other components.{" "}
					<em>Elements</em> can contain other <em>Elements</em> in their props.
					Creating a React element is cheap. Once an element is created, it
					cannot be mutated.
				</p>
				<p>
					The JavaScript representation(Without JSX) of React Element would be
					as follows:
				</p>
				<div className={styles.appCode}>{`
            const element = React.createElement("div", { id: "login-btn" }, "Login");
          `}</div>
				<p>and this element can be simiplified using JSX</p>
				<div className={styles.appCode}>{`
            const element = <div id="login-btn">Login</div>;
          `}</div>
				<p>
					The above <strong>React.createElement()</strong> function returns an
					object as below:
				</p>
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
				<p>
					Whereas a <strong>component</strong> can be declared in several
					different ways. It can be a class with a render() method or it can be
					defined as a function. In either case, it takes props as an input, and
					returns a JSX tree as the output:
				</p>
				<pre>
					<div className={styles.appCode}>{`
const Button = ({ onLogin }) => (
  <div id="login-btn" onClick={onLogin}>Login</div>
);
          `}</div>
				</pre>
				<p>
					Then JSX gets transpiled to a <strong>React.createElement()</strong>{" "}
					function tree:
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "How do you create components in React?",
		answer: (
			<>
				<p>
					Components are the building blocks of creating User Interfaces(UI) in
					React. There are two possible ways to create a component.
				</p>
				<ol>
					<li>
						<p>
							<strong>Function Components:</strong> This is considered the
							standard practice for creating a component. These are pure
							JavaScript functions that accept props object as the first
							parameter and return React elements to render the output:
						</p>
						<pre>
							<div className={styles.appCode}>{`
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
              `}</div>
						</pre>
					</li>
					<li>
						<p>
							<strong>Class Components:</strong> You can also use ES6 class to
							define a component, though this is considered outdated in
							component design. It is helpful to be familiar with class
							components, because they often appear in legacy code. The above
							function component can be written as a class component:
						</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are Pure Components?",
		answer: (
			<>
				<p>
					Pure components are the class components which skip rerenders for the
					same state and props.{" "}
					<strong>
						Since use of class components is discouraged in favor of functional
						components, pure components are no longer recommended for new code.
					</strong>{" "}
					In function components, you can achieve these pure components through
					memoized <strong>React.memo()</strong> API wrapping around the
					component. This API prevents unnecessary re-renders by comparing the
					previous props and new props using shallow comparison. So it will be
					helpful for performance optimizations.{" "}
				</p>
				<p>
					But at the same time, it won&#39;t compare the previous state with the
					current state because function component itself prevents the
					unnecessary rendering by default when you set the same state again.
				</p>
				<p>
					The syntactic representation of memoized components looks like below,
				</p>
				<div className={styles.appCode}>{`
            const MemoizedComponent = memo(SomeComponent, arePropsEqual?);
          `}</div>
				<p>
					Below is the example of how child component(i.e., EmployeeProfile)
					prevents re-renders for the same props passed by parent
					component(i.e.,EmployeeRegForm).
				</p>
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
				<p>
					In the above code, the email prop has not been passed to child
					component. So there won&#39;t be any re-renders for email prop change.
				</p>
				<p>
					In class components, the components extending{" "}
					<em>
						<strong>React.PureComponent</strong>
					</em>{" "}
					instead of{" "}
					<em>
						<strong>React.Component</strong>
					</em>{" "}
					become the pure components. When props or state changes,{" "}
					<em>PureComponent</em> will do a shallow comparison on both props and
					state by invoking <strong>shouldComponentUpdate()</strong> lifecycle
					method.{" "}
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is state in React?",
		answer: (
			<>
				<p>
					<em>State</em> of a component is an object that holds some information
					that may change over the lifetime of the component. The important
					point is whenever the state object changes, the component re-renders.
					It is always recommended to make our state as simple as possible and
					minimize the number of stateful components.
				</p>
				<p>
					State is similar to props, but it is private and fully controlled by
					the component ,i.e., it is not accessible to any other component till
					the owner component decides to pass it.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What are props in React?",
		answer: (
			<>
				<p>
					<em>Props</em> are inputs to components. They are single values or
					objects containing a set of values that are passed to components on
					creation similar to HTML-tag attributes. Here, the data is passed down
					from a parent component to a child component.
				</p>
				<p>
					The primary purpose of props in React is to provide following
					component functionality:
				</p>
				<ol>
					<li>Pass custom data to your component.</li>
					<li>Trigger state changes.</li>
				</ol>
				<p>
					For example, let us create an element with <strong>reactProp</strong>{" "}
					property:
				</p>
				<div className={styles.appCode}>{`
            <Element reactProp={"1"} />
          `}</div>
				<p>
					This reactProp (or whatever you came up with) attribute name then
					becomes a property attached to React's native props object which
					originally already exists on all components created using React
					library.
				</p>
				<div className={styles.appCode}>{`
            props.reactProp
          `}</div>
				<p>
					For example, the usage of props in function component looks like
					below:
				</p>

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
				<p>
					The properties from props object can be accessed directly using
					destructing feature from ES6 (ECMAScript 2015). The above child
					component can be simplified like below.
				</p>

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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is the difference between state and props?",
		answer: (
			<>
				<p>
					In React, both <strong>state</strong> and <strong>props</strong> are
					plain JavaScript objects and used to manage the data of a component,
					but they are used in different ways and have different
					characteristics.
					<strong>state</strong> is managed by the component itself and can be
					updated using the <strong>setState()</strong> function. Unlike props,
					state can be modified by the component and is used to manage the
					internal state of the component. Changes in the state trigger a
					re-render of the component and its children.
					<strong>props</strong> (short for &quot;properties&quot;) are passed
					to a component by its parent component and are{" "}
					<strong>read-only</strong>, meaning that they cannot be modified by
					the component itself. props can be used to configure the behavior of a
					component and to pass data between components.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Why should we not update the state directly?",
		answer: (
			<>
				<p>
					If you try to update the state directly then it won&#39;t re-render
					the component.
				</p>

				<pre>
					<div className={styles.appCode}>{`
//Wrong
this.state.message = "Hello world";
          `}</div>
				</pre>
				<p>
					Instead use <strong>setState()</strong> method. It schedules an update
					to a component&#39;s state object. When state changes, the component
					responds by re-rendering.
				</p>
				<pre>
					<div className={styles.appCode}>{`
//Correct
this.setState({ message: "Hello World" });
          `}</div>
				</pre>
				<p>
					<strong>Note:</strong> You can directly assign to the state object
					either in <em>constructor</em> or using latest javascript&#39;s class
					field declaration syntax.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is the difference between HTML and React event handling?",
		answer: (
			<>
				<p>
					Below are some of the main differences between HTML and React event
					handling,
				</p>
				<ol>
					<li>
						<p>
							In HTML, the event name usually represents in <em>lowercase</em>{" "}
							as a convention:
						</p>
						<div className={styles.appCode}>{`
              <button onclick="activateLasers()"></button>
            `}</div>
						<p>
							Whereas in React it follows <em>camelCase</em> convention:
						</p>
						<div className={styles.appCode}>{`
              <button onClick={activateLasers}>
            `}</div>
					</li>
					<li>
						<p>
							In HTML, you can return <strong>false</strong> to prevent default
							behavior:
						</p>
						<pre>
							<div className={styles.appCode}>{`
  <a
    href="#"
    onclick='console.log("The link was clicked."); return false;'
  />
            `}</div>
						</pre>
						<p>
							Whereas in React you must call <strong>preventDefault()</strong>{" "}
							explicitly:
						</p>
						<pre>
							<div className={styles.appCode}>{`
  function handleClick(event) {
    event.preventDefault();
    console.log("The link was clicked.");
  }
                `}</div>
						</pre>
					</li>
					<li>
						<p>
							In HTML, you need to invoke the function by appending{" "}
							<strong>()</strong>. Whereas in React you should not append{" "}
							<strong>()</strong> with the function name. (refer
							&quot;activateLasers&quot; function in the first point for
							example)
						</p>
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are synthetic events in React?",
		answer: (
			<>
				<p>
					Your event handlers will receive a React event object. It is also
					sometimes known as a “synthetic event”.
				</p>
				<pre>
					<div className={styles.appCode}>{`
<button onClick={e => {
  console.log(e); // React event object
}} />
          `}</div>
				</pre>

				<p>
					It conforms to the same standard as the underlying DOM events, but
					fixes some browser inconsistencies.
				</p>
				<p>
					Some React events do not map directly to the browser native events.
					For example in <strong>onMouseLeave</strong>,{" "}
					<strong>e.nativeEvent</strong> will point to a{" "}
					<strong>mouseout</strong> event. The specific mapping is not part of
					the public API and may change in the future. If you need the
					underlying browser event for some reason, read it from{" "}
					<strong>e.nativeEvent</strong>.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are inline conditional expressions?",
		answer: (
			<>
				<p>
					You can use either <em>if statements</em> or{" "}
					<em>ternary expressions</em> which are available from JS to
					conditionally render expressions. Apart from these approaches, you can
					also embed any expressions in JSX by wrapping them in curly braces and
					then followed by JS logical operator <strong>&amp;&amp;</strong>.
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question:
			'What is "key" prop and what is the benefit of using it in arrays of elements?',
		answer: (
			<>
				<p>
					A <strong>key</strong> is a special attribute you{" "}
					<strong>should</strong> include when mapping over arrays to render
					data. <em>Key</em> prop helps React identify which items have changed,
					are added, or are removed.
				</p>
				<p>
					Keys should be unique among its siblings. Most often we use ID from
					our data as <em>key</em>:
				</p>
				<div className={styles.appCode}>{`
            const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
          `}</div>
				<p>
					When you don't have stable IDs for rendered items, you may use the
					item index as a key as a last resort:
				</p>
				<pre>
					<div className={styles.appCode}>{`
const todoItems = todos.map((todo, index) => (
  <li key={index}>{todo.text}</li>
));
          `}</div>
				</pre>
				<p>
					<strong>Note:</strong>
				</p>
				<ol>
					<li>
						Using <em>indexes</em> for <em>keys</em> is{" "}
						<strong>not recommended</strong> if the order of items may change.
						This can negatively impact performance and may cause issues with
						component state.
					</li>
					<li>
						If you extract list item as separate component then apply{" "}
						<em>keys</em> on list component instead of <strong>li</strong> tag.
					</li>
					<li>
						There will be a warning message in the console if the{" "}
						<strong>key</strong> prop is not present on list items.
					</li>
					<li>
						The key attribute accepts either string or number and internally
						convert it as string type.
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are refs?",
		answer: (
			<>
				<p>
					The <em>ref</em> is used to return a reference to the element and are
					used when you want a component to “remember” some information, but you
					do not want that information to trigger new renders. They{" "}
					<em>should be avoided</em> in most cases, however, they can be useful
					when you need an "escape hatch" that gives direct access to the DOM
					element or an instance of a component.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How are refs and state different? (4)",
		answer: (
			<>
				<p>
					Refs seem less “strict” than state—you can mutate them instead of
					always having to use a state setting function, for instance. But in
					most cases, you will want to use state. Refs are an “escape hatch” you
					will not need often. Here is how state and refs compare:
				</p>
				<table>
					<thead>
						<tr>
							<th>refs</th>
							<th>state</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								useRef(initialValue) returns {`{ current: initialValue }`}
							</td>
							<td>
								useState(initialValue) returns the current value of a state
								variable and a state setter function ( [value, setValue])
							</td>
						</tr>
						<tr>
							<td>Doesn’t trigger re-render when you change it.</td>
							<td>Triggers re-render when you change it.</td>
						</tr>
						<tr>
							<td>
								Mutable—you can modify and update current’s value outside of the
								rendering process.
							</td>
							<td>
								”Immutable”—you must use the state setting function to modify
								state variables to queue a re-render.
							</td>
						</tr>
						<tr>
							<td>
								You shouldn’t read (or write) the current value during
								rendering.
							</td>
							<td>
								You can read state at any time. However, each render has its own
								snapshot of state which does not change.
							</td>
						</tr>
					</tbody>
				</table>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How do you create refs?",
		answer: (
			<>
				<pre>
					<div className={styles.appCode}>{`
import { useRef } from 'react';

export const myApp = () => {
  const ref = useRef(0);
  return (
    ...
  );
};
        `}</div>
				</pre>
				<p>
					<strong>useRef</strong> then returns an object like this:
				</p>
				<div
					className={styles.appCode}
				>{`{ current: 0 // The value you passed to useRef }`}</div>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are forward refs?",
		answer: (
			<>
				<p>In React forward refs, allow the component to pass down a ref to a child component. This feature allows the parent component to access the child component’s DOM node or React component instance.</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Why are String Refs legacy?",
		answer: (
			<>
				<p>
					String refs are not recommended because{" "}
					<em>string refs have below issues</em>, and are considered legacy.
					String refs were <strong>removed in React v16</strong>.
				</p>
				<ol>
					<li>
						They{" "}
						<em>force React to keep track of currently executing component</em>.
						This is problematic because it makes react module stateful, and thus
						causes weird errors when react module is duplicated in the bundle.
					</li>
					<li>
						They are <em>not composable</em> — if a library puts a ref on the
						passed child, the user can&#39;t put another ref on it. Callback
						refs are perfectly composable.
					</li>
					<li>
						They <em>don&#39;t work with static analysis</em> like Flow. Flow
						can&#39;t guess the magic that framework does to make the string ref
						appear on <strong>this.refs</strong>, as well as its type (which
						could be different). Callback refs are friendlier to static
						analysis.
					</li>
					<li>
						<p>
							It doesn&#39;t work as most people would expect with the
							&quot;render callback&quot; pattern (e.g.
							<strong>{` <DataGrid renderRow={this.renderRow} />`}</strong>)
						</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is Virtual DOM?",
		answer: (
			<>
				<p>
					The <em>Virtual DOM</em> (VDOM) is an in-memory representation of{" "}
					<em>Real DOM</em>. The representation of a UI is kept in memory and
					synced with the &quot;real&quot; DOM. It&#39;s a step that happens
					between the render function being called and the displaying of
					elements on the screen. This entire process is called{" "}
					<em>reconciliation</em>.
				</p>
			</>
		),
	},
	{
		rating: 1,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "How does the Virtual DOM?",
		answer: (
			<>
				<p>
					The <em>Virtual DOM</em> works in three simple steps.
				</p>
				<ol>
					<li>
						<p>
							Whenever any underlying data changes, the entire UI is re-rendered
							in Virtual DOM representation.
						</p>
					</li>
					<li>
						<p>
							Then the difference between the previous DOM representation and
							the new one is calculated.
						</p>
					</li>
					<li>
						<p>
							Once the calculations are done, the real DOM will be updated with
							only the things that have actually changed.
						</p>
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: " What is the difference between Shadow DOM and Virtual DOM?",
		answer: (
			<>
				<p>
					The <em>Shadow DOM</em> is a browser technology designed primarily for
					scoping variables and CSS in <em>web components</em>. The{" "}
					<em>Virtual DOM</em> is a concept implemented by libraries in
					JavaScript on top of browser APIs.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is React Fiber?",
		answer: (
			<>
				<p>
					Fiber is the <em>reconciliation</em> engine or reimplementation of
					core algorithm released in React v16. The goal of React Fiber is to
					increase its suitability for areas like animation, layout, gestures,
					ability to pause, abort, or reuse work and assign priority to
					different types of updates; and new concurrency primitives.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is the main goal of React Fiber?",
		answer: (
			<>
				<p>
					The goal of <em>React Fiber</em> is to increase its suitability for
					areas like animation, layout, and gestures. Its headline feature is{" "}
					<strong>incremental rendering</strong>: the ability to split rendering
					work into chunks and spread it out over multiple frames.
				</p>
				<p>Its main goals are:</p>
				<ol>
					<li>
						<strong>Improved performance:</strong> React Fiber is aimed at
						improving the perceived performance for complex React applications.
						It does so by allowing React to break the limits of the call stack.
						This lets it pause or start rendering work whenever required
					</li>
					<li>
						<strong>Better suitability for advanced UI:</strong> React Fiber
						also increases the suitability of the React library to create
						animations, layouts, and gestures.
					</li>
					<li>
						<strong>Control over the "priority" of work:</strong> Through its
						feature of incremental rendering, React Fiber lets developers split
						rendering work into smaller chunks and distribute it over multiple
						frames. This allows users to essentially control the "priority" of
						work. For example, React Fiber could help you prioritise functions
						that originate from user actions while delaying logic of
						less-important background or offscreen functions to avoid frame rate
						drops.
					</li>
					<li>
						<strong>More fluid experience:</strong> By breaking up the work into
						smaller chunks that can be paused, resumed, or aborted based on a
						set priority order, React Fiber helps apps deliver a more fluid
						experience. Fiber lets React fine-tune the rendering to ensure that
						the most common use-cases (or) the most important updates are
						computed at the earliest. Specifically, it helps improve the speed
						of rendering components at start-up, as they could be made available
						to the browser before the entire bundle finishes downloading.
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question:
			"What is the difference between a controlled and uncontrolled component in React?",
		answer: (
			<>
				<p>
					In React, a controlled component is a component that has its state
					controlled by the parent component. The parent component passes the
					state as props to the controlled component and also handles any
					changes to the state via callback functions. The controlled component
					only renders the received props and does not have its own state.
				</p>
				<p>
					An uncontrolled component, on the other hand, maintains its own
					internal state and updates it using DOM events. The component directly
					updates the DOM and does not rely on the parent component to pass and
					update the state.
				</p>
				<p>
					An example of a controlled component is a form input that receives its
					value from the parent component as a prop and updates the parent
					component’s state via a callback function when the input is changed.
					An uncontrolled component would be a form input that maintains its own
					internal state and updates the value directly when the input is
					changed, without the need for a callback function.
				</p>
				<p>
					In general, controlled components are considered to be more
					predictable and easier to debug than uncontrolled components. They
					also make it easier to implement complex validation and error
					handling.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What is the difference between createElement and cloneElement?",
		answer: (
			<>
				<p>
					JSX elements will be transpiled to{" "}
					<strong>React.createElement()</strong> functions to create React
					elements which are going to be used for the object representation of
					UI. Whereas <strong>cloneElement</strong> is used to clone an element
					and pass it new props.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is Lifting State Up in React?",
		answer: (
			<>
				<p>
					When several components need to share the same changing data then it
					is recommended to <em>lift the shared state up</em> to their closest
					common ancestor. That means if two child components share the same
					data from its parent, then move the state to parent instead of
					maintaining local state in both of the child components.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are the differnces between component vs effect lifecycles?",
		answer: (
			<>
				<p>
					The <strong>component</strong> lifecycle has three distinct lifecycle
					phases:
				</p>
				<li>
					A component <strong>mounts</strong> when it’s added to the screen.
				</li>
				<li>
					A component <strong>updates</strong> when it receives new props or
					state, usually in response to an interaction.
				</li>
				<li>
					A component <strong>unmounts</strong> when it’s removed from the
					screen.
				</li>

				<p>
					Think about each <strong>Effect</strong> independently from your{" "}
					<strong>component's</strong> lifecycle. An <strong>Effect</strong>{" "}
					describes how to synchronize an external system to the current props
					and state. As your code changes, synchronization will need to happen
					more or less often.
				</p>
				<p>
					Each <strong>Effect</strong> describes a separate synchronization
					process that can start and stop.
				</p>
				<p>
					When you write and read <strong>Effects</strong>, think from each
					individual <strong>Effect's</strong> perspective (how to start and
					stop synchronization) rather than from the{" "}
					<strong>component's</strong> perspective (how it mounts, updates, or
					unmounts).
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How should you think of effect lifecycles? (7)",
		answer: (
			<>
				<ul>
					<li>
						Each Effect has a separate lifecycle from the surrounding component.
					</li>
					<li>
						Each Effect describes a separate synchronization process that can
						start and stop.
					</li>
					<li>
						When you write and read Effects, think from each individual Effect’s
						perspective (how to start and stop synchronization) rather than from
						the component’s perspective (how it mounts, updates, or unmounts).
					</li>
					<li>Values declared inside the component body are “reactive”.</li>
					<li>
						Reactive values should re-synchronize the Effect because they can
						change over time.
					</li>
					<li>
						The linter verifies that all reactive values used inside the Effect
						are specified as dependencies.
					</li>
					<li>
						All errors flagged by the linter are legitimate. There’s always a
						way to fix the code to not break the rules.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are Higher-Order Components?",
		answer: (
			<>
				<p>
					<strong>
						Note:Higher-order components are not commonly used in modern React
						code and are considered legacy.
					</strong>
				</p>
				<p>
					In React, a Higher Order Component (HOC) design is used to reuse
					component logic. It is a function that accepts a component as an
					argument and outputs a new component that extends the capabilities of
					the input component. Without having to write duplicate code, HOCs can
					be used to add shared features, like authentication and data
					retrieval, to various components. All of the original component’s
					props as well as any extra props supplied to the HOC are transferred
					to the wrapped component. HOCs are a potent method for composing and
					enhancing pre-existing components without changing their original
					source code.
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is context?",
		answer: (
			<>
				<p>
					In React, context is a way to share data that is considered “global”
					for a component tree. It allows you to pass data through the component
					tree without having to pass props down manually at every level.
				</p>
				<p>
					A component that needs to access the context data can consume it by
					using the useContext hook or the Consumer component. To make the
					context available to a component, a parent component needs to provide
					it using the Provider component.
				</p>
				<p>
					Context is often used for data that is required by many components in
					an application, such as the currently authenticated user, the current
					locale, or the theme.
				</p>
				<p>
					A component that needs to access the context data can consume it by
					using the useContext hook or the Consumer component. To make the
					context available to a component, a parent component needs to provide
					it using the Provider component.
				</p>
				<div className={styles.appCode}>{`
            const { Provider, Consumer } = React.createContext(defaultValue);
          `}</div>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is a children prop?",
		answer: (
			<>
				<p>
					<em>Children</em> is a prop (<strong>this.props.children</strong>)
					that allows you to pass components as data to other components, just
					like any other prop you use. A component tree put between
					component&#39;s opening and closing tag will be passed to that
					component as <strong>children</strong> prop.
				</p>
				<p>
					There are several methods available in the React API to work with this
					prop. These include <strong>React.Children.map</strong>,{" "}
					<strong>React.Children.forEach</strong>,{" "}
					<strong>React.Children.count</strong>,{" "}
					<strong>React.Children.only</strong>,{" "}
					<strong>React.Children.toArray</strong>.
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "How comments written in React?",
		answer: (
			<>
				<p>
					The comments in React/JSX are similar to JavaScript Multiline comments
					but are wrapped in curly braces.
				</p>
				<p>
					<strong>{/* */}</strong>
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is reconciliation?",
		answer: (
			<>
				<p>
					<strong>Reconciliation</strong> is the process by which React
					efficiently updates the DOM only in areas of change (not the entire
					DOM). In order to do this, React stores a copy of the{" "}
					<strong>Browser DOM</strong> which is called the{" "}
					<strong>Virtual DOM</strong>. When changes are made or data added,
					React creates a new Virtual DOM and compares it with the previous one.
					This comparison is done by <strong>Diffing Algorithm</strong>. React
					then compares the Virtual DOM with Real DOM. At this point, it updates
					only the changed nodes in Real DOM leaving the rest of the nodes as
					is.{" "}
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How to set state with a dynamic key/property name?",
		answer: (
			<>
				<p>
					To use computed values for property names, you use square brackets and
					pass the expression. Here is a generic example:
				</p>
				<pre>
					<div className={styles.appCode}>{`
const object = {
[expression]: value
}
        `}</div>
				</pre>
				<p>Here, dynamic naming is applied:</p>
				<pre>
					<div className={styles.appCode}>{`
const key1 = "language"
const key2 = "isStudent"

const obj = {
  name: "dillion",
  age: 1000,
  [key1]: "javascript",
  [key2]: true
}

          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question:
			"What would be the common mistake of a function being called every time the component renders?",
		answer: (
			<>
				<p>
					You need to make sure that function is not being called while passing
					the function as a parameter.
				</p>
				<pre>
					<div className={styles.appCode}>{`
  // Wrong: handleClick is called instead of passed as a reference!
  <button onClick={this.handleClick()}>{'Click Me'}</button>
          `}</div>
				</pre>
				<p>Instead, pass the function itself without parenthesis:</p>
				<pre>
					<div className={styles.appCode}>{`
  // Correct: handleClick is passed as a reference!
  <button onClick={this.handleClick}>{'Click Me'}</button>
          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Does the React.lazy() function support named exports?",
		answer: (
			<>
				<p>
					No, currently <strong>React.lazy</strong> function supports default
					exports only. If you would like to import modules which are named
					exports, you can create an intermediate module that reexports it as
					the default. It also ensures that tree shaking keeps working and does
					not pull unused components. Let&#39;s take a component file which
					exports multiple named components,
				</p>
				<pre>
					<div className={styles.appCode}>{`
// MoreComponents.js
export const SomeComponent = /* ... */;
export const UnusedComponent = /* ... */;
          `}</div>
				</pre>
				<p>
					and reexport <strong>MoreComponents.js</strong> components in an
					intermediate file <strong>IntermediateComponent.js</strong>
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: 'Why does React use "className" over "class" attribute?',
		answer: (
			<>
				<p>
					The attribute <strong>class</strong> is a keyword in JavaScript, and
					JSX is an extension of JavaScript. Pass a string as the{" "}
					<strong>className</strong> prop.
				</p>
				<pre>
					<div className={styles.appCode}>{`
render() {
  return <span className={'menu navigation-menu'}>{'Menu'}</span>
}
          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are fragments?",
		answer: (
			<>
				<p>
					It&#39;s a common pattern or practice in React for a component to
					return multiple elements. <em>Fragments</em> let you group a list of
					children without adding extra nodes to the DOM. You need to use either{" "}
					<strong>{`<Fragment>`}</strong> or a shorter syntax having empty tag (
					<strong>{`<></>`}</strong>).
				</p>
				<p>
					Below is the example of how to use fragment inside <em>Story</em>{" "}
					component.
				</p>
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
				<p>
					It is also possible to render list of fragments inside a loop with the
					mandatory <strong>key</strong> attribute supplied.
				</p>

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
				<p>
					Ususally you don&#39;t need to use <strong>{`<Fragment>`}</strong>{" "}
					until unless there is a need of <em>key</em> attribute. The usage of
					shorter syntax looks like below.
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Why fragments are better than container divs? (3)",
		answer: (
			<>
				<p>
					Below are the list of reasons to prefer fragments over container DOM
					elements,
				</p>
				<ol>
					<li>
						Fragments are a bit faster and use less memory by not creating an
						extra DOM node. This only has a real benefit on very large and deep
						trees.
					</li>
					<li>
						Some CSS mechanisms like <em>Flexbox</em> and <em>CSS Grid</em> have
						a special parent-child relationships, and adding divs in the middle
						makes it hard to keep the desired layout.
					</li>
					<li>The DOM Inspector is less cluttered.</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What are portals in React?",
		answer: (
			<>
				<p>
					A React component can be rendered outside of the DOM hierarchy of its
					parent component using React Portals. As an example, you could render
					components in a modal dialogue box, hover card, loader, or popup
					message, which would be in a “different place” than their parent
					component. The ReactDOM.createPortal() method, which accepts a React
					element (child) and a DOM element as inputs, is used to create React
					portals (container). The container is the DOM element that the child
					component should be rendered into, and the child component is any
					renderable React child, such as an element, string, or fragment. For
					items that must appear above all other elements, such as profile
					hovercards, modal dialogue boxes, and tooltips, portals are frequently
					utilised.
				</p>
				<pre>
					<div className={styles.appCode}>{`
import { createPortal } from 'react-dom';

// ...

<div>
  <p>This child is placed in the parent div.</p>
  {createPortal(
    <p>This child is placed in the document body.</p>,
    document.body
  )}
</div>
        `}</div>
				</pre>
				<p>
					The first argument is any render-able React child, such as an element,
					string, or fragment. The second argument is a DOM element.
				</p>
				<div
					className={styles.appCode}
				>{`createPortal(children, domNode, key?) `}</div>
				<p>
					<strong>Parameters</strong>
				</p>
				<ul>
					<li>
						<strong>children:</strong> Anything that can be rendered with React,
						such as a piece of JSX (e.g. <div /> or {`<SomeComponent />`}), a
						Fragment ({`<>...</>`}), a string or a number, or an array of these.
					</li>
					<li>
						<strong>domNode:</strong> Some DOM node, such as those returned by
						document.getElementById(). The node must already exist. Passing a
						different DOM node during an update will cause the portal content to
						be recreated.
					</li>
					<li>
						<strong>optional key:</strong> A unique string or number to be used
						as the portal’s key.
					</li>
				</ul>
				<p>
					<strong>Returns</strong>
				</p>
				<p>
					createPortal returns a React node that can be included into JSX or
					returned from a React component. If React encounters it in the render
					output, it will place the provided children inside the provided
					domNode.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are stateless components?",
		answer: (
			<>
				<p>
					A stateless component, also known as a “dumb” or “presentational”
					component, is a component that does not maintain its own internal
					state. It receives data and callbacks through props (short for
					properties) and only renders the UI based on those props. Stateless
					components are typically used for simple, presentational elements that
					don’t need to handle any complex logic or internal state updates. They
					are simple functions that take props and return JSX.
				</p>
				<p>
					In general, it is recommended to use stateless components as much as
					possible to keep the application simple and easy to understand.
					Stateful components should only be used when it is necessary to manage
					state or handle complex logic.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are stateful components?",
		answer: (
			<>
				<p>
					A stateful component, also known as a “smart” or “container”
					component, is a component that maintains its own internal state. It
					can handle internal state updates and side effects, and may also
					manage the state of other child components. Stateful components are
					typically used for more complex elements that need to handle user
					interactions, API calls, or other logic. They are class components
					that extend React.Component.
				</p>
				<p>
					In general, it is recommended to use stateless components as much as
					possible to keep the application simple and easy to understand.
					Stateful components should only be used when it is necessary to manage
					state or handle complex logic.
				</p>
				<p>
					Here is an example of functional stateful component which update the
					state based on click event,
				</p>
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
				<p>
					The equivalent class stateful component with a state that gets
					initialized in the <strong>constructor</strong>.
				</p>
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
            `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How to apply type validation on props in React?",
		answer: (
			<>
				<p>
					When the application is running in <em>development mode</em>, React
					will automatically check all props that we set on components to make
					sure they have <em>correct type</em>. If the type is incorrect, React
					will generate warning messages in the console. It is disabled in{" "}
					<em>production mode</em> due to performance impact. The mandatory
					props are defined with <strong>isRequired</strong>. In React v15.5
					_PropTypes_ were moved from `React.PropTypes` to `prop-types` library.
				</p>
				<p>The set of predefined prop types:</p>
				<ol>
					<li>
						<strong>PropTypes.number</strong>
					</li>
					<li>
						<strong>PropTypes.string</strong>
					</li>
					<li>
						<strong>PropTypes.array</strong>
					</li>
					<li>
						<strong>PropTypes.object</strong>
					</li>
					<li>
						<strong>PropTypes.func</strong>
					</li>
					<li>
						<strong>PropTypes.node</strong>
					</li>
					<li>
						<strong>PropTypes.element</strong>
					</li>
					<li>
						<strong>PropTypes.bool</strong>
					</li>
					<li>
						<strong>PropTypes.symbol</strong>
					</li>
					<li>
						<strong>PropTypes.any</strong>
					</li>
				</ol>
				<p>
					We can define <strong>propTypes</strong> for <strong>User</strong>{" "}
					component as below:
				</p>
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
				<p>
					Note: It is recommended to manage typing using Typescript instead of
					checking prop types at runtime.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are the advantages of React?",
		answer: (
			<>
				<p>Some of the main advantages of React:</p>
				<ol>
					<li>
						Increases the application&#39;s performance with{" "}
						<em>Virtual DOM</em>.
					</li>
					<li>JSX makes code easy to read and write.</li>
					<li>
						It renders both on client and server side (<em>SSR</em>).
					</li>
					<li>
						Easy to integrate with frameworks (Angular, Backbone) since it is
						only a view library.
					</li>
					<li>
						Easy to write unit and integration tests with tools such as Jest.
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are the limitations of React?",
		answer: (
			<>
				<p>Some of the main disadvantages/limitations of React:</p>
				<ol>
					<li>React is just a view library, not a full framework.</li>
					<li>
						There is a learning curve for beginners who are new to web
						development.
					</li>
					<li>
						Integrating React into a traditional MVC framework requires some
						additional configuration.
					</li>
					<li>The code complexity increases with inline templating and JSX.</li>
					<li>
						Too many smaller components leading to over engineering or
						boilerplate.
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are error boundaries?",
		answer: (
			<>
				<p>
					By default, if your application throws an error during rendering,
					React will remove its UI from the screen. To prevent this, you can
					wrap a part of your UI into an error boundary. An error boundary is a
					special component that lets you display some fallback UI instead of
					the part that crashed—for example, an error message.
				</p>
				<p>
					To implement an error boundary component, you need to provide static
					getDerivedStateFromError which lets you update state in response to an
					error and display an error message to the user. You can also
					optionally implement componentDidCatch to add some extra logic, for
					example, to log the error to an analytics service.
				</p>
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
				<p>
					If Profile or its child component throws an error, ErrorBoundary will
					“catch” that error, display a fallback UI with the error message
					you’ve provided, and send a production error report to your error
					reporting service.
				</p>
				<p>
					You don’t need to wrap every component into a separate error boundary.
					When you think about the granularity of error boundaries, consider
					where it makes sense to display an error message. For example, in a
					messaging app, it makes sense to place an error boundary around the
					list of conversations. It also makes sense to place one around every
					individual message. However, it wouldn’t make sense to place a
					boundary around every avatar.
				</p>
				<p>
					There is currently no way to write an error boundary as a function
					component. However, you don’t have to write the error boundary class
					yourself. For example, you can use the react-error-boundary component
					NPM package instead.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What does the react-dom package do?",
		answer: (
			<>
				<p>
					The <strong>react-dom</strong> package provides{" "}
					<em>DOM-specific methods</em> that can be used at the top level of
					your app. Most of the components are not required to use this module.
					Some of the methods of this package are:
				</p>
				<ol>
					<li>
						<strong>render()</strong>
					</li>
					<li>
						<strong>hydrate()</strong>
					</li>
					<li>
						<strong>unmountComponentAtNode()</strong>
					</li>
					<li>
						<strong>findDOMNode()</strong>
					</li>
					<li>
						<strong>createPortal()</strong>
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What is the purpose of render method of react-dom?",
		answer: (
			<>
				<p>
					This method is used to render a React element into the DOM in the
					supplied container and return a reference to the component. If the
					React element was previously rendered into container, it will perform
					an update on it and only mutate the DOM as necessary to reflect the
					latest changes.
				</p>
				<div className={styles.appCode}>{`
          ReactDOM.render(element, container, [callback])
        `}</div>
				<p>
					If the optional callback is provided, it will be executed after the
					component is rendered or updated.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What is react-dom/server?",
		answer: (
			<>
				<p>
					The <strong>react-dom/server</strong> object enables you to render
					components to static markup (typically used on node server). This
					object is mainly used for <em>server-side rendering</em> (SSR). The
					following methods can be used in both the server and browser
					environments:
				</p>
				<ol>
					<li>
						<strong>renderToString()</strong>
					</li>
					<li>
						<strong>renderToStaticMarkup()</strong>
					</li>
				</ol>
				<p>
					For example, you generally run a Node-based web server like Express,
					Hapi, or Koa, and you call <strong>renderToString</strong> to render
					your root component to a string, which you then send as response.
				</p>
				<pre>
					<div className={styles.appCode}>{`
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
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How to use innerHTML in React?",
		answer: (
			<>
				<p>
					The <strong>dangerouslySetInnerHTML</strong> attribute is React&#39;s
					replacement for using <strong>innerHTML</strong> in the browser DOM.
					Just like <strong>innerHTML</strong>, it is risky to use this
					attribute considering cross-site scripting (XSS) attacks. You just
					need to pass a <strong>__html</strong> object as key and HTML text as
					value.
				</p>
				<p>
					In this example MyComponent uses{" "}
					<strong>dangerouslySetInnerHTML</strong> attribute for setting HTML
					markup:
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "How to use the style attribute in React?",
		answer: (
			<>
				<p>
					The <strong>style</strong> attribute accepts a JavaScript object with
					camelCased properties rather than a CSS string. This is consistent
					with the DOM style JavaScript property, is more efficient, and
					prevents XSS security holes.
				</p>
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
				<p>
					Style keys are camelCased in order to be consistent with accessing the
					properties on DOM nodes in JavaScript (e.g.{" "}
					<strong>node.style.backgroundImage</strong>).
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How events are different between React and HTML?",
		answer: (
			<>
				<p>There are some simple syntactic differences:</p>
				<ul>
					<li>
						In React.js, we use camelCase to name events, instead of the
						lowercase in HTML
					</li>
					<li>
						In React.js, because of JSX, a function is passed as an event
						handler, instead of the string in HTML
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Why not use indexes as keys?",
		answer: (
			<>
				<p>
					Keys should be stable, predictable, and unique so that React can keep
					track of elements.
				</p>
				<p>
					In the below code snippet each element&#39;s key will be based on
					ordering, rather than tied to the data that is being represented. This
					limits the optimizations that React can do.
				</p>
				<div className={styles.appCode}>{`
              todos.map((todo, index) => <Todo {...todo} key={index} />);
          `}</div>
				<p>
					If you use element data for unique key, assuming todo.id is unique to
					this list and stable, React would be able to reorder elements without
					needing to reevaluate them as much.
				</p>
				<div className={styles.appCode}>{`
              todos.map((todo) => <Todo {...todo} key={todo.id} />);
          `}</div>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What will happen if you use props in initial state?",
		answer: (
			<>
				<p>
					If the props on the component are changed without the component being
					refreshed, the new prop value will never be displayed because the
					constructor function will never update the current state of the
					component. The initialization of state from props only runs when the
					component is first created.
				</p>
				<p>The below component won&#39;t display the updated input value:</p>
				<pre>
					<div className={styles.appCode}>{`
const [inputValue, setInputValue] = useState(this.props.inputValue);
return (
  <div>{this.state.inputValue}</div>
  );
          `}</div>
				</pre>
				<p>Using props inside return statement will update the value:</p>

				<pre>
					<div className={styles.appCode}>{`
return (
  <div>{props.inputValue}</div>
);
          `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "How do you conditionally render components?",
		answer: (
			<>
				<p>
					In some cases you want to render different components depending on
					some state. JSX does not render <strong>false</strong> or{" "}
					<strong>undefined</strong>, so you can use conditional{" "}
					<em>short-circuiting</em> to render a given part of your component
					only if a certain condition is true.
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Why we need to be careful when spreading props on DOM elements?",
		answer: (
			<>
				<p>
					When we <em>spread props</em> we run into the risk of adding unknown
					HTML attributes, which is a bad practice. Instead we can use prop
					destructuring with <strong>...rest</strong> operator, so it will add
					only required props.
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How do you memoize a component?",
		answer: (
			<>
				<p>
					Since React v16.6.0, we have a React.memo. It provides a higher order
					component which memoizes component unless the props change. To use it,
					simply wrap the component using React.memo before you use it.
				</p>
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
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is CRA and its benefits?",
		answer: (
			<>
				<p>
					The <strong>create-react-app</strong> CLI tool allows you to quickly
					create &amp; run React applications with no configuration step.
				</p>
				<p>It includes everything we need to build a React app:</p>
				<ol>
					<li>React, JSX, ES6, and Flow syntax support.</li>
					<li>Language extras beyond ES6 like the object spread operator.</li>
					<li>
						Autoprefixed CSS, so you don’t need -webkit- or other prefixes.
					</li>
					<li>
						A fast interactive unit test runner with built-in support for
						coverage reporting.
					</li>
					<li>A live development server that warns about common mistakes.</li>
					<li>
						A build script to bundle JS, CSS, and images for production, with
						hashes and sourcemaps.
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question:
			"What is the purpose of getSnapshotBeforeUpdate() lifecycle method?",
		answer: (
			<>
				<p>
					If you implement <strong>getSnapshotBeforeUpdate()</strong> , React
					will call it immediately before React updates the DOM. It enables your
					component to capture some information from the DOM (e.g. scroll
					position) before it is potentially changed. Any value returned by this
					lifecycle method will be passed as a parameter to{" "}
					<strong>componentDidUpdate()</strong>.
				</p>
				<pre>
					<div className={styles.appCode}>{`
class MyComponent extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // ...
  }
}
          `}</div>
				</pre>
				<p>
					At the moment, there is no equivalent to{" "}
					<strong>getSnapshotBeforeUpdate</strong> for function components. This
					use case is very uncommon, but if you have the need for it, for now
					you’ll have to write a class component.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What are React Mixins?",
		answer: (
			<>
				<p>
					<strong>Mixins</strong> were a way to reuse code between components
					when you were not sure how to solve the same problem with composition.{" "}
				</p>
				<p>
					<strong>Mixins are deprecated and should not be used!</strong>
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are Pointer Events supported in React? (10)",
		answer: (
			<>
				<p>
					The following event types are now available in <em>React DOM</em>:
				</p>
				<ol>
					<li>
						<strong>onPointerDown</strong>
					</li>
					<li>
						<strong>onPointerMove</strong>
					</li>
					<li>
						<strong>onPointerUp</strong>
					</li>
					<li>
						<strong>onPointerCancel</strong>
					</li>
					<li>
						<strong>onGotPointerCapture</strong>
					</li>
					<li>
						<strong>onLostPointerCapture</strong>
					</li>
					<li>
						<strong>onPointerEnter</strong>
					</li>
					<li>
						<strong>onPointerLeave</strong>
					</li>
					<li>
						<strong>onPointerOver</strong>
					</li>
					<li>
						<strong>onPointerOut</strong>
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Why should component names start with capital letter?",
		answer: (
			<>
				<p>
					React requires that the first letter of components be capitalized. JSX
					will use this capitalization to tell the difference between an HTML
					tag and a component instance. If the first letter of a name is
					capitalized, then JSX knows it's a component instance; if not, then
					it's an HTML element.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Are custom HTML attributes supported in React?",
		answer: (
			<>
				<p>
					If you render a tag with a dash, like {`<my-element>`}, React will
					assume you want to render a custom HTML element. In React, rendering
					custom elements works differently from rendering built-in browser
					tags:
				</p>
				<ul>
					<li>
						All custom element props are serialized to strings and are always
						set using attributes.
					</li>
					<li>
						Custom elements accept class rather than className, and for rather
						than htmlFor.
					</li>
				</ul>
				<p>
					If you render a built-in browser HTML element with an is attribute, it
					will also be treated as a custom element.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What is the difference between constructor and getInitialState?",
		answer: (
			<>
				<p>
					You should initialize state in the constructor when using ES6 classes,
					and <strong>getInitialState()</strong> method when using{" "}
					<strong>React.createClass()</strong>.
				</p>
				<p>
					<strong>Using ES6 classes:</strong>
				</p>
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
				<p>
					Using <strong>React.createClass()</strong>:
				</p>
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
				<p>
					Note:<strong>React.createClass()</strong> was deprecated and removed
					in React v16. Use plain JavaScript classes instead.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Can you force a component to re-render without updating state?",
		answer: (
			<>
				<p>
					By default, when your component&#39;s state or props change, your
					component will re-render. You can tell React that the component needs
					re-rendering by calling <strong>forceUpdate()</strong>.
				</p>
				<div className={styles.appCode}>{`
        component.forceUpdate(callback);
        `}</div>
				<p>
					It is recommended to avoid all uses of <strong>forceUpdate()</strong>{" "}
					and only use <strong>props</strong> and <strong>state</strong> in for
					rerendering.
				</p>
				<p>
					Note: Reading an external data source and forcing class components to
					re-render in response to its changes with forceUpdate has been
					superseded by useSyncExternalStore in function components.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How do you access props in attribute quotes?",
		answer: (
			<>
				<p>
					React (or JSX) doesn&#39;t support variable interpolation inside an
					attribute value. The below representation won&#39;t work:
				</p>
				<div className={styles.appCode}>{`
          <img className="image" src="images/{this.props.image}" />
        `}</div>
				<p>
					But you can put any JS expression inside curly braces as the entire
					attribute value. So the below expression works:
				</p>
				<div className={styles.appCode}>{`
          <img className="image" src={"images/" + this.props.image} />
        `}</div>
				<p>Using template strings will also work</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is the release date of React?",
		answer: (
			<>
				<p>March 2013</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "What is Redux in React?",
		answer: (
			<>
				<p>
					Redux is an open-source JavaScript library for managing and
					centralizing application state. It is most commonly used with
					libraries such as React or Angular.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "In Redux, what is an action?",
		answer: (
			<>
				<p>
					In Redux, an action is an object that contains information about an
					event that has occurred in an application
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is the Presentational segment?",
		answer: (
			<>
				<p>
					It is a component in React that just renders HTML and its only
					function is presentation markup.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What is yield operator in JavaScript?",
		answer: (
			<>
				<p>
					The yield operator is used to pause and resume a generator function.
				</p>
				<pre>
					<div className={styles.appCode}>{`
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
        `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "React - Testing",
		level: 1,
		question: "What is Jest?",
		answer: (
			<>
				<p>
					Jest is a testing framework created by Facebook and is based on
					Jasmine. Its feature-rich API helps to get results quickly.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is the dispatcher?",
		answer: (
			<>
				<p>
					It is the central hub of data flow in a Flux application that acts as
					a directory of callbacks.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "Name two differences between Redux and Flux",
		answer: (
			<>
				<ul>
					<li>
						Unlike Flux, Redux does not use a dispatcher, but instead it uses
						pure functions to define data mutating functions. It still uses
						stores and actions, which can be tied directly to React components.
					</li>
					<li>
						One big difference with Redux and Flux is the concept of middleware.
						Redux added the idea of middleware that we can use to manipulate
						actions as we receive them, both coming in and heading out of our
						application.{" "}
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What is the use of arrow function in React?",
		answer: (
			<>
				<ul>
					<li>
						Arrow functions are much simpler to write and understand than
						traditional function expressions. This can make your code more
						readable and easier to debug.
					</li>
					<li>
						Arrow functions have no binding of the keyword <strong>this</strong>{" "}
						meaning that <strong>this</strong> inside an arrow function will
						refer to the one where it was created rather than where it was
						called from.
					</li>
					<li>
						Arrow functions do not create a new scope, so they can be used in
						ReactJS without polluting the global scope.
					</li>
					<li>
						Arrow functions can be used as arguments to other functions, which
						can make your code more flexible and expressive.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is Webpack?",
		answer: (
			<>
				<p>
					Webpack is a command line tool used to bundle different code files and
					assets into single large file. It helps minimize Javascript, CSS
					files, images, etc.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is Babel?",
		answer: (
			<>
				<p>
					It is an open-source JavaScript compiler that converts the latest
					JavaScript versions to old ones.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How are ReactJS and React Native different? (2)",
		answer: (
			<>
				<ul>
					<li><strong>Platform:</strong> React is a library for building user interfaces in web applications, whereas React Native is a framework for building native mobile applications for iOS, Android, and other platforms.</li>
					<li><strong>Language:</strong> React uses JavaScript, while React Native uses a combination of JavaScript and a subset of CSS called Flexbox for styling.</li>
					<li><strong>Components:</strong> Both React and React Native use components as the building blocks of user interfaces, but the components in React are designed for web browsers, while the components in React Native are designed for mobile devices and can include native UI elements such as View, Text, Image, etc.</li>
					<li><strong>Styling:</strong> React uses CSS for styling, while React Native uses a subset of CSS called Flexbox for styling, along with some additional styling options specific to mobile applications.</li>
					<li><strong>UI/UX:</strong> React is designed to create web-based user interfaces, while React Native is designed to create mobile user interfaces that look and feel like native applications, providing a more native-like user experience.</li>
					<li><strong>Performance:</strong> React Native uses native UI components, which are rendered directly by the device's GPU. This makes it more efficient in terms of performance compared to React, which relies on a virtual DOM to update the UI.</li>
					<li><strong>Platform-specific APIs:</strong> React Native provides access to native APIs of the underlying mobile platform, such as the camera, geolocation, etc., allowing developers to create more sophisticated and feature-rich mobile applications compared to React, which primarily focuses on web-based UI.</li>
					<li><strong>Development workflow:</strong> React Native requires a different development setup compared to React, as it involves building, compiling, and running native code on mobile devices, whereas React can be developed and run in a web browser.</li>
					<li><strong>Code Reusability:</strong> One of the main advantages of React Native is its ability to reuse a significant portion of code between different platforms (iOS, Android, etc.), which can result in faster development and easier maintenance. Conversely, React components are typically designed specifically for web browsers and may not be easily reusable on other platforms.</li>
					<li><strong>Ecosystem:</strong> While React has a mature ecosystem with a large number of libraries, tools, and resources available for web development, React Native has its own ecosystem tailored for mobile app development, which includes libraries, components, and tools specific to mobile platforms.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How are ReactJS and React Native similar? (8)",
		answer: (
			<>
				<ul>
					<li>They both use the same core React library.</li>
					<li>
						They both use the same component-based architecture, which means
						that developers can break down their applications into smaller, more
						manageable pieces.
					</li>
					<li>
						They both use JavaScript as their programming language, and JSX as
						their templating language.
					</li>
					<li>
						Both React DOM and React Native use virtual DOMs to render their
						applications.
					</li>
					<li>
						Both React DOM and React Native also use the same styling techniques and components, through React Native's is a bit different.
					</li>
					<li>They both utilize Chrome DevTools for debugging applications.</li>
					<li>They use the same JavaScript APIs.</li>
					<li>
						Both were developed in Meta. React was developed by a software engineer named Jordan Walke while React Native was born from a hackathon.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Can browsers understand JSX code? Explain.",
		answer: (
			<>
				<p>
					{" "}
					No. JSX is a combination of HTML and JavaScript, and browsers are unable to read it. A transpiler is needed to convert JSX to JavaScript. Web browsers are built to understand and read original JavaScript or JS objects. Since JSX is not a regular JS object, web browsers are unable to read it. For web browsers to read JSX, it must be made compatible by first converting it into regular JS objects. This is achieved by using a transcompiler, such as Babel. While this may seem like a simple ReactJS interview question, knowing answers to such questions can be critical.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is strict mode?",
		answer: (
			<>
				<p>
				StrictMode is a tool added in version 16.3 of React to highlight potential problems in an application. It performs additional checks on the application.It highlights any potential problems in the application. It achieves this by encapsulating a section of your application as a component. While it does not show any visible element in the development mode (does not impact the performance in the production mode as well), it does give warnings.  Brings attention to any suspicious code which might have been accidentally added to the application. The StrictMode can be applied to any section of the application, not necessarily to the entire application
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "Can the values of props be updated?",
		answer: (
			<>
				<p>
					No, as props are immutable and top-down. This signifies that parent
					can transmit prop values to a child but the latter cannot modify them.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Can I use web components in React application?",
		answer: (
			<>
				<p>
					Web components, encapsulated HTML tags for web development, are
					versatile, framework-agnostic elements native to HTML, usable
					seamlessly in various environments like React and Angular.
				</p>
				<p>
					The web components specification offers a way to create reusable
					custom HTML elements with three inbuilt technologies: custom elements,
					shadow DOM and HTML templates.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is prop-types library?",
		answer: (
			<>
				<p>Runtime type checking for React props and similar objects.</p>
				<p>
					You can use prop-types to document the intended types of properties
					passed to components. React will check props passed to your components
					against those definitions, and warn in development if they do not
					match.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What are hooks?",
		answer: (
			<>
				<p>
					Hooks are features that allow you to “hook into” the features of React
					state and lifecycle from function components. Hooks do not function
					inside classes. Without classes, they let you use React. Hooks are a
					new addition in React 16.8. They let you use state and other React
					features without writing a class.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is windowing?",
		answer: (
			<>
				<p>
					Windowing is a technique that ensures that our lists only render items
					visible in the viewport.
				</p>
				<p>
					As the user scrolls, we calculate which elements we should display
					based on the position of the scrollbar and then add and remove those
					elements as they enter and exit the viewport.
				</p>
				<p>
					Rendering DOM elements is one of the most expensive operations web
					applications perform, and with windowing, we ensure that we render
					them only when needed.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "What are some options for handling asynchronous calls in Redux?",
		answer: (
			<>
				<ul>
					<li>Redux Promise</li>
					<li>Redux Saga</li>
					<li>Redux Thunk</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is one-way data flow in React?",
		answer: (
			<>
				<p>
					React uses unidirectional data flow which means you can transfer data
					from parent to child and not the other way around.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "Explain Concurrent Rendering.",
		answer: (
			<>
				<p>
					Concurrent rendering is a feature of React that enables components to
					render, update, and respond to user input simultaneously.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Are concurrent mode and async mode different?",
		answer: (
			<>
				<p>
					Both refer to the same thing. Previously concurrent Mode being
					referred to as "Async Mode" by React team. The name has been changed
					to highlight React's ability to perform work on different priority
					levels.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "What are the components in React?",
		answer: (
			<>
				<p>
					In a React application, they are independent and reusable bits of code
					that can be processed separately. A single app may therefore contain
					multiple components.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is MobX?",
		answer: (
			<>
				<p>
					It is a simple, scalable, and battle-tested state management
					solution.It is based on Reactive programming principles.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What does the eslint plugin for hooks do?",
		answer: (
			<>
				<p>
					It enforces the Rules of Hooks. Precisely, it is a static code
					analysis tool for finding out faulty patterns in JavaScript code.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What is render hijacking in React?",
		answer: (
			<>
				<p>
					It is the ability to control what one component will output from
					another component. Here you wrap a component with a higher order
					component.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "How can you pass numbers to the React component?",
		answer: (
			<>
				<p>
					You can pass numbers to React components using curly braces({}) where
					strings use quotes
				</p>
				<div className={styles.appCode}>{`
            <button value={30}>
          `}</div>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Explain React memo function.",
		answer: (
			<>
				<p>
					memo lets you skip re-rendering a component when its props are
					unchanged.
				</p>
				<pre>
					<div className={styles.appCode}>
						{`
import { memo } from 'react';

const SomeComponent = memo(function SomeComponent(props) {
  // ...
});
        `}{" "}
					</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are default props?",
		answer: (
			<>
				<p>
					It is a React component property to set default values for the props
					argument. They are used for undefined props only and not for null
					props.
				</p>
				<pre>
					<div className={styles.appCode}>
						{`
const ChildComponent = (props) => {
  return <p>Hello, {props.name}!</p>;
};

ChildComponent.defaultProps = {
  name: "Guest",
};
        `}{" "}
					</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Is it necessary for keys to be globally unique?",
		answer: (
			<>
				<p>
					While you can use the same keys for two different arrays, they don't
					need to be globally unique.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What methods are invoked during error handling in React?",
		answer: (
			<>
				<ul>
					<li>
						<strong>getDerivedStateFromError()</strong>: This lifecycle method
						renders a fallback UI after an error is thrown. It is called during
						the render phase, so side effects are not permitted
					</li>
					<li>
						<strong>componentDidCatch()</strong>: This method is used for
						logging error information. It is called during the commit phase, so
						side effects are permitted
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How do you use of the unmountComponentAtNode method?",
		answer: (
			<>
				<p>
					The unmountComponentAtNode method in React is used to unmount a React
					component from the DOM and clean up its event handlers and state. This
					method is often used when cleaning up the DOM after a React component
					has been removed or replaced.
				</p>
				<p>
					Note: In React 18, unmountComponentAtNode was replaced by
					root.unmount().
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "When do component props defaults to true?",
		answer: (
			<>
				<p>
					When you pass no value for a prop. For example, these two are
					equivalent:
				</p>
				<div className={styles.appCode}>
					{`
          <button autocomple >
        `}{" "}
				</div>
				<br />
				<div className={styles.appCode}>
					{`
          <button autocomple={true} >
        `}{" "}
				</div>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How is React different from Angular? (6)",
		answer: (
			<>
				<table>
					<thead>
						<tr>
							<th></th>
							<th>React</th>
							<th>Angular</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>ARCHITECTURE</strong>
							</td>
							<td>Only the View of MVC</td>
							<td>Complete MVC</td>
						</tr>
						<tr>
							<td>
								<strong>RENDERING</strong>
							</td>
							<td>Server-side rendering</td>
							<td>Client-side rendering</td>
						</tr>
						<tr>
							<td>
								<strong>DOM</strong>
							</td>
							<td>Uses virtual DOM</td>
							<td>Uses real DOM</td>
						</tr>
						<tr>
							<td>
								<strong>DATA BINDING</strong>
							</td>
							<td>One-way data binding</td>
							<td>Two-way data binding</td>
						</tr>
						<tr>
							<td>
								<strong>DEBUGGING</strong>
							</td>
							<td>Compile time debugging</td>
							<td>Runtime debugging</td>
						</tr>
						<tr>
							<td>
								<strong>AUTHOR</strong>
							</td>
							<td>Facebook</td>
							<td>Google</td>
						</tr>
					</tbody>
				</table>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "What were the major problems with MVC framework?",
		answer: (
			<>
				<p>Following are some of the major problems with MVC framework:</p>
				<ul>
					<li>DOM manipulation was very expensive</li>
					<li>Applications were slow and inefficient</li>
					<li>There was huge memory wastage</li>
					<li>
						Because of circular dependencies, a complicated model was created
						around models and views
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "Explain Flux",
		answer: (
			<>
				<ul>
					<li>
						Flux is an architectural pattern which enforces the uni-directional
						data flow.
					</li>
					<li>
						It controls derived data and enables communication between multiple
						components using a central Store which has authority for all data.
					</li>
					<li>
						Any update in data throughout the application must occur here only.
					</li>
					<li>
						Flux provides stability to the application and reduces run-time
						errors.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "What are the three principles that Redux follows?",
		answer: (
			<>
				<ul>
					<li>
						<strong>Single source of truth:</strong> The state of the entire
						application is stored in an object/ state tree within a single
						store. The single state tree makes it easier to keep track of
						changes over time and debug or inspect the application.
					</li>
					<li>
						<strong>State is read-only:</strong> The only way to change the
						state is to trigger an action. An action is a plain JS object
						describing the change. Just like state is the minimal representation
						of data, the action is the minimal representation of the change to
						that data.{" "}
					</li>
					<li>
						<strong>Changes are made with pure functions:</strong> In order to
						specify how the state tree is transformed by actions, you need pure
						functions. Pure functions are those whose return value depends
						solely on the values of their arguments.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "What is “Single source of truth”?",
		answer: (
			<>
				<p>
					Redux uses ‘Store’ for storing the application’s entire state at one
					place. So all the component’s state are stored in the Store and they
					receive updates from the Store itself. The single state tree makes it
					easier to keep track of changes over time and debug or inspect the
					application.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "List the components of Redux.",
		answer: (
			<>
				<p>Redux is composed of the following components:</p>
				<ul>
					<li>
						<strong>Action:</strong> It’s an object that describes what
						happened.
					</li>
					<li>
						<strong>Reducer:</strong> It is a place to determine how the state
						will change.
					</li>
					<li>
						<strong>Store:</strong> State/ Object tree of the entire application
						is saved in the Store.
					</li>
					<li>
						<strong>View:</strong> Simply displays the data provided by the
						Store.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "How are Actions defined in Redux?",
		answer: (
			<>
				<p>
					Actions in React must have a type property that indicates the type of{" "}
					<strong>ACTION</strong> being performed. They must be defined as a
					String constant and you can add more properties to it as well. In
					Redux, actions are created using the functions called{" "}
					<strong>ACTION Creators</strong>. Below is an example of{" "}
					<strong>ACTION</strong> and <strong>ACTION Creators</strong>:
				</p>
				<pre>
					<div className={styles.appCode}>{`
function addTodo(text) {
  return {
            type: ADD_TODO,    
            text    
  }
}
    `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "What are Reducers?",
		answer: (
			<>
				<p>
					Reducers are pure functions which specify how the application’s state
					changes in response to an ACTION. Reducers work by taking in the
					previous state and action, and then it returns a new state. It
					determines what sort of update needs to be done based on the type of
					the action, and then returns new values. It returns the previous state
					as it is, if no work needs to be done.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 1,
		question: "What is a Store in Redux?",
		answer: (
			<>
				<p>
					A store is a JavaScript object which can hold the application’s state
					and provide a few helper methods to access the state, dispatch actions
					and register listeners. The entire state/ object tree of an
					application is saved in a single store. As a result of this, Redux is
					very simple and predictable. We can pass middleware to the store to
					handle the processing of data as well as to keep a log of various
					actions that change the state of stores. All the actions return a new
					state via reducers.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question: "How is Redux different from Flux?",
		answer: (
			<>
				<table>
					<thead>
						<tr>
							<th>Flux</th>
							<th>Redux</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>The Store contains state and change logic</td>
							<td>Store and change logic are separate</td>
						</tr>
						<tr>
							<td>There are multiple stores</td>
							<td>There is only one store</td>
						</tr>
						<tr>
							<td>All the stores are disconnected and flat</td>
							<td>Single store with hierarchical reducers</td>
						</tr>
						<tr>
							<td>Has singleton dispatcher</td>
							<td>No concept of dispatcher</td>
						</tr>
						<tr>
							<td>React components subscribe to the store</td>
							<td>Container components utilize connect</td>
						</tr>
						<tr>
							<td>State is mutable</td>
							<td>State is immutable</td>
						</tr>
					</tbody>
				</table>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question: "What are the advantages of Redux?",
		answer: (
			<>
				<p>Advantages of Redux are listed below:</p>
				<ul>
					<li>
						<strong>Predictability of outcome:</strong> Since there is always
						one source of truth, i.e. the store, there is no confusion about how
						to sync the current state with actions and other parts of the
						application.
					</li>
					<li>
						<strong>Maintainability:</strong> The code becomes easier to
						maintain with a predictable outcome and strict structure.
					</li>
					<li>
						<strong>Server-side rendering:</strong> You just need to pass the
						store created on the server, to the client side. This is very useful
						for initial render and provides a better user experience as it
						optimizes the application performance.
					</li>
					<li>
						<strong>Developer tools:</strong> From actions to state changes,
						developers can track everything going on in the application in real
						time.
					</li>
					<li>
						<strong>Community and ecosystem:</strong> Redux has a huge community
						behind it which makes it even more captivating to use. A large
						community of talented individuals contribute to the betterment of
						the library and develop various applications with it.
					</li>
					<li>
						<strong>Ease of testing:</strong> Redux’s code is mostly functions
						which are small, pure and isolated. This makes the code testable and
						independent.
					</li>
					<li>
						<strong>Organization:</strong> Redux is precise about how code
						should be organized, this makes the code more consistent and easier
						when a team works with it
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "React Router",
		level: 1,
		question: "What is React Router?",
		answer: (
			<>
				<p>
					React Router is a powerful routing library built on top of React,
					which helps in adding new screens and flows to the application. This
					keeps the URL in sync with data that’s being displayed on the web
					page. It maintains a standardized structure and behavior and is used
					for developing single page web applications. React Router has a simple
					API.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "React Router",
		level: 1,
		question: "Why do we need a Router in React?",
		answer: (
			<>
				<p>
					A Router is used to define multiple routes and when a user types a
					specific URL, if this URL matches the path of any ‘route’ defined
					inside the router, then the user is redirected to that particular
					route. So basically, we need to add a Router library to our app that
					allows creating multiple routes with each leading to us a unique view.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "React Router",
		level: 2,
		question: "List down the advantages of React Router.",
		answer: (
			<>
				<p>Some advantages are:</p>
				<ul>
					<li>
						Just like how React is based on components, the API is ‘All About
						Components’. A Router can be visualized as a single root component{" "}
						{`<BrowserRouter>`} in which we enclose the specific child routes{" "}
						{`<route>`}.
					</li>
					<li>
						No need to manually set History value: Just wrap routes within the{" "}
						{`<BrowserRouter>`} component.
					</li>
					<li>
						The packages are split: Three packages one each for Web, Native and
						Core. This supports the compact size of our application. It is easy
						to switch over based on a similar coding style.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question: "What is the purpose of the mapStateToProps function in Redux?",
		answer: (
			<>
				<p>
					The mapStateToProps function in Redux is a way for a component to
					access the current state of the store and update its props
					accordingly. It does this by taking the current state of the store as
					an argument and returning an object that maps the state to the props
					of the component. The returned object is then passed to the component
					as props, allowing it to access the state and re-render when the state
					changes. This function is typically defined as a separate function
					outside of the component and is passed as an argument to the connect
					function, which is used to connect the component to the store.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question:
			"Explain the difference between server-side rendering and client-side rendering in React.",
		answer: (
			<>
				<p>
					In a React application, there are two main ways to render the
					components: server-side rendering (SSR) and client-side rendering
					(CSR).
				</p>

				<p>
					<strong>Server-side rendering (SSR)</strong> is when the initial
					render of a React application is done on the server. The server
					generates the HTML for the initial state of the application and sends
					it to the browser. When the JavaScript bundle loads, React takes over
					and the application continues to function as a SPA (Single-Page
					Application) on the client side. This approach has a few benefits such
					as:
				</p>
				<ul>
					<li>
						Improved performance for search engines and users on slow
						connections
					</li>
					<li>Faster time-to-first-byte</li>
					<li>Better accessibility for users who have JavaScript disabled</li>
				</ul>

				<p>
					<strong>Client-side rendering (CSR)</strong> is when the React
					application is rendered entirely in the browser, using JavaScript. The
					browser requests the JavaScript bundle from the server and then
					renders the components on the client side. This approach has the
					benefit of faster load times for users on fast connections and a more
					responsive user interface.
				</p>

				<p>
					In general, CSR is the simpler option to implement and more popular,
					but SSR is a good choice for certain use cases, such as when SEO is a
					primary concern, or when the app is targeting users on slow internet
					connections.
				</p>

				<p>
					It is also worth noting that, it is possible to have a hybrid approach
					between SSR and CSR which is called isomorphic or universal rendering.
					This approach allows to leverage the benefits of both SSR and CSR.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How do you handle data persistence in a React application?",
		answer: (
			<>
				<p>
					In a React application, data persistence can be handled using a
					variety of methods, including:
				</p>
				<ul>
					<li>
						<strong>Local storage:</strong> This allows you to store key-value
						pairs in the browser’s local storage, which can be retrieved even
						after the user closes the browser or restarts their device.
					</li>
					<li>
						<strong>Cookies:</strong> Cookies are small pieces of data that are
						stored in the user’s browser and can be accessed by the website on
						subsequent visits.
					</li>
					<li>
						<strong>IndexedDB:</strong> It’s a low-level API for client-side
						storage of large amounts of structured data, including files/blobs.
					</li>
					<li>
						<strong>Web SQL Database:</strong> This is a deprecated technology
						for storing data in a client-side database using SQL.
					</li>
					<li>
						<strong>Server-side storage:</strong> You can also store data on a
						remote server using an API or a database such as MySQL, MongoDB,
						etc.
					</li>
					<li>
						<strong>Redux or Mobx:</strong> State management libraries like
						Redux or Mobx can be used to manage and persist application state
						across different components and sessions.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What are some methods for optimization in an application? (15)",
		answer: (
			<>
				<p>
					Some of the techniques that can be used to optimize an application
					include:
				</p>
				<ul>
					<li>
						<strong>Use the React Developer Tools to identify and fix performance
						bottlenecks:</strong> The React Developer Tools allow you to track the
						performance of individual components and identify which components
						are causing the most re-renders.
					</li>
					<li>
						<strong>Use the useEffect hook to handle side effects:</strong> This hook allows you
						to run side effects, such as network requests, after a component has
						rendered.
					</li>
					<li>
						<strong>Use the useMemo hook to memoize expensive calculations:</strong> This hook
						allows you to cache the results of expensive calculations and only
						recalculate them when the inputs have changed.
					</li>
					<li>
						<strong>Lazy loading:</strong> Lazy loading is a technique where you only load the
						components that are needed for the current view. This can greatly
						improve the performance of your application.
					</li>
					<li>
						<strong>Code splitting:</strong> Code splitting is a technique where you split your
						application into smaller chunks of code that are loaded on demand.
						This can greatly improve the performance of your application.
					</li>
					<li><strong>Context:</strong> Use React’s Context API instead of props drilling.</li>
					<li>
						<strong>Other hooks:</strong> use the useCallback and useMemo hooks to prevent unnecessary re-renders and improve performance.
					</li>
					<li>
						<strong>Use list item keys:</strong> Minimize the number of DOM updates by using the key prop when
						rendering a list of items.
					</li>
					<li>
						<strong>Use the useReducer hook to manage state updates instead of
						useState</strong>
					</li>
					<li>
						<strong>virtualized list libraries:</strong> For example, react-virtualized,
						react-window etc.
					</li>
					<li><strong>Use of a bundler such as Webpack:</strong> A bundler can help you optimize your code by reducing the size of your JavaScript files, combining multiple files into one, and more.</li>
					<li><strong>Use of caching:</strong> You can cache the data and components that are frequently used in your application to avoid fetching the same data over and over.</li>
					<li><strong>Maintaining State Colocation:</strong>This is a process of moving the state as close to where you need it as possible.  Sometimes in React app, we have a lot of unnecessary states inside the parent component which makes the code less readable and harder to maintain. Not to forget, having many states inside a single component leads to unnecessary re-renders for the component.  It is better to shift states which are less valuable to the parent component, to a separate component.</li>
					<li><strong>Use of efficient algorithms and data structures:</strong> In order to keep your application fast, it’s important to use algorithms and data structures that are optimized for performance.</li>
					<li>
						<strong>Improve loading time:</strong> Optimize the loading time of your application by using techniques like code minification and compression.
					</li>
					<li>
						<strong>Real-world use cases:</strong> Test performance with real-world use cases and user interactions before and after making any optimization.
					</li>
				</ul>
				<p>Note:  The cause of slow rendering in React is mostly because of the number of re-render operations, which are sometimes unnecessary.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question: "What is the combineReducers function in Redux?",
		answer: (
			<>
				<p>
					The combineReducers function in Redux is used to combine multiple
					individual reducers into a single root reducer. In a Redux
					application, the state is managed by a single store and each piece of
					the state is managed by a specific reducer. The combineReducers
					function takes an object whose keys correspond to the keys in the
					state, and whose values are the individual reducers that will manage
					those parts of the state.
				</p>
				<p>
					The combineReducers function is used to compose the different reducers
					that handle different parts of the state into a single root reducer.
					This root reducer is then passed to the createStore function to create
					the Redux store.
				</p>
				<p>
					The combineReducers function is also useful for structuring and
					organizing your code in a more modular way, as it allows you to
					separate the logic for different parts of the state into different
					files and functions.
				</p>
				<p>
					The combineReducers function is not mandatory to use, but it makes it
					easier to split the application state and the reducer functions that
					handle it in a more modular way and also it helps to avoid name
					collision if you have multiple reducer functions that handle a
					specific part of the state.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Explain Render Props",
		answer: (
			<>
				<p>
					Note: Render props are used in modern React, but aren’t very common.
					For many cases, they have been replaced by custom Hooks.
				</p>
				<p>
					A render prop in React is a technique for conveying component logic.
					Instead of using a component’s props to communicate data and
					behaviour, a render prop is a function that a component utilises to
					select what to render. The “provider” component makes the render prop
					available, but the “consumer” component is the one that uses it. With
					this approach, component flexibility and reuse are enhanced.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question:
			"What is the difference between a functional component and a class component? (3)",
		answer: (
			<>
				<p>
					In React, a functional component is a plain JavaScript function that
					takes in props and returns a React element. A class component is a
					JavaScript class that extends React.Component and has a render method
					that returns a React element.
				</p>
				<p>
					One key difference between the two is that a class component can have
					local state and lifecycle methods, while a functional component
					cannot. However, starting with React 16.8, functional components can
					also have state using hooks and useEffect can manage a component's
					lifecycle.
				</p>
				<p>
					Functional components are considered simpler, easier to understand and
					test, and have better performance than class components. Class
					components are no longer considered best practice, but are useful to
					understand because they show up in so much legacy code.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question:
			"How do you handle asynchronous data loading in a React application?",
		answer: (
			<>
				<p>
					Asynchronous data loading can be handled using a technique called
					“lifting state up”. This involves moving the state that manages the
					loading and error state of the data to a common ancestor component,
					and passing down the necessary callbacks and state through props to
					the components that need to use the data.
				</p>
				<p>
					One popular way to handle async data loading is to use the useEffect
					hook in combination with fetch or a library like axios to load data in
					a component after it has been rendered. The useEffect hook allows you
					to synchronize a component with an external system, such as a server,
					by running a side effect (the data loading) after the component has
					rendered. The hook takes a callback function that contains the effect,
					and an array of dependencies.
				</p>
				<p>
					Another way is to use a library like redux-thunk or redux-saga to
					handle the async request and store the data in the store/state. These
					libraries provide an easy way to handle async actions and keep the
					component state clean.
				</p>
				<p>
					In either case, it’s important to keep an eye on the component’s state
					and update it properly with the loaded data.
				</p>
				<p>
					A simple example of loading data asynchronously in a React component
					using useEffect and fetch:
				</p>
				<pre>
					<div className={styles.appCode}>{`
  import { useState, useEffect } from ‘react’;
  
  function MyComponent() {
    const [data, setData] = usestate(null);
    const [error, setError] = usestate(null);
    const [loading, setloading] = usestate(true);
    
    useEffect(() => {
      async function fetchData() {
      try {
      const response = await fetch('https://example.com/data’);
      const json = await response.json();
      setData(json);
      setLoading(false);
      } catch (error) {
      setError(error) {
      setLoading(fase);
          }
      }
      fetchData();
      }, []);
  if (loading) {
  return <p>Loading...</p>;
  }
  if (error) {
  return <p>Error: {error.message}</p>;
  }
  return <p>Data: {JSON.stringify(data)}</p>;
}
      `}</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How do you handle localization in a React application?",
		answer: (
			<>
				<p>
					Handling localization in a React application typically involves creating translated versions of your text content and displaying the appropriate version based on the user’s preferred language.
				</p>
				<p>
					One way to handle localization in a React application is to use a library such as react-i18next. This library provides a set of tools for internationalization and localization, including the ability to define translation keys and their corresponding translations, as well as providing a way to switch between languages at runtime.
				</p>
				<p>
					To use react-i18next in your React application, you would install it using npm and then configure it in your index.js file. After that, youcan use the useTranslation Hook to access the translations in your components.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Explain the concept of a Renderless Component",
		answer: (
			<>
				<p>
					A Renderless Component in React is a component that doesn’t render any
					HTML elements to the DOM, but instead exposes data and methods to
					other components through props and callbacks. The purpose of a
					renderless component is to encapsulate logic that can be reused across
					multiple components and keep the component tree lean and flexible. The
					other components that consume the logic provided by a renderless
					component can then render the HTML elements they need based on the
					information and functionality they receive from the renderless
					component. This approach separates the logic and presentation
					concerns, making the code easier to maintain and test.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question:
			"What is the difference between a presentational component and a container component in React?",
		answer: (
			<>
				<p>
					A presentational component (also known as a dumb component) is a
					component that focuses on UI (user interface) and presentation of the
					data, while a container component (also known as a smart component) is
					a component that focuses on how the data is being managed and provides
					the data for the presentational components.
				</p>
				<p>
					A presentational component receives data as props and returning a
					view, while a container component handles data management and state
					changes, and passing down the data to the presentational components as
					props.
				</p>
				<p>
					The separation of concerns between the two types of components allows
					for better code organization, maintenance, and testing.
				</p>
			</>
		),
	},

	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What are custom hooks?",
		answer: (
			<>
				<p>
					A Custom Hook in React is a JavaScript function that lets you extract
					state logic and behavior out of a component, and reuse it across
					multiple components. Custom Hooks allow you to abstract away state and
					behavior that is common across your application into a reusable piece
					of code.
				</p>
				<p>
					Custom Hooks are named with the prefix use (e.g. useForm, useFetch),
					and can call other Hooks as well as your own custom Hooks. They have
					the same rules as Hooks and can only be called at the top level of
					your component or your own custom Hooks
				</p>
				<p>
					Custom Hooks can receive arguments and return values, just like a
					regular function, but they also have the ability to manage state and
					perform side-effects. By abstracting state and behavior into a Custom
					Hook, you can improve the readability and maintainability of your
					code.
				</p>
				<p>
					Using Custom Hooks can make your components cleaner, more reusable,
					and easier to test, which makes them a powerful tool in your React
					toolkit.
				</p>
				<p>Examples of things you can build with Custom Hooks include:</p>
				<ul>
					<li>Data fetching</li>
					<li>Managing state updates</li>
					<li>Handling form submissions</li>
					<li>Implementing animations and transitions</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How is accessibility handled in React? (6)",
		answer: (
			<>
				<p>
					Handling accessibility in a React application involves making sure
					that your application can be used by as many people as possible,
					including those with disabilities. This can be achieved through
					various techniques, including:
				</p>
				<ul>
					<li>
						<strong>Semantic HTML:</strong> Use semantic HTML elements, such as{" "}
						{`<button>`}, {`<nav>`}, and {`<header>`}, to clearly define the
						structure and purpose of your content.
					</li>
					<li>
						<strong>Accessible Props:</strong> Use accessible props, such as
						aria-label, role, and tabIndex, to provide additional information to
						assistive technologies, such as screen readers.
					</li>
					<li>
						<strong>Keyboard Navigation:</strong> Ensure that all functionality
						can be accessed using a keyboard, and that keyboard focus is managed
						correctly.
					</li>
					<li>
						<strong>Color Contrast:</strong> Make sure that the contrast between
						the text and the background is high enough to be readable by people
						with color blindness or low vision.
					</li>
					<li>
						<strong>Alternative Text:</strong> Provide alternative text for
						images, videos, and other non-text elements to ensure that
						information is accessible to screen reader users.
					</li>
					<li>
						<strong>Screen Reader Testing:</strong> Test your application with
						screen readers and other assistive technologies to identify and fix
						any accessibility issues.
					</li>
				</ul>
				<p>
					It is important to note that accessibility is a continuous process and
					should be considered throughout the development of your React
					application. The use of tools, such as linting rules and Lighthouse,
					can also help ensure that your application is accessible.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question:
			"What is the difference between a reducer and an action in Redux?",
		answer: (
			<>
				<p>
					In Redux, a reducer and an action are two different but related
					concepts.
				</p>
				<p>
					An action is a plain JavaScript object that describes the change that
					should be made to the state of the application. It has a type property
					that defines the type of action being performed, and a payload
					property that provides any additional data needed to perform the
					action. Actions are dispatched from the application to the Redux
					store, which then passes the action to the reducers.
				</p>
				<p>
					A reducer is a pure function that takes the current state of the
					application and an action, and returns the next state of the
					application. The reducer is responsible for handling the actions and
					updating the state accordingly. It should not perform any
					side-effects, such as making API calls, but should instead only return
					the next state.
				</p>
				<p>
					In summary, actions describe what should change, while reducers define
					how the state should change in response to the actions.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What are some ways to validate data? (7)",
		answer: (
			<>
				<p>
					Data validation in a React application can be handled in a variety of
					ways, including:
				</p>
				<ul>
					<li>
						<strong>Form validation:</strong> Use HTML5 form validation
						attributes, such as required, pattern, and min/max, to validate form
						input fields.
					</li>
					<li>
						<strong>Custom validation:</strong> Use JavaScript to write custom
						validation logic to check the format and content of input fields.
					</li>
					<li>
						<strong>Third-party libraries:</strong> Use third-party libraries,
						such as Yup or Joi, to define validation schemas and validate data.
					</li>
					<li>
						<strong>Server-side validation:</strong> Use server-side validation
						to perform more complex and secure validation, such as checking for
						unique usernames or email addresses.
					</li>
					<li>
						<strong>Real-time validation:</strong> Use real-time validation to
						provide immediate feedback to users as they fill out forms, such as
						showing error messages as they type.
					</li>
					<li>
						<strong>Unit testing:</strong> Write unit tests to validate the
						behavior of your validation logic and ensure that it works as
						expected.
					</li>
					<li>
						<strong>Typescript:</strong> Use TypeScript to define types and
						interfaces for your data, and take advantage of its static type
						checking to catch errors at compile time.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How do you handle browser compatibility?",
		answer: (
			<>
				<p>
					To handle browser compatibility in a React application, you can use
					various techniques such as:
				</p>
				<ul>
					<li>
						<strong>Polyfills:</strong> To support older browsers, you can use
						polyfills, which are JavaScript libraries that emulate missing
						features in older browsers.
					</li>
					<li>
						<strong>Browser detection:</strong> You can use libraries like
						browser-detect to detect the user’s browser and its version, and
						adjust your code accordingly.
					</li>
					<li>
						<strong>Feature detection:</strong> Instead of relying on browser
						detection, you can use feature detection to check if a specific
						feature is supported by the user’s browser before using it.
					</li>
					<li>
						<strong>CSS Reset:</strong> You can use CSS resets like
						normalize.css to make sure that all browsers display the styles in a
						consistent way.
					</li>
					<li>
						<strong>Testing:</strong> Regular testing in different browsers and
						devices is essential to catch any compatibility issues early in the
						development process.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question: "What is Thunk?",
		answer: (
			<>
				<p>
					A Thunk in Redux is a function that returns another function instead
					of a plain action object. It’s used to perform asynchronous operations
					and dispatch multiple actions. Thunks allow you to write action
					creators that return a function instead of an action. This can be
					useful for performing asynchronous operations, such as API calls, and
					dispatching multiple actions, such as one to indicate that the API
					call has started and another to indicate that it has finished. The
					inner function receives the store’s dispatch method as an argument,
					which can be used to dispatch actions at any point in the future.
					Thunks are typically implemented using a middleware, such as the
					redux-thunk middleware.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How do you handle security in a React application?",
		answer: (
			<>
				<p>Some strategies include:</p>
				<ul>
					<li>
						<strong>Input validation:</strong> Validate all user inputs on the
						client and server side to prevent any malicious data from being
						processed.
					</li>
					<li>
						<strong>Authenticating and authorizing users:</strong> Use a secure
						authentication mechanism such as JSON Web Tokens (JWT) to ensure
						that only authorized users can access sensitive data.
					</li>
					<li>
						<strong>Storing sensitive data securely:</strong> Do not store
						sensitive information such as passwords and credit card numbers in
						local storage, use encrypted storage instead.
					</li>
					<li>
						<strong>Implementing HTTPS:</strong> Use HTTPS to ensure secure
						communication between the client and server and protect against
						network attacks such as man-in-the-middle attacks.
					</li>
					<li>
						<strong>Keeping dependencies up-to-date:</strong> Regularly update
						React and its dependencies to patch any known security
						vulnerabilities.
					</li>
					<li>
						<strong>Using Content Security Policy (CSP):</strong> Implement a
						Content Security Policy (CSP) to restrict the types of resources
						that can be loaded in a React application and prevent cross-site
						scripting (XSS) attacks.
					</li>
					<li>
						<strong>Regular security audits:</strong> Conduct regular security
						audits to identify and address potential security issues in a timely
						manner.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question: "What is a Provider in Redux.",
		answer: (
			<>
				<p>
					The “Provider” in React-Redux is a higher-order component that wraps
					your React application and provides it with the ability to access the
					Redux store. It allows you to pass the store down to your components
					using context, without having to manually pass it down as props
					through every level of the component tree.
				</p>
				<p>
					By using the Provider, you ensure that all of your components can
					subscribe to the store and dispatch actions to modify its state. In
					other words, the Provider acts as a bridge between your React
					components and your Redux store, making the store accessible to all
					components in your application.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How do you handle code splitting in a React application?",
		answer: (
			<>
			<p>Code splitting in React can be handled using the following approaches:</p>
			<ul>
				<li>
					<strong>React.lazy and Suspense:</strong> Use React.lazy and Suspense to
					lazily load components and display a fallback UI while the component is
					loading.
				</li>
				<li>
					<strong>Dynamic imports:</strong> Use dynamic imports to load modules
					dynamically and asynchronously, and then render the component once it has
					been loaded.
				</li>
				<li>
					<strong>Route-based code splitting:</strong> Use route-based code splitting
					to load only the JavaScript that is needed for a specific route, instead of
					loading all of the JavaScript for the entire application up front.
				</li>
				<li>
					<strong>Webpack’s code splitting:</strong> Use Webpack’s built-in code
					splitting feature to split your code into smaller chunks that can be loaded
					on demand.  Webpack Bundle Analyzer is a tool that provides a visual representation of the code and its size. You can use this tool to identify the large chunks of code that can be split into smaller chunks and loaded lazily.
				</li>
			</ul>
			</>
		)
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Explain the concept of a Sagas in Redux.",
		answer: (
			<>
				<p>A Saga in Redux is a way to manage side effects (e.g. asynchronous operations like data fetching and impure operations like accessing the browser cache) in a Redux application. It is implemented as a middleware using generator functions in JavaScript and runs in the background, separate from the main thread of your application, watching for actions dispatched to the store. When a specific action is detected, the Saga can perform various tasks and trigger additional actions as needed, updating the store based on the results of the asynchronous operations. The key benefit of using Sagas is that they make it easier to reason about, test, and manage the flow of data in your application.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question: "Explain the concept of a Middleware in Redux.",
		answer: (
			<>
				<p>In Redux, a middleware is a software component that sits between the store and the action dispatching process to add additional functionality, such as logging, crash reporting, handling asynchronous actions, etc. It allows you to extend the store’s behavior without modifying the store itself. Middlewares are applied using the applyMiddleware method and can be composed together to achieve a desired behavior. When an action is dispatched, it passes through each middleware in the order they were composed, giving the middleware an opportunity to interact with the action before it reaches the store. This provides a way to manipulate actions and state, and to perform complex actions that can span multiple actions.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is the difference between localization and internationalization?",
		answer: (
			<>
				<p>Internationalization (i18n) is the process of designing and developing software or products that can be adapted to different languages and cultures, while localization (l10n) is the process of adapting a product or content for a specific locale or market.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How do you handle internationalization in a React application?",
		answer: (
			<>
				<p>Handling internationalization (i18n) in a React application involves adapting the user interface and content of the application to meet the language and cultural requirements of different locales.</p>
				<p>There are several libraries and techniques that can be used to implement internationalization in a React application, including:</p>
				<ul>
					<li><strong>react-intl:</strong> A popular library for internationalizing React applications. It provides components for formatting dates, numbers, and strings, as well as handling pluralization and message extraction.</li>
					<li><strong>react-i18next:</strong> This library provides a set of tools for internationalization and localization, including the ability to define translation keys and their corresponding translations, as well as providing a way to switch between languages at runtime.</li>
					<li><strong>Context API:</strong> React’s Context API can be used to store the current locale and make it available to the components that need it. The locale can be changed dynamically to switch the language of the application.</li>
					<li><strong>Custom hooks:</strong> Custom hooks can be written to encapsulate the logic for formatting and retrieving messages, and to make it easier to use in components.</li>
				</ul>
				<p>Implementing internationalization in a React application can greatly improve the user experience for users who speak different languages and are located in different regions. It’s an important consideration for any application that aims to have a global reach.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "How do you pass data from child components to parent components using callbacks?",
		answer: (
			<>
				<ul>
					<li>Create a callback in the parent component which takes in the data needed as a parameter.</li>
					<li>Pass this callback as a prop to the child component.</li>
					<li>Send data from the child component using the callback.</li>
				</ul>
				<p>Step1 and Step2: Create a callback in the parent component, pass this callback as a prop.</p>
				<pre><div className={styles.appCode} >{`
function ParentComponent(props) {
	let [counter, setCounter] = useState(0);
	let callback = valueFromChild => setCounter(valueFromChild);
	return (
		<div>
			<p>Value of counter: {counter}</p>
			<ChildComponent callbackFunc={callback} counterValue={counter} />
		</div>
	);
}
				`}</div></pre>
				<p>As one can see in the code above, we created a function called callback which takes in the data received from the child component as a parameter. Next, we passed the function callback as a prop to the child component.</p>
				<p>Step3: Pass data from the child to the parent component.</p>
				<pre><div className={styles.appCode} >{`
function ChildComponent(props) {
	let childCounterValue = props.counterValue;
	return (
		<div>
			<button onClick={() => props.callbackFunc(++childCounterValue)}>
				Increment Counter
			</button>
		</div>
	);
}
				`}</div></pre>
				<p>In the code above, we have used the props.counterValue and set it to a variable called childCounterValue.</p>
				<p>Next, on button click, we pass the incremented childCounterValue to the props.callbackFunc.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Compare use of Hooks/Functional Components and Class Components in terms of performance.",
		answer: (
			<>
				<p>React Hooks will avoid a lot of overhead such as the instance creation, binding of events, etc., that are present with classes.  Hooks in React will result in smaller component trees since they will be avoiding the nesting that exists in HOCs (Higher Order Components) and will render props require less of work to be done by React.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Redux",
		level: 2,
		question: "Explain the core components of Redux?(4)",
		answer: (
			<>
				<ul>
					<li><strong>Redux Store:</strong> An object that holds the application state</li>
					<li><strong>Action Creators:</strong> These are functions that return actions (objects)</li>
					<li><strong>Actions:</strong> Actions are simple objects which conventionally have two properties- type and payload </li>
					<li><strong>Reducers:</strong> Reducers are pure functions that update the state of the application in response to actions</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Explain CORS in React",
		answer: (
			<>
				<p>Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.  We can setup CORS evironment in frontend using axios or fetch</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What is axios?",
		answer: (
			<>
				<p>A popular library that is used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.</p>
				<p>It is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Does the useState Hook update state immediately?",
		answer: (
			<>
				<p>React do not update immediately, although it might seem to. React keep track of the states by queuing them in the order they are called. React queues all the changes to be made and update once the component Re-render which is not immediate. This is how React knows which value corresponds to which state. It goes as per the queue every time the component tries to re-render.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "Describe when to use useCallback, useMemo and useEffect",
		answer: (
			<>
				<ul>
					<li><strong>useEffect</strong> is a function that can be used as an alternative of lifecycle methods such as componentDidMount, componenetWillUnmount, componentDidUpdate in funcitonal components</li>
					<li><strong>useCallback</strong> can be used when we want to prevent unnecessary renders from the chld components. It helpd to resolve side effects</li>
					<li><strong>useMemo</strong> is used when we want to re-render on based on cache values as makes the application faster</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "Explain the types of routers in React?",
		answer: (
			<>
				<ul>
					<li><strong>Memory Router:</strong> The memory router keeps the URL changes in memory not in the user browsers.</li>
					<li><strong>Browser Router:</strong> It uses HTML 5 history API (i.e. pushState, replaceState, and popState API) to keep your UI in sync with the URL</li>
					<li><strong>Hash Router:</strong> Hash router uses client-side hash routing. It uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL. </li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are the most common approaches for styling a React application?",
		answer: (
			<>
				<ul>
					<li><strong>CSS Classes:</strong> React allows class names to be specified for a component like class names are set for a DOM element in HTML.  When developers first start using React after developing traditional web applications, they often opt for CSS classes as they are already familiar with the approach.</li>
					<li><strong>Inline CSS:</strong> Styling React elements using inline CSS allows styles to be completely scoped to an element. However, certain styling features are not available with inline styles. For example, the styling of pseudo-classes like :hover.</li>
					<li><strong>Pre-processors (Sass, Stylus, and Less)</strong>Pre-processors are often used on React projects. This is because, like CSS, they are well understood by developers and are often already in use if React is being integrated into a legacy application.</li>
					<li><strong>CSS-in-JS Modules (Styled Components, Emotion, and Styled-jsx)</strong> CSS-in-JS modules are a popular option for styling React applications because they integrate closely with React components. For example, they allow styles to change based on React props at runtime. Also, by default, most of these systems scope all styles to the respective component being styled.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 1,
		question: "What are some of the advantages of using create-react-app?",
		answer: (
			<>
				<ul>
					<li>Support for JSX, ES6, and flow statements</li>
					<li>Already built and ready auto-prefixed CSS</li>
					<li>Fast interactive testing components</li>
					<li>Live development servers that help in debugging</li>
					<li>Scripts to handle JSS, CSS, and other files</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "What are the approaches for including polyfills in your create-react-app?",
		answer: (
			<>
				<p>One can make use of Polyfill and create-react-app in multiple ways, like:</p>
				<ul>
					<li>Import the ‘index.js’ or ‘App.js’ file manually using the import statements.</li>
					<li>Using the polyfill.io service to automatically include polyfills based on the features of the app.</li>
					<li>Make use of libraries such as core-js or babel in ‘index.js’.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 2,
		question: "How can you tell React to build in production mode?",
		answer: (
			<>
				<p>React can be coded to directly build into production by setting the process.env.NODE_ENV variable to production.</p>
				<p>Note: When React is in production, warnings, and other development features are not shown.</p>
			</>
		),
	},
];

// {
// rating: 0,
// subject: 'react',
// topic: 'Core React',
// level: 0,
// question: '',
//   answer:
//     <>

//     </>
// },
