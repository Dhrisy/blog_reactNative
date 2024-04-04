import React, { useState } from 'react'
import { useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { BlogContext } from '../context/BlogContent';
import BlogPostForm from '../components/BlogPostForm';

function CreateScreen({ navigation }) {
    const { data, createBlogPost } = useContext(BlogContext);
    return <BlogPostForm
        buttonTitle={'Create'}
        onSubmit={(title, content) => {
            createBlogPost(title, content, () => navigation.navigate('Index'));
            navigation.navigate('Index');
        }}
    />

}

const styles = StyleSheet.create({

})

export default CreateScreen;
