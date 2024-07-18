import { useState } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';


const Button = ({ handleClick, text }) => {
<<<<<<< HEAD
    //button template
    console.log("Button text: ", text);

    return (
        <button onClick={handleClick}>
=======
  //button template
    console.log("Button text: ", text);

    return (
        <button onClick = {handleClick}>
>>>>>>> 605d86920a9905c17b936efbd1e832369701afde
            {text}
        </button>
    )
}

const App = () => {
    // save clicks of each button to its own state

    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
    })


    //state modifiers

    const goodClick = () => {
        const updatedGood = feedback.good + 1
        const newFeed = {
            ...feedback,
            good: updatedGood,
            total: updatedGood + feedback.neutral + feedback.bad
        }
        setFeedback(newFeed)
    }

    const neutralClick = () => {
        const updatedNeutral = feedback.neutral + 1
        const newFeed = {
            ...feedback,
            neutral: updatedNeutral,
            total: updatedNeutral + feedback.good + feedback.bad
        }
        setFeedback(newFeed)
    }

    const badClick = () => {
        const updatedBad = feedback.bad + 1
        const newFeed = {
            ...feedback,
            bad: updatedBad,
            total: updatedBad + feedback.neutral + feedback.good
        }
        setFeedback(newFeed)
    }

    return (
        <div>

            <div>
                <Navbar/>
            </div>

<<<<<<< HEAD
            <div className="container">
                <Header />
            </div>
=======
      <Button fhandleClick={goodClick} text='good' />
      <Button fhandleClick={neutralClick} text='neutral'/>
      <Button fhandleClick={badClick} text='bad'/>
>>>>>>> 605d86920a9905c17b936efbd1e832369701afde

            <div className="container"> 
                <Hero />
            </div>

            <h1> give feedback </h1>

            <Button handleClick={goodClick} text='good' />
            <Button handleClick={neutralClick} text='neutral' />
            <Button handleClick={badClick} text='bad' />

            <h1> statistics </h1>

            <pre>
                good {feedback.good} {'\n'}
                neutral {feedback.neutral} {'\n'}
                bad {feedback.bad} {'\n'}
                all {feedback.total}
            </pre>

        </div>
    )
}

export default App
