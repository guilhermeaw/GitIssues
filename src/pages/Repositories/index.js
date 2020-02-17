import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors} from '~/styles';
import api from '~/services/api';
import RepositoryItem from '~/pages/Repositories/RepositoryItem';
import styles from './styles';

export default class Repositories extends Component {
  state = {
    data: [],
    inputValue: '',
    loading: true,
    refreshing: false,
    error: false,
    errorMessage: '',
  };

  async componentDidMount() {
    this.loadData();
    // AsyncStorage.getAllKeys()
    //   .then(keys => AsyncStorage.multiRemove(keys))
    //   .then(() => alert('success'));
  }

  checkRepoExists = async inputValue => {
    const info = inputValue.split('/');
    const organization = info[0];
    const repository = info[1];

    const response = await api.get(`/repos/${organization}/${repository}`);
    const repo = {
      id: response.data.id,
      name: response.data.name,
      organization: response.data.organization.login,
      avatar: response.data.organization.avatar_url,
    };

    return repo;
  };

  saveRepository = async repo => {
    const {data} = this.state;

    const duplicates = data.filter(item => item.id === repo.id);
    if (duplicates.length > 0) {
      this.setState({errorMessage: 'Repositório já existe!', error: true});
    } else {
      data.push(repo);
      this.setState({error: false});

      await AsyncStorage.setItem('@Github:repoData', JSON.stringify(data));
    }
  };

  addRepository = async () => {
    const {inputValue} = this.state;
    this.setState({loading: true});

    try {
      const repo = await this.checkRepoExists(inputValue);
      await this.saveRepository(repo);

      this.setState({loading: false, inputValue: '', refreshing: false});
    } catch (err) {
      console.tron.log('error: ' + err);
      this.setState({
        loading: false,
        inputValue: '',
        error: true,
        refreshing: false,
        errorMessage: 'Repositório não encontrado!',
      });
    }
  };

  loadData = async () => {
    const repoData = await AsyncStorage.getItem('@Github:repoData');

    if (repoData !== null) {
      const data = JSON.parse(repoData);
      this.setState({data});
    }

    this.setState({loading: false});
  };

  navigate = ({item}) => {
    const {navigation} = this.props;

    navigation.navigate('Issues', {
      item,
    });
  };

  renderListItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.navigate({item})}>
        <RepositoryItem repository={item} />
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

  updateInputField = text => {
    this.setState({inputValue: text});
  };

  render() {
    const {inputValue, loading, error, errorMessage} = this.state;

    return (
      <>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={colors.lighter}
            barStyle={'dark-content'}
          />
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              underlineColorAndroid="transparent"
              value={inputValue}
              onChangeText={this.updateInputField}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}>
              <Icon name="plus" size={20} color={'#000'} />
            </TouchableOpacity>
          </View>

          {error && (
            <View style={styles.errorBox}>
              <Text style={styles.error}>{errorMessage}</Text>
            </View>
          )}

          <View style={styles.repoList}>
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
