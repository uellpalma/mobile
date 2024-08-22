import React, { useCallback } from 'react';

import { ScreenBase } from '@/components/screen-base';
import { useOptionsScreen } from '@/src/modules/common';
import { ScrollView } from 'react-native';
import { Fab, FabIcon } from '@/components/ui/fab';
import { AddIcon, Icon, TrashIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Badge, BadgeText } from '@/components/ui/badge';
import { useNavigation } from '@react-navigation/native';
import { HeaderUser } from '../../components/HeaderUser';

export const TodoListScreen = () => {
  useOptionsScreen({
    headerShown: false,
  });

  const navigation = useNavigation();

  const handleNavigateProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, []);

  return (
    <ScreenBase>
      <HeaderUser userName='Jane Doh' onPressProfile={handleNavigateProfile} />

      <HStack space="md" className="mt-10">
        {['Pendente', 'Em andamento', 'Concluído'].map((status) => (
          <Badge size="lg" variant="outline" action="muted" key={status}>
            <BadgeText>{status}</BadgeText>
          </Badge>
        ))}
      </HStack>

      <ScrollView contentContainerStyle={{ paddingVertical: 15 }}>
        <Box className="bg-white p-2 rounded-lg">
          <HStack className="justify-between items-center">
            <HStack space="md">
              <Box className="w-7 h-7 border border-black rounded-lg"></Box>
              <Text size="lg">Tarefa 1</Text>
            </HStack>

            <Icon as={TrashIcon} size="md" className="text-red-600" />
          </HStack>
        </Box>
      </ScrollView>

      <Box className="w-full bg-red px-10">
        <Fab
          size="lg"
          placement="bottom center"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
        >
          <FabIcon as={AddIcon} size="xl" />
        </Fab>
      </Box>
    </ScreenBase>
  );
};
