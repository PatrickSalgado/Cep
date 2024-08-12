import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8d8a5', // Cor de fundo mais suave
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Adiciona padding para melhorar a espaçagem
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#59291b', // Cor do texto do título
    marginBottom: 20, // Espaçamento abaixo do título
  },

  inputText: {
    height: 45,
    borderColor: '#ddd', 
    borderWidth: 1,
    borderRadius: 5, 
    marginTop: 20,
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff', 
  },

  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, 

  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },

  loading: {
    marginTop: 20,
    fontSize: 18,
    color: '#888', 
  },

  resultado: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400,
  },

  resultadoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },

  error: {
    marginTop: 20,
    fontSize: 18,
    color: '#d9534f', 
  },
}}
);