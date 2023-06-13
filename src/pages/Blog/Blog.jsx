

const Blog = () => {
    return (
        <div className="pt-40 px-6">
            <div className="border border-indigo-600 p-4 mt-4">
                <h2 className="text-4xl mt-4  font-semibold">Tell us the differences between uncontrolled and controlled components.</h2>
                <p className="mt-3">Uncontrolled components rely on the DOM to manage and store form data, while controlled components use Reacts state to store and manage form data. Controlled components provide better control and validation of data, while uncontrolled components are simpler to implement but lack some of the advanced features offered by controlled components.</p>
            </div>
            <div className="border border-indigo-600 p-4 mt-4">
                <h2 className="text-4xl mt-4  font-semibold">How to validate React props using PropTypes?</h2>
                <p className="mt-3">To validate React props using PropTypes, you can define the expected prop types for a component using the propTypes property. Assign the appropriate PropTypes to each prop, such as PropTypes.string for a string value or PropTypes.number for a number value. Optionally, you can mark a prop as required using .isRequired. PropTypes helps catch potential issues by triggering warnings if the passed props do not match the specified types or are missing required props.</p>
            </div>
            <div className="border border-indigo-600 p-4 mt-4">
                <h2 className="text-4xl mt-4  font-semibold">Tell us the difference between nodejs and express js?</h2>
                <p className="mt-3">Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It provides a platform for executing JavaScript outside of the web browser. Node.js has a vast ecosystem of modules and libraries that enable developers to build various types of applications, including web servers, command-line tools, and more.
                    Express.js, on the other hand, is a web application framework built on top of Node.js. It simplifies the process of handling HTTP requests, routing, middleware integration, and managing server-side logic. Express.js follows a minimalist approach, allowing developers to create scalable and modular web applications quickly.</p>
            </div>
            <div className="border border-indigo-600 p-4 mt-4">
                <h2 className="text-4xl mt-4  font-semibold">What is a custom hook, and why will you create a custom hook?</h2>
                <p className="mt-3">The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.</p>
            </div>
        </div>
     
    );
};

export default Blog;