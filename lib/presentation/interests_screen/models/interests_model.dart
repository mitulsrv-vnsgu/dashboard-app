import 'package:get/get.dart';
import 'chipviewart_item_model.dart';

/// This class defines the variables used in the [interests_screen],
/// and is typically used to hold data that is passed between different parts of the application.
class InterestsModel {
  Rx<List<ChipviewartItemModel>> chipviewartItemList =
      Rx(List.generate(27, (index) => ChipviewartItemModel()));
}
