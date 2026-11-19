import { useState } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
    label: string
}

export default function Input({ label, onFocus, onBlur, ...props }: InputProps) {
    const [focused, setFocused] = useState(false)

    return (
        <View className='gap-1.5'>
            <Text className='text-sm font-semibold text-slate-900'>{label}</Text>
            <TextInput
                className={`h-14 rounded-2xl bg-white border-2 px-4 text-base text-slate-900 ${
                    focused ? 'border-indigo-600' : 'border-slate-200'
                }`}
                placeholderTextColor='#94A3B8'
                onFocus={(e) => {
                    setFocused(true)
                    onFocus?.(e)
                }}
                onBlur={(e) => {
                    setFocused(false)
                    onBlur?.(e)
                }}
                {...props}
            />
        </View>
    )
}