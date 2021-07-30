import React, { Component } from 'react';
import '../Styles/filter.css';
import queryString from 'query-string';

export default class Filter extends Component {

    constructor() {
        super();
        this.state = {
            mealType: ''
        }
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const { mealType } = qs;
        this.setState({
            mealType: mealType
        })
    }

    render() {
        const { mealType } = this.state;
        return (
            <React.Fragment>
                <div className="container-fluid no-padding filter-layout">
                    <div className="container">
                        <div className="heading">{mealType} Places in Mumbai</div>
                        <div className="row">
                            <div className="leftSection col-xl-3 col-lg-4 col-md-5">
                                <div className="filterSection">
                                    <div className="filter-heading">Filters</div>
                                    <div className="filter-subheading">Select Location</div>
                                    <select className="filter-location">
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                        <option>Chennai</option>
                                        <option>Kolkata</option>
                                    </select>
                                    <div className="filter-subheading">Cuisine</div>
                                    <div>
                                        <input type="checkbox" className="filter-cuisine" name="cuisine" /><span className="filter-cuisine">North Indian</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="filter-cuisine" name="cuisine" /><span className="filter-cuisine">South Indian</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="filter-cuisine" name="cuisine" /><span className="filter-cuisine">Chinese</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="filter-cuisine" name="cuisine" /><span className="filter-cuisine">Fast Food</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="filter-cuisine" name="cuisine" /><span className="filter-cuisine">Street Food</span>
                                    </div>

                                    <div className="filter-subheading">Cost For Two</div>
                                    <input type="radio" className="filter-cuisine" name="cost" /> Less than &#8377; 500
                                    <br/>
                                    <input type="radio" className="filter-cuisine" name="cost" /> &#8377; 500 to &#8377; 1000
                                    <br/>
                                    <input type="radio" className="filter-cuisine" name="cost" /> &#8377; 1000 to &#8377; 1500
                                    <br/>
                                    <input type="radio" className="filter-cuisine" name="cost" /> &#8377; 1500 to &#8377; 2000
                                    <br/>
                                    <input type="radio" className="filter-cuisine" name="cost" /> &#8377; 2000+

                                    <div className="filter-heading">Sort</div>
                                    <input type="radio" className="filter-cuisine" name="sort" /> Price low to high
                                    <br/>
                                    <input type="radio" className="filter-cuisine" name="sort" /> Price high to low
                                </div>
                            </div>
                            <div className="rightSection col-xl-9 col-lg-8 col-md-7">
                                <div className="resultSection">
                                    <div className="result">
                                        <div className="result-top row">
                                            <div className="col-xl-2 col-lg-3 col-md-4">
                                                <img src={require('../Assets/breakfast.png').default} className="result-image" alt="not found" />
                                            </div>
                                            <div className="col-xl-10 col-lg-9 col-md-8">
                                                <div className="result-header">The Big Chill Cakery</div>
                                                <div className="result-subheader">FORT</div>
                                                <div className="result-address">Shop 1, Plot D, Samruddhi Complex, Chincholi …</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="result-bottom row">
                                            <div className="col-xl-2 col-lg-3 col-md-4">
                                                <div className="result-details">CUISINES:</div>
                                                <div className="result-details">COST FOR TWO:</div>
                                            </div>
                                            <div className="col-xl-10 col-lg-9 col-md-8">
                                                <div className="result-values">Bakery</div>
                                                <div className="result-values">&#8377; 700</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="result">
                                        <div className="result-top row">
                                            <div className="col-xl-2 col-lg-3 col-md-4">
                                                <img src={require('../Assets/breakfast.png').default} className="result-image" alt="not found" />
                                            </div>
                                            <div className="col-xl-10 col-lg-9 col-md-8">
                                                <div className="result-header">The Bake Shop</div>
                                                <div className="result-subheader">FORT</div>
                                                <div className="result-address">Shop 1, Plot D, Samruddhi Complex, Chincholi …</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="result-bottom row">
                                            <div className="col-xl-2 col-lg-3 col-md-4">
                                                <div className="result-details">CUISINES:</div>
                                                <div className="result-details">COST FOR TWO:</div>
                                            </div>
                                            <div className="col-xl-10 col-lg-9 col-md-8">
                                                <div className="result-values">Bakery</div>
                                                <div className="result-values">&#8377; 700</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mypagination">
                                        <div className="pagination-button">&#8592;</div>
                                        <div className="pagination-button">1</div>
                                        <div className="pagination-button">2</div>
                                        <div className="pagination-button">3</div>
                                        <div className="pagination-button">4</div>
                                        <div className="pagination-button">5</div>
                                        <div className="pagination-button">&#8594;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
