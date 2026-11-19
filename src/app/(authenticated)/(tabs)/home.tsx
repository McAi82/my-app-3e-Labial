import { FlatList, Image, Text, View } from 'react-native'

const POSTS = [
  {
    id: '1',
    username: 'mcyor',
    avatar: require('./assets/post1.jpg'),
    text: 'Sunrise at the pier this morning.',
    image: 'https://picsum.photos/id/1015/800/500',
  },
  {
    id: '2',
    username: 'juan',
    avatar: require('./assets/post2.jpg'),
    text: 'Finally shipped my side project!',
  },
]

export default function Home() {
  return (
    <FlatList
      className='flex-1 bg-white'
      data={POSTS}
      keyExtractor={(post) => post.id}
      renderItem={({ item }) => (
        <View className='p-4 border-b border-slate-200 gap-3'>
          <View className='flex-row items-center gap-3'>
            <Image source={item.avatar} className='w-10 h-10 rounded-full' />
            <Text className='font-bold text-slate-900'>@{item.username}</Text>
          </View>
          <Text className='text-slate-800'>{item.text}</Text>
          {item.image && (
            <Image source={{ uri: item.image }} className='w-full aspect-[16/10] rounded-xl' />
          )}
        </View>
      )}
    />
  )
}