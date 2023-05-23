import 'package:mitul_s_application181/core/app_export.dart';
import 'package:mitul_s_application181/presentation/search_topics_screen/models/search_topics_model.dart';
import 'package:flutter/material.dart';

class SearchTopicsController extends GetxController {
  TextEditingController searchController = TextEditingController();

  Rx<SearchTopicsModel> searchTopicsModelObj = SearchTopicsModel().obs;

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
    searchController.dispose();
  }
}
