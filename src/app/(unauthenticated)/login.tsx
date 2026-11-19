import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

export default function Login() {
  return (
    <ScrollView
      className='flex-1 bg-slate-50'
      contentContainerClassName='flex-grow justify-center p-6 gap-4'
      keyboardShouldPersistTaps='handled'
    >
      <StatusBar style='light' />

      <View className='mb-4'>
        <Text className='text-3xl font-extrabold text-slate-900'>Welcome back</Text>
        <Text className='text-base text-slate-500 mt-1'>
          Log in to see what your people are up to.
        </Text>
      </View>

      <Input label='Email' />
      <Input label='Password' secureTextEntry={true} />
      <Button label='Login' onPress={() => router.push('/home')} />

      <View className='flex-row justify-center mt-4'>
        <Text className='text-slate-500'>New here? </Text>
        <Text
          className='text-indigo-600 font-bold'
          onPress={() => router.push('/register')}
        >
          Create an account
        </Text>
      </View>
    </ScrollView>
  )
}