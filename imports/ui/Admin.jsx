import React, {Component} from 'react';
import {Grid, Input, Label, Menu} from "semantic-ui-react";

class Admin extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (

            <Menu>
                <Menu.Item
                    name='editorials'
                    active={activeItem === 'editorials'}
                    content='Editorials'
                    onClick={this.handleItemClick}
                />

                <Menu.Item
                    name='reviews'
                    active={activeItem === 'reviews'}
                    content='Reviews'
                    onClick={this.handleItemClick}
                />

                <Menu.Item
                    name='upcomingEvents'
                    active={activeItem === 'upcomingEvents'}
                    content='Upcoming Events'
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
}

export default Admin;