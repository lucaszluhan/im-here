import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export default function Home() {
  const participants = [
    'Lucas',
    'Clau',
    'Lais',
    'Mateus',
    'Gabriel',
    'Rodrigo',
    'Diego',
    'Maura',
    'Poliana',
    'Bruna',
    'Bruno',
  ]

  function handleParticipantAdd() {
    console.log('Voce clicou no botao de add')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Voce clicou para remover ${name}`)
  }

  function renderParticipants() {
    return participants.map(participant => (
      <Participant
        key={participant}
        name={participant}
        onRemove={() => handleParticipantRemove(participant)}
      />
    ))
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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.participants}>
        {renderParticipants()}
      </ScrollView>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.participants}
        data={[]}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Nenhum participante registrado nesta lista.</Text>
        )}
      />
    </View>
  )
}
