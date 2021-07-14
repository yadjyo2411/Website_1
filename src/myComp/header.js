import React from 'react'
import propTypes  from 'prop-types'
import { Route, Switch, Link, Router } from 'react-router-dom';

export default function header(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><strong>{props.title}</strong></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><b>Dashboard</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><b>About</b></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Accounts</b>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Coorporate</a></li>
              <li><a className="dropdown-item" href="#">Business</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Savings</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><b>Help?</b></a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
<img src="logoo.jpeg" alt=".." class="yes"/>
  <br/><nav className='Nav-head'>
  <h1 className="hed"><b>TRIPUPP HR</b></h1>

  <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <a  data-bs-toggle="tooltip"  data-bs-placement="bottom" title="In marketing, a product is an object or system made available for consumer use; it is anything that can be offered to a market to satisfy the desire or need of a customer. In retailing, products are often referred to as merchandise, and in manufacturing, products are bought as raw materials and then sold as finished goods. ">
            PRODUCTS
        </a>&emsp;&emsp;
<a  data-bs-toggle="tooltip"  
data-bs-placement="bottom" title="Use Cases">USE CASES</a>&emsp;&emsp; <a data-bs-toggle="tooltip"  
data-bs-placement="bottom" title="Developers">DEVELOPERS</a>&emsp;&emsp;<a data-bs-toggle="tooltip"  
data-bs-placement="bottom" title="company">COMPANY</a> &emsp;&emsp; <a data-bs-toggle="tooltip"  
data-bs-placement="bottom" title="pricing">PRICING</a>

  </b>
  <div className="btn">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
  <button type="button" class="btn btn-light text-dark">Sign-in</button>
  </div>
  
</nav>

         <div className="side-bar">
           <ul type='none'>
             <li class="badge bg-light text-dark"><h3>Admin Panel</h3></li>
             </ul>
             <ul type='side-bar-menu'>
             <li class="badge bg-light text-dark"><h3>Make Payment</h3></li>
           </ul>
          <ul type='side-bar-menu'>
             <li class="badge bg-light text-dark"><h3>Generate bills</h3></li>
           </ul>
           <ul type='side-bar-menu'>
             <li class="badge bg-light text-dark"><h3>View Payment</h3></li>
           </ul>
          </div>
  </div>




    )
}

header.defaultProps ={
    title: "Your title here",
    searchBar:true
  }
  
  header.propTypes ={
  title: propTypes.string,
  searchBar: propTypes.bool.isRequired
  
  
  }
  