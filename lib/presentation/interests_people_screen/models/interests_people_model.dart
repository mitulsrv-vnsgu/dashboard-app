import 'package:get/get.dart';
import 'interests1_item_model.dart';

/// This class defines the variables used in the [interests_people_screen],
/// and is typically used to hold data that is passed between different parts of the application.
class InterestsPeopleModel {
  Rx<List<Interests1ItemModel>> interests1ItemList =
      Rx(List.generate(5, (index) => Interests1ItemModel()));
}
