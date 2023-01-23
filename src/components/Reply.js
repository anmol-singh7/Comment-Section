import React from "react";
import './drop.css';
import { ReplyToComment } from '../actions';
import ReplyList from './ReplyList';
import {connect } from 'react-redux';

class Reply extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Todisplay: 'none',
            term: ''
        }
    }
    changeDisplay = () => {
        if (this.state.Todisplay === 'none') {
            this.setState({ Todisplay: 'block' });
        }
        else {
            this.setState({ Todisplay: 'none' });
        }
    }
    onSubmitChange=(event)=>{
       
        event.preventDefault();
        let w = false;
        const string = this.state.term;
        for (var i = 0; i < string.length; i++) {
            if (string[i] !== ' ') {
                //  console.log('string',string[i])
                w = true;
                break;
            }
        }
        if (w) {
            this.props.ReplyToComment({
                reply: this.state.term,
                ids:{
                    parentId: this.props.idofparent,
                    childId: this.props.List[this.props.idofparent].replies.length
                    },
                like: "#D3D3D3",
            });
            this.setState({ term: '' })
        }
    }
    render(){
        return (
            <div className="dropdown" >
                <div className="dropbtn" onClick={() => this.changeDisplay()}>Dropdown</div>
                <div className="dropdown-content" >
                    <div style={{ display: this.state.Todisplay }}>
                        <form className='ui form' onSubmit={this.onSubmitChange}>
                        <input type="text" 
                         value={this.state.term}
                         onChange={(e)=>this.setState({term:e.target.value})}
                         />
                         </form>
                       
                        <ReplyList idofpar={this.props.idofparent}/>
                        {/* <div>svsdvds</div>
                        <div>ddsffewf</div>
                        <div>svsdvds</div>
                        <div>ddsffewf</div> */} 
                                      
                 </div>
                </div>
            </div>
        )
    }
};
const mapStateToProps=(state)=>{
    //console.log('update', state.List)
    return { List: state.List}
}
export default connect(mapStateToProps, { ReplyToComment })(Reply);