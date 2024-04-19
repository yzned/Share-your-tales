import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import {CustomRadioButton} from '../../7_shared/UI/radioButton/RadioButton';
import {GenderType} from '../../7_shared/types/api-types';
type GenderRadioButtonGroupTypes = {
  value: GenderType | undefined | null;
  onChange: (value: GenderType) => void;
  defaultValue: string | null | undefined;
};
export const GenderRadioButtonGroup: FC<GenderRadioButtonGroupTypes> = ({
  value,
  onChange,
  defaultValue,
}) => {
  const [currentGender, setCurrentGender] = useState(defaultValue);
  if (defaultValue === 'FEMALE') {
    value = GenderType.Female;
  }
  if (defaultValue === 'MALE') {
    value = GenderType.Male;
  }
  return (
    <View>
      <CustomRadioButton
        name="Male"
        active={currentGender === GenderType.Male}
        onPress={() => {
          onChange(GenderType.Male);
          setCurrentGender(GenderType.Male);
        }}
      />
      <CustomRadioButton
        name="Female"
        active={currentGender === GenderType.Female}
        onPress={() => {
          onChange(GenderType.Female);
          setCurrentGender(GenderType.Female);
        }}
      />
    </View>
  );
};
