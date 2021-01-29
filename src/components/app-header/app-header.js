import './app-header.css';
import {Container, Row, Col} from 'react-bootstrap'
// TODO Доделать app-header - сделать кнопки гридами, поработать с адаптивной версткой
const AppHeader = (props) => {
    return (
            <Container>
                <Row>
                    <Col className="app-header">Ruslan Nemtsev</Col>
                    <Col><span className="app-header">Всего записей: {props.allPosts},</span>
                        <span className="app-header"> из них понравилось: {props.totalLiked}</span>
                    </Col>
                </Row>
            </Container>
    )
}
export default AppHeader;