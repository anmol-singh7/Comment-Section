import React from 'react';
import "./drop.css";
 import { connect } from 'react-redux';
import { deleteReply, likeReply } from '../actions';
// import Reply from './Reply';
class RelpyCard extends React.Component {

    render() {
        const reqReply = this.props.objectofreply;
        return (
            <div className="ui comments">
                <div className="comment">
                    <a className="avatar" style={{height:'30px',width:'30px'}}>
                        <img alt='' src="https://cdn.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.webp" style={{ height: '30px', width: '30px' }} />
               </a>
                    <div className="content">
                        <a className="author">Tom Lukic</a>
                        <div className="text">
                            {reqReply.reply}
                            {/* This will be great for business reports. I will definitely download this. */}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around', width: '25vw', color: 'grey', marginRightt: "5vw" }}>
                            {/* <div style={{ cursor: 'pointer' }} >

                                <Reply id={reqComment.id} />
                            </div> */}

                            <div style={{ cursor: 'pointer', fontSize: '14px' }} className="save" onClick={() => this.props.deleteReply(reqReply.ids)}>Delete</div>
                            {/* <a className="hide">React</a> */}
                            <div style={{ cursor: 'pointer', fontSize: '14px' }} onClick={() => this.props.likeReply(reqReply.ids)} >

                                <i className="heart icon" style={{ color: reqReply.like }}></i>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
    //  console.log('map',state.List)
    return { List: state.List }
}

export default connect(mapStateToProps, { deleteReply,likeReply})(RelpyCard);
//export default RelpyCard;
