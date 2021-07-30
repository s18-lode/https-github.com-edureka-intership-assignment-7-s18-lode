import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';
import queryString from 'query-string';
import Modal from 'react-modal';

import 'react-tabs/style/react-tabs.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/details.css';

const constants = require('../constants');
const API_URL = constants.API_URL;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '660px',
        maxHeight: '700px'
    },
};

Modal.setAppElement('#root');

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            restaurant: null,
            isMenuModalOpen: false
        };
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const { id } = qs;

        axios.get(`${API_URL}/api/getRestaurantById/${id}`)
            .then(result => {
                this.setState({
                    restaurant: result.data.restaurant
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    openMenuHandler = () => {
        this.setState({
            isMenuModalOpen: true
        });
    }

    closeMenuModal = () => {
        this.setState({
            isMenuModalOpen: false
        });
    }

    render() {
        const { restaurant, isMenuModalOpen } = this.state;
        return (
            <div className="container details">
                {
                    restaurant
                    ?
                    <div>
                        <div className="images">
                            <Carousel showThumbs={false}>
                                {
                                    restaurant.thumb.map((item, index) => {
                                        return (
                                            <div>
                                                <img key={index} src={require('../' + item).default} alt="not found" />
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="restName my-3">
                            { restaurant.name }
                            <button className="btn btn-danger float-end mt-4" onClick={this.openMenuHandler}>Place Online Order</button>
                        </div>
                        <div className="myTabs mb-5">
                            <Tabs>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="about my-5">About this place</div>
                                    <div className="cuisine">Cuisine</div>
                                    <div className="cuisines">
                                        {
                                            restaurant.cuisine.map((item, index) => {
                                                return <span key={index}>{ item.name },</span>
                                            })
                                        }
                                    </div>
                                    <div className="cuisine mt-3">Average Cost</div>
                                    <div className="cuisines"> &#8377; { restaurant.min_price } for two people (approx.)</div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="cuisines my-5">Phone Number
                                        <div className="text-danger">{ restaurant.contact_number }</div>
                                    </div>
                                    <div className="cuisine mt-4">{ restaurant.name }</div>
                                    <div className="text-muted mt-2">
                                        { restaurant.locality }, 
                                        <br/>
                                        { restaurant.city }
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <Modal isOpen={isMenuModalOpen} style={customStyles}>
                            <h2 className="popup-heading">
                                { restaurant.name }
                                <button className="float-end btn btn-close mt-2" onClick={this.closeMenuModal}></button>
                            </h2>
                        </Modal>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}
