import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface PillProps {
  title: string;
}

function Pill({title}: PillProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Pill;
