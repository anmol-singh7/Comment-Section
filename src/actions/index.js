export const postComment=(comment)=>{
    return{
        type: "POST_COMMENT",
        payload:comment
    }
};
export const deleteComment=(id)=>{
    return{
        type:"DELETE",
        payload:id
    };
};
export const like=(id)=>{
    return {
        type:"LIKE",    
        payload:id
    };
};
export const ReplyToComment=(obj)=>{
    return{
        type:"REPLY",
        payload:obj
    }
}
export const likeReply=(ids)=>{
    return{
        type:'LIKE_REPLY',
        payload:ids
    };
};
export const deleteReply=(ids)=>{
    return{
        type:'DELETE_REPLY',
        payload:ids
    }
}