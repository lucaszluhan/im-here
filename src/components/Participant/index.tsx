import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Lucas Zluhan</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
