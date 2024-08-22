import React, { ForwardedRef, forwardRef } from "react";
import { Platform, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ModalSheetProps } from "./types";

export const ModalSheet = forwardRef(
  ({ children, ...rest }: ModalSheetProps, ref: ForwardedRef<Modalize>) => {
    const keyboardAvoidingBehavior =
      Platform.OS === "ios" ? "padding" : "height";

    const closeAnimationConfig = {
      timing: { duration: 300 },
    };

    const insets = useSafeAreaInsets();

    return (
      <Portal>
        <Modalize
          childrenStyle={{ paddingBottom: Math.max(insets.bottom, 10) }}
          closeAnimationConfig={closeAnimationConfig}
          keyboardAvoidingBehavior={keyboardAvoidingBehavior}
          overlayStyle={styles.overlayStyle}
          ref={ref}
          scrollViewProps={{
            keyboardShouldPersistTaps: "always",
          }}
          {...rest}
        >
          {children}
        </Modalize>
      </Portal>
    );
  }
);

const styles = StyleSheet.create({
  overlayStyle: { backgroundColor: "#00000050" },
});
