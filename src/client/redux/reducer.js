import { combineReducers } from 'redux';

import user from './user/user.reducer';
import feedback from './feedback/feedback.reducer';
import templates from './templates/templates.reducer';
import modalDialog from './modalDialog/modalDialog.reducer';

export default combineReducers({
  user,
  feedback,
  templates,
  modalDialog,
});
