import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    flex: 1,
    fontSize: 20,
    marginLeft: 16,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#f00',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: '#fff',
    fontSize: 24,
    padding: 10,
  },
})
