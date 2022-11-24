import React from 'react';

const Blog = () => {
    return (
        <div className='mt-28'>
            <div class="space-y-4 w-10/12 mx-auto">
                <details class="group border-l-4 border-[#FFBAA6] bg-gray-50 p-6" open>
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">
                            What are the different ways to manage a state in a React application?
                        </h2>

                        <span
                            class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                        The Four Kinds of React State to Manage
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.
                        There are four main types of state you need to properly manage in your React apps: <br></br>
                        1. Local state
                        2. Global state
                        3. Server state
                        4. URL state
                        <br />
                        <p className='font-bold'>Local (UI) state  </p>  Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                        <br />
                        <p className='font-bold'>Global (UI) state </p>Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.
                        <br />
                        <p className='font-bold'> Server state </p> Data that comes from an external server that must be integrated with our UI state.

                        Server state  is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        <br />
                        <p className='font-bold'> URL state </p> Data that exists on our URLs, including the pathname and query parameters.

                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                        There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.

                    </p>
                </details>

                <details class="group border-l-4 border-[#FFBAA6] bg-gray-50 p-6">
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">
                            How does prototypical inheritance work?
                        </h2>

                        <span
                            class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                        <br />

                        Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.
                    </p>
                </details>

                <details class="group border-l-4 border-[#FFBAA6] bg-gray-50 p-6">
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">
                            What is a unit test? Why should we write unit tests?
                        </h2>
                        <span
                            class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </details>


                <details class="group border-l-4 border-[#FFBAA6] bg-gray-50 p-6">
                    <summary class="flex cursor-pointer items-center justify-between">
                        <h2 class="text-lg font-medium text-gray-900">
                            React vs Angular vs Vue?
                        </h2>
                        <span
                            class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                        React requires solid JavaScript skills, while Vue. js is more oriented to novice developers. Similar to React, Vue. js enables writing with JSX, but the components are written with HTML templates.
                    </p>
                    <p>
                        React is a JavaScript library, whereas Angular is a front-end framework. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size.
                    </p>
                    <p>
                        Angular utilizes real DOM, which renders the entire web/app page even when a single component is changed. On the other hand, Vue. js employs Virtual DOM, which only renders the real DOM upon the components that have been changed.
                    </p>
                </details>
            </div>

        </div>
    );
};

export default Blog;