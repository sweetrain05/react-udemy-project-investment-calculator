import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const handleUserInputChange = (identifier, inputValue) => {
        setUserInput((prev) => ({ ...prev, [identifier]: +inputValue }));
    };

    return (
        <>
            <Header />
            <UserInput onChange={handleUserInputChange} userInput={userInput} />
            <Result userInput={userInput} />
        </>
    );
}

export default App;
