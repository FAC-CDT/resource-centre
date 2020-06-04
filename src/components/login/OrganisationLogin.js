import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PipLogo } from "./buttons/pip_logo.svg";
import { ReactComponent as SafhLogo } from "./buttons/safh_logo.svg";
import "./Login.css";

const OrganisationLogin = ({ userRole, setUserOrganisation }) => {
    return (
        <>
            <h1> Welcome! </h1>
            <nav>
                <Link to="/landing" alt="Log in as a participant">
                    <PipLogo
                        onClick={() => {
                            setUserOrganisation("pip");
                        }}
                    />
                </Link>
                <Link
                    to="/landing"
                    alt="Log in as a member of an organisation"
                >
                    <SafhLogo
                        onClick={() => {
                            setUserOrganisation("safh");
                        }}
                    />
                </Link>
            </nav>
        </>
    );
};

export default OrganisationLogin;