import React, { Component } from 'react';

import PropTypes from 'prop-types';

import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Firechat from 'firechat';
import FirechatUI from 'firechat';
import firestore from '../../firebase';
import * as firebase from 'firebase/app';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null}
  }

  initChat = (user) => {
    var chatRef = firebase.database().ref("chat");
    // Create a Firechat instance
    var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
    // Set the Firechat user
    chat.setUser(user.uid, user.displayName);
  }

  componentWillMount() {
      this.initChat(this.props.user)
  }

  render() {
    const { theme } = this.props;

    if (!theme) {
      return null;
    }

    const { performingAction } = this.state;

    return (
      <div>
        <button onclick="login()">Login with Twitter</button>
        <div id="firechat-wrapper">
        bruh <br/>
        bruh <br/>
        bruh <br/>
        </div>
      </div>
    )
  }
}


export default Chat;
