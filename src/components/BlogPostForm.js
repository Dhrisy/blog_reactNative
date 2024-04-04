import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { BlogContext, BlogProvider } from '../context/BlogContent';

function BlogPostForm({ buttonTitle, onSubmit, initialValues }) {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    // const { data, createBlogPost } = useContext(BlogContext);
    return (
        <View>
            <Text>
                Enter title
            </Text>
            <TextInput
                placeholder='Enter the title'
                value={title}
                onChangeText={(title) => setTitle(title)}
                style={styles.inputTitleStyle}
            />

            <Text>Enter content </Text>
            <TextInput
                placeholder='Enter the content'
                value={content}
                onChangeText={(content) => setContent(content)}
                style={styles.inputContentStyle}

            />

            <Button title={buttonTitle}
                onPress={() => {
                    onSubmit(title, content);
                }}
            />
        </View>
    )
}


BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm
