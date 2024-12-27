import { StyleSheet, Text, View, ActivityIndicator,Linking, FlatList, Pressable, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import PageHeader from '../../components/PageHeader';
import axios from "axios";
import AppColors from '../../utills/AppColors';
import { height, width } from '../../utills/Dimension';
import styles from './styles';
import { LargeText, SmallText } from '../../components/text';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { BaseUrl } from '../../utills/Constants';
const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [dailyJobs, setDailyJobs] = useState([]);

  useEffect(() => {
    getDailyJobs();
  }, []);

  const getDailyJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BaseUrl}`);
      console.log("getDailyJobs response", res.data);
      setDailyJobs(res.data);
    } catch (error) {
      console.log("Error fetching jobs", error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    console.log('Refreshing...');
    setRefreshing(true);
    await getDailyJobs();
    setRefreshing(false);
  };

  const renderItem = ({ item }) => {
    const formattedDate = new Date(item?.created_date).toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    const handleApplyNow = () => {
        Linking.openURL(item?.link)
    };
    return (
      <View style={styles.container}>
        <LargeText>{item?.title}</LargeText>
        <View style={styles.seccontainer}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Entypo name="briefcase" size={15} color="grey" />
          <SmallText textStyles={{marginLeft: width(0.8),}}>{item?.type}</SmallText>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Ionicons name="time-outline" size={15} color="grey" />
          <SmallText textStyles={{marginLeft: width(0.8),}}>{formattedDate}</SmallText>
          </View>
        </View>
        <Pressable onPress={handleApplyNow} style={styles.button}>
          <SmallText textStyles={{ color: AppColors.primary }}>Apply Now</SmallText>
        </Pressable>
      </View>
    );
  };

  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <View>
          <PageHeader
            pageTitle="Today Jobs"
            onPressBack={() => navigation.goBack()}
          />
        </View>
      )}
    >
      {loading && !refreshing && (
        <ActivityIndicator size="large" color={AppColors.primary} />
      )}

      <View style={{ padding: height(3) }}>
        <FlatList
          data={dailyJobs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[AppColors.primary]} // Customize the spinner color
            />
          }
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;
