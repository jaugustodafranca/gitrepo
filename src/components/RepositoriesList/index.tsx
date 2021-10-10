import React from 'react';
import { FlatList } from 'react-native';

import { Repository } from '../';
import { Repositories } from '../../context/AppContext';
import styles from './styles';

interface RepositoriesList {
  data: Repositories[]
}


const RepositoriesList = ({ data }: RepositoriesList) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={({item}) => <Repository repositoryData={item}/>}
      keyExtractor={item => String(item.id)}
    />
  );
};

export default React.memo(RepositoriesList);
