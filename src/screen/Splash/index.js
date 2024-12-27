import { Image, Text, View,Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { LargeText, MediumText, SmallText } from '../../components/text'
import { logo } from '../../assets/images'
import { width } from '../../utills/Dimension'
import AppColors from '../../utills/AppColors'
import ScreenNames from '../../routes/routes'

const Splash = ({navigation}) => {
    const onSubmited=()=>{
navigation.navigate(ScreenNames.HOME)
    }
  return (
    <View
    style={styles.container}
    >
      
      <Image
     source={logo}
     style={styles.image}
     >
     </Image>
     <LargeText textStyles={{fontSize:width(5)}}>Welcome to Valueable DailyJobs</LargeText>
     <Pressable onPress={onSubmited} style={styles.button}>
          <MediumText textStyles={{ color: AppColors.primary }}>Get Started</MediumText>
        </Pressable>
    </View>
  )
}

export default Splash
