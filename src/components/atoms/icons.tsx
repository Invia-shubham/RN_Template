import React from 'react';
import {Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IconProps {
  size?: number;
  color?: string;
  style?: object;
  library?: 'MaterialCommunityIcons' | 'FontAwesome' | 'Ionicons';
  iconName: string;
  isImage?: boolean;
}

const Icons: React.FC<IconProps> = ({
  iconName,
  size = 24,
  color = '#000',
  style = {},
  library,
  isImage = false, // Default to false to render vector icons
}) => {
  if (isImage) {
    try {
      return (
        isImage && (
          <Image
            source={iconName}
            style={[{width: size, height: size}, style]}
          />
        )
      );
    } catch (error) {
      console.error(`Image ${iconName} not found!`);
      return null;
    }
  }

  // Default to vector icons if not an image
  let IconLibrary;
  switch (library) {
    case 'MaterialCommunityIcons':
      IconLibrary = MaterialCommunityIcons;
      break;
    case 'FontAwesome':
      IconLibrary = FontAwesome;
      break;
    case 'Ionicons':
      IconLibrary = Ionicons;
      break;
    default:
      IconLibrary = MaterialCommunityIcons;
  }

  return (
    <IconLibrary name={iconName} size={size} color={color} style={style} />
  );
};

export default Icons;
