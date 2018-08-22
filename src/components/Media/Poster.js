import React from 'react';
import * as styles from "./Poster.css";

export class Poster extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    onImageLoaded = () => {
        this.setState({
            isLoaded: true
        });
    };

    render() {
        const {isLoaded} = this.state;
        console.log("IMAGE IS LOADED ", isLoaded);
        return (
            <div className={styles.poster}>
                    <img className="w3-image w3-opacity w3-hover-opacity-off w3-animate-opacity"
                         style={{width: "100%", display: isLoaded ? "block" : "none"}}
                         alt="Poster"
                         onLoad={this.onImageLoaded} src={this.props.url}/>
                    <div className={`w3-padding-32 w3-display-container w3-image ${styles.loader}`}
                         style={{display:isLoaded ? 'none' : 'block',  width: "500px", minHeight:"480px"}}>
                        <span className="w3-display-middle"/>
                    </div>

            </div>


        )


    }
}
