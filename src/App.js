import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllTask from "./components/AllTask";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskProvider from "./context/TaskProvider";
import "./global.css";

function App() {
    return (
        <Fragment>
            <TaskProvider>
                <div className="todo">
                    <Header />
                    <div className="container">
                        <Form />
                        <AllTask />
                    </div>
                </div>
            </TaskProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </Fragment>
    );
}

export default App;
