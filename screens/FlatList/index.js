import styles from './styles';
import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {images, icons} from '../../constants';
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      data: ['Pankaj', 'Rita', 'Mohan', 'Amit', 'Babulal', 'Sakshi'],
    };
  }
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <FlatList
          horizontal={true}
          data={this.state.data}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.FlatListContainer}>
              <Image
                source={images.theMetropolist}
                style={{width: 80, height: 80, borderRadius: 60}}
              />
              <Text style={styles.title}>Student</Text>
            </View>
          )}
        />
        <View style={styles.iConContainer}>
          <View>
            <TouchableOpacity style={styles.iConContainerStyle}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={styles.iConContainerStyle}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.iConContainerStyle}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={styles.iConContainerStyle}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.iConContainerStyle}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={styles.iConContainerStyle}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.iConContainerStyle}>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={styles.iConContainerStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageContainerView}>
            <View>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={styles.imageContainerStyle}
              />
            </View>

            <View>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={styles.imageContainerStyle}
              />
            </View>
            <View>
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={styles.imageContainerStyle}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
