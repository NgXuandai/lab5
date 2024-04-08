import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from 'react-native-image-picker';
const includeExtra = true;
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
export function LayAnh() {
    const dispatch = useDispatch();
    const selectedImage = useSelector((state: RootState) => state.image.selectedImage);

    const [response, setResponse] = React.useState<any>(null);

    const onButtonPresss = React.useCallback((type: any, option: any) => {
        if (type == 'capture') {
            ImagePicker.launchCamera(option, setResponse);
        } else {
            ImagePicker.launchImageLibrary(option, setResponse);
            // const selectedImage = response.assets[0].uri;
            // dispatch({ type: 'select_image', payload: { image: selectedImage } })
        }
    }, []);

    React.useEffect(() => {
        if (response && response.assets && response.assets.length > 0) {
            const selectedImage = response.assets[0].uri;
            dispatch({ type: 'select_image', payload: { image: selectedImage } });
        }
    }, [response, dispatch]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                Lấy ảnh
            </Text>

            {selectedImage ? (
                <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, borderRadius: 100 }} />
            ) : (
                <View style={{ width: 150, height: 150, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center', borderRadius: 90 }}>
                    <Image source={require('../lab5/image/camera.png')} style={{ width: 90, height: 90 }} resizeMode="cover" />
                </View>
            )}

            <View style={{ marginBottom: 10 }}>
                {action.map(({ title, type, options }) => {
                    return (
                        <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: 'orange', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }} key={title}
                            onPress={() => {
                                onButtonPresss(type, options)
                            }}>
                            <Text style={{ color: 'black' }} >{title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

interface Action {
    title: string;
    type: 'capture' | 'library',
    options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions
}

const action: Action[] = [
    {
        title: 'Lấy ảnh',
        type: 'library',
        options: {
            mediaType: 'photo',
            saveToPhotos: true,
            includeBase64: false,
            includeExtra
        }
    }
]