import { StyleSheet } from 'react-native'

export const login = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom:250,
    backgroundColor: 'red'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 15,
    height: 40,
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  header: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'white',
  }
})

export const register = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch',
    paddingBottom: 250,
    backgroundColor: 'red'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 15,
    height: 40,
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  header: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'white',
  }
})

export const landingPage = StyleSheet.create({
  container: {
    alignContent: 'space-around',
    backgroundColor: 'red',
    paddingTop: 100,
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
		height: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	}
})