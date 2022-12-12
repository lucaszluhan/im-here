import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    backgroundColor: '#fff',
    height: 56,
    padding: 16,
    fontSize: 16,
    flexGrow: 1,
    borderRadius: 5,
    marginRight: 7,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#0D0',
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
