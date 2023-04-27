import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-dynamic-change-icon' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n';

const DynamicChangeIcon = NativeModules.DynamicChangeIcon
  ? NativeModules.DynamicChangeIcon
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const getIcon = async () => {
  return await DynamicChangeIcon.getIcon();
};

const changeIcon = async (/** @type {string} */ iconName) => {
  return await DynamicChangeIcon.changeIcon(iconName);
};

export { getIcon, changeIcon };
