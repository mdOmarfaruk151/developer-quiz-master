import React from "react";
import picOne from "../images/Q.1.png";
import picTwo from "../images/Q.2.png";
import QnA from "../images/QnA.png";

const Blog = () => {
  return (
    <div className="ml-20 mr-20 mt-0 mb-40 ">
      <img className="mx-auto h-96 rounded-xl mb-0 mt-0" src={QnA} alt="" />

      {/*// ! Collapse 1  */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-sky-200 rounded-box mb-5 border-solid border-2 border-sky-500 font-sans"
      >
        <div className="collapse-title text-xl font-medium text-center bg-cyan-300 border-solid border-2 border-sky-300 ">
          1. What Is The Purpose Of The React Router ?{" "}
        </div>
        <div className="collapse-content">
          <hr />
          <p
            className="font-sans
mt-3 font-medium "
          >
            We will need to utilize Router in React JS to create a React
            application with navigation across multiple pages. React Router is a
            JavaScript framework that lets us handle client and server-side
            routing in React applications. It enables the creation of
            single-page web or mobile apps that allow navigating without
            refreshing the page. It also allows us to use browser history
            features while preserving the right application view.
            <br />
            <br />
            A Router in React JS routes using a component-based architecture. It
            offers various routing components as required by the application. If
            you wish to learn more about its applications, check out this blog:
            Navigate React Router programmatically.
            <br />
            <br />
            A tool that allows you to handle routes in a web app, using dynamic
            routing. Dynamic routing takes place as the app is rendering on your
            machine, unlike the old routing architecture where the routing is
            handled in a configuration outside of a running app. React router
            implements a component-based approach to routing. It provides
            different routing components according to the needs of the
            application and platform. The following illustration shows how react
            router’s dynamic routing works as compared to traditional static
            routing:
            <img className="mx-auto mt-5 h-96 rounded-xl" src={picOne} alt="" />
          </p>
        </div>
      </div>
      {/*// ! Collapse 2  */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-sky-200 rounded-box mb-5 border-solid border-2 border-sky-500 font-sans"
      >
        <div className="collapse-title text-xl font-medium text-center bg-cyan-300 border-solid border-2 border-sky-300">
          2. How Does React Context API Works?
        </div>
        <div className="collapse-content">
          <hr />
          <p
            className="font-sans
mt-3 font-medium "
          >
            With React Context, we can pass data deeply. While some developers
            may want to use Context as a global state management solution, doing
            so is tricky. While React Context is native and simple, it isn’t a
            dedicated state management tool like Redux, and it doesn’t come with
            sensible defaults.
            <br />
            <br />
            If you decide to use React Context at all, you should be aware of
            its potential for performance drain. You can very easily get carried
            away and add too many components where they aren’t needed. To
            prevent re-rendering, be sure to place contexts correctly only in
            the components that require them.
            <br />
            <br />
            React.createContext is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </p>
        </div>
      </div>
      {/*// ! Collapse 3  */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-sky-200 rounded-box mb-5 border-solid border-2 border-sky-500 font-sans"
      >
        <div className="collapse-title text-xl font-medium text-center bg-cyan-300 border-solid border-2 border-sky-300">
          3. What is use for useRef ?
        </div>
        
        <div className="collapse-content">
        <hr />
          <p
            className="font-sans
mt-3 font-medium "
          >
            A hook is a special function which enables one use state and other
            React features without writing ES6 class components which are
            generally considered difficult to understand, use and master. useRef
            hook is part of the React Hooks API. It is a function which takes a
            maximum of one argument and returns an Object. The returned object
            has a property called current whose value is the argument passed to
            useRef. If you invoke it without an argument, the returned object's
            current property is set to undefined. The code below illustrates how
            to invoke the useRef hook in functional components.
            <br />
            <br />
            <img className="mx-auto mb-5 " src={picTwo} alt="" />
            myRef, which is returned by a call to useRef hook is an object which
            looks like current: null. If invoked without an argument, then the
            returned object is current: undefined
            <br />
            <h2 className="font-bold mt-3">
              What purpose does useRef hook serve?
            </h2>
            <br />
            <h3 className="font-bold ml-2">
              Some of the use cases of useRef hook are:
            </h3>
            <br />
            <h4 className="font-bold ml-3">1. To access DOM elements</h4>
            <br />
            <h4 className="font-bold ml-3">
              2. To persist values in successive renders
            </h4>
            <br />
            <h3 className="font-bold ml-2">Accessing DOM elements:</h3>
            <br />
            One of the most common use case of useRef hook is to access DOM
            elements (NOT custom React component). For example if you want to
            access an input element after it has been mounted to the DOM,
            instead of using document.getElementById, document.querySelector or
            any other method for selecting DOM elements like in vanilla
            javascript, you can use useRef hook.
            <br />
            <h3 className="font-bold mt-3 ml-2">
              To persist values in successive renders:
            </h3>
            <br />
            There are situations where you might want to persist certain values
            in consecutive renders. Instead of storing these values in state
            which might cause unnecessary renders, you can store it as the value
            of useRef's current property since react guarantees that this value
            is persisted between re-renders. Furthermore, if you want to
            determine state value from previous state values, it is advisable to
            use useRef hook to persist them. This is very helpful because in
            functional components, state is not merged but completely replaced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
