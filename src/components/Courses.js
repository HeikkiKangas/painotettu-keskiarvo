import React from 'react'

const Courses = (props) => {
    const {courses} = props
    console.log(props)
    return (
        <table id={'table'}>
            <thead>
            <tr>
                <th>Opintopisteet</th>
                <th>Arvosana</th>
                <th>Painotettu arvosana</th>
            </tr>
            </thead>
            <tbody>
            <Total courses={courses}/>
            {courses.map((course, i) => <Course credits={course.credits} grade={course.grade} key={i}/>)}
            </tbody>
        </table>
    )
}

const Course = ({credits, grade}) => {
    return (
        <tr>
            <td>{credits}</td>
            <td>{grade}</td>
            <td>{credits * grade}</td>
        </tr>
    )
}

const Total = ({courses}) => {
    const totalCredits = courses.reduce((total, course) => total + course.credits, 0)
    const totalGrade = courses.reduce((total, course) => total + course.grade, 0)
    const totalWeightedGrade = courses.reduce((total, course) => total + course.grade * course.credits, 0)
    return (
        <tr id={'totals'}>
            <td>{totalCredits}</td>
            <td>{totalGrade}</td>
            <td>{totalWeightedGrade}</td>
        </tr>
    )
}

export default Courses