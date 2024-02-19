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
					React was created by Jordan Walke, a software engineer at Facebook.
					He was influenced by XHP, an HTML component framework for PHP. It was
					first deployed on Facebook's newsfeed in 2011 and later on Instagram
					in 2012. It was open-sourced at JSConf US in May 2013.
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
		topic: "Intermediate React",
		level: 1,
		question: "What is the difference between an Element and a Component?",
		answer: (
			<>
				<p>
				In React, both elements and components are fundamental concepts, but they serve different purposes:
				</p>
				<ul>
					<li>
							<strong>Element:</strong> An element is the smallest building block in a React application. It describes what you want to see on the screen. Elements are typically created using JSX syntax, which looks like HTML but is actually a syntactic sugar for calling React.createElement(). Elements are plain objects that represent the DOM nodes that make up the UI. For example:
							<div className={styles.appCode}>{`
           			const element = <div>Hello, World!</div>;
          		`}</div>
					</li>
					<li>
						<strong>Component:</strong> A component is a reusable piece of UI that can contain one or more elements. Components are typically written as JavaScript classes or functions. They encapsulate logic and behavior related to a specific part of the UI. Components can accept inputs called props and can maintain their own internal state. They can also be composed of other components. For example:
						<pre>
					<div className={styles.appCode}>{`
const Greeting = (props) => {
    return <div>Hello, {this.props.name}!</div>;
}

// Usage of Greeting component
const element = <Greeting name="John" />;

          `}</div>
				</pre>
					</li>
				</ul>	
				<p>In summary, elements are what components are composed of. Components are reusable, self-contained units that encapsulate a piece of UI logic and can be composed together to build complex UIs. Elements, on the other hand, are plain objects representing the UI nodes rendered to the DOM.</p>
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
		topic: "Intermediate React",
		level: 1,
		question: "What are Pure Components?",
		answer: (
			<>
				<p><strong>Note: Functional components are recommended over classes, so this is considered legacy.</strong></p>
				<p>					
				In React, a pure component is a type of component that is optimized for performance. It's a class component that extends React.PureComponent instead of React.Component. The key feature of pure components is that they implement a shouldComponentUpdate() method with a shallow comparison of props and state. This method helps prevent unnecessary re-renders of the component when its props and state haven't changed.					
				</p>
				<p>The shouldComponentUpdate() method in a pure component performs a shallow comparison of props and state between the current and next render. If it detects that neither the props nor the state have changed, it prevents the component from re-rendering, thus optimizing performance by avoiding unnecessary rendering cycles.  Here's an example of a pure component:</p>
				<pre><div className={styles.appCode} >{`
class MyPureComponent extends React.PureComponent {
	render() {
		return <div>{this.props.value}</div>;
	}
}				
				`}</div></pre>
				<p>Some important considerations include:</p>
				<ul>
					<li><strong>Shallow Comparison Limitations:</strong> Pure components use a shallow comparison to determine whether to re-render. If your props or state contain nested objects or arrays, you need to ensure that changes within those nested structures are properly handled to trigger re-renders when necessary.</li>
					<li><strong>Performance Trade-offs:</strong> While pure components can improve performance by reducing unnecessary re-renders, they also introduce some overhead due to the shallow comparison process. In some cases, the performance gains may not be significant, especially for smaller applications or components with simple rendering logic.</li>
					<li><strong>Functional Components and React.memo():</strong> With the introduction of hooks in React, functional components became more prevalent. You can achieve similar optimization with functional components using React.memo() to memoize the rendering of a functional component based on its props.</li>
				</ul>
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
					that may change over the lifetime of the component. In React, it is important to remember that whenever the state object changes, the component re-renders.
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
					Props in React the following:
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
            <Element someProp={"1"} />
          `}</div>
				<p>
					The 'someProp' attribute name then
					becomes a property attached to React's native props object which
					exists on all components created using React
					library.
				</p>
				<div className={styles.appCode}>{`
            props.someProp
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
					destructing. The above child component can be simplified like so:
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
					characteristics.</p>
				<p><strong>State</strong></p>
				<ul>
					<li>Managed by the component itself and can be
					updated using the <strong>useState</strong> hook or the <strong>setState()</strong> function (legacy class component approach).</li>
					<li>Can be modified by the component and is used to manage the
					internal state of the component.</li>
					<li>Changes in the state trigger a
					re-render of the component and its children.</li>
				</ul>
				<p><strong>Props (short for properties)</strong></p>
				<ul>
					<li>Passed to a component by its parent component. </li>
					<li>Are <strong>read-only</strong>, meaning  that they cannot be modified by the component itself</li>
					<li>Can be used to configure the behavior of a component and to pass data between components.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "Why should we not update the state directly?",
		answer: (
			<>
				<p>
				React will ignore your update if the next state is equal to the previous state, as determined by an Object.is comparison. This usually happens when you change an object or an array in state directly:
				</p>
				<pre>
					<div className={styles.appCode}>{`
//Wrong
obj.x = 10;  // Wrong: mutating existing object
setObj(obj); // Doesn't update because obj is the same object (even if it has different properties)
          `}</div>
				</pre>
				<p>
					Instead, you should create a new object or array and set the state with that:
				</p>
				<pre>
					<div className={styles.appCode}>{`
//Correct
setObj({ ...obj, x: 10 }); // Correct: creating a new object
					`}</div>
				</pre>
				<p>
					When you update the state directly, you are bypassing React's state
					management, which can lead to unexpected behavior and bugs. By
					creating a new object or array and setting the state with that, you
					ensure that React's state management is used correctly and that the
					component will re-render as expected.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "What is the difference between HTML and React event handling?",
		answer: (
			<>
				<p>
					Below are some of the main differences between HTML and React event
					handling,
				</p>
				<ul>
					<li>In HTML, the event name follows the lowercase naming convention as in: 
						<div className={styles.appCode}>{`<button onclick="handleClick()"></button>`}</div>
						While in React it follows camelCase naming convention: 
						<div className={styles.appCode}>{` <button onClick={handleClick}>`}</div>
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
							&quot;handleClick&quot; function in the first point for
							example)
						</p>
					</li>
					<li>In React.js, because of JSX, a function is passed as an event handler, instead of the string in HTML</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
					When you don't have stable IDs for rendered items, using the
					item index as a key as a last resort, but is considered an anti-pattern.  A better alternative would be to use a third-party library for generating unique IDs.
				</p>
				<p>
					<strong>Note:</strong>
				</p>
				<ol>
					<li>
						Using <em>indexes</em> for <em>keys</em> is{" "}
						<strong>not recommended</strong> if the order of items may change.
						This can negatively impact performance and may cause issues with
						component state.  For this reason, using indexes as keys should be avoided altogether, because a given use case may change as the application grows.
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
		topic: "Intermediate React",
		level: 1,
		question: "What are refs?",
		answer: (
			<>
				<p>
					<strong>Refs</strong> provide a way to access DOM nodes or React elements
					created in the render method. They are used to interact with the DOM
					and React components in several ways, such as focusing on an input
					field, triggering imperative animations, or integrating with third-party
					DOM libraries.
				</p>
				<p>
					There are two types of refs: <strong>string refs</strong> and <strong>callback refs</strong>.
				</p>
				<p>
					<strong>String Refs:</strong> (legacy) This is the older way of
					creating refs. It is not recommended because string refs have problems
					and are considered legacy. String refs were <strong>removed in React
					v16</strong>.
				</p>
				<p>
					<strong>Callback Refs:</strong> This is the modern way of creating
					refs. It is recommended because it is more flexible and has fewer
					issues than string refs.
				</p>
				<p><strong>Note:</strong>  Refs should be avoided because they escape React’s state management and can lead to hard-to-understand
					code and bugs. In most cases, you should use state and props to manage
					your application’s state and data flow.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
		level: 1,
		question: "What are forward refs?",
		answer: (
			<>
				<p>
					<strong>Forwarding refs</strong> is a technique that allows a parent
					component to pass its ref to a child component. This is useful when
					you want to access a child component’s DOM node or React element from a
					parent component.
				</p>
				<p>
					To create a forward ref, you can use the <strong>React.forwardRef</strong>{" "}
					function. This function takes a render function as its argument and
					returns a new component that forwards the ref to the child component.
				</p>
				<p>
					Here’s an example of a forward ref:
				</p>
				<pre>
					<div className={styles.appCode}>{`
import React, { forwardRef, useRef } from 'react';

const MyComponent = forwardRef((props, ref) => {
	return <input ref={ref} />;
}

const App = () => {
	const inputRef = useRef();
	return <MyComponent ref={inputRef} />;
}
					`}</div>
				</pre>
				<p>
					In this example, the <strong>inputRef</strong> ref is passed to the{" "}
					<strong>MyComponent</strong> component using the <strong>ref</strong>{" "}
					attribute. The <strong>forwardRef</strong> function then forwards the
					ref to the <strong>input</strong> element inside the{" "}
					<strong>MyComponent</strong> component.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
		level: 2,
		question: "Why are String Refs legacy?",
		answer: (
			<>
				<p>
					String refs are not recommended and are considered legacy. String refs were <strong>removed in React v16</strong> because of the following issues.
				</p>
				<ul>
					<li>
						<strong>They are not composable:</strong> String refs are not composable, meaning that you cannot pass them as props to other components. This makes them less flexible and harder to work with in larger applications.
					</li>
					<li>
						<strong>They are not type-safe:</strong> String refs are not type-safe, meaning that they do not provide any type checking or validation. This can lead to runtime errors and bugs that are difficult to track down.
					</li>
					<li>
						<strong>They are not consistent:</strong> String refs are not consistent with the rest of the React API, which uses a more functional and declarative approach. This makes them harder to reason about and understand for developers who are new to React.
					</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		question: "How does the Virtual DOM work?",
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
		topic: "Intermediate React",
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
		topic: "Advanced React",
		level: 2,
		question: "What is React Fiber?",
		answer: (
			<>
				<p>
					<em>React Fiber</em> is a complete reimplementation of the React
					reconciliation algorithm, intended to increase its suitability for
					areas like animation, layout, and gestures. Its headline feature is{" "}
					<strong>incremental rendering</strong>: the ability to split rendering
					work into chunks and spread it out over multiple frames.
				</p>
				<p>
					Its main goals are:
				</p>
				<ol>
					<li>
						<strong>Improved performance:</strong> React Fiber is aimed at
						improving the perceived performance for complex React applications.
						It does so by allowing React to break the limits of the call stack.
						This lets it pause or start rendering work whenever required
					</li>
					<li>
						<strong>Better suitability for advanced UI:</strong> React Fiber also
						increases the suitability of the React library to create animations,
						layouts, and gestures.
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
						smaller chunks that can be paused, resumed, or aborted based on a set
						priority order, React Fiber helps apps deliver a more fluid
						experience. Fiber lets React fine-tune the rendering to ensure that
						the most common use-cases (or) the most important updates are
						computed at the earliest. Specifically, it helps improve the speed of
						rendering components at start-up, as they could be made available to
						the browser before the entire bundle finishes downloading.
					</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
		level: 2,
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
		topic: "Intermediate React",
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
		topic: "Advanced React",
		level: 2,
		question: "What is the difference between createElement and cloneElement?",
		answer: (
			<>
				<p>
					<strong>createElement</strong> is used to create a new React element
					from the given component and props, and can be used as an alternative to writing JSX.  Here is an example:
				</p>
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';

const element = React.createElement('div', { className: 'container' }, 'Hello, world!');
					`}</div>
				</pre>
				<p>
				<strong>cloneElement</strong> is used to clone and return a new React
					element using the given element and new props. It is used to modify the
					props of an existing element and return a new element with the updated
					props.  Here is an example:
				</p>
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';

const element = <div>Hello, world!</div>;
const newElement = React.cloneElement(element, { className: 'container' });
					`}</div>
				</pre>
				<p>
					In this example, <strong>newElement</strong> is a clone of{" "}
					<strong>element</strong> with the updated <strong>className</strong>{" "}
					prop.
				</p>		
				<p><strong>Note:</strong> Using cloneElement is uncommon and can lead to fragile code.  Cloning children makes it hard to tell how the data flows through your app.</p>
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
		topic: "Intermediate React",
		level: 1,
		question: "What are the differences between component vs effect lifecycles?",
		answer: (
			<>
				<p><strong>Note:</strong>  It is recommended to define components as functions instead of classes.</p>
				<p>
					The <strong>component</strong> lifecycle has three distinct phases:
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
				<p>Component lifecycle events are strongly associated with the class component paradigm.  For functional components (the recommended pattern), effect events are more relavent.</p>
				<p>
				Effects have a different lifecycle from components. Components may mount, update, or unmount. An Effect can only do two things: to <strong>start</strong> synchronizing something, and later to <strong>stop</strong> synchronizing it. This cycle can happen multiple times if your Effect depends on props and state that change over time. React provides a linter rule to check that you’ve specified your Effect’s dependencies correctly. This keeps your Effect synchronized to the latest props and state.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
		level: 2,
		question: "How should you think of effect lifecycles?",
		answer: (
			<>
				<p>n React, effect lifecycles are a crucial concept for managing side effects within functional components. They allow you to perform tasks such as data fetching, subscriptions, or DOM manipulation in response to component lifecycle events. Effect lifecycles replace the lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount) used in class components.</p>
				<p>Effect lifecycles can be thought of as a series of phases that occur during the lifecycle of a component:</p>
				<ul>
					<li>
						<strong>Mounting Phase:</strong> 
						<ul>
							<li>useEffect with an empty dependency array ([]) simulates componentDidMount. It runs once after the initial render and is used for tasks that should only happen once when the component mounts.</li>
							<li>useEffect without a dependency array runs after every render. It's equivalent to componentDidMount and componentDidUpdate combined. It's used for tasks that need to run after the initial render and after subsequent updates.</li>
						</ul>
					</li>
					<li>
						<strong>Updating Phase:</strong> 
						<ul>
							<li>useEffect with dependencies (e.g., [props, state]) runs after every render where the dependencies have changed. It's used for tasks that depend on specific props or state values and should only run when those values change.</li>
							<li>Returning a cleanup function from useEffect simulates componentWillUnmount. It's used for cleaning up any resources (e.g., subscriptions, event listeners) created in the effect.</li>
						</ul>
					</li>
					<li>
						<strong>Unmounting Phase:</strong>   
						<ul>
							<li>The cleanup function returned from the last render's effect runs before the component is unmounted from the DOM. It's used for cleaning up any resources to prevent memory leaks or stale data.</li>
						</ul>
					</li>
				</ul>
				<p>Here's a summary of how to think about effect lifecycles:</p>
				<ul>
					<li><strong>Declare Effects:</strong> Use the useEffect hook to declare side effects within functional components.</li>
					<li><strong>Specify Dependencies:</strong> Use dependency arrays to control when effects run and prevent unnecessary re-renders.</li>
					<li><strong>Clean Up:</strong> Return a cleanup function from effects to perform cleanup tasks when the component unmounts or when dependencies change.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
				<p>Though the current best-practice is to use functional over class components, some argue that Higher Order Component design is a more effective approach for functional programming patterns because they embrace composition.</p>
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
		topic: "Intermediate React",
		level: 1,
		question: "What is a children prop?",
		answer: (
			<>
				<p>
					The <strong>children</strong> prop is a special prop that is passed to
					components automatically. It is used to render the content that is
					passed between the opening and closing tags of a component. This
					allows you to create components that wrap other components and render
					the content inside them.
				</p>
				<p>
					For example, you can create a <strong>Card</strong> component that
					wraps other components and renders them inside a card layout:
				</p>
				<pre>
					<div className={styles.appCode}>{`
const Card = ({ children }) => {
	return (
		<div className="card">
			{children}
		</div>
	);
}
					`}</div>
				</pre>
				<p>
					Then you can use the <strong>Card</strong> component to wrap other
					components and render them inside a card layout:
				</p>
				<pre>
					<div className={styles.appCode}>{`
<Card>
	<h1>Hello, world!</h1>
	<p>This is a card component.</p>
</Card>
					`}</div>
				</pre>
				<p>
					In this example, the <strong>children</strong> prop is used to render
					the content inside the <strong>Card</strong> component.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Core React",
		level: 0,
		question: "How are comments written in React?",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
		level: 1,
		question: "How do you set state with a dynamic key/property name?",
		answer: (
			<>
				<p>
					To set state with a dynamic key/property name, you can use the ES6
					computed property name syntax. This allows you to compute the property
					name of the state object with an expression. Here’s an example:
				</p>
				<pre>
					<div className={styles.appCode}>{`
import React, { useState } from 'react';

const MyComponent = () => {
	const [state, setState] = useState({});
	const key = 'name';
	const value = 'John Doe';
	setState({ ...state, [key]: value });
	return (
		<div>
			{state.name}
		</div>
	);
}
					`}</div>
				</pre>
				<p>
					In this example, the <strong>key</strong> variable is used to compute
					the property name of the state object. The computed property name is
					then used to set the state with the <strong>value</strong> variable. 
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question:
			"How do you pass a function as a parameter?",
		answer: (
			<>
				<p>Simply pass the function itself without parenthesis as in this example:</p>
				<pre>
					<div className={styles.appCode}>
{`// Correct: handleClick is declared as a function, then passed as a reference!
const handleClick = () => {
	console.log('Button clicked');
}

<button onClick={handleClick}>{'Click Me'}</button>`}
          </div>
				</pre>
				<pre>
					<div className={styles.appCode}>
					{`// Correct: event handler defined inline, then passed as a reference!
const handleClick = () => {
	console.log('Button clicked');
}

<button onClick={() => {
	console.log('Button clicked');
})}>{'Click Me'}</button>`}
          </div>
				</pre>
				<p>
					If you pass the function with open/close parenthesis, it will call the function when the element is rendered as seen here:
				</p>
				<pre>
					<div className={styles.appCode}>
{`// Wrong: handleClick is called instead of being passed as a reference!
const handleClick = () => {
	console.log('Button clicked');
}

<button onClick={handleClick}>{'Click Me'}</button>`}
          </div>
				</pre>
				<pre>
					<div className={styles.appCode}>
{`// Wrong: event handler defined inline, then is called instead of being passed as a reference!
<button onClick={console.log('Button clicked')}>{'Click Me'}</button>`}
          </div>
				</pre>
				<p>In the first example, the function is past as an object and can be called when the button is clicked.  In the second example, the function is called with each render.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "How do you get a React.lazy() function to import a named export?",
		answer: (
			<>
				<p>
					Currently <strong>React.lazy</strong> function supports default
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
		topic: "Intermediate React",
		level: 1,
		question: 'Why does React use "className" over "class" attribute?',
		answer: (
			<>
				<p>
				React uses the <strong>className</strong> attribute instead of the <strong>class</strong> attribute for styling HTML elements in JSX to avoid conflicts with the class JavaScript keyword.
				</p>
				<ul>
					<li><strong>Avoiding Confusion with JavaScript class Keyword:</strong> In JavaScript, class is a reserved keyword used to define a class for object-oriented programming. When writing JSX, using the class attribute could lead to confusion because it might be mistaken for the JavaScript class keyword. To prevent this confusion, React opts to use className instead of class for specifying CSS classes in JSX.</li>
					<li><strong>Consistency with HTML:</strong> While class is the attribute name used in HTML to specify CSS classes, JSX is a syntax extension for JavaScript, and React aims to keep its syntax consistent with JavaScript conventions. By using className, React maintains consistency with JavaScript while still achieving the same functionality as the HTML class attribute for styling elements.</li>
				</ul>
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';

function MyComponent() {
  return (
    <div className="container">
      <p className="text">Hello, World!</p>
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
		topic: "Intermediate React",
		level: 1,
		question: "What are fragments?",
		answer: (
			<>
				<p>In React, fragments are a feature that allows you to group multiple children elements without adding extra nodes to the DOM. Fragments were introduced in React 16.2 as a way to address the limitation of returning only a single element from a component's render method.</p>
				<p>Before fragments, if you wanted to return multiple adjacent JSX elements from a component, you had to wrap them in a parent element, like a {`<div>`}, which could sometimes lead to unnecessary DOM elements.</p>
				<p>With fragments, you can group elements without adding extra nodes to the DOM. Fragments look like empty JSX tags (<>...</> or {`<React.Fragment>...</React.Fragment>`}) and allow you to return multiple elements without a wrapping parent element.</p>
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';

function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>React Fragments</p>
    </>
  );
}

          `}</div>
				</pre>
				<p>In this example, {`<></>`} is a fragment shorthand, and it allows you to return both the {`<h1>`} and {`<p>`} elements without wrapping them in a parent {`<div>`}. </p>
				<p>Alternatively, you can use {`<React.Fragment>...</React.Fragment>`} syntax if you need to include keys or other attributes on the fragment.</p>
				<p>Fragments are particularly useful in scenarios where you need to return multiple elements from a component's render method, such as when mapping over an array to render a list of items or when rendering adjacent elements without a common parent.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Advanced React",
		level: 2,
		question: "What are portals in React?",
		answer: (
			<>
				<p>In React, portals provide a way to render children components into a DOM node that exists outside of the parent hierarchy. This allows you to render components at any location in the DOM tree, even if they are not direct children of the root React component.</p>
				<p>Portals are useful for scenarios such as modals, tooltips, and popovers, where you need to render content that overlays other parts of the UI without affecting the layout or styles of the parent components</p>
				<p>To create a portal in React, you use the ReactDOM.createPortal() method. This method takes two arguments: the first argument is the JSX content you want to render, and the second argument is the DOM node where you want to render the content.  For example:</p>
				<pre>
					<div className={styles.appCode}>{`
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    // Create a new div element as the portal container
    const modalContainer = document.createElement('div');
    document.body.appendChild(modalContainer);
    setModalRoot(modalContainer);

    // Cleanup function to remove the portal container when component unmounts
    return () => {
      document.body.removeChild(modalContainer);
    };
  }, []);

  if (!isOpen || !modalRoot) {
    return null; // Don't render anything if modal is closed or portal container is not available
  }

  // Use ReactDOM.createPortal() to render the children into the portal container
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello, I'm a modal!</h2>
        <p>This content is rendered outside the root component's DOM hierarchy.</p>
      </Modal>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

        `}</div>
				</pre>
				<p>In this example:</p>
				<ul>
					<li>The Modal component is a functional component that takes props isOpen and onClose to control its visibility and define the close action. It renders a modal overlay and content, and it utilizes ReactDOM.createPortal() to render the content into a portal container.</li>
					<li>The App component renders a button to toggle the modal's visibility and includes the Modal component with the desired content.</li>
					<li>Inside the Modal component, a portal container is created using the useState hook. The useEffect hook is used to create the portal container when the component mounts and to remove it when the component unmounts.</li>
					<li>The content of the modal is rendered inside the portal container using ReactDOM.createPortal().</li>
					<li>Clicking outside the modal content (on the overlay) or clicking the close button triggers the onClose function, which closes the modal by updating the isOpen state.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
				<pre><div className={styles.appCode} >{`
import React from 'react';

// Stateless functional component
const Greeting = ({ name }) => {
	return (
		<div>
			<h1>Hello, {name}!</h1>
			<p>Welcome to our website.</p>
		</div>
	);
};

export default Greeting;				
				`}</div></pre>
				<p>You can then use this component in other parts of your application like so:</p>
				<pre><div className={styles.appCode} >{`
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default App;			
				`}</div></pre>
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
		topic: "Intermediate React",
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
					initialized in the <strong>constructor</strong>.  This is a legacy pattern no longer recommended, but you may encounter in legacy code.
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
		level: 1,
		question: "What are error boundaries?",
		answer: (
			<>
				<p>In React, an error boundary is a component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the entire application. Error boundaries are useful for handling errors that occur during rendering, in lifecycle methods, and in constructors of the components they wrap.  For example:</p>
				<pre>
					<div className={styles.appCode}>{`
import React, { useState } from 'react';

// Error boundary component
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const componentDidCatch = (error, errorInfo) => {
    // Catch error and update state
    setHasError(true);
    setError(error);
    // You can also log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  };

  // Render fallback UI if error is caught
  if (hasError) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{error && error.toString()}</p>
      </div>
    );
  }

  // Render children if no error
  return children;
}

// Component that may throw an error
function ChildComponent() {
  const [count, setCount] = useState(0);

  // Simulate an error by dividing by zero when count equals 5
  if (count === 5) {
    throw new Error('Error: Count cannot be 5.');
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

// App component that uses the error boundary
function App() {
  return (
    <div>
      <h1>Error Boundary Example</h1>
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
            `}</div>
				</pre>
				<p>In this example:</p>
				<ul>
					<li>ErrorBoundary is a functional component that wraps its children. It uses the useState hook to manage the error state.</li>
					<li>The componentDidCatch function is a lifecycle method (although it's written as a regular function here) that catches errors thrown by its children components. It updates the state with the error information.</li>
					<li>Inside ChildComponent, an error is intentionally thrown when the count state reaches 5.</li>
					<li>App component renders ChildComponent wrapped in ErrorBoundary. If an error occurs inside ChildComponent, it is caught by ErrorBoundary, which then renders a fallback UI instead of crashing the entire application.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
		level: 2,
		question: "What does the react-dom package do?",
		answer: (
			<>
				<p>The <strong>'react-dom'</strong> package is a package in React ecosystem that provides DOM-specific methods that are not present in the core React library (<strong>'react'</strong>). It serves as the entry point to the DOM and is responsible for rendering React components into the browser DOM.</p>
				<p>Here are some of the key functionalities provided by the <strong>react-dom</strong> package:</p>
				<ol>
					<li>
						<strong>ReactDOM.render():</strong>  This method is used to render React elements into the DOM. It takes two arguments: the React element to render and the DOM container where the element should be rendered.
					</li>
					<li>
						<strong>ReactDOM.hydrate():</strong>  Similar to ReactDOM.render(), but it is used for hydrating a container that already contains HTML content generated by the server. It enables React to attach event listeners to the existing markup, making it interactive.
					</li>
					<li>
						<strong>ReactDOM.unmountComponentAtNode():</strong>  This method is used to unmount and remove a React component from the DOM. It takes a DOM container as an argument.
					</li>
					<li>
						<strong>ReactDOM.findDOMNode():</strong>  This method is used to get the DOM node associated with a React component instance. Note that this method should be used with caution as it may cause issues with performance and refactoring.
					</li>
					<li>
						<strong>ReactDOM.createPortal():</strong>  This method is used to render children components into a DOM node that exists outside of the parent hierarchy. It's commonly used for creating modals, tooltips, and popovers.
					</li>
				</ol>
				<p>Overall, the react-dom package bridges the gap between React's virtual DOM and the browser's actual DOM, providing methods for rendering and interacting with React components in web applications. It's an essential part of building React applications for the web.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
		level: 2,
		question: "What is react-dom/server?",
		answer: (
			<>
				<p>
					The <strong>react-dom/server</strong> package is a part of the React ecosystem that allows you to render React components on the server side. It provides methods for rendering React components to static markup or streaming HTML on the server, which can then be sent to the client as part of an initial HTML response.  Here are some of the key functionalities it provides:</p>
				<ol>
					<li>
						<strong>ReactDOMServer.renderToString():</strong>  This method takes a React element and returns its HTML markup as a string. It's commonly used to render React components on the server and include them in the initial HTML response sent to the client.</li>
					<li>
						<strong>ReactDOMServer.renderToStaticMarkup():</strong>  Similar to ReactDOMServer.renderToString(), but it renders the component to static markup, which does not include React-specific attributes such as data-react-id. It's useful for scenarios where you need clean HTML markup without React-specific attributes.</li>
					<li>
						<strong>ReactDOMServer.renderToNodeStream() and ReactDOMServer.renderToStaticNodeStream():</strong>  These methods are used to render React components to a readable stream of HTML nodes. They are useful for streaming large amounts of HTML content to the client, improving performance by reducing time to first byte.</li>
				</ol>
				<p>Here's a basic example of how react-dom/server can be used:</p>
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App'; // Your React component

// Render the App component to HTML string
const htmlString = ReactDOMServer.renderToString(<App />);

// Now you can send htmlString as part of the initial HTML response to the client
        `}</div>
				</pre>
				<p>In this example, ReactDOMServer.renderToString() is used to render the App component to a string of HTML markup, which can then be included in the initial HTML response sent to the client. This allows the client to receive pre-rendered HTML content, improving perceived performance and search engine optimization (SEO) for React applications.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
		level: 2,
		question: "How do you use dangerouslySetInnerHTML in React?",
		answer: (
			<>
				<p>There are legitimate use cases for using dangerouslySetInnerHTML in React, but it should be used with caution due to the security risks associated with it. This prop allows you to set the inner HTML of a DOM element directly from React, bypassing React's built-in XSS protection mechanisms. As the name suggests, it's considered "dangerous" because it exposes your application to potential security vulnerabilities if not used carefully.</p>
				<p>Here are some use cases where dangerouslySetInnerHTML might be appropriate:</p>
				<ul>
					<li><strong>Integrating with Third-Party Libraries:</strong> If you need to integrate with a third-party library or service that requires HTML markup, such as rendering rich text from a content management system (CMS) or displaying user-generated content with HTML formatting, dangerouslySetInnerHTML can be used to render that HTML content.</li>
					<li><strong>Embedding External Widgets or Components:</strong> When integrating with external widgets or components that provide HTML markup, such as embedded maps, social media posts, or chat widgets, dangerouslySetInnerHTML can be used to render the widget's HTML code.</li>
					<li><strong>Rendering Pre-rendered HTML:</strong> In server-side rendering (SSR) scenarios, you may need to render pre-rendered HTML content generated by the server. dangerouslySetInnerHTML can be used to render this content on the client side without re-rendering it.</li>
				</ul>
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';

function MyComponent() {
  const htmlContent = '<p>This is <strong>HTML</strong> content.</p>';

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default MyComponent;
          `}</div>
				</pre>
				<p>In this example, the htmlContent variable contains a string of HTML markup. By passing it to the dangerouslySetInnerHTML prop with the __html key, React renders the HTML content inside the {`<div>`}. However, be aware that using dangerouslySetInnerHTML circumvents React's virtual DOM reconciliation mechanism and opens your application to potential security vulnerabilities if the HTML content is not trusted or sanitized. Always ensure that the content you're rendering with dangerouslySetInnerHTML is safe and trusted.</p>
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
		topic: "Advanced React",
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
		topic: "Intermediate React",
		level: 1,
		question: "How do you memoize a component?",
		answer: (
			<>
				<p>You can use the React.memo, a higher-order component(HOC) provided by React. React.memo is similar to React.PureComponent for class components, but it also works with functional components. It memoizes the result of the component's render function based on its props, preventing unnecessary re-renders if the props haven't changed.  Here's how you can memoize a functional component using React.memo:</p>
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';

const MyComponent = React.memo(function MyComponent(props) {
  // Component logic
});
          `}</div>
				</pre>
				<p>You can also define the component seperately and then memoize it:</p>
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';

function MyComponent(props) {
  // Component logic using props
}

export default React.memo(MyComponent);
          `}</div>
				</pre>
				<p>React.memo is used to memoize entire functional components based on their props.  Also, useMemo is used to memoize specific values or computations within a functional component based on dependencies. They are both useful for optimizing performance in React applications but are applied in different scenarios.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "What is CRA and its benefits?",
		answer: (
			<>
				<p>CRA stands for Create React App. It's a popular and officially supported toolchain provided by the React team for quickly setting up and bootstrapping new React applications with minimal configuration. Create React App abstracts away the build configuration and provides a pre-configured environment, allowing developers to focus on writing React code without worrying about the setup and configuration details.  Here are some of the benefits of using Create React App:</p>
				<ol>
					<li><strong>Quick Setup:</strong> Create React App provides a single command (npx create-react-app my-app or yarn create react-app my-app) to set up a new React project. This command creates a new directory with a pre-configured project structure, including all the necessary build tools and dependencies.</li>
					<li><strong>Zero Configuration:</strong> Create React App abstracts away the build configuration, so you don't have to deal with complex webpack or Babel configurations. It provides sensible defaults and handles the configuration internally, allowing you to start coding right away.</li>
					<li><strong>Built-in Development Server:</strong> Create React App includes a built-in development server with hot reloading, which automatically refreshes the browser whenever you make changes to your code. This speeds up the development process and improves developer productivity.</li>
					<li><strong>Optimized Production Builds:</strong> Create React App automatically optimizes your production build for performance by minifying and bundling your code, removing unused dependencies, and generating source maps for debugging.</li>
					<li><strong>Support for Modern JavaScript Features:</strong> Create React App comes pre-configured with support for modern JavaScript features, including ES6 syntax, JSX, and TypeScript.</li>
					<li><strong>Easy Deployment:</strong> Create React App generates static assets that can be easily deployed to various hosting platforms, such as Netlify, Vercel, AWS Amplify, GitHub Pages, and more.</li>
					<li><strong>Community Support and Maintenance:</strong> Create React App is maintained by the React team and has a large community of developers contributing to its improvement and maintenance. It receives regular updates, bug fixes, and new features to stay up-to-date with the latest trends and best practices in the React ecosystem.</li>
				</ol>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
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
		topic: "Advanced React",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
		topic: "Advanced React",
		level: 2,
		question: "Are custom HTML attributes supported in React?",
		answer: (
			<>
				<p>
				Custom HTML attributes are attributes added to HTML elements that are not part of the standard HTML specification. These attributes are typically used to store additional information or metadata about an element that is not represented by standard HTML attributes.
				</p>
				<p>In traditional HTML, custom attributes are technically allowed, but they are not considered valid HTML and may cause issues with validation and compatibility with certain browsers. However, they are commonly used in web development for various purposes, such as storing data for JavaScript manipulation, styling, or as hooks for CSS or JavaScript frameworks.  An example of a custom HTML attribute:</p>				
				<pre>
					<div className={styles.appCode}>{`<div id="myDiv" data-custom="value">...</div>`}</div>
				</pre>
				<p>In the example above, data-custom is a custom attribute used to store custom data associated with the div element.</p>
				<p>In React, custom HTML attributes are fully supported, and they are typically prefixed with data- to adhere to the HTML5 specification and to avoid conflicts with future standard attributes. React treats custom attributes as regular DOM properties, allowing you to access and manipulate them using JavaScript.  Here's an example of using custom attributes in React:</p>				
				<pre>
					<div className={styles.appCode}>{`
import React from 'react';

function MyComponent() {
  return (
    <div data-custom="value">...</div>
  );
}
					`}</div>
				</pre>
				<p>In this example, data-custom is a custom attribute added to the div element in JSX. React will render this attribute as-is in the resulting HTML output, and you can access it using JavaScript for various purposes, such as styling, event handling, or data manipulation.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "Can you force a component to re-render without updating state?",
		answer: (
			<>
				<p>
					By default, when your component's state or props change, your
					component will re-render. In class components, you can tell React that the component needs
					re-rendering by calling <strong>forceUpdate()</strong>.  But since fuctional components are recommended over class components, and in functional components, you cannot directly call forceUpdate() like you can in class components, you can achieve a re-render without updating state by using a workaround involving a key prop. By changing the value of the key prop, React will treat the component as a completely new instance, triggering a re-render.  Here's an example using a functional component:</p>
				
				<pre><div className={styles.appCode}>{`
import React, { useState } from 'react';

function MyComponent() {
	const [key, setKey] = useState(0);

	const handleClick = () => {
		// Increment the key value to force re-render
		setKey(prevKey => prevKey + 1);
	};

	return (
		<div key={key}>
			<button onClick={handleClick}>Force Update</button>
			<p>Last updated: {new Date().toLocaleTimeString()}</p>
		</div>
	);
}				
        `}</div></pre>
				<p>In this example:</p>
				<ul>
					<li>We use the useState hook to manage the key state. The initial value is set to 0.</li>
					<li>The component is re-rendered every time the key state changes.</li>
					<li>When the button is clicked, the handleClick function is called, which updates the key state by incrementing its value. This triggers a re-render of the component with a new key value, effectively forcing the re-render without updating state or props.</li>
				</ul>
				<p>This approach is useful for cases where you need to force a re-render in a functional component without changing its state or props, but it should be used sparingly as changing the key prop may have unintended consequences, such as unmounting and remounting child components.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Intermediate",
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
		topic: "Intermediate",
		level: 1,
		question: "In Redux, what is an action?",
		answer: (
			<>
				<p>In Redux, an action is a plain JavaScript object that represents an intention to change the state of the application. Actions are the only source of information for the Redux store, and they are dispatched to the store using the store.dispatch() method. Actions typically have a type property that describes the type of action being performed and may also contain additional data payload that is necessary for updating the state.  Here's an example of an action:</p>
				<pre><div className={styles.appCode}>{`
const incrementCounter = () => ({
	type: 'INCREMENT_COUNTER'
});
        `}</div></pre>
				<p>In this example:</p>
				<ul>
					<li>incrementCounter is an action creator, which is a function that returns an action object.</li>
					<li>The action object returned by incrementCounter has a type property set to 'INCREMENT_COUNTER'.</li>
					<li>The type property describes the intention to increment the counter in the Redux store.</li>
				</ul>
				<p>Actions are usually dispatched to the Redux store using the store.dispatch() method:</p>
				<pre><div className={styles.appCode}>{`
store.dispatch(incrementCounter());
        `}</div></pre>
				<p>When an action is dispatched, Redux passes the action object to the store's reducer function. The reducer function then uses the action type to determine how to update the state of the application.</p>
				<p>Actions are central to the Redux pattern and serve as a clear and predictable way to describe state changes in an application. They enable a separation of concerns between different parts of the application and facilitate easier testing and debugging.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
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
		topic: "Intermediate - Testing",
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
		topic: "Advanced React",
		level: 2,
		question: "What is the Flux dispatcher?",
		answer: (
			<>
				<p>The Flux Dispatcher is a central hub in the Flux architecture pattern, which is a unidirectional data flow pattern used in building client-side web applications. The Dispatcher acts as a mediator between the actions (events) triggered by the application and the stores (data) that manage the application state.</p>
				<p>Here's a simplified overview of how the Flux Dispatcher works:</p>
				<ol>
					<li><strong>Dispatching Actions:</strong> Components or other parts of the application trigger actions to describe events that occur within the application. For example, a user clicks a button, which triggers an action to update the application state.</li>
					<li><strong>Dispatcher Registration:</strong> Stores (or sometimes other components) register callback functions with the Dispatcher. These callback functions are responsible for updating the state in response to specific actions.</li>
					<li><strong>Action Handling:</strong> When an action is dispatched, the Dispatcher receives the action object and forwards it to all registered callback functions (stores). Each store checks whether it needs to respond to the action based on its type. If the store decides to respond, it updates its state accordingly.</li>
					<li><strong></strong>Unidirectional Data Flow: After the stores update their state in response to the action, they emit change events to notify the views (components) that the state has been updated. Views then retrieve the updated state from the stores and re-render themselves accordingly.</li>
				</ol>
				<p>The Flux Dispatcher ensures that actions are processed in a predictable order and that changes to the application state are propagated in a consistent manner. It helps to enforce the unidirectional data flow, making it easier to reason about how data flows through the application and how changes are propagated.</p>
				<p>While the Flux pattern originated with Facebook's Flux architecture, it has influenced many state management solutions in the React ecosystem, such as Redux and Flux implementations provided by libraries like Fluxxor and Alt. However, not all state management solutions in the React ecosystem strictly adhere to the Flux pattern or use a Dispatcher, as Flux is just one of many architectural patterns used in React applications.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate",
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
						Arrow functions have no binding of the keyword <strong>this</strong>.  Arrow functions in JavaScript (and by extension, React) capture the <strong>this</strong> value lexically from the surrounding code. In other words, the <strong>this</strong> value inside an arrow function is determined by the surrounding scope where the arrow function is defined, rather than how it is called.
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
		topic: "Intermediate React",
		level: 1,
		question: "What is Webpack?",
		answer: (
			<>
				<p>
					Webpack is a command line tool used to bundle different code files and
					assets into single large file. It helps minimize JavaScript, CSS
					files, images, etc.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Advanced React",
		level: 2,
		question: "How are ReactJS and React Native different? (9)",
		answer: (
			<>
				<ul>
					<li><strong>Platform:</strong> React is a library for building user interfaces in web applications, whereas React Native is a framework for building native mobile applications for iOS, Android, and other platforms.</li>
					<li><strong>Language:</strong> React uses JavaScript, while React Native uses a combination of JavaScript and a subset of CSS called Flexbox for styling.</li>
					<li><strong>Components:</strong> Both React and React Native use components as the building blocks of user interfaces, but the components in React are designed for web browsers, while the components in React Native are designed for mobile devices and can include native UI elements such as View, Text, Image, etc.</li>
					<li><strong>Styling:</strong> React uses CSS for styling, while React Native uses a subset of CSS called Flexbox for styling, along with some additional styling options specific to mobile applications.</li>
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
		level: 1,
		question: "Can browsers understand JSX code? Explain.",
		answer: (
			<>
				<p>
					{" "}
					No. JSX is a combination of HTML and JavaScript, and browsers are unable to read it because they are built to understand and read original JavaScript or JS objects. Since JSX is not a regular JS object, web browsers are unable to read it. For web browsers to read JSX, it must be made compatible by first converting it into regular JS objects using a transcompiler, such as Babel.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "What is strict mode?",
		answer: (
			<>
				<p>
				StrictMode is a React tool that performs additional checks on the application to highlight any potential problems in an application. It achieves this by encapsulating a section of your application as a component. 
				</p>
				<p>It highlights potential problems in an application such as:</p>
				<ul>
					<li>Deprecated lifecycle methods</li>
					<li>Unsafe lifecycle methods</li>
					<li>Legacy string ref API usage</li>
					<li>Legacy context API usage</li>
					<li>Unexpected side effects</li>
					<li>Legacy context API usage</li>
					<li>Legacy context API usage</li>
				</ul>
				<p>While it does not show any visible element in the development mode, nor does it impact the performance in the production mode, it does give warnings.  The StrictMode can be applied to any section of the application, not necessarily to the entire application</p>
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
		topic: "Intermediate React",
		level: 1,
		question: "Can I use web components in React application?",
		answer: (
			<>
				<p>
					Yes, web components, encapsulated HTML tags for web development, are
					versatile, framework-agnostic elements native to HTML, can be use
					seamlessly in React.
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
		topic: "Intermediate React",
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
		level: 0,
		question: "What are hooks?",
		answer: (
			<>
				<p>
					Hooks are features that allow you to “hook into” the features of React
					state and lifecycle from functional components without writing a class.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Intermediate",
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
		topic: "Intermediate React",
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
		topic: "Advanced React",
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
		question: "What are components in React?",
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
		topic: "Intermediate React",
		level: 1,
		question: "What is MobX?",
		answer: (
			<>
				<p>
					It is a simple, scalable, and battle-tested state management
					solution based on Reactive programming principles.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "What does the eslint plugin for hooks do?",
		answer: (
			<>
				<p>
					It is a static code analysis tool for finding out faulty patterns in JavaScript code in order to enforce the rules of Hooks.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
		level: 2,
		question: "What is render hijacking in React?",
		answer: (
			<>
				<p>Render hijacking in React refers to the technique of intercepting or modifying the rendering process of a component, typically by wrapping the component with a higher-order component (HOC) or using a render prop. The purpose of render hijacking is to inject additional functionality or modify the behavior of the rendered component without directly modifying its source code.</p>
				<p><strong>NOTE:</strong>  While render hijacking is still technically possible in modern React applications, it's generally not considered a recommended pattern. Instead, modern React applications tend to prefer more composable and declarative patterns using hooks, context, and composition to achieve similar goals while maintaining simplicity, performance, and maintainability.</p>
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
		topic: "Intermediate React",
		level: 1,
		question: "How do you specify a default prop value?",
		answer: (
			<>
				<p>If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:</p>
				<pre>
					<div className={styles.appCode}>
						{`
function Avatar({ person, size = 100 }) {
  // ...
}
        `}
					</div>
				</pre>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
		level: 1,
		question: "When do component props default to true?",
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
		topic: "Advanced React",
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
		topic: "Intermediate",
		level: 1,
		question: "What is the relationship between MVC and React?",
		answer: (
			<>
				<p>MVC (Model-View-Controller) and React are both approaches to organizing the structure of web applications, but they have different philosophies and architectures. While MVC is a traditional architectural pattern commonly used in server-side web development, React is a JavaScript library for building user interfaces in a declarative and component-based way.</p>
				<p>Here's the relationship between MVC and React:</p>
				<ol>
					<li><strong>Different Architectural Patterns:</strong>
						<ul>
							<li>MVC is an architectural pattern that separates an application into three interconnected components: the Model, the View, and the Controller. It is primarily used for server-side web development and has been widely adopted in frameworks like Ruby on Rails, Django, and Laravel.</li>
							<li>React, on the other hand, is a JavaScript library for building user interfaces. It follows a component-based architecture, where UIs are composed of reusable and composable components. React does not prescribe a specific architecture like MVC but can be used in conjunction with various architectural patterns, including MVC.</li>
						</ul>
					</li>
					<li><strong>Component-Based Architecture:</strong>
						<ul>
							<li>React's component-based architecture aligns well with the View layer of the MVC pattern. React components can be thought of as the "View" in MVC, representing the user interface and encapsulating UI logic.</li>
							<li>However, unlike traditional MVC Views, React components are more granular and encapsulate both the presentation logic and the rendering logic. They can also manage their own state and lifecycle, making them more self-contained.</li>
						</ul>
					</li>
					<li><strong>Integration with MVC:</strong>
						<ul>
							<li>While React can be used independently of MVC frameworks, it can also be integrated into existing MVC applications to manage specific parts of the UI or to build interactive client-side components.</li>
							<li>For example, in a server-rendered MVC application, React components can be used to enhance certain parts of the UI with interactivity or to handle complex client-side interactions, while the overall application structure remains MVC.</li>
						</ul>
					</li>
					<li><strong>Alternative Architectures:</strong>
						<ul>
							<li>React has popularized alternative architectural patterns such as Flux, Redux, and the Component-Based Architecture, which emphasize unidirectional data flow, state management, and composability. These patterns provide alternatives to traditional MVC for building modern web applications.</li>
						</ul>
					</li>
				</ol>
				<p>In summary, while MVC and React serve different purposes and have different architectural principles, they can be used together in various ways, depending on the requirements and constraints of the application. React's component-based architecture can complement MVC frameworks by providing a more interactive and dynamic user interface layer, while still leveraging the benefits of server-side rendering and MVC's separation of concerns.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate",
		level: 1,
		question: "Explain Flux",
		answer: (
			<>
				<p>Flux is an architectural pattern used in React applications for managing the flow of data and state within the application. It was introduced by Facebook as a way to address the challenges of managing data flow in large and complex React applications.</p>
				<p>The Flux pattern consists of several key components:</p>
				<ul>
					<li><strong></strong>Actions: Actions are plain JavaScript objects that represent events or user actions that occur within the application. They are dispatched to the application's dispatcher to trigger updates to the application state.</li>
					<li><strong></strong>Dispatcher: The Dispatcher is a central hub that receives actions and dispatches them to registered callback functions called stores. It ensures that actions are processed in a predictable order and that updates to the application state are propagated in a consistent manner.</li>
					<li><strong></strong>Stores: Stores contain the application state and business logic. They register with the Dispatcher to receive actions and update their state in response. Stores emit change events to notify the views (React components) that the state has been updated.</li>
					<li><strong></strong>Views (React Components): Views represent the user interface of the application. They receive updates from stores and re-render themselves based on changes to the application state. Views may dispatch actions in response to user interactions.</li>
				</ul>
				<p>The Flux pattern emphasizes unidirectional data flow, where data flows in a single direction from the actions through the dispatcher to the stores, and then from the stores to the views. This helps to maintain a clear and predictable flow of data within the application and simplifies debugging and reasoning about the application's behavior.</p>
				<p>While Flux is not a specific library or framework, several implementations and libraries have been developed that adhere to the Flux pattern, such as Redux, Fluxxor, and Alt.js. These libraries provide utilities and abstractions for implementing the Flux pattern in React applications, making it easier to manage application state and data flow in a scalable and maintainable way.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate",
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
		topic: "Intermediate",
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
		topic: "Intermediate",
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
		topic: "Intermediate",
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
		topic: "Intermediate",
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
		topic: "Advanced",
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
		topic: "Advanced",
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
		topic: "Intermediate Router",
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
		topic: "Intermediate Router",
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
		topic: "Advanced Router",
		level: 2,
		question: "What are some advantages of React Router. (3)",
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
		topic: "Advanced",
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
		topic: "Advanced React",
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
		topic: "Advanced React",
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
		topic: "Advanced React",
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
		topic: "Advanced",
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
		topic: "Advanced React",
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
		topic: "Intermediate React",
		level: 1,
		question:
			"What is the difference between a functional component and a class component? (3)",
		answer: (
			<>
				<ul>
					<li><strong>JS class vs JS function:</strong> In React, a functional component is a plain JavaScript function that
					takes in props and returns a React element. A class component is a
					JavaScript class that extends React.Component and has a render method
					that returns a React element.</li>
					<li><strong>Built in methods vs hooks:</strong> A class component can have has built-in local state and lifecycle methods, while a functional component has state using the useState hook and manages a component's lifecycle using the useEffect hook</li>
					<li><strong>Modern vs legacy patterns:</strong> Functional components are considered simpler, easier to understand and test, and have better performance than class components. Class components are no longer considered best practice, but are useful to understand because they show up in so much legacy code.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Advanced React",
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
		topic: "Advanced React",
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
		topic: "Advanced React",
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
				<p>Example of a presentational component:</p>
				<pre>
					<div className={styles.appCode}>{`
// Presentational Component
import React from 'react';

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default Button;
        `}</div>
				</pre>
				<p>Example of a container component:</p>
				<pre>
					<div className={styles.appCode}>{`
// Container Component
import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} text="Increment" />
    </div>
  );
};

export default Counter;
        `}</div>
				</pre>
			</>
		),
	},

	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
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
		topic: "Intermediate React",
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
		topic: "Advanced",
		level: 2,
		question:
			"What is the difference between a reducer and an action in Redux?",
		answer: (
			<>
				<p>
					In Redux, a reducer and an action are two different but related
					concepts.
				</p>
				<ul>
				<li>
					An <strong>action</strong> is a plain JavaScript object that describes the change that
					should be made to the state of the application. It has a type property
					that defines the type of action being performed, and a payload
					property that provides any additional data needed to perform the
					action. Actions are dispatched from the application to the Redux
					store, which then passes the action to the reducers.
				</li>
				<li>
					A <strong>reducer</strong> is a pure function that takes the current state of the
					application and an action, and returns the next state of the
					application. The reducer is responsible for handling the actions and
					updating the state accordingly. It should not perform any
					side-effects, such as making API calls, but should instead only return
					the next state.
				</li>
				</ul>
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
		topic: "Advanced React",
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
		topic: "Advanced React",
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
		topic: "Advanced",
		level: 2,
		question: "What is Thunk?",
		answer: (
			<>
				<p>
					A Thunk in Redux performs asynchronous operations and dispatch multiple actions by allowing you to write action
					creators that return a function instead of an action. 
				</p>
				<p>This can be
					useful for performing asynchronous operations, such as API calls, and
					dispatching multiple actions, such as one to indicate that the API
					call has started and another to indicate that it has finished. The
					inner function receives the store’s dispatch method as an argument,
					which can be used to dispatch actions at any point in the future.
					Thunks are typically implemented using a middleware, such as the
					redux-thunk middleware.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
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
		topic: "Advanced",
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
		topic: "Advanced React",
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
		topic: "Advanced React",
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
		topic: "Advanced",
		level: 2,
		question: "Explain the concept of a Middleware in Redux.",
		answer: (
			<>
				<p>In Redux, a middleware is a software component that sits between the store and the action dispatching process to add additional functionality, such as logging, crash reporting, handling asynchronous actions, etc. </p>
				<ul>
					<li>Allows you to extend the store’s behavior without modifying the store itself.</li>
					<li>Are applied using the applyMiddleware method and can be composed together to achieve a desired behavior.</li>
					<li>When an action is dispatched, it passes through each middleware in the order they were composed, giving the middleware an opportunity to interact with the action before it reaches the store. This provides a way to manipulate actions and state, and to perform complex actions that can span multiple actions.</li>
				</ul>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Advanced React",
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
		topic: "Intermediate React",
		level: 1,
		question: "How do you pass data from child components to parent components using callbacks?",
		answer: (
			<>
				<ol>
					<li>Create a callback in the parent component which takes in the data needed as a parameter.</li>
					<li>Pass this callback as a prop to the child component.</li>
					<li>Send data from the child component using the callback.</li>
				</ol>
				<p>Steps 1 and 2: Create a callback in the parent component, pass this callback as a prop.</p>
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
				<p>Step 3: Pass data from the child to the parent component.</p>
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
		topic: "Advanced React",
		level: 2,
		question: "Compare use of Hooks/Functional Components and Class Components in terms of performance.",
		answer: (
			<>
				<p>React Hooks will avoid a lot of overhead such as the instance creation, binding of events, etc., that are present with classes.  Hooks in React will result in smaller component trees since they will be avoiding the nesting that exists in HOCs (Higher Order Components) and will render props requiring less work to be done by React.</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced",
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
		topic: "Advanced React",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
		level: 1,
		question: "Does the useState Hook update state immediately?",
		answer: (
			<>
				<p>React state does not update immediately, although it might seem to. React keeps track of the states by queuing them in the order they are called. React queues all the changes to be made and update once the component rerenders, which is not immediate. </p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
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
		topic: "Advanced React",
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
		topic: "Intermediate React",
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
		topic: "Intermediate React",
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
		topic: "Advanced React",
		level: 2,
		question: "When using Create React App, how do you include polyfills?",
		answer: (
			<>
				<p>By including polyfills in your Create React App (CRA) project, you can ensure that your application functions correctly across a wider range of browsers, including older versions that may not support modern JavaScript features.</p>
				<p>To include polyfills in a CRA project, you can use the react-app-polyfill package, which provides a convenient way to add polyfills for features that are not supported in all browsers.  The package is installed in an existing CRA project as a dev dependency</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Advanced React",
		level: 2,
		question: "How can you tell React to build in production mode?",
		answer: (
			<>
				<p>React can be coded to directly build into production by setting the process.env.NODE_ENV variable to production.</p>
				<p>Note: When React is in production, warnings, and other development features are not shown.</p>
			</>
		),
	},
	{
	rating: 0,
	subject: 'react',
	topic: 'Intermediate React',
	level: 1,
	question: 'What is Reactive Programming?',
		answer:
			<>
				<p>Reactive programming is a programming paradigm that focuses on data flows and the propagation of change. It is based on the idea that the application’s state is constantly changing in response to user actions and other events. In reactive programming, you define the behavior of a system in terms of the relationships between input and output. This allows you to create applications that are more responsive and scalable, and that can handle complex interactions and data flows more easily.</p>
				<p>Key concepts in reactive programming include:</p>	
				<ol>
					<li><strong>Observables:</strong> Observables are representations of streams of data or events that can be observed over time. They allow you to subscribe to changes in the stream and react to those changes by executing callbacks or transformations.</li>
					<li><strong>Observers:</strong> Observers are functions or callbacks that receive values emitted by observables. They react to changes in the observable stream by executing logic or updating the application state.</li>
					<li><strong>Operators:</strong> Operators are functions that allow you to transform, filter, combine, or manipulate observable streams. They enable you to compose complex operations on observables to achieve the desired behavior.</li>
					<li><strong>Subscription:</strong> Subscriptions are connections between observables and observers. They define how observers react to changes in the observable stream and can be used to manage resources or clean up subscriptions when they are no longer needed.</li>
				</ol>
				<p>Reactive programming is often used in scenarios where data is asynchronous, such as handling user interactions, network requests, or real-time updates. It provides a powerful and expressive way to handle asynchronous events and manage complex data flows in a reactive and declarative manner.</p>
				<p>In the context of React, reactive programming principles are applied through libraries like Redux, RxJS, or React's built-in hooks (e.g., useState, useEffect). React itself is not strictly a reactive programming framework, but it embraces reactive principles by providing a declarative and component-based architecture for building user interfaces.</p>
				<p>React's component-based architecture allows you to build UI components that react to changes in application state and automatically re-render when that state changes. React's useState and useEffect hooks provide a way to manage state and side effects in a reactive and declarative manner, allowing you to model complex data flows and handle asynchronous events in your components.</p>
				<p>Overall, while React is not a reactive programming framework in the traditional sense, it incorporates reactive principles to provide a powerful and efficient way to build interactive and responsive user interfaces.</p>
			</>
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "How do you set object values with a dynamic key/property name?",
		answer: (
			<>
				<p>
					To use computed values for property names, you use square brackets and
					pass the expression. Here, dynamic naming is applied using the constants key1 and key2:</p>
				<pre>
					<div className={styles.appCode}>{`
const key1 = "language"
const key2 = "isStudent"

const obj = {
  name: "dillion",
  age: 1000,
  [key1]: "JavaScript",
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
		topic: "Intermediate React",
		level: 1,
		question: "When would you use a ref instead of state/props?",
		answer: (
			<>
				<p>
					Refs are used when you need to access a DOM node or an instance of a
					component that is rendered in the React tree. They are often used to
					access form elements, trigger imperative animations, or integrate with
					third-party DOM libraries. Refs should be used sparingly, as they
					involve directly manipulating the DOM and can lead to hard-to-debug
					issues if used incorrectly.
				</p>
				<p>
					When you need to access a DOM node or an instance of a component that
					is rendered in the React tree, you should use a ref instead of
					state/props.  For example, you might use a ref to access the value of an
					input field in a form, or to focus an input field when a component
					mounts.
				</p>
			</>
		),
	},
	{
		rating: 0,
		subject: 'react',
		topic: "Intermediate React",
		level: 1,
		question: "How do you memoize a specific value or computation?",
		answer: (
			<>
				<p><strong>useMemo</strong> is a hook provided by React that memoizes the result of a function or computation and re-computes it only if the dependencies provided to the hook have changed.  It's used to optimize expensive computations or calculations within functional components by caching the result of the computation.  Unlike React.memo, which memoizes the entire component, useMemo memoizes specific values or computations within a component.  It's typically used to avoid unnecessary re-computation of values or expensive calculations on each render.  Example of using useMemo:</p>
				<pre>
					<div className={styles.appCode}>{`
import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  const result = useMemo(() => {
    // Expensive computation
    return a + b;
  }, [a, b]); // Dependency array

  return <div>{result}</div>;
}
          `}</div>
				</pre>
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