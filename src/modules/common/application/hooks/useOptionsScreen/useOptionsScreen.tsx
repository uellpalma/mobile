import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useLayoutEffect } from 'react';

import { ArrowLeftIcon, Icon } from '@/components/ui/icon';
import { UseOptionsScreenProps } from './useOptionsScreen.types';
import { Box } from '@/components/ui/box';
import { TouchableOpacity } from 'react-native';

export const useOptionsScreen = ({
  title,
  ...props
}: UseOptionsScreenProps) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      ...props,
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <Box className="bg-white rounded-full flex justify-center items-center w-10 h-10">
            <Icon as={ArrowLeftIcon} size="lg" />
          </Box>
        </TouchableOpacity>
      ),
    });
  }, [navigation, props, title]);
};
