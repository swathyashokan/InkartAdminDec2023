import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../common/colors';

const {width, height} = Dimensions.get('screen');
export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.whitesmoke,
  },
  topSectionWrap: {
    padding: 15,
    backgroundColor: colors.whitesmoke,
  },
  wishListButtonWrap: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  productImage: {
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  middleWrap: {
    padding: 15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  productName: {
    color: colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  ratingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  ratingText: {
    color: colors.placeholder,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    marginLeft: 10,
  },
  priceWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    color: colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 17,
  },
  discountText: {
    color: colors.primaryGreen,
    fontFamily: 'Lato-Bold',
    fontSize: 17,
  },
  selectBox: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  varientWrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.44,
    padding: 10,
    backgroundColor: colors.whitesmoke,
    borderRadius: 5,
  },
  varientText: {
    color: colors.black,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    marginVertical: 5,
  },
  dropDownArrow: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginRight: 10,
  },
  deliveryTimeWrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.44,
    padding: 10,
    backgroundColor: colors.whitesmoke,
    borderRadius: 5,
  },
  deliveryTitle: {
    color: colors.black,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    marginVertical: 5,
  },
  descriptionWrap: {
    borderBottomColor: colors.borderGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 20,
  },
  descriptionTitle: {
    color: colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginBottom: 5,
  },
  descriptionValue: {
    color: colors.placeholder,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
  },
  reviewWrap: {
    paddingVertical: 15,
  },
  reviewTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewTitle: {
    color: colors.black,
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    marginVertical: 5,
  },
  reviewAction: {
    color: colors.primaryGreen,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    marginVertical: 5,
    marginRight: 5,
  },
  reviewItemWrap: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: colors.whitesmoke,
    borderRadius: 10,
  },
  reviewUserWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewUserImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  reviewUserNameWrap: {
    marginLeft: 15,
  },
  reviewUserName: {
    fontSize: 15,
    color: colors.black,
    fontFamily: 'Lato-Regular',
  },
  reviewText: {
    fontSize: 13,
    color: colors.black,
    fontFamily: 'Lato-Regular',
  },
});
