import Card from 'react-bootstrap/Card';

export const DetailComponent = ({detalle})=> {
    return(
        <>
        <Card>
            <Card.Body>
                <Card.Text>
                    {detalle.name}
                </Card.Text>
            </Card.Body>
        </Card>
         </>      
    )
}
