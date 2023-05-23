// ignore_for_file: must_be_immutable

part of 'frame_2135_bloc.dart';

class Frame2135State extends Equatable {
  Frame2135State({
    this.radioGroup = "",
    this.frame2135ModelObj,
  });

  Frame2135Model? frame2135ModelObj;

  String radioGroup;

  @override
  List<Object?> get props => [
        radioGroup,
        frame2135ModelObj,
      ];
  Frame2135State copyWith({
    String? radioGroup,
    Frame2135Model? frame2135ModelObj,
  }) {
    return Frame2135State(
      radioGroup: radioGroup ?? this.radioGroup,
      frame2135ModelObj: frame2135ModelObj ?? this.frame2135ModelObj,
    );
  }
}
