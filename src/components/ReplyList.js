import React from 'react';
//import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
// import { deleteComment } from '../actions';
import ReplyCard from './RelpyCard';


class ReplyList extends React.Component {   

    //  show = () => {
    //     let an = [];
    //     for (var i = 0; i < (this.props.List[this.props.idofpar]).replies.length; i++) {
    //         an.push(<ReplyCard objectofreply={this.props.List[this.props.idofpar][i]} key={this.props.List[this.props.idofpar][i].ids.childId} />)
    //     }
    //     return an;
    // }
    render() {
        const rep = this.props.List[this.props.idofpar];
        const show = rep.replies.map((reply) => {

            return <ReplyCard objectofreply={reply} key={reply.ids.childId} />
        })

       
        return (
            <div >{show}</div>
        );
    };

};
const mapStateToProps = (state) => {
    //console.log('list', state.List)
    return { List: state.List}
}

export default connect(mapStateToProps, null)(ReplyList);