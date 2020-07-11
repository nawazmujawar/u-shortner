import React, { Component } from 'react'
import './Shortner.css'
import copyLogo from '../../img/portable-document-format.svg'

import Axios from 'axios'
class Shortner extends Component {
    state = {
        URL: "",
        shortURL: "",
        display: false
    }
    // componentDidMount() {
    //     this.urlHandler()
    // }
    urlHandler = async () => {
        const data = {
            URL: this.state.URL
        }
        console.log(data)
        const response = await Axios.post("https://url-shortner-backend.herokuapp.com/shortner", data)
        console.log(response.data.URL)
        this.setState({
            shortURL: response.data.URL,
            display: true
        })
    }
    copyClickHandler = () => {
        navigator.clipboard.writeText(this.state.shortURL)
        alert("copied")
    }
    render() {


        return (

            <div className="container">
                <div className="align-middle">
                    <h1 className="Title">Shortner</h1>
                    <p className="slogan">get URL<span style={{ color: "#38003c" }}> shorten</span></p>
                    {
                        (!this.state.display) ?
                            <div>
                                <input type="text" value={this.state.URL} placeholder="paste URL here..." onChange={(e) => this.setState({ URL: e.target.value })} />
                                <br />
                                <button type="button" id="getLink" onClick={this.urlHandler} class="btn btn-warning">Get link</button>
                            </div>
                            :
                            <div style={{ textAlign: "center" }}>
                                <p style={{ backgroundColor: "#D3D3D3", height: "45px", fontSize: "30px", fontWeight: "bold" }}>{this.state.shortURL}</p>
                                <button id="copyBtn" onClick={this.copyClickHandler}><img src={copyLogo} style={{ width: "40px", height: "40px" }} /></button>
                            </div>
                    }


                </div>
                <p className="container" style={{ position: "absolute", bottom: "1px", color: "#38003c" }}>Copyright &copy; 2020 : Nawaz Mujawar </p>
            </div>
        )
    }
}

export default Shortner
    // <input id="email" type="email" class="validate">
    // < label for= "email" > Email</label >