import React, { useEffect } from 'react';
//import './HomePage.css';

function HomePage() {
    useEffect(() => {
        let landInTexts = document.querySelectorAll(".landIn");
        landInTexts.forEach(landInText => {
            let letters = landInText.textContent.split("");
            landInText.textContent = "";
            letters.forEach((letter, i) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.style.animationDelay = `${i * 0.1}s`;
                if (letter === "W") { landInText.append(document.createElement('br')) }
                landInText.append(span);
            });
        });
    }, [])

    return (
        <div >
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div className="snow"></div>
            <div  id="homePage" className="container-fluid fullHeight bg-secondary HomePage text-center row mx-auto align-items-center justify-content-center">
                <h1 className="customText-color  d-inline-block  landIn active" >
                    Hello, I am Leo. Web Developer

                </h1>
                <br></br>


            </div>
        </div>
    );
}

export default HomePage;