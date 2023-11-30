import './App.css';
import Home from "./pages/home/Home";
import { OptionsContextProvider } from "./context/OptionContext";

const App = () =>
{
    return (
        <OptionsContextProvider>
            <div className="App">
                <Home />
            </div>
        </OptionsContextProvider>
    );
}

export default App;
