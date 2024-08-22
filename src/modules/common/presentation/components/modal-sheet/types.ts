import { ReactNode } from 'react';
import { ModalizeProps } from 'react-native-modalize';

export type ModalSheetProps = ModalizeProps & {
  children?: ReactNode;
};
