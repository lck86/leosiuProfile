import React from 'react';


function Contact() {
    function sybmitDB(e) {
        e.preventDefault()
        alert('success')
    }
    return (
        <>
            <div id="contact" className="container-fluid fullHeight contact bg-custom">
                <h1 className="mx-auto text-white text-center revealHeader" >Contact</h1>
                <div className="opcFalse">
                    <p className="mx-auto text-white text-center my-5 ">If there is anything i can help,
                    please leave your message below.
                    </p>
                </div>
                <form className="opcFalse container" onSubmit={sybmitDB}>
                    <div className="form-group">
                        <label htmlFor="msgName" className="text-white">Your Name / Email address</label>
                        <input className="form-control" id="msgName" aria-describedby="emailHelp" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="msgContent" className="text-white">Message</label>
                        <textarea type="text" className="form-control" id="msgContent" required></textarea >
                    </div>
                    <button type="submit" className="cusbtn cusbtn-primary cusbtn-ghost cusbtn-shine mt-3" value="Submit">Submit</button>
                </form>
                <div className="opcFalse">
                    <p className="mx-auto text-white text-center my-4 ">
                        or contact me via email:
                        cheukheisiu@gmail.com
                    </p>
                    <a className=" cusbtn cusbtn-primary cusbtn-ghost cusbtn-shine" href="mailto:cheukheisiu@gmail.com">
                        Mail to me
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;