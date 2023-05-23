import 'package:mitul_s_application181/presentation/home_screen/home_screen.dart';
import 'package:mitul_s_application181/presentation/home_screen/binding/home_binding.dart';
import 'package:mitul_s_application181/presentation/sign_in_screen/sign_in_screen.dart';
import 'package:mitul_s_application181/presentation/sign_in_screen/binding/sign_in_binding.dart';
import 'package:mitul_s_application181/presentation/sign_up_screen/sign_up_screen.dart';
import 'package:mitul_s_application181/presentation/sign_up_screen/binding/sign_up_binding.dart';
import 'package:mitul_s_application181/presentation/interests_screen/interests_screen.dart';
import 'package:mitul_s_application181/presentation/interests_screen/binding/interests_binding.dart';
import 'package:mitul_s_application181/presentation/search_topics_screen/search_topics_screen.dart';
import 'package:mitul_s_application181/presentation/search_topics_screen/binding/search_topics_binding.dart';
import 'package:mitul_s_application181/presentation/interests_topics_screen/interests_topics_screen.dart';
import 'package:mitul_s_application181/presentation/interests_topics_screen/binding/interests_topics_binding.dart';
import 'package:mitul_s_application181/presentation/interests_people_screen/interests_people_screen.dart';
import 'package:mitul_s_application181/presentation/interests_people_screen/binding/interests_people_binding.dart';
import 'package:mitul_s_application181/presentation/terms_and_conditions_screen/terms_and_conditions_screen.dart';
import 'package:mitul_s_application181/presentation/terms_and_conditions_screen/binding/terms_and_conditions_binding.dart';
import 'package:mitul_s_application181/presentation/app_navigation_screen/app_navigation_screen.dart';
import 'package:mitul_s_application181/presentation/app_navigation_screen/binding/app_navigation_binding.dart';
import 'package:get/get.dart';

class AppRoutes {
  static const String homeScreen = '/home_screen';

  static const String signInScreen = '/sign_in_screen';

  static const String signUpScreen = '/sign_up_screen';

  static const String interestsScreen = '/interests_screen';

  static const String searchTopicsScreen = '/search_topics_screen';

  static const String interestsTopicsScreen = '/interests_topics_screen';

  static const String interestsPeopleScreen = '/interests_people_screen';

  static const String termsAndConditionsScreen = '/terms_and_conditions_screen';

  static const String appNavigationScreen = '/app_navigation_screen';

  static const String initialRoute = '/initialRoute';

  static List<GetPage> pages = [
    GetPage(
      name: homeScreen,
      page: () => HomeScreen(),
      bindings: [
        HomeBinding(),
      ],
    ),
    GetPage(
      name: signInScreen,
      page: () => SignInScreen(),
      bindings: [
        SignInBinding(),
      ],
    ),
    GetPage(
      name: signUpScreen,
      page: () => SignUpScreen(),
      bindings: [
        SignUpBinding(),
      ],
    ),
    GetPage(
      name: interestsScreen,
      page: () => InterestsScreen(),
      bindings: [
        InterestsBinding(),
      ],
    ),
    GetPage(
      name: searchTopicsScreen,
      page: () => SearchTopicsScreen(),
      bindings: [
        SearchTopicsBinding(),
      ],
    ),
    GetPage(
      name: interestsTopicsScreen,
      page: () => InterestsTopicsScreen(),
      bindings: [
        InterestsTopicsBinding(),
      ],
    ),
    GetPage(
      name: interestsPeopleScreen,
      page: () => InterestsPeopleScreen(),
      bindings: [
        InterestsPeopleBinding(),
      ],
    ),
    GetPage(
      name: termsAndConditionsScreen,
      page: () => TermsAndConditionsScreen(),
      bindings: [
        TermsAndConditionsBinding(),
      ],
    ),
    GetPage(
      name: appNavigationScreen,
      page: () => AppNavigationScreen(),
      bindings: [
        AppNavigationBinding(),
      ],
    ),
    GetPage(
      name: initialRoute,
      page: () => HomeScreen(),
      bindings: [
        HomeBinding(),
      ],
    )
  ];
}
