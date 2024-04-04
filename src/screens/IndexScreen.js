import React, { useEffect } from 'react'
import { useContext } from 'react'
import { BlogContext } from '../context/BlogContent'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'

function IndexScreen({ navigation }) {
    // console.log(navigation);
    const { data, getBlogPosts, deleteBlogPost } = useContext(BlogContext);
    
    useEffect(() => {
        getBlogPosts();
        console.log(data);


        const listener = navigation.addListener('didFocus', ()=>{
            getBlogPosts();
        });

        return () => {
            listener.remove();
        }

    })
    return (

        <View style={styles.container}>


            <FlatList
                // key={data.}
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item, index }) => {
                    return <TouchableOpacity
                        onPress={() => navigation.navigate('Show', { id: item.id })}
                    >
                        <View style={styles.listCard}>
                            <Text>Title: {item.title} {item.id}</Text>
                            <TouchableOpacity
                                onPress={(id) => {
                                    // console.log(data.id);
                                    console.log(item.title);
                                    deleteBlogPost(item.id);
                                }}
                            >
                                <AntDesign name="delete" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
};


IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />

            </TouchableOpacity>
        ),
    };
};



const styles = StyleSheet.create({
    container: {
        margin: 5,
        // borderColor: 'grey',
        // borderWidth: 0.5,
        gap: 10

    },
    listCard: {

        height: 50,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        margin: 10,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
export default IndexScreen;
