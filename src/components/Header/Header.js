import React from 'react';
import * as styles from './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.menuElement = React.createRef();
        this.state =  {
            height: 0
        }
    }
    componentWillUnmount(){
        window.removeEventListener("resize",()=>{});
    }
    componentDidMount(){
        setTimeout(()=>
        this.setState({
            height: this.menuElement.current.offsetHeight
        }),1000);
        window.addEventListener("resize", (e) => {
            this.setState({
                height: this.menuElement.current.offsetHeight
            })
        },false)
    }
    render(){
        const {isOpen} = this.props.header;
        const hasHeight = this.state.height > 0;
        const hidePosY = hasHeight ? `${60 - this.state.height}px` : "-100%";
        const style = {
            transform: `translateY(${isOpen ? hidePosY : 0})`
        };
        return(
            <div ref={this.menuElement} style={style} className={styles.header} onClick={(e) => {
                this.props.onMenuClick(e.target)
            }}>
                {this.props.children}
            </div>
        )
    }

}


export default Header;
