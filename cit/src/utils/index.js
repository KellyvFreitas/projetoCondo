import Mensagem from '../Services/Mensagem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const verifyEmailFormat = email => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {
    return true;
  } else {
    Mensagem.exibirInfo('Formato de email inválido ');
    return false;
  }
};

export const setItemAsync = async (key, value) => {
  let strValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, strValue);
};

export const getItemAsync = async key => {
  let strValue = await AsyncStorage.getItem(key);
  let parsedValue = JSON.parse(strValue);
  return parsedValue;
};
export const getAllItemsAsync = () => {
  return AsyncStorage.getAllKeys();
};
export const removeItemAsync = key => {
  return AsyncStorage.removeItem(key);
};
export const formatValueCurrency = value => {
  let formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  // console.log('formatCurrency', formatCurrency);
  return formatCurrency;
};

export const dateScheduling = (date, type) => {
  const newDateFormat = format(new Date(date), type ? type : 'Pp', {
    locale: pt,
  });
  return newDateFormat.split(',')[0]
};

export const dateWeek = date => {
  const firstDate = parseISO(date);
  const formattedDate = format(firstDate, 'PPPP', {
    locale: pt,
  });
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

export const removeSecondsNew = hour => {
  const removeSec = hour.replace(/:[^:]*$/, '');
  return removeSec;
};
export const removeSeconds = hour => {
  const removeSec = hour.replace(/:\d\d( |$)/g, '');
  return removeSec;
};
export const removeDoubleSeconds = hour => {
  const removeSec = hour.replace(/:\d\d( |$)/g, '').replace(/-/g, ' às');
  return removeSec;
};

export const orderFlatList = item => {
  const order = item.sort((a, b) => a.nome.localeCompare(b.nome));
  return order;
};

export const removeAccentFromString = string => {
  //Function that remove acccents from strings.
  let cityWithNoAccent = string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  return cityWithNoAccent;
};
