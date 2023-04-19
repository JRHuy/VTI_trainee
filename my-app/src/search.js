import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CardResult from "./components/CardResult";

function Search() {
    const [name, setName] = useState("");
    const [results, setResult] = useState(null);

    const fetchData = () => {
        axios.get(`https://www.balldontlie.io/api/v1/players/?search=${name}`)
            .then((res) => {
                console.log(res.data.data);
                console.log(res.data);
                setResult(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {/* <Card style={{ width: "20rem" }}>
                <Row>
                    <Col md={3}>
                        <img src="neymar.png" id="card-info" />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{team}</Card.Title>
                        </Card.Body>
                    </Col>
                </Row>
            </Card> */}
            <div className="d-grip gap-2" id="center-all">
                <div className="pb-3">
                    <input id="search" placeholder="NBA player (Ex. Stephen Curry,...)" onChange={(e) => {
                        setName(e.target.value);
                    }}></input>
                </div>
                <Button variant="secondary" size="lg" onClick={fetchData}>Search</Button>
            </div>
            {/* <Card style={{width: '18rem'}} className="mt-4">
                <Card.Body>
                    <Card.Title>{results?.data[0].first_name} {results?.data[0].last_name}</Card.Title>
                    <Card.Subtitle className="text-muted">{results?.data[0].team.abbreviation}</Card.Subtitle>
                </Card.Body>
            </Card> */}
            <CardResult results={results}/>
        </>
    )
}

export default Search;