import React from 'react'

const FinalGrade = ({courses}) => {
    if (courses.length < 1) {
        return (
            <h1>0</h1>
        )
    }
    const totalCredits = courses.reduce((total, course) => total + course.credits, 0)
    const totalWeightedGrade = courses.reduce((total, course) => total + course.credits * course.grade, 0)
    return (
        <h1>{(totalWeightedGrade / totalCredits).toFixed(2)}</h1>
    )
}

export default FinalGrade