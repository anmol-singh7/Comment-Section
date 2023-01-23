import {combineReducers } from 'redux';
import ListOfComments from './comments';
// import ReplyOfComment from './Reply';

export default combineReducers({
    List: ListOfComments
    // ReplyList: ReplyOfComment
});