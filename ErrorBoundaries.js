import React, { Component } from 'react'
import { View, Text } from 'react-native'

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logErrorToMyService(error, info);
  }

  logErrorToMyService = ({ error, info }) => {
    // console.log(error, info)

  }

  render() {
    return (
      <>
        {this.state.hasError &&
          <View style={{ zIndex: 30 }}>
            <Text>App crached err</Text>
          </View>
        }
      </>
    )
  }
}


export default ErrorBoundaries
