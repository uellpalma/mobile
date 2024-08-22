import React from 'react';

export type UseBottomSheetTypes<T> = {
  ContentComponent: React.JSX.Element;
  initialData: T;
};
