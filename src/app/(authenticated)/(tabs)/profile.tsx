import Button from '@/src/components/button'
import { Image, Text, View } from 'react-native'

export default function Profile() {
  return (
    <View className='flex-1 bg-white p-6 items-center gap-2'>
      <Image
        source={require('./assets/profile.jpg')}
        className='w-28 h-28 rounded-full mb-2'
      />
      <Text className='text-2xl font-bold text-slate-900'>Mcyor Labial</Text>
      <Text className='text-slate-500'>@mcyor</Text>

      <View className='w-full mt-6 gap-3'>
        <Text className='text-slate-700'>Email: mcyor@gmail.com</Text>
        <Text className='text-slate-700'>Phone: +63 912 345 6789</Text>
        <Text className='text-slate-700'>Location: Cagayan de Oro</Text>
      </View>

      <View className='w-full mt-6'>
        <Button label='Edit Profile' />
      </View>
    </View>
  )
}