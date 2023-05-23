import '../interests_screen/widgets/chipviewart_item_widget.dart';
import 'controller/interests_controller.dart';
import 'models/chipviewart_item_model.dart';
import 'package:flutter/material.dart';
import 'package:mitul_s_application181/core/app_export.dart';
import 'package:mitul_s_application181/widgets/custom_button.dart';

// ignore_for_file: must_be_immutable
class InterestsScreen extends GetWidget<InterestsController> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.whiteA700,
        body: Container(
          width: double.maxFinite,
          padding: getPadding(
            left: 37,
            top: 22,
            right: 37,
            bottom: 22,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "lbl_welcome".tr,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.left,
                style: AppStyle.txtPoppinsSemiBold16Black900.copyWith(
                  letterSpacing: getHorizontalSize(
                    0.5,
                  ),
                ),
              ),
              Container(
                height: getVerticalSize(
                  30,
                ),
                width: getHorizontalSize(
                  283,
                ),
                margin: getMargin(
                  top: 34,
                ),
                child: Stack(
                  alignment: Alignment.center,
                  children: [
                    Align(
                      alignment: Alignment.center,
                      child: Text(
                        "msg_what_are_you_in".tr,
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.left,
                        style: AppStyle.txtPoppinsBold20,
                      ),
                    ),
                    Align(
                      alignment: Alignment.center,
                      child: Text(
                        "msg_what_are_you_in".tr,
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.left,
                        style: AppStyle.txtPoppinsBold20,
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                width: getHorizontalSize(
                  229,
                ),
                margin: getMargin(
                  left: 35,
                  top: 8,
                  right: 35,
                ),
                child: Text(
                  "msg_add_or_edit_top".tr,
                  maxLines: null,
                  textAlign: TextAlign.center,
                  style: AppStyle.txtPoppinsRegular16,
                ),
              ),
              Padding(
                padding: getPadding(
                  top: 23,
                  bottom: 4,
                ),
                child: Obx(
                  () => Wrap(
                    runSpacing: getVerticalSize(
                      5,
                    ),
                    spacing: getHorizontalSize(
                      5,
                    ),
                    children: List<Widget>.generate(
                      controller.interestsModelObj.value.chipviewartItemList
                          .value.length,
                      (index) {
                        ChipviewartItemModel model = controller
                            .interestsModelObj
                            .value
                            .chipviewartItemList
                            .value[index];

                        return ChipviewartItemWidget(
                          model,
                        );
                      },
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
        bottomNavigationBar: Container(
          margin: getMargin(
            left: 32,
            right: 32,
            bottom: 37,
          ),
          decoration: AppDecoration.fillWhiteA700,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              CustomButton(
                height: getVerticalSize(
                  60,
                ),
                text: "lbl_next".tr,
                variant: ButtonVariant.FillLightblueA200,
                shape: ButtonShape.RoundedBorder5,
                padding: ButtonPadding.PaddingAll15,
                fontStyle: ButtonFontStyle.PoppinsBold18WhiteA700,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
