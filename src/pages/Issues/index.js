import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from 'react-native';

import api from '~/services/api';
import IssueItem from './IssueItem';
import {colors} from '~/styles';
import styles from './styles';

export default class Issues extends Component {
  state = {
    data: [],
    filter: '',
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const {filter} = this.state;
    const item = this.props.navigation.state.params.item;
    const response = await api.get(
      `/repos/${item.organization}/${item.name}/issues`,
    );

    if (filter !== '') {
      const issues = response.data.filter(issue => issue.state === filter);
      this.setState({data: issues, loading: false});
    } else {
      this.setState({data: response.data, loading: false});
    }
  };

  navigate = ({item}) => {
    const {navigation} = this.props;

    navigation.navigate('Profile', {
      item,
    });
  };

  renderListItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.navigate({item})}>
        <IssueItem issue={item} />
      </TouchableOpacity>
    );
  };

  renderList = () => {
    const {data, refreshing} = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadData}
        refreshing={refreshing}
      />
    );
  };

  updateFilter = async (filterOption = '') => {
    await this.setState({filter: filterOption, loading: true});
    await this.loadData();
  };

  render() {
    const {loading, filter} = this.state;

    return (
      <>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={colors.lighter}
            barStyle={'dark-content'}
          />
          <View style={styles.filterBar}>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => this.updateFilter('')}>
              <Text
                style={
                  filter === '' ? styles.selected : styles.filterButtonText
                }>
                Todas
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => this.updateFilter('open')}>
              <Text
                style={
                  filter === 'open' ? styles.selected : styles.filterButtonText
                }>
                Abertas
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => this.updateFilter('closed')}>
              <Text
                style={
                  filter === 'closed'
                    ? styles.selected
                    : styles.filterButtonText
                }>
                Fechadas
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.issueList}>
            {loading ? (
              <ActivityIndicator style={styles.loading} />
            ) : (
              this.renderList()
            )}
          </View>
        </View>
      </>
    );
  }
}
