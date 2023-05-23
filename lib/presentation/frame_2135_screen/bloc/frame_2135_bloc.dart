import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import '/core/app_export.dart';
import 'package:mitul_s_application179/presentation/frame_2135_screen/models/frame_2135_model.dart';
part 'frame_2135_event.dart';
part 'frame_2135_state.dart';

class Frame2135Bloc extends Bloc<Frame2135Event, Frame2135State> {
  Frame2135Bloc(Frame2135State initialState) : super(initialState) {
    on<Frame2135InitialEvent>(_onInitialize);
    on<ChangeRadioButtonEvent>(_changeRadioButton);
  }

  _changeRadioButton(
    ChangeRadioButtonEvent event,
    Emitter<Frame2135State> emit,
  ) {
    emit(state.copyWith(
      radioGroup: event.value,
    ));
  }

  List<String> fillRadioList() {
    return ["lbl_this_year"];
  }

  _onInitialize(
    Frame2135InitialEvent event,
    Emitter<Frame2135State> emit,
  ) async {
    emit(state.copyWith(
      radioGroup: "",
    ));
    emit(state.copyWith(
        frame2135ModelObj: state.frame2135ModelObj?.copyWith(
      radioList: fillRadioList(),
    )));
  }
}
