import { StyleSheet } from "react-native";
import AppColors from "../../utills/AppColors";
import { width, height } from "../../utills/Dimension";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: height(2),
        paddingVertical: height(2),
        backgroundColor: AppColors.Lprimary,
        elevation: 1,
        borderRadius: 10,
        paddingTop: height(4),
        marginBottom: height(3)
    },
    seccontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(0.5),
    },
    button: {
        height: height(5),
        width: width(25),
        backgroundColor: AppColors.Mprimary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginTop: height(4),
        elevation: 1,

    }
});
export default styles;
