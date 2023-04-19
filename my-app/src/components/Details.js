import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import './profile_style.css';
import { Button } from "react-bootstrap";

function Details() {
    const params = useParams();
    const [player, setPlayer] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        Axios.get(`https://www.balldontlie.io/api/v1/players/${params.playerID}`)
            .then((response) => {
                console.log(response.data);
                setPlayer(response.data);
            })
    }, [])

    return (
        <>
            <div className="profile-container">
                <h2 style={{ textAlign: "center" }}>Thông tin cá nhân</h2>
                <div className="row">
                    {/* <div className="col-md-3 text-center">
                    <img src={avatarUrl} alt="Avatar" className="avatar" />
                </div> */}

                    <div className="col">
                        <div className="mb-3">
                            <div className="label-form-control">
                                <label htmlFor="id">First Name</label>
                            </div>
                            {/* <input type="tel" className="form-control profile-form-control" id="id" value={id} disabled onChange={(e) => setID(e.target.value)} /> */}
                            <p className="form-control profile-form-control">{player?.first_name}</p>

                        </div>
                        <div className="mb-3">
                            <div className="label-form-control">
                                <label htmlFor="id">Last Name</label>
                            </div>
                            <p className="form-control profile-form-control">{player?.last_name}</p>
                        </div>
                        <div className="mb-3">
                            <div className="label-form-control">
                                <label htmlFor="id">Height</label>
                            </div>
                            <p className="form-control profile-form-control">{player?.height_feet}'{player?.height_inches}"</p>
                        </div>
                        <div className="mb-3">
                            <div className="label-form-control">
                                <label htmlFor="id">Weight</label>
                            </div>
                            <p className="form-control profile-form-control">{player?.weight_pounds}</p>
                        </div>
                        <div className="mb-3">
                            <div className="label-form-control">
                                <label htmlFor="id">Position</label>
                            </div>
                            <p className="form-control profile-form-control">{player?.position}</p>
                        </div>
                        <div className="mb-3">
                            <div className="label-form-control">
                                <label htmlFor="id">Conference</label>
                            </div>
                            <p className="form-control profile-form-control">{player?.team.conference}</p>
                        </div>
                        <div className="mb-3">
                            <div className="label-form-control">
                                <label htmlFor="id">Team</label>
                            </div>
                            <p className="form-control profile-form-control">{player?.team.full_name}</p>
                        </div>
                        <div className="mb-3">
                            <div className="label-form-control">
                                <label htmlFor="id">Team Abbreviation</label>
                            </div>
                            <p className="form-control profile-form-control">{player?.team.abbreviation}</p>
                        </div>
                        {/* <button className="btn-success btn-save pull-right" onClick={fetchData}>Get</button> */}

                        <div id="center-all">
                            <Button variant="primary" onClick={() => navigate(-1)}>Back</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;