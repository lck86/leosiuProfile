import React from 'react';

function Header() {
    let runInBrowser =process.browser
    function collapse() {
        if (!runInBrowser)return;
        document.getElementById('navbarSupportedContent').classList.remove('show')
        const { top } = document.body.getBoundingClientRect()
        if (top === 0) {
        document.getElementById('navbar').classList.remove('bg-header')
        }
        if (document.getElementById('dropdown-menu').classList.contains('d-block')) {
        document.getElementById('dropdown-menu').classList.remove('d-block')
        }
    }
    function expand() {
        if (!runInBrowser)return;
        if (document.getElementById('navbarSupportedContent').classList.contains('show')) {
        collapse()
        }
        else {
        document.getElementById('navbarSupportedContent').classList.add('show')
        document.getElementById('navbar').classList.add('bg-header')
        }
    }
  return (
    <>
      <div id="navbarHeader" className="Header navbarHeader bg-headerTransparent">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-headerTransparent px-4">
          <a className="navbar-brand" href="/">Leo Siu</a>
          <button onClick={expand}
            className="navbar-toggler"  >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto " >
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href={"#homePage" }>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href={"#aboutMe"}>About Me</a>

              </li>

              {<li className="nav-item">
                <a href="#myWorks" className="nav-link"  role="button">
                  My Works
               </a>
                
              </li>}

              <li className="nav-item" onClick={collapse}>
                <a className="nav-link" href={ "#contact"}>Contact</a>
              </li>

            </ul>
          </div>

        </nav>


      </div>
    </>
  );
}

export default Header;