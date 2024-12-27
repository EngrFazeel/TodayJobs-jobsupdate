import { StyleSheet } from "react-native";
import { width, height } from "../../utills/Dimension";
import AppColors from "../../utills/AppColors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width(2),
    paddingVertical: height(1.2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:AppColors.white,
    elevation:3
  },
  backCircleCon: {
    alignItems: "center",
    justifyContent: "center",
    width: width(8),
    height: width(8),
    borderRadius: width(100),
    backgroundColor:'red'
    
    

  },
  rightIcon: {
    width: width(6),
  },
  nameText: {
    color: AppColors.white,
    fontSize: width(4),
    fontWeight: "600",
    marginLeft: width(3),
  },
});
export default styles;
