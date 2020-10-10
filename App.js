// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import RowComponent from './app/components/RowComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        news: [],
        page: 1
    };
  }
  fetchNews = (page) => {
      this.setState({
        loading: true,
      }, () => {
        axios.get("http://hn.algolia.com/api/v1/search", {
          params: {
            page: page
          }
        })
        .then(response => {
            this.setState({
                loading: false,
                news: response.data.hits
            })
        })
        .catch(error => {
            console.log(error);
        });
      })
  }

  componentDidMount = () => {
    this.fetchNews()
 }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Welcome to Hacker news clone!</Text> */}
        <FlatList
          // ListFooterComponent={this._renderFooter}
          keyExtractor={(item, index) => `${index} - ${item}`}
          data={this.state.news}
          renderItem={this._renderRow}
          // onRefresh={() => this.hangleRefresh()}
          // refreshing={this.state.refreshing}
          // onEndReached={this.handleLoadMore}
        />  
      </View>
    );
  }

  _renderRow = ({ item, index }) => {
    console.log(item)
    return <RowComponent
      //  onItemClick={this.onListItemClick}
       index={index}
       data={item}
    />
 }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
