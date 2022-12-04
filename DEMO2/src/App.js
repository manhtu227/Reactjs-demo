import React from "react";
import './App.css'

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        { tesxt: 'Do all exercises', id: 'g1' },
        { text: 'finish the course', id: 'g2' }
    ])
    const addGoalHandler = enteredText => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString() })
            return updatedGoals
        })
    }
    return (
        <div>
            <section id="goal-form">
                <CourseInput />
            </section>
            <section id="goals">
                he
            </section>
        </div>
    )
}
export default App