import React from 'react';
//import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// import { deleteComment } from '../actions';
import CommentCardHelper from './commentCardhelp';


class CommentCard extends React.Component {
     
    render() {
        
        const show = this.props.List.map((comme) => {
          
            return <CommentCardHelper objectofComment={comme} key={comme.id}  />
        })
        return (
            <div >{show}</div>
        );
    };
};
const mapStateToProps = (state) => {
    //console.log('list', state.List)
    return { List: state.List }
}

export default connect(mapStateToProps,null)(CommentCard);