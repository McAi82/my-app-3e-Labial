import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

export default function Register() {
  return (
    <ScrollView
      className='flex-1 bg-slate-50'
      contentContainerClassName='flex-grow justify-center p-6 gap-4'
      keyboardShouldPersistTaps='handled'
    >

      <View className='mb-4'>
        <Text className='text-3xl font-extrabold text-slate-900'>Create your account</Text>
        <Text className='text-base text-slate-500 mt-1'>
          It takes less than a minute to get started.
        </Text>
      </View>

      <Input label='Name' />
      <Input label='Email' />
      <Input label='Password' secureTextEntry={true} />
      <Input label='Confirm Password' secureTextEntry={true} />
      <Button label='Register' />

      <View className='flex-row justify-center mt-4'>
        <Text className='text-slate-500'>Already have an account? </Text>
        <Text
          className='text-indigo-600 font-bold'
          onPress={() => router.push('/login')}
        >
          Login
        </Text>
      </View>
    </ScrollView>
  )
}