import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardResult({ results }) {
    return (
        <>
            {
                results?.map((result) => (
                    <div key={result.id}>
                        <Card style={{ width: '18rem' }} className="mt-4" id="center-all">
                            <Link to={{pathname: `/details/${result?.id}`}} id="card-details">
                                <Card.Body>
                                    <Card.Title>{result?.first_name} {result?.last_name}</Card.Title>
                                    <Card.Subtitle className="text-muted">{result?.team.abbreviation}</Card.Subtitle>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                ))
            }
        </>
    )
}

export default CardResult;