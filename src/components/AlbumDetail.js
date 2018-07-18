import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {

    openUrl(url) {
        Linking.canOpenURL(url).then(isSupported => {
            if (!isSupported) {
                console.log(`Can't handle url: ${url}`);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occured', err));
    }

    render() {
        const {
            title, 
            artist, 
            thumbnail_image, 
            image,
            url
        } = this.props.album;
        const { 
            headerContentStyle, 
            thumbnailStyle, 
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle
        } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image 
                            style={thumbnailStyle}
                            source={{ uri: thumbnail_image }}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                        style={imageStyle}
                        source={{ uri: image }} 
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.openUrl(url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
