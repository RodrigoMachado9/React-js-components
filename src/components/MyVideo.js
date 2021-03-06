import React , { Component } from  'react';
import {MyContext} from "../services/MyContext";


class MyVideo extends Component{
    static contextType = MyContext;

    constructor(props){
        super(props);
        this.myVideo = React.createRef();
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }


    start(){
        this.myVideo.current.play(); // contem determinada refencia de um video.
    }

    stop(){
        this.myVideo.current.stop();
    }


    render() {
        return(
            <div>
            <video ref={this.myVideo} width={400} src={this.props.src}/>
                <button onClick={this.start}>Play</button>
                <strong> {this.context.username} </strong>
            </div>
        );
    }
}


export default MyVideo;