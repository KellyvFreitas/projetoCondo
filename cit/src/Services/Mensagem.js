import { Alert } from 'react-native';

export default {
  exibirInfo: async mensagem => {
    try {
      Alert.alert('Informação', mensagem);
    } catch (error) { }
  },

  exibirFalha: async mensagem => {
    try {
      Alert.alert('Falha', mensagem);
    } catch (error) { }
  },

  exibirErro: async mensagem => {
    try {
      Alert.alert('Erro', mensagem);
    } catch (error) { }
  },
};
