import React from "react";
import {View, Image, Pressable, Text } from "react-native";
import styles from "./styles";
import { width, height } from "../../utills/Dimension";
import { MediumText, SmallText } from "../text";
import { logo } from "../../assets/images";

const PageHeader = ({
  containerViewStyle = {},
  onPressRighIcon,
  pageTitle="Today Jobs",
  showRightIcon=false,
}) => {
  return (
    <View style={[styles.container, containerViewStyle]}>
      <View style={{ flexDirection:"row",alignItems:"center",width:width(60),marginHorizontal:width(2)}}>
     <Image
     source={logo}
     style={{width:width(18),height:width(18),borderRadius:width(18)}}
     >
     </Image>
      <MediumText>{pageTitle}</MediumText>
      {showRightIcon && <Pressable onPress={onPressRighIcon}>
      </Pressable>}
      </View>
      
      </View>
  );
};

export default PageHeader;
