
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "./components/Card";
import CompletedTodo from "./components/completedTodo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import fetchTodos from "./redux/todos/thunk/fetchTodos";


function App() {
    const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchTodos);
    }, [dispatch]);
    return (
      
            <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                <Navbar />

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                 <Card>
                    <Header />

                    <hr className="mt-4" />

                    <TodoList />

                    <hr className="mt-4" />

                    <Footer />

                    </Card>
                    <CompletedTodo />
                </div>
            </div>
     
    );
}

export default App;
