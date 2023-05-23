import 'bloc/frame_2135_bloc.dart';
import 'models/frame_2135_model.dart';
import 'package:flutter/material.dart';
import 'package:mitul_s_application179/core/app_export.dart';
import 'package:mitul_s_application179/widgets/app_bar/custom_app_bar.dart';
import 'package:mitul_s_application179/widgets/custom_icon_button.dart';
import 'package:mitul_s_application179/widgets/custom_radio_button.dart';

class Frame2135Screen extends StatelessWidget {
  static Widget builder(BuildContext context) {
    return BlocProvider<Frame2135Bloc>(
      create: (context) => Frame2135Bloc(Frame2135State(
        frame2135ModelObj: Frame2135Model(),
      ))
        ..add(Frame2135InitialEvent()),
      child: Frame2135Screen(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        appBar: CustomAppBar(
          height: getVerticalSize(
            65,
          ),
          leadingWidth: 60,
          leading: CustomIconButton(
            height: 500,
            width: 40,
            margin: getMargin(
              left: 20,
              top: 15,
            ),
            child: CustomImageView(
              svgPath: ImageConstant.imgStar,
            ),
          ),
          title: Padding(
            padding: getPadding(
              left: 10,
            ),
            child: Text(
              "lbl_lorem_ipsum".tr,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtInterMedium22,
            ),
          ),
          actions: [
            Padding(
              padding: getPadding(
                left: 20,
                top: 27,
                right: 18,
                bottom: 4,
              ),
              child: Text(
                "lbl_no".tr,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.left,
                style: AppStyle.txtInterSemiBold12,
              ),
            ),
            CustomImageView(
              svgPath: ImageConstant.imgArrowdown,
              height: getSize(
                24,
              ),
              width: getSize(
                24,
              ),
              margin: getMargin(
                left: 5,
                top: 23,
                right: 38,
              ),
            ),
          ],
          styleType: Style.bgOutlineBlack900,
        ),
        body: Container(
          width: double.maxFinite,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: getPadding(
                  left: 19,
                  top: 18,
                  right: 19,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      width: getHorizontalSize(
                        102,
                      ),
                      padding: getPadding(
                        left: 30,
                        top: 5,
                        right: 30,
                        bottom: 5,
                      ),
                      decoration: AppDecoration.outlineBlack9001.copyWith(
                        borderRadius: BorderRadiusStyle.roundedBorder5,
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          CustomImageView(
                            svgPath: ImageConstant.imgGroup22,
                            height: getSize(
                              24,
                            ),
                            width: getSize(
                              24,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Container(
                      width: getHorizontalSize(
                        102,
                      ),
                      margin: getMargin(
                        left: 15,
                      ),
                      padding: getPadding(
                        left: 15,
                        top: 5,
                        right: 15,
                        bottom: 5,
                      ),
                      decoration: AppDecoration.outlineBlack9002.copyWith(
                        borderRadius: BorderRadiusStyle.roundedBorder5,
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          CustomImageView(
                            svgPath: ImageConstant.imgUpload,
                            height: getSize(
                              24,
                            ),
                            width: getSize(
                              24,
                            ),
                          ),
                          Padding(
                            padding: getPadding(
                              left: 4,
                              top: 4,
                              bottom: 4,
                            ),
                            child: Text(
                              "lbl_button".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterSemiBold12,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Container(
                      width: getHorizontalSize(
                        102,
                      ),
                      margin: getMargin(
                        left: 15,
                      ),
                      padding: getPadding(
                        left: 15,
                        top: 5,
                        right: 15,
                        bottom: 5,
                      ),
                      decoration: AppDecoration.fillBlack900.copyWith(
                        borderRadius: BorderRadiusStyle.roundedBorder5,
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          CustomImageView(
                            svgPath: ImageConstant.imgMinimize,
                            height: getSize(
                              24,
                            ),
                            width: getSize(
                              24,
                            ),
                          ),
                          Padding(
                            padding: getPadding(
                              left: 4,
                              top: 4,
                              bottom: 4,
                            ),
                            child: Text(
                              "lbl_button".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterSemiBold12Deeppurple100,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                margin: getMargin(
                  left: 20,
                  top: 38,
                  right: 20,
                ),
                decoration: BoxDecoration(
                  borderRadius: BorderRadiusStyle.roundedBorder30,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Text(
                      "msg_gross_sales_timeline".tr.toUpperCase(),
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtInterSemiBold12,
                    ),
                    Padding(
                      padding: getPadding(
                        top: 19,
                      ),
                      child: Row(
                        children: [
                          Container(
                            height: getSize(
                              10,
                            ),
                            width: getSize(
                              10,
                            ),
                            margin: getMargin(
                              top: 2,
                              bottom: 2,
                            ),
                            decoration: BoxDecoration(
                              color: ColorConstant.black900,
                              borderRadius: BorderRadius.circular(
                                getHorizontalSize(
                                  5,
                                ),
                              ),
                            ),
                          ),
                          Padding(
                            padding: getPadding(
                              left: 4,
                            ),
                            child: Text(
                              "lbl_into_the_store".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterMedium12,
                            ),
                          ),
                          Container(
                            height: getSize(
                              10,
                            ),
                            width: getSize(
                              10,
                            ),
                            margin: getMargin(
                              left: 18,
                              top: 2,
                              bottom: 2,
                            ),
                            decoration: BoxDecoration(
                              color: ColorConstant.deepPurple100,
                              borderRadius: BorderRadius.circular(
                                getHorizontalSize(
                                  5,
                                ),
                              ),
                            ),
                          ),
                          Padding(
                            padding: getPadding(
                              left: 4,
                            ),
                            child: Text(
                              "msg_out_of_the_store".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterMedium12,
                            ),
                          ),
                        ],
                      ),
                    ),
                    Container(
                      height: getVerticalSize(
                        102,
                      ),
                      width: getHorizontalSize(
                        335,
                      ),
                      margin: getMargin(
                        top: 15,
                      ),
                      child: Stack(
                        alignment: Alignment.center,
                        children: [
                          CustomImageView(
                            svgPath: ImageConstant.imgGroup1567,
                            height: getVerticalSize(
                              97,
                            ),
                            width: getHorizontalSize(
                              287,
                            ),
                            alignment: Alignment.centerRight,
                            margin: getMargin(
                              right: 7,
                            ),
                          ),
                          Align(
                            alignment: Alignment.center,
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  children: [
                                    Text(
                                      "lbl_3_5_m".tr.toUpperCase(),
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style: AppStyle.txtInterSemiBold12,
                                    ),
                                    Padding(
                                      padding: getPadding(
                                        top: 14,
                                      ),
                                      child: Text(
                                        "lbl_3_0_m".tr.toUpperCase(),
                                        overflow: TextOverflow.ellipsis,
                                        textAlign: TextAlign.left,
                                        style: AppStyle.txtInterSemiBold12,
                                      ),
                                    ),
                                    Padding(
                                      padding: getPadding(
                                        top: 14,
                                      ),
                                      child: Text(
                                        "lbl_2_0_m".tr.toUpperCase(),
                                        overflow: TextOverflow.ellipsis,
                                        textAlign: TextAlign.left,
                                        style: AppStyle.txtInterSemiBold12,
                                      ),
                                    ),
                                    Align(
                                      alignment: Alignment.centerRight,
                                      child: Padding(
                                        padding: getPadding(
                                          top: 13,
                                        ),
                                        child: Text(
                                          "lbl_1_m".tr.toUpperCase(),
                                          overflow: TextOverflow.ellipsis,
                                          textAlign: TextAlign.left,
                                          style: AppStyle.txtInterSemiBold12,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                CustomImageView(
                                  svgPath: ImageConstant.imgFrame2005,
                                  height: getVerticalSize(
                                    102,
                                  ),
                                  width: getHorizontalSize(
                                    278,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                    Align(
                      alignment: Alignment.centerRight,
                      child: Padding(
                        padding: getPadding(
                          left: 40,
                          top: 16,
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              "lbl_jan".tr.toUpperCase(),
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterSemiBold12,
                            ),
                            Text(
                              "lbl_feb".tr.toUpperCase(),
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterSemiBold12,
                            ),
                            Text(
                              "lbl_mar".tr.toUpperCase(),
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterSemiBold12,
                            ),
                            Text(
                              "lbl_apr".tr.toUpperCase(),
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterSemiBold12,
                            ),
                            Text(
                              "lbl_mai".tr.toUpperCase(),
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterSemiBold12,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                width: double.maxFinite,
                child: Container(
                  margin: getMargin(
                    top: 37,
                  ),
                  padding: getPadding(
                    all: 20,
                  ),
                  decoration: AppDecoration.outlineBlack9001.copyWith(
                    borderRadius: BorderRadiusStyle.roundedBorder10,
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text(
                        "msg_sales_comparison".tr.toUpperCase(),
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.left,
                        style: AppStyle.txtInterSemiBold12,
                      ),
                      Padding(
                        padding: getPadding(
                          top: 21,
                        ),
                        child: BlocBuilder<Frame2135Bloc, Frame2135State>(
                          builder: (context, state) {
                            return state.frame2135ModelObj!.radioList.isNotEmpty
                                ? Row(
                                    children: [
                                      CustomRadioButton(
                                        text: "lbl_this_year".tr,
                                        iconSize: getHorizontalSize(
                                          10,
                                        ),
                                        value: state.frame2135ModelObj
                                                ?.radioList[0] ??
                                            "",
                                        groupValue: state.radioGroup,
                                        fontStyle: RadioFontStyle.InterMedium12,
                                        onChange: (value) {
                                          context.read<Frame2135Bloc>().add(
                                              ChangeRadioButtonEvent(
                                                  value: value));
                                        },
                                      ),
                                      CustomRadioButton(
                                        text: "lbl_previous_year".tr,
                                        iconSize: getHorizontalSize(
                                          10,
                                        ),
                                        value: state.frame2135ModelObj
                                                ?.radioList[1] ??
                                            "",
                                        groupValue: state.radioGroup,
                                        margin: getMargin(
                                          left: 15,
                                        ),
                                        fontStyle: RadioFontStyle.InterMedium12,
                                        onChange: (value) {
                                          context.read<Frame2135Bloc>().add(
                                              ChangeRadioButtonEvent(
                                                  value: value));
                                        },
                                      ),
                                    ],
                                  )
                                : Container();
                          },
                        ),
                      ),
                      Padding(
                        padding: getPadding(
                          top: 16,
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Padding(
                              padding: getPadding(
                                top: 12,
                                bottom: 8,
                              ),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Text(
                                    "lbl_region_1".tr,
                                    overflow: TextOverflow.ellipsis,
                                    textAlign: TextAlign.left,
                                    style: AppStyle.txtOpenSansRomanBold12,
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 85,
                                    ),
                                    child: Text(
                                      "lbl_region_2".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style: AppStyle.txtOpenSansRomanBold12,
                                    ),
                                  ),
                                  Padding(
                                    padding: getPadding(
                                      top: 85,
                                    ),
                                    child: Text(
                                      "lbl_region_3".tr,
                                      overflow: TextOverflow.ellipsis,
                                      textAlign: TextAlign.left,
                                      style: AppStyle.txtOpenSansRomanBold12,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                Container(
                                  height: getVerticalSize(
                                    44,
                                  ),
                                  width: getHorizontalSize(
                                    281,
                                  ),
                                  child: Stack(
                                    alignment: Alignment.centerLeft,
                                    children: [
                                      Align(
                                        alignment: Alignment.bottomCenter,
                                        child: Padding(
                                          padding: getPadding(
                                            bottom: 20,
                                          ),
                                          child: SizedBox(
                                            width: getHorizontalSize(
                                              281,
                                            ),
                                            child: Divider(
                                              height: getVerticalSize(
                                                1,
                                              ),
                                              thickness: getVerticalSize(
                                                1,
                                              ),
                                              color: ColorConstant.black900,
                                            ),
                                          ),
                                        ),
                                      ),
                                      CustomImageView(
                                        svgPath: ImageConstant
                                            .imgGroup1567DeepPurple100,
                                        height: getVerticalSize(
                                          44,
                                        ),
                                        width: getHorizontalSize(
                                          125,
                                        ),
                                        alignment: Alignment.centerLeft,
                                        margin: getMargin(
                                          left: 24,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Container(
                                  height: getVerticalSize(
                                    44,
                                  ),
                                  width: getHorizontalSize(
                                    281,
                                  ),
                                  margin: getMargin(
                                    top: 54,
                                  ),
                                  child: Stack(
                                    alignment: Alignment.centerRight,
                                    children: [
                                      Align(
                                        alignment: Alignment.bottomCenter,
                                        child: Padding(
                                          padding: getPadding(
                                            bottom: 20,
                                          ),
                                          child: SizedBox(
                                            width: getHorizontalSize(
                                              281,
                                            ),
                                            child: Divider(
                                              height: getVerticalSize(
                                                1,
                                              ),
                                              thickness: getVerticalSize(
                                                1,
                                              ),
                                              color: ColorConstant.black900,
                                            ),
                                          ),
                                        ),
                                      ),
                                      CustomImageView(
                                        svgPath: ImageConstant.imgGroup1568,
                                        height: getVerticalSize(
                                          44,
                                        ),
                                        width: getHorizontalSize(
                                          252,
                                        ),
                                        alignment: Alignment.centerRight,
                                        margin: getMargin(
                                          right: 3,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Container(
                                  height: getVerticalSize(
                                    44,
                                  ),
                                  width: getHorizontalSize(
                                    281,
                                  ),
                                  margin: getMargin(
                                    top: 54,
                                  ),
                                  child: Stack(
                                    alignment: Alignment.centerLeft,
                                    children: [
                                      Align(
                                        alignment: Alignment.center,
                                        child: SizedBox(
                                          width: getHorizontalSize(
                                            281,
                                          ),
                                          child: Divider(
                                            height: getVerticalSize(
                                              1,
                                            ),
                                            thickness: getVerticalSize(
                                              1,
                                            ),
                                            color: ColorConstant.black900,
                                          ),
                                        ),
                                      ),
                                      CustomImageView(
                                        svgPath: ImageConstant.imgGroup1569,
                                        height: getVerticalSize(
                                          44,
                                        ),
                                        width: getHorizontalSize(
                                          144,
                                        ),
                                        alignment: Alignment.centerLeft,
                                        margin: getMargin(
                                          left: 24,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                      Padding(
                        padding: getPadding(
                          top: 19,
                          bottom: 35,
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              "lbl_revenue".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterBold12,
                            ),
                            Text(
                              "lbl_0_5_m".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterBold12,
                            ),
                            Text(
                              "lbl_3_0_m".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterBold12,
                            ),
                            Text(
                              "lbl_2_m".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterBold12,
                            ),
                            Text(
                              "lbl_3_5_m".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterBold12,
                            ),
                            Text(
                              "lbl_4_5_m".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterBold12,
                            ),
                            Text(
                              "lbl_5_m".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtInterBold12,
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
