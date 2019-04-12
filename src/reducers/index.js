import { combineReducers } from 'redux';
import auth from "./authReducer";
import info from "./userReducer";
// import tracks from  './tracks';
// import playlists from  './playlists';
// import filterTracks from  './playlists';
// import { routerReducer } from 'react-router-redux';

export default combineReducers({
  info,
  auth
})
