import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import {
  Container,
  Item,
  ViewImage,
  ViewQuantity,
  TextTitle,
  TextDescription,
  TextView,
  ViewFooter,
  TextFooter,
  TextPrice,
  Divider,
  ViewChoiceItem,
  ChangeArea,
  MinusArea,
  PlusArea,
  NumberText,
} from './styles';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';


const DishSuggestion = forwardRef(({
  title,
  description,
  persons,
  price,
  remove,
  add,
  index,
}, ref) => {

  const [checked, setChecked] = useState('');
  const [quantity, setQuantity] = useState(0);

  useImperativeHandle(ref, () => ({
    setUserQtd(qt) {
      setQuantity(qt);
    },
  }));

  return (
    <Container>
      <Item onPress={null}>
        <ViewImage>
          <TextView>
            <ViewChoiceItem>
              <TextTitle> {title?.title}</TextTitle>
              <ViewQuantity>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  color={Colors.textColorLight}
                  uncheckedColor={Colors.textColorLight}
                  onPress={() => setChecked('first')}
                />
                <ChangeArea>
                  <MinusArea>
                    <Icon
                      name="minus"
                      style={{
                        fontSize: 16,
                        color: Colors.tertiary,
                      }}
                      onPress={() => remove(index)}
                    />
                  </MinusArea>
                  <NumberText> {quantity} </NumberText>
                  <PlusArea>
                    <Icon
                      name="plus"
                      style={{
                        fontSize: 16,
                        color: Colors.tertiary,
                      }}
                      onPress={() => add(index)}
                    />
                  </PlusArea>

                </ChangeArea>
              </ViewQuantity>
            </ViewChoiceItem>
            <TextDescription>
              {description?.description}
            </TextDescription>
            <ViewFooter>
              <TextFooter>Serve {persons?.persons} Pessoas</TextFooter>
              <TextPrice>E$ {price?.price}</TextPrice>
            </ViewFooter>
          </TextView>
        </ViewImage>
      </Item>
      <Divider />
    </Container>
  );
})
export default DishSuggestion