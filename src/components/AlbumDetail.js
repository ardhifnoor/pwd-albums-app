import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Card from './Card'
import CardSection from './CardSection'

const css = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    }
})

const AlbumDetail = ({ album }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album

    return(
        <Card>
            <CardSection>
                <View style={ css.thumbnailContainerStyle }>
                    <Image style={ css.thumbnailStyle } source={{ uri: thumbnail_image }}/>
                </View>
                <View style={ css.headerContentStyle }>
                    <Text style={ css.headerTextStyle }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
        </Card>
    )
}

export default AlbumDetail