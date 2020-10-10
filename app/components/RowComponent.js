import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class RowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        news: [],
        page: 1
    };
  }

  render() {
    let { data, index } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.indexNumber}>{index + 1}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>{data.title || 'N.A'}</Text>
          <Text style={{ opacity: 0.5}}> ({data.url || 'N.A'})</Text>
        </View>
        </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: 'row',
    padding: 5
  },
  indexNumber: {
    paddingRight: 10,
    paddingLeft: 10
  }
});

export default RowComponent
