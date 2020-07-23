import React, { Component } from 'react'
import { Form, Button, Navbar, Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap/'

export default class Header extends Component {
    render() {
        let search = this.props.searchCity
        return (
            <div className='dn-header'>
                <Navbar className="justify-content-start">
                    <Form inline>
                        <div className='dn-search-bar'>
                            <i className="fa fas fa-search" style={{ 'color': 'black' }}></i>
                            <input type="text" id='search-input' placeholder="Search new place" className="search-area mr-sm-2" />
                        </div>
                        <Button variant='btn light btn-outline-dark btn-sm' type="button" onClick={() => {search()}}>Search</Button>
                    </Form>
                    <div className="dn-dropdown">
                        <DropdownButton as={ButtonGroup} key={1} id={`dropdown-button-drop-1`} size="lg" title="All places">
                            <Dropdown.Item eventKey="1">Choose</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Insert</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Delete</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Replace</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Navbar>
            </div>
        )
    }
}
