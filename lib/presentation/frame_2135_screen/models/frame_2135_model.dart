// ignore_for_file: must_be_immutable

import 'package:equatable/equatable.dart';

/// This class defines the variables used in the [frame_2135_screen],
/// and is typically used to hold data that is passed between different parts of the application.
class Frame2135Model extends Equatable {
  Frame2135Model({this.radioList = const []});

  List<String> radioList;

  Frame2135Model copyWith({List<String>? radioList}) {
    return Frame2135Model(
      radioList: radioList ?? this.radioList,
    );
  }

  @override
  List<Object?> get props => [radioList];
}
