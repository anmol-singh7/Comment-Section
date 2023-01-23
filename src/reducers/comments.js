export default (state = [], action) => {
   //console.log('reducer',state)
   switch (action.type) {
      case "POST_COMMENT": {
         //  console.log('sss',state)
         return [...state, action.payload];
      }
      case "DELETE": {
         //  console.log('ifff',action.payload);
         for (var i = action.payload; i < state.length - 1; i++) {
            state[i] = state[i + 1];
            state[i].id -= 1;
         }
         state.pop();
         return [...state];
      }
      case "LIKE": {
         if (state[action.payload].like === '#D3D3D3') {
            state[action.payload].like = "#FF0000";
         }
         else {
            state[action.payload].like = "#D3D3D3";
         }
         //   console.log('statecolor',state)
         return [...state]
      }
      case "REPLY": {
         state[action.payload.ids.parentId].replies.push(action.payload);
         console.log('replyaction', state);
         return [...state];
      }
      case 'LIKE_REPLY': {
         if (state[action.payload.parentId].replies[action.payload.childId].like === '#D3D3D3') {
            state[action.payload.parentId].replies[action.payload.childId].like = "#FF0000";
         }
         else {
            state[action.payload.parentId].replies[action.payload.childId].like = "#D3D3D3";
         }
         return [...state];
      }
      case 'DELETE_REPLY': {
         // console.log('state1', state)
         // console.log('childlength', state[action.payload.parentId].replies.length);
         // console.log('todelete', action.payload.childId)
         // console.log('replies', state[action.payload.parentId].replies[action.payload.childId])

         for (var i = action.payload.childId; i < (state[action.payload.parentId].replies.length) - 1; i++) {
            state[action.payload.parentId].replies[i] = state[action.payload.parentId].replies[i + 1];
            //console.log('loop', state);
            //   const idd=action.payload;
            //   idd.childId-=1;
             (state[action.payload.parentId].replies[i]).ids.childId -= 1;
         }
         state[action.payload.parentId].replies.pop();
         // console.log('replies2', state[action.payload.parentId].replies[action.payload.childId])

         // console.log('state2', state)
         return [...state];
      }

      default:
         return state;
   }
};