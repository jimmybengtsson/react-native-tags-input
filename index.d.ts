declare module 'react-native-tags-input' {
  import { Component, ReactElement } from 'react';
  import { StyleProp, ViewStyle, TextStyle } from 'react-native';

  export type Tag = string | number;

  export interface Tags<T = Tag> {
    tag: T;
    tagsArray: Record<string, T>;
  }

  export interface TagsInputProps<T = Tag> {
    disabled?: boolean;
    leftElement?: ReactElement;
    rightElement?: ReactElement;
    customElement?: ReactElement;
    label?: string;
    tags: Tags<T>;
    updateState: (newState: Tags<T>) => void;
    keysForTag?: string;
    keysForTagsArray?: string[];
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    disabledInputStyle?: StyleProp<ViewStyle>;
    leftElementContainerStyle?: StyleProp<ViewStyle>;
    rightElementContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    deleteIconStyles?: StyleProp<ViewStyle>;
  }

  export default class TagsInput<T = Tag> extends Component<TagsInputProps<T>> {
    focus: () => void;

    blur: () => void;

    clear: () => void;

    isFocused: () => boolean;

    setNativeProps: (nativeProps: Record<string, any>) => void;
  }
}
