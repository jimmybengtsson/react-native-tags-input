import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import TagInput from 'react-native-tags-input';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: []
      },
      suggestions: []
    };
  }

  updateTagState = (state) => {
    this.setState({
      tags: state
    }, () => {
      this.updateSuggestionState(state)
    })
  };

  updateSuggestionState = (state) => {

    if (state.tag === '') {
      return
    }

    // Replace this with a callback from a search in your database
    let suggestionsArr = ['test1', 'test2', 'test3', 'npm', 'github', 'react', 'react native', 'react-native-tags-input']
    let tempSuggestions = [];                                     //
                                                                  //
    for (let i = 0; i < suggestionsArr.length; i++) {             //
      if (suggestionsArr[i].includes(state.tag) === true) {       // Replace this with database search result which will be
        tempSuggestions.push(suggestionsArr[i])                   // added to the tempSuggestions-array.
      }                                                           //
    }
    if (tempSuggestions.length > 0) {
      this.setState({
        suggestions: tempSuggestions
      })
    } else {
      this.setState({
        suggestions: []
      })
    }
  };

  renderSuggestions = () => {

    if (this.state.suggestions.length > 0 ) {
      return (
        this.state.suggestions.map((item, count) => {
          return (
            <TouchableHighlight
              onPress={() => this.onSuggestionClick(item)}
              key={count}
            >
              <Text>{item}</Text>
            </TouchableHighlight>
          )
        })
      )
    } else {
      return null
    }
  }

  onSuggestionClick = (suggestion) => {

    let state = this.state.tags

    state.tagsArray.push(suggestion)

    this.setState({
      tags: {
        tag: '',
        tagsArray: state.tagsArray
      },
      suggestions: []
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TagInput
          updateState={this.updateTagState}
          tags={this.state.tags}
          autoCapitalize={'none'}
          customElement={<View>{this.renderSuggestions()}</View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});