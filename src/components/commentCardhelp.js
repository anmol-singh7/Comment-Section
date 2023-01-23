import React from 'react';
import "./drop.css";
import {connect } from 'react-redux';
import { deleteComment ,like} from '../actions';
import Reply from './Reply';

class CommentCardHelper extends React.Component{
      
       render(){
           const reqComment = this.props.objectofComment;
        return (
         <div className="ui comments">
            <div className="comment">
                <a className="avatar">
                    <img alt='' src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"/>
                </a>
                <div className="content">
                    <a className="author">Tom Lukic</a>
                    <div className="text">
                        {reqComment.comment}
                        {/* This will be great for business reports. I will definitely download this. */}
                    </div>
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between' ,width:'30vw',color:'grey',marginLeft:"5vw"}}>
                            <div style={{ cursor: 'pointer' }} >
                                
                                <Reply idofparent={this.props.objectofComment.id} />
                            </div>
               
                            <div style={{ cursor: 'pointer', fontSize: '14px' }} className="save" onClick={() => this.props.deleteComment(reqComment.id)}>Delete</div>
                        {/* <a className="hide">React</a> */}
                            <div style={{ cursor: 'pointer', fontSize: '14px' }} onClick={() => this.props.like(reqComment.id)}>
                            
                         <i className="heart icon" style={{color:reqComment.like}}></i>
        
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
}
const mapStateToProps=(state)=>{//<-here mapToStateProps is called so that state update when like is clicked
    //  console.log('map',state.List)
    return {List :state}
}

export default connect(mapStateToProps, { deleteComment,like })(CommentCardHelper);
