import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { width, height } from "../../utills/Dimension";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:AppColors.white,
        alignItems:'center'
    },
    image:{
    width:width(90),
    height:width(90),
    // borderRadius:width(20)
    },
    button: {
        height: height(6.5),
        width: width(80),
        backgroundColor: AppColors.Mprimary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // alignSelf: 'flex-end',
        marginTop: height(10),
        elevation: 1,

    }
});
export default styles;
