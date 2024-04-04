import React from 'react'
import { useContext } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlogContext } from '../context/BlogContent';
import { EvilIcons } from '@expo/vector-icons';

function ShowScreen({ navigation }) {
  // console.log('ssss');
  // console.log(navigation.getParam('id'));// routr.param.id
  // console.log('ssss');

    const { data } = useContext(BlogContext);

    const blogPost = data.find((blogPost) => blogPost.id === navigation.getParam('id'))
  return (
    <View>
        <Text>
            Title of the blog:   {blogPost.title}
        </Text>
        <Text>
            Content of the blog:   {blogPost.content}
        </Text>
       
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {

return{
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  ),
}
}

const styles= StyleSheet.create({})

export default ShowScreen;
