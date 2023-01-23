import React from 'react';
//import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {postComment} from '../actions';
class InputComment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    WriteComment=()=>{
      return ( <input  type="text"
               placeholder='Write your comment' 
               value={this.state.term} 
               onChange={(e) => this.setState({ term: e.target.value })}/>
              );
    }
    
    OnSubmitChange=(event)=>{
        // const obj = 
        //           console.log('obj',obj);
        event.preventDefault();
        let w=false;
        const string = this.state.term;
        for(var i=0;i<string.length;i++){
            if(string[i]!==' '){
            //  console.log('string',string[i])
                   w=true;
                break;
            }
        }
        if(w){
        this.props.postComment({
            comment: this.state.term,
            id: this.props.List.length,
            like:"#D3D3D3",
            replies:[]
        });
        this.setState({term:''})
       }
    }
    render(){
        return(
            <form className='ui form ' onSubmit={this.OnSubmitChange}>
                {this.WriteComment()}
            </form>
        );
    };
};
const mapStateToProps=(state)=>{
    //console.log('list',state.List)
    return {List:state.List}
}

export default connect(mapStateToProps,{ postComment })(InputComment);