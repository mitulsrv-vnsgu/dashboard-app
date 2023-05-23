// ignore_for_file: must_be_immutable

part of 'frame_2135_bloc.dart';

@immutable
abstract class Frame2135Event extends Equatable {}

class Frame2135InitialEvent extends Frame2135Event {
  @override
  List<Object?> get props => [];
}

///Event for changing radio button
class ChangeRadioButtonEvent extends Frame2135Event {
  ChangeRadioButtonEvent({required this.value});

  String value;

  @override
  List<Object?> get props => [
        value,
      ];
}
