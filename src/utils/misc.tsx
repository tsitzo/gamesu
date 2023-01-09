import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export const getPlatformIcon = (id: number, color: string, size: number) => {
  switch (id) {
    case 1:
      return (
        <Ionicons
          name="ios-logo-windows"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );
    case 2:
      return (
        <Ionicons
          name="ios-logo-playstation"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 3:
      return (
        <Ionicons
          name="ios-logo-xbox"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 4:
      return (
        <Ionicons
          name="ios-logo-apple"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 5:
      return (
        <Ionicons
          name="ios-logo-apple"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 6:
      return (
        <MaterialCommunityIcons
          name="linux"
          size={size}
          style={{ marginRight: 3 }}
          key={id}
          color={color}
        />
      );
    case 7:
      return (
        <MaterialCommunityIcons
          name="nintendo-switch"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 8:
      return (
        <Ionicons
          name="ios-logo-android"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 9:
      return (
        <Ionicons
          name="ios-game-controller"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 10:
      return (
        <Ionicons
          name="ios-game-controller"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 11:
      return (
        <Ionicons
          name="ios-game-controller"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 12:
      return (
        <Ionicons
          name="ios-game-controller"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 13:
      return (
        <Ionicons
          name="ios-game-controller"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    case 14:
      return (
        <MaterialCommunityIcons
          name="web"
          color={color}
          size={size}
          style={{ marginRight: 3 }}
          key={id}
        />
      );

    default:
      break;
  }
};
