import 'package:flutter/material.dart';
import 'package:mitul_s_application182/presentation/splash_screen/splash_screen.dart';

class AppRoutes {
  static const String splashScreen = '/splash_screen';

  static const String initialRoute = '/initialRoute';

  static Map<String, WidgetBuilder> get routes =>
      {splashScreen: SplashScreen.builder, initialRoute: SplashScreen.builder};
}
