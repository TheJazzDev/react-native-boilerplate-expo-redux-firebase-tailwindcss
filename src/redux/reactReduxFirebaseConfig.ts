import { firebase } from '../config';
import { dispatch } from './store';
import { createFirestoreInstance } from 'redux-firestore';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: dispatch,
  createFirestoreInstance,
};
