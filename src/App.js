import React, {useState} from 'react'
import {Container, Row, Col, Button, ButtonToolbar} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import Courses from './components/Courses'
import FinalGrade from './components/FinalGrade'

const App = () => {
    const [courses, setCourses] = useState([])
    const [newCourseGrade, setNewCourseGrade] = useState(5)
    const [newCourseCredits, setNewCourseCredits] = useState(3)

    return (
        <>
            <Container id={"tableContainer"}>
                <Row id={"courses"} className={"flex-grow-1"}>
                    <Col className={"my-auto"}>
                        <Courses courses={courses}/>
                    </Col>
                </Row>
            </Container>
            <div id={"buttonContainer"} >
                <Container >
                    <Row id={"finalGrade"}>
                        <Col className={"mx-auto"}>
                            <FinalGrade courses={courses}/>
                        </Col>
                    </Row>
                    <Row className={"justify-content-between align-items-center"}>
                        <Col xs="4" md="3" lg="2" className={"text-primary"}>
                            <p>Opintopisteet</p>
                            <h2>{newCourseCredits}</h2>
                        </Col>
                        <Col xs="8" md={{size: 6, offset: 3}} lg={{size: 4, offset: 6}} className={'text-warning'}>
                            <p>Arvosana</p>
                            <h2>{newCourseGrade}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" md="3" lg="2" className={"align-self-center"}>
                            <ButtonToolbar size={"lg"}>
                                <Button size={'lg'} onClick={() => setNewCourseCredits(6)} color={"primary"} block>6</Button>
                                <Button size={'lg'} onClick={() => setNewCourseCredits(3)} color={"primary"} block>3</Button>
                            </ButtonToolbar>
                        </Col>

                        <Col xs="4" md={{size: 3, offset: 3}} lg={{size:2, offset: 6}}>
                            <ButtonToolbar>
                                <Button size={'lg'} onClick={() => setNewCourseGrade(2)} color={"warning"} block>2</Button>
                                <Button size={'lg'} onClick={() => setNewCourseGrade(1)} color={"warning"} block>1</Button>
                                <Button size={'lg'} onClick={() => setNewCourseGrade(0)} color={"warning"} block>0</Button>
                            </ButtonToolbar>
                        </Col>

                        <Col xs="4" md="3" lg="2">
                            <ButtonToolbar>
                                <Button size={'lg'} onClick={() => setNewCourseGrade(5)} color={"warning"} block>5</Button>
                                <Button size={'lg'} onClick={() => setNewCourseGrade(4)} color={"warning"} block>4</Button>
                                <Button size={'lg'} onClick={() => setNewCourseGrade(3)} color={"warning"} block>3</Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                    <Row className={"addCourse"}>
                        <Col>
                            <Button
                                onClick={() => {
                                    const newCourse = [{'grade': newCourseGrade, 'credits': newCourseCredits}]
                                    setCourses(newCourse.concat(courses))}}
                                size={'lg'}
                                color={'success'}
                                block>
                                <FontAwesomeIcon icon={faPlusCircle} size="lg"/> Lisää kurssi
                            </Button>
                        </Col>
                    </Row>
                    <Row className={"resetCourses"}>
                        <Col>
                            <Button
                                onClick={() => setCourses([])}
                                size={'lg'}
                                color={'danger'}
                                block>
                                <FontAwesomeIcon icon={faTimesCircle} size="lg"/> Tyhjennä lista
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default App