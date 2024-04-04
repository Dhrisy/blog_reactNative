import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { BlogContext } from '../context/BlogContent';
import BlogPostForm from '../components/BlogPostForm';

function EditScreen({ navigation }) {
    console.log(navigation.getParam('id'));
    const id = navigation.getParam('id');

    const { data, updateBlogPost } = useContext(BlogContext);
    const blogPost = data.find((blogPost) => blogPost.id === navigation.getParam('id'));
   

    return (

        <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        buttonTitle={'Save changes'}
        onSubmit={(newTitle, newContent) => {
            
            updateBlogPost(id, newTitle, newContent, () => navigation.pop());

        }}
        />
        // <View>

        //     <Text>
        //         Enter title - {navigation.getParam('id')}
        //     </Text>
        //     <TextInput
        //         placeholder='Enter the title'
        //         value={title}
        //         onChangeText={(newtitle) => setTitle(newtitle)}
        //         style={styles.inputTitleStyle}
        //     />

        //     <Text>Enter content </Text>
        //     <TextInput
        //         placeholder='Enter the content'
        //         value={content}
        //         onChangeText={(content) => setContent(content)}
        //         style={styles.inputContentStyle}

        //     />

        //     <Button title='Save'
        //         onPress={() => {
        //             // createBlogPost(title, content);
        //             // navigation.navigate('Index')


        //         }}
        //     />
        // </View>
    )
}

const styles = StyleSheet.create({
    inputTitleStyle: {
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10
    },
    inputContentStyle: {
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        margin: 10

    }

})

export default EditScreen
