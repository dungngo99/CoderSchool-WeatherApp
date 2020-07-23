import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap/'

export default class SideHeader extends Component {
    render() {
        return (
            <Navbar className="row justify-content-around dn-sidebar-head">
                <div className='col-md-8 dn-links'>
                    <button id='dn-btn-link' className='btn btn-link'>Notification</button><button id='dn-btn-link' className='btn btn-link'>Place</button>
                </div>
                <div className="col-md-4 mb-2 user">
                    <img className='dn-user' src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg' alt='...'></img>
                </div>
            </Navbar>
        )
    }
}
