import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface BtnProps extends TouchableOpacityProps {
    label: string
    variant?: 'primary' | 'secondary'
}

export default function Button({ label, variant = 'primary', ...props }: BtnProps) {
  const isPrimary = variant === 'primary'

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`h-14 rounded-2xl items-center justify-center ${
        isPrimary ? 'bg-indigo-600' : 'bg-indigo-50'
      }`}
      {...props}
    >
        <Text
          className={`text-base font-bold ${
            isPrimary ? 'text-white' : 'text-indigo-600'
          }`}
        >
          {label}
        </Text>
    </TouchableOpacity>
  )
}