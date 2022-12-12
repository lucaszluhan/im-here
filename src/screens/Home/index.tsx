import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export default function Home() {
  function handleParticipantAdd() {
    console.log('Voce clicou no botao de add')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Zluhan's Party</Text>
      <Text style={styles.date}>18/08/2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Digite o nome do participante'
          placeholderTextColor='#000'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttontext}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}
