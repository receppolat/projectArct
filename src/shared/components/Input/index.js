import { Text, TextInput, View } from 'react-native'
import React from 'react'

function Input({ setState, placeHolder = 'placeholder', keyboardType, textAlign = 'left', style,textColor= 'gray', maxLength}) {
    return (
        <TextInput
            style={style}
            onChangeText={setState}
            placeholder={placeHolder}
            placeholderTextColor={textColor}
            keyboardType={keyboardType}
            textAlign={textAlign}
            maxLength={maxLength}
        />
    )
}
export default Input;