import React, {FC, ReactNode} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {typography} from '../atoms/typography';
import {colors} from '../atoms/colors';
import {numbers} from '../atoms/numbers';
import Button, {ButtonStatus, ButtonType} from '../molecules/button';
import RNText from '../molecules/RNText';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

interface OverlayModalProps {
  testID?: string;
  visible: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  buttons?: ButtonProps[];
  children?: ReactNode;
  shouldEnableOverlayClose?: boolean;
}

const OverlayModal: FC<OverlayModalProps> = ({
  testID,
  visible,
  onClose,
  title,
  subtitle,
  buttons,
  children,
  shouldEnableOverlayClose = false,
}: any) => {
  const onPressOverlay = () => {
    if (shouldEnableOverlayClose) onClose();
    else return;
  };

  return (
    <Modal
      testID={testID}
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlay}
        onPress={onPressOverlay}>
        <View style={styles.modalView}>
          <RNText style={styles.titleStyle} lightColor={colors.text.primary}>
            {title}
          </RNText>
          <RNText
            style={styles.subtitleStyle}
            lightColor={colors.text.secondary}>
            {subtitle}
          </RNText>
          {children && children}
          <View style={styles.buttonContainer}>
            {buttons?.map((button: ButtonProps, index: number) => (
              <View
                style={[
                  styles.button,
                  index === 0 ? styles.leftButton : styles.rightButton,
                ]}
                key={index}>
                <Button
                  status={ButtonStatus.Active}
                  buttonType={
                    index === 0 && buttons.length === 2
                      ? ButtonType.Secondary
                      : ButtonType.Primary
                  }
                  children={button.text}
                  onPress={button.onPress}
                />
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default OverlayModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.shadow.default,
  },
  modalView: {
    width: '100%',
    backgroundColor: colors.background.surface.primary,
    padding: numbers.padding['16'],
    paddingTop: numbers.padding['20'],
    borderTopLeftRadius: numbers.radius.small,
    borderTopRightRadius: numbers.radius.small,
    shadowColor: colors.background.surface.tertiary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: numbers.radius.xxs,
    elevation: 5,
  },
  titleStyle: {
    color: colors.text.primary,
    marginBottom: numbers.gap['16'],
    ...typography.style.TypographyBold40,
  },
  subtitleStyle: {
    color: colors.text.secondary,
    ...typography.style.TypographyParagraphRegular,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: numbers.margin['12'],
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: numbers.padding['16'],
    borderRadius: numbers.radius.xxs,
    alignItems: 'center',
  },
  leftButton: {
    marginRight: numbers.margin['8'],
  },
  rightButton: {
    marginLeft: numbers.margin['8'],
  },
});
