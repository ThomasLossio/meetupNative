import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Background from '~/components/Background';

import {Container} from './styles';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Background>
        <Container />
      </Background>
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => <Icon name="list" size={20} color={tintColor} />,
};
