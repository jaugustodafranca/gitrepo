import React from 'react'
import { Dialog, Portal, Button, Paragraph } from 'react-native-paper'

const DialogError = ({ visible, handleConfirm, title, message }) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={handleConfirm}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleConfirm}>Cofirm</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

export default DialogError
