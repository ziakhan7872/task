import styles from './styles';
import FlatList from '../FlatList/index';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {icons} from '../../constants';

export default class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.headerContainer}>
          <View style={styles.arrowContainer}>
            <TouchableOpacity style={styles.headerBackArrow}>
              <Image
                source={icons.back_arrow_icon}
                style={styles.headerContainerImage}
              />
              <View style={styles.bellContainer}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.appleTextContainer}>
            <Text style={styles.appleTextStyle}>Apple</Text>
          </View>
          <View style={styles.dotIconContainer}>
            <Image
              source={icons.dot_icon}
              style={styles.headerContainerImage}
            />
          </View>
        </View>
        <View style={styles.appleContainer}>
          <View>
            <Image source={icons.apple_image} style={styles.appleImage} />
          </View>
          <View>
            <Text style={styles.postText}>784</Text>
            <Text>Posts</Text>
          </View>
          <View>
            <Text style={styles.postText}>25.5M</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.followingContainer}>
            <Text style={styles.postText}>6</Text>
            <Text>Following</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.aplleText}>Apple</Text>
          <Text style={styles.appleText}>Everyone has a story to tell</Text>
          <Text style={styles.appleText}>Everyone has a story to tell</Text>
          <Text style={styles.appleText}>Everyone has a story to tell</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.followContainer}>
            <TouchableOpacity style={styles.followTouchable}>
              <Text>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.followContainer}>
            <TouchableOpacity style={styles.messageTouchable}>
              <Text>Message</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.downArrowContainer}>
            <TouchableOpacity>
              <Image
                source={icons.arrow_down_icon}
                style={styles.arrowDownStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList />
      </View>
    );
  }
}
