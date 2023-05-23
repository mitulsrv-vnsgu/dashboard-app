import 'bloc/splash_bloc.dart';
import 'models/splash_model.dart';
import 'package:flutter/material.dart';
import 'package:mitul_s_application182/core/app_export.dart';

class SplashScreen extends StatelessWidget {
  static Widget builder(BuildContext context) {
    return BlocProvider<SplashBloc>(
      create: (context) => SplashBloc(SplashState(
        splashModelObj: SplashModel(),
      ))
        ..add(SplashInitialEvent()),
      child: SplashScreen(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<SplashBloc, SplashState>(
      builder: (context, state) {
        return SafeArea(
          child: Scaffold(
            backgroundColor: ColorConstant.deepPurpleA200,
            body: Container(
              width: double.maxFinite,
              padding: getPadding(
                left: 139,
                top: 38,
                right: 139,
                bottom: 38,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Spacer(),
                  CustomImageView(
                    svgPath: ImageConstant.imgUser,
                    height: getVerticalSize(
                      88,
                    ),
                    width: getHorizontalSize(
                      96,
                    ),
                  ),
                  Padding(
                    padding: getPadding(
                      left: 22,
                      top: 296,
                    ),
                    child: Text(
                      "lbl_xost".tr,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.left,
                      style: AppStyle.txtGeneralSansSemibold20.copyWith(
                        letterSpacing: getHorizontalSize(
                          1.0,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
