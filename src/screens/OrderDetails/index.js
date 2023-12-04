/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useRef, useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import colors from '../../common/colors';
import NavigationBack from '../../common/NavigationBack';
import CustomDropDown from '../../components/CustomDropDown';
import CustomButton from '../../components/CustomButton';
import {style} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActionSheet from 'react-native-actions-sheet';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';

const OrderDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const order = route.params.order;
  const actionSheetRef = useRef(null);
  const [orderStatus, setOrderStatus] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (order) {
      setOrderStatus(order?.orderStatus);
    }
  }, [order]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Order Details',
      headerLeft: () => <NavigationBack />,
    });
  }, [navigation]);

  const handleUpdateOrder = async () => {
    try {
      if (order?.id && status !== '') {
        await firestore()
          .collection('Orders')
          .doc(order.id)
          .update({
            orderStatus: status,
          })
          .then(() => {
            actionSheetRef.current?.hide();
            setOrderStatus(status);
            setTimeout(() => {
              Snackbar.show({
                text: 'Order status is updated',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: colors.primaryGreen,
                textColor: colors.white,
              });
            }, 1000);
          });
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const statusData = [
    {name: 'Ordered'},
    {name: 'Order Inprogress'},
    {name: 'Order Packed'},
    {name: 'Order Shipped'},
    {name: 'Out of Delivery'},
    {name: 'Delivered'},
    {name: 'Returned'},
    {name: 'Failed'},
  ];

  return (
    <View>
      <ActionSheet ref={actionSheetRef}>
        <View style={{padding: 15}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: colors.black_level_3,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}>
            <Text style={style.orderDetailText1}>Update Order</Text>
            <TouchableOpacity onPress={() => actionSheetRef.current?.hide()}>
              <AntDesign
                name="closecircleo"
                size={25}
                color={colors.black_level_2}
              />
            </TouchableOpacity>
          </View>

          <View style={{marginVertical: 20}}>
            <CustomDropDown
              data={statusData}
              setData={text => setStatus(text)}
            />
            <CustomButton
              width={'100%'}
              text={'Update Order'}
              onPress={handleUpdateOrder}
            />
          </View>
        </View>
      </ActionSheet>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.scrollView}
        contentContainerStyle={{paddingBottom: 150}}>
        {/* order section one */}
        <View style={style.orderSectionView}>
          <Image
            style={style.orderSectionImg}
            source={require('../../assets/images/parcel-white.png')}
          />
          <View>
            <Text style={style.orderSectionText1}>
              Order ID: #{order?.orderId}
            </Text>
            <Text style={style.orderSectionText2}>{orderStatus ?? ''}</Text>
          </View>
        </View>
        {/* order details */}
        <View style={style.orderDetailView}>
          <Text style={style.orderDetailText1}>Items:</Text>
          {order &&
            order?.cartItems.map((item, index) => {
              return (
                <View key={index} style={style.orderDetailView2}>
                  <View style={style.orderDetailView3}>
                    <View style={style.orderDetailView4}>
                      <Text style={style.orderDetailText2}>
                        {item?.quantity}
                      </Text>
                    </View>
                  </View>

                  <Text style={style.orderDetailText3}>*</Text>
                  <View style={style.orderDetailView5}>
                    <Text style={style.orderDetailText4}>{item?.name}</Text>
                    <Text style={style.orderDetailText5}>
                      {item?.description}
                    </Text>
                  </View>
                  <Text style={style.orderDetailText6}>₹{item?.price}</Text>
                </View>
              );
            })}
        </View>
        {/* payment details */}
        <View style={style.paymentDetail}>
          <Text style={style.orderDetailsHeadText}>Payment Details</Text>
          <View style={style.paymentDetailView1}>
            <View>
              <Text style={style.orderDetailsText}>Bag Total</Text>
              <Text style={style.orderDetailsText}>Coupon Discount</Text>
              <Text style={style.orderDetailsText}>Delivery</Text>
            </View>
            <View>
              <Text style={[style.orderDetailsText, {textAlign: 'right'}]}>
                ₹{parseFloat(order.totalAmount) - 50}
              </Text>
              <Text
                style={[
                  style.orderDetailsText,
                  {color: colors.red, textAlign: 'right'},
                ]}>
                Apply Coupon
              </Text>
              <Text style={[style.orderDetailsText, {textAlign: 'right'}]}>
                ₹50.00
              </Text>
            </View>
          </View>
          <View style={style.paymentDetailText1}>
            <Text
              style={[
                style.orderDetailsText,
                {color: colors.black, fontFamily: 'Lato-Bold'},
              ]}>
              Total Amount
            </Text>
            <Text
              style={[
                style.orderDetailsText,
                {
                  color: colors.black,
                  fontFamily: 'Lato-Bold',
                  textAlign: 'right',
                },
              ]}>
              ₹{order.totalAmount}
            </Text>
          </View>
        </View>
        {/* addresse */}
        <View style={style.addressSection}>
          <Text style={style.orderDetailsHeadText}>Address</Text>
          <Text style={style.addressSectionText1}>{order.userName}</Text>
          <Text style={style.addressSectionText2}>
            {order.userPhone}, {order.userEmail}
          </Text>
          <Text style={style.addressSectionText2}>{order.address}</Text>
        </View>

        {/* payment method */}
        <View style={style.paymentMethodSection}>
          <Text style={style.orderDetailsHeadText}>Payment Method</Text>
          <View style={style.paymentMethodView}>
            <Image
              style={style.paymentMethodImg}
              source={require('../../assets/images/visa.png')}
            />
            <View>
              <Text style={style.paymentDetailText}>**** **** **** 7689</Text>
              <Text style={style.paymentDetailText}>{order.paymentMethod}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={(StyleSheet.absoluteFillObject, {bottom: 150})}>
        <CustomButton
          width={'90%'}
          text={'Update Status'}
          onPress={() => actionSheetRef.current.show()}
        />
      </View>
    </View>
  );
};
export default OrderDetails;
