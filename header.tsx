import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export function Header(){
    const selectedImage = useSelector((state: RootState) => state.image.selectedImage);//lấy đường dẫn ảnh từ redux store

    return (
        <View style={{width: '100%', height: 70, backgroundColor:'white', borderRadius: 10, flexDirection: 'row', alignItems:'center', justifyContent:'space-between', padding: 10}}>
            
        </View>
    )
}