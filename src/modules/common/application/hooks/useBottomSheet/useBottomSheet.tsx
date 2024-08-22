import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";

import { UseBottomSheetTypes } from "./useBottomSheet.types";
import { ModalSheet } from "../../../presentation";

export function useBottomSheet<T>({
  ContentComponent,
  initialData,
}: UseBottomSheetTypes<T>) {
  const editPasswordBottomSheetRef = useRef<Modalize>(null);

  const open = () => {
    editPasswordBottomSheetRef.current?.open();
  };

  const close = () => {
    editPasswordBottomSheetRef.current?.close();
  };

  const component = () => {
    return (
      <ModalSheet
        adjustToContentHeight={true}
        handleStyle={{ display: "none" }}
        panGestureEnabled={false}
        ref={editPasswordBottomSheetRef}
      >
        <ContentComponent {...initialData} />
      </ModalSheet>
    );
  };

  return { open, close, component };
}
