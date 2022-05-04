import AllTask from "./components/AllTask";
import Form from "./components/Form";
import Header from "./components/Header";
import TaskProvider from "./context/TaskProvider";
import "./global.css";

function App() {
    return (
        <TaskProvider>
            <div className="todo">
                <Header />
                <div className="container">
                    <Form />
                    <AllTask />
                </div>
            </div>
        </TaskProvider>
    );
}

export default App;
