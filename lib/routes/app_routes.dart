import 'package:flutter/material.dart';
import 'package:mitul_s_application179/presentation/frame_2135_screen/frame_2135_screen.dart';

class AppRoutes {
  static const String frame2135Screen = '/frame_2135_screen';

  static const String initialRoute = '/initialRoute';

  static Map<String, WidgetBuilder> get routes => {
        frame2135Screen: Frame2135Screen.builder,
        initialRoute: Frame2135Screen.builder
      };
}
