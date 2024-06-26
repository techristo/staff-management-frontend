'use client'


function Head() {


  return (<>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Options</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" href="/admin">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mbusiness">Manage Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/staffmembers">Staffmembers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mstaffmembers">Manage Staffmembers</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  </>
    
  );
}

export default Head;