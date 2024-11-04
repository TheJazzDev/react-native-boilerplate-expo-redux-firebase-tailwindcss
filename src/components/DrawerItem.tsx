import React from 'react';
import { DrawerItem as DefaultDrawerItem } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { usePathname, router, Href } from 'expo-router';
import { themeColor } from 'src/theme';
import { useColorScheme } from 'src/hooks';

interface DrawerItemProps {
  label: string;
  route: Href<string | object>;
  iconName: React.ComponentProps<typeof FontAwesome>['name'];
}

const DrawerItem: React.FC<DrawerItemProps> = ({ label, route, iconName }) => {
  const pathname = usePathname();
  const colorScheme = useColorScheme();

  const isActive = pathname === route;
  const activeTintColor = themeColor[colorScheme ?? 'light'].tint;
  const backgroundColor = isActive
    ? activeTintColor
    : themeColor[colorScheme ?? 'light'].background;
  const textColor = isActive ? '#fff' : '#000';

  return (
    <DefaultDrawerItem
      icon={() => (
        <FontAwesome
          name={iconName}
          size={25}
          color={isActive ? '#fff' : themeColor[colorScheme ?? 'light'].text}
        />
      )}
      label={label}
      labelStyle={{ color: textColor, marginLeft: -20, fontSize: 18 }}
      style={{ backgroundColor }}
      onPress={() => router.push(route)}
    />
  );
};

export default DrawerItem;
