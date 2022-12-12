import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { ParticipantProps } from './types'

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttontext}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
