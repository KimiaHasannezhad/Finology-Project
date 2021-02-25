import React from 'react'
import {Card } from 'react-bootstrap'
import { Map, GoogleApiWrapper } from 'google-maps-react';




export class ContactForm extends React.Component {

    render() {

        return (
            <div className="container">

                <h2 className="middle-header">Contact Us</h2>
                <div className="contactUs-section">
                    <Card>
                        <form>
                            <label>
                                Name
                             </label>
                            <input type="text" placeholder="Enter your name"></input>
                            <label>
                                Email
                            </label>
                            <input type="email" placeholder="Enter your Email"></input>
                            <label>
                                Subject
                            </label>
                            <select >
                                <option>
                                    Please choose your subject
                                </option>
                                <option>
                                    subject one
                                </option>
                                <option>
                                    subject two
                                </option>
                                <option>
                                    subject three
                                </option>
                                <option>
                                    subject four
                            </option>
                            </select>
                            <label>Message</label>
                            <textarea
                                value="Write your message here"
                            ></textarea>
                            <button>Submit</button>
                        </form>
                    </Card>
                    <div className="map">
                        <Map
                            google={this.props.google}
                            zoom={8}
                            initialCenter={{ lat: 47.444, lng: -122.176 }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBmqLZfI4geKaa0Gh3j_j-E6M_hwVdR1kU'
})(ContactForm);
