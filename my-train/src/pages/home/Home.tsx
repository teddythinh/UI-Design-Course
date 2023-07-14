import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import MailList from "../../components/mail/MailList";
import Footer from "../../components/footer/Footer";

import React from "react";
import "./home.css"

const Home: React.FC = () => (
    <>
        <NavBar />
        <Header type="" />
        <div className="homeContainer">
            <Featured />
        </div>
        <MailList />
        <Footer />
    </>
)

export default Home;