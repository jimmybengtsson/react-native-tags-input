import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import {Icon} from 'react-native-elements';
import TagInput from 'react-native-tags-input';

const mainColor = '#3ca897';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: {
        tag: '',
        tagsArray: []
      },
      tagsColor: mainColor,
      tagsText: '#fff',
    };
  }

  updateTagState = (state) => {
    this.setState({
      tags: state
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.standardContainer}>
          <TagInput
            updateState={this.updateTagState}
            tags={this.state.tags}
            containerStyle={{width: (Dimensions.get('window').width - 40)}}
          />
        </View>
        <View style={styles.customContainer}>
          <TagInput
            updateState={this.updateTagState}
            tags={this.state.tags}
            placeholder="Tags..."
            label='Press comma & space to add a tag'
            labelStyle={{color: '#fff'}}
            leftElement={<Icon name={'tag-multiple'} type={'material-community'} color={this.state.tagsText}/>}
            leftElementContainerStyle={{marginLeft: 3}}
            containerStyle={{width: (Dimensions.get('window').width - 40)}}
            inputContainerStyle={[styles.textInput, {backgroundColor: this.state.tagsColor}]}
            inputStyle={{color: this.state.tagsText}}
            onFocus={() => this.setState({tagsColor: '#fff', tagsText: mainColor})}
            onBlur={() => this.setState({tagsColor: mainColor, tagsText: '#fff'})}
            autoCorrect={false}
            tagStyle={styles.tag}
            tagTextStyle={styles.tagText}
            keysForTag={', '}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  standardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColor,
  },
  textInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 5,
    padding: 3,
  },
  tag: {
    backgroundColor: '#fff'
  },
  tagText: {
    color: mainColor
  },
});