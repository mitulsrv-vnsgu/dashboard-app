import 'controller/terms_and_conditions_controller.dart';
import 'package:flutter/material.dart';
import 'package:mitul_s_application181/core/app_export.dart';
import 'package:mitul_s_application181/widgets/app_bar/appbar_image.dart';
import 'package:mitul_s_application181/widgets/app_bar/custom_app_bar.dart';

// ignore_for_file: must_be_immutable
class TermsAndConditionsScreen extends GetWidget<TermsAndConditionsController> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        appBar: CustomAppBar(
          height: getVerticalSize(
            63,
          ),
          title: Padding(
            padding: getPadding(
              left: 16,
            ),
            child: Text(
              "msg_john_doe_in_lor".tr,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: AppStyle.txtPoppinsMedium14,
            ),
          ),
          actions: [
            Container(
              height: getSize(
                3,
              ),
              width: getSize(
                3,
              ),
              margin: getMargin(
                left: 10,
                top: 34,
                right: 7,
                bottom: 10,
              ),
              decoration: BoxDecoration(
                color: ColorConstant.black90087,
                borderRadius: BorderRadius.circular(
                  getHorizontalSize(
                    1,
                  ),
                ),
              ),
            ),
            Padding(
              padding: getPadding(
                left: 8,
                top: 26,
                right: 7,
              ),
              child: Text(
                "lbl_29_july".tr,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.left,
                style: AppStyle.txtPoppinsMedium14Gray90087,
              ),
            ),
            AppbarImage(
              height: getSize(
                36,
              ),
              width: getSize(
                36,
              ),
              svgPath: ImageConstant.imgCheckmark,
              margin: getMargin(
                left: 48,
                top: 7,
                right: 34,
                bottom: 4,
              ),
            ),
          ],
        ),
        body: SizedBox(
          width: size.width,
          child: SingleChildScrollView(
            padding: getPadding(
              top: 6,
            ),
            child: Padding(
              padding: getPadding(
                left: 16,
                right: 16,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Text(
                    "msg_terms_and_condi".tr,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                    style: AppStyle.txtPoppinsSemiBold18,
                  ),
                  Padding(
                    padding: getPadding(
                      top: 7,
                    ),
                    child: Text(
                      "msg_effective_sept".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtPoppinsLight14,
                    ),
                  ),
                  Padding(
                    padding: getPadding(
                      top: 19,
                    ),
                    child: RichText(
                      text: TextSpan(
                        children: [
                          TextSpan(
                            text: "msg_you_can_see_our2".tr,
                            style: TextStyle(
                              color: ColorConstant.black900,
                              fontSize: getFontSize(
                                12,
                              ),
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.w400,
                            ),
                          ),
                          TextSpan(
                            text: "lbl_here".tr,
                            style: TextStyle(
                              color: ColorConstant.black900,
                              fontSize: getFontSize(
                                12,
                              ),
                              fontFamily: 'Poppins',
                              fontWeight: FontWeight.w400,
                              decoration: TextDecoration.underline,
                            ),
                          ),
                        ],
                      ),
                      textAlign: TextAlign.left,
                    ),
                  ),
                  Container(
                    width: getHorizontalSize(
                      309,
                    ),
                    margin: getMargin(
                      top: 30,
                      right: 33,
                    ),
                    child: Text(
                      "msg_lorem_ipsum_dol".tr,
                      maxLines: null,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtPoppinsRegular14Black900a9,
                    ),
                  ),
                  Container(
                    width: getHorizontalSize(
                      343,
                    ),
                    margin: getMargin(
                      top: 30,
                    ),
                    child: Text(
                      "msg_lorem_ipsum_dol2".tr,
                      maxLines: null,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtPoppinsRegular14Black900a9,
                    ),
                  ),
                  Container(
                    width: getHorizontalSize(
                      343,
                    ),
                    margin: getMargin(
                      top: 30,
                    ),
                    child: Text(
                      "msg_lorem_ipsum_dol2".tr,
                      maxLines: null,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtPoppinsRegular14Black900a9,
                    ),
                  ),
                  Container(
                    width: getHorizontalSize(
                      309,
                    ),
                    margin: getMargin(
                      top: 30,
                      right: 33,
                    ),
                    child: Text(
                      "msg_lorem_ipsum_dol".tr,
                      maxLines: null,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtPoppinsRegular14Black900a9,
                    ),
                  ),
                  Padding(
                    padding: getPadding(
                      top: 25,
                    ),
                    child: Text(
                      "msg_your_account_an".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtPoppinsMedium18,
                    ),
                  ),
                  Padding(
                    padding: getPadding(
                      top: 19,
                    ),
                    child: Text(
                      "msg_lorem_ipsum_dol".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtPoppinsRegular14Black900a9,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
