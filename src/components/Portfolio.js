import React from "react"
import bulky from "../images/bulky.png";
import wheels from "../images/4wheels.jpg";
import three from "../images/three.png";
import mrGuard from "../images/mrGuard.png";
import sensor from "../images/sensor.jpg";
import elegant from "../images/elegant.jpg";
import page from "../images/page.png";
import sticky from "../images/sticky.png";
import harvey from "../images/harvey.png";
import user from "../images/user.jpg";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // Bulky
    const openPopupboxBulky = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={bulky} alt="" />
                <p>A online book stall for both admin and customer using ASP.NET Core MVC .NET-6 without CRUD operation.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/BulkyBook")}>https://github.com/Mahatabe/BulkyBook</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigBulky = {
        titleBar: {
            enable: true,
            text: "Bulky Book project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // 4Wheels App
    const openPopupboxWheels = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={wheels} alt="" />
                <p>A software development project for selling and ordering cars and instruments using Visual Studio Code and XAMPP.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/4_wheels")}>https://github.com/Mahatabe/4_wheels</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigWheels = {
        titleBar: {
            enable: true,
            text: "4 wheels project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Rating scale App
    const openPopupboxThree = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={three} alt="" />
                <p>An application to predict user-preferred rating scales with the help of smartphone sensor data.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/Rating_scale_with_smartphone_sensor_data")}>https://github.com/Mahatabe/Rating_scale_with_smartphone_sensor_data</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigThree = {
        titleBar: {
            enable: true,
            text: "Rating scale with smartphone sensor data project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // mrGuard App
    const openPopupboxGuard = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={mrGuard} alt="" />
                <p>It is a web application about selling and inventory management systems of safety equipment using ASP.NET MVC with Visual Studio 2019.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/Final_mrGuard")}>https://github.com/Mahatabe/Final_mrGuard</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigGuard = {
        titleBar: {
            enable: true,
            text: "Mr. Guard project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Sensor App
    const openPopupboxSensor = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={sensor} alt="" />
                <p>An application to collect sensor data from users for thesis dataset using Android Studio and Firebase.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/SensorGPSService")}>https://github.com/Mahatabe/SensorGPSService</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigSensor = {
        titleBar: {
            enable: true,
            text: "Collecting Sensor project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Elegant App
    const openPopupboxElegant = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={elegant} alt="" />
                <p>A mobile application wher customer can choose and interect with the designer.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/FatimaJuairiah19/ElegantInteriors")}>https://github.com/FatimaJuairiah19/ElegantInteriors</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigElegant = {
        titleBar: {
            enable: true,
            text: "Elegant Interiors project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Real estate App
    const openPopupboxPage = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={page} alt="" />
                <p>Built an application for developers and clients where Real Estate companies can streamline their new projects and make more innovative collaborations between clients and real estate companies by using JAVA and SQL.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/Real-Estate-Networking-and-Solutions")}>https://github.com/Mahatabe/Real-Estate-Networking-and-Solutions</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPage = {
        titleBar: {
            enable: true,
            text: "Real Estate Networking and Solution project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Sticky App
    const openPopupboxSticky = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={sticky} alt="" />
                <p>A React Sickty Note project.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/sticky_note_react")}>https://github.com/Mahatabe/sticky_note_react</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigSticky = {
        titleBar: {
            enable: true,
            text: "Sticky note project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Gaming App
    const openPopupboxHarvey = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={harvey} alt="" />
                <p>A gaming project named The Advanture of Harvey.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/The-Adventure-of-Harvey")}>https://github.com/Mahatabe/The-Adventure-of-Harvey</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigHarvey = {
        titleBar: {
            enable: true,
            text: "Advanture of Harvey project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // Office App
    const openPopupboxUser = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={user} alt="" />
                <p>A software development office managementproject using java and xampp.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Mahatabe/MCM-Group-LTD.")}>https://github.com/Mahatabe/MCM-Group-LTD.</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigUser = {
        titleBar: {
            enable: true,
            text: "Office management project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Project</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxBulky}>
                        <img className="portfolio-image" src={bulky} alt="bulky Clone Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxWheels}>
                        <img className="portfolio-image" src={wheels} alt="wheels Project..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxThree}>
                        <img className="portfolio-image" src={three} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxGuard}>
                        <img className="portfolio-image" src={mrGuard} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxSensor}>
                        <img className="portfolio-image" src={sensor} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxElegant}>
                        <img className="portfolio-image" src={elegant} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxPage}>
                        <img className="portfolio-image" src={page} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxSticky}>
                        <img className="portfolio-image" src={sticky} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxHarvey}>
                        <img className="portfolio-image" src={harvey} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxUser}>
                        <img className="portfolio-image" src={user} alt="" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigBulky} />
            <PopupboxContainer {...popupboxConfigWheels} />
            <PopupboxContainer {...popupboxConfigThree} />
            <PopupboxContainer {...popupboxConfigGuard} />
            <PopupboxContainer {...popupboxConfigSensor} />
            <PopupboxContainer {...popupboxConfigElegant} />
            <PopupboxContainer {...popupboxConfigPage} />
            <PopupboxContainer {...popupboxConfigSticky} />
            <PopupboxContainer {...popupboxConfigHarvey} />
            <PopupboxContainer {...popupboxConfigUser} />
        </div>
    )
}

export default Portfolio
