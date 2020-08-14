import React from 'react';

function MyWorks() {
    
    const inViewport = (el, partiallyVisible = false) => {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
            ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };

    function loadCard() {
        let box = document.getElementById('myWorks')
        let cards = box.querySelectorAll('.card')
        Array.from(cards).map(card => {
            if (!inViewport(card, true)) return;
            if (card.classList.contains('revealed')) return
            return card.classList.add('revealed')
        }
        )
    }
    if (process.browser) {
        document.addEventListener('scroll', loadCard)
    }
    
    return (
        <div id="myWorks" className=" fullHeight bg-customLight pb-5">
            <h1 className="mx-auto text-white text-center revealHeader">MyWorks</h1>
            <div className="px-4 mt-5">

                <div className="card mb-5  bg-customLight mx-auto " style={{ maxWidth: "768px" }}>
                    <div id="card-borders " className="card-borders">
                        <div className="border-top"></div>
                        <div className="border-right"></div>
                        <div className="border-bottom"></div>
                        <div className="border-left"></div>
                    </div>
                    <div className="row no-gutters card-content">
                        <div className="col-md-6">

                            <img src={'assest/eshop.png'} className="card-img" alt="..."></img>
                            <a href="/eshop" className="text-white">More</a>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title"><b>E-shop</b></h5>
                                <p className="card-text">This is a e-shop web app that provides the online buying service. Customers can trace the purchasement record.</p>
                                <p>{`Technique & Tools:`}</p>
                                <p className="card-text">React.js, Express.js, MongoDB, SPA, RWD</p>
                                <p><a href="http://eshopfrontend.herokuapp.com/" target="_blank" >Demo website</a></p>
                                <p>GitHub:
                                <a href="https://github.com/burnxwallpaper/eshopFrontEnd">FrontEnd</a>,
                                    <a href="https://github.com/burnxwallpaper/eshopServerAPI">BackEnd</a>
                                </p>
                                <a href="/eshop">More about this app</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4">
                <div className="card mb-5 mx-auto bg-customLight" style={{ maxWidth: "768px" }}>
                    <div className="card-borders">
                        <div className="border-top"></div>
                        <div className="border-right"></div>
                        <div className="border-bottom"></div>
                        <div className="border-left"></div>
                    </div>
                    <div className="row no-gutters card-content">
                        <div className="col-md-6">
                            <img src={'assest/chat.png'} className="card-img" alt="..."></img>
                            <a href="/whatschat" className="text-white">More</a>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title"><b>WhatsChat</b></h5>
                                <p className="card-text">WhatsChat is a social web app that can allow you make new friends and chat with the others.</p>
                                <p>{`Technique & Tools:`}</p>
                                <p className="card-text">React.js, Express.js, MongoDB, Socket.IO, ImgurAPI, SPA, RWD</p>
                                <p><a href="http://wisheschatroom.herokuapp.com/" target="_blank" >Demo website</a></p>
                                <p>GitHub:
                                <a href="https://github.com/burnxwallpaper/wishesChat">FrontEnd</a>,
                                    <a href="https://github.com/burnxwallpaper/wishesChatAPI">BackEnd</a>
                                </p>
                                <a href="/whatschat">More about this app</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;