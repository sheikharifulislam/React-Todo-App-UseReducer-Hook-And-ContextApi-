import AllTask from "./components/AllTask";
import Form from "./components/Form";
import Header from "./components/Header";
import "./global.css";

function App() {
    return (
        <div className="todo">
            <Header />
            <div className="container">
                <Form />
                <AllTask />
            </div>
        </div>
    );
}

export default App;
