import 'package:get/get.dart';
import 'interests_item_model.dart';

/// This class defines the variables used in the [interests_topics_screen],
/// and is typically used to hold data that is passed between different parts of the application.
class InterestsTopicsModel {
  Rx<List<InterestsItemModel>> interestsItemList =
      Rx(List.generate(9, (index) => InterestsItemModel()));
}
