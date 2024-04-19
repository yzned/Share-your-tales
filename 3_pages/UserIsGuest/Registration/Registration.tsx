import {View, Text} from 'react-native';
import React, {useState} from 'react';
import GreenLink from '../../../7_shared/UI/greenLink/GreenLink';
import {useForm, Controller} from 'react-hook-form';
import {Input} from '../../../7_shared/UI/TextInput/TextIntput';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {BigButton} from '../../../7_shared/UI/buttons/bigButton/BigButton';
import {getStyles} from './Styles';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import {Eye} from '../../../7_shared/UI/Eye/Eye';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {tokenPersistedVar} from '../../../7_shared/api/apollo/variable';
import {useCreateUser} from '../../../__generated__/SingUp';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};
export default function Registration() {
  const styles = useTheme(getStyles);
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [createUser] = useCreateUser();

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(5, 'min'),
    confirmPassword: yup
      .string()
      .required('Both passwords must match')
      .test('Both passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

  const {...methods} = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const [showPassword, setShowPassword] = useState(true);

  const handleShowingPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  const toLogIn = () => {
    navigation.navigate('login');
  };

  const onSubmit = ({email, password, confirmPassword}: FormValues) => {
    createUser({
      variables: {
        input: {
          email,
          password,
          passwordConfirm: confirmPassword,
        },
      },
      onCompleted: ({userSignUp}) => {
        tokenPersistedVar.setReactiveValue(userSignUp.token);
      },
    });
    navigation.navigate('congrats');
  };

  return (
    <View style={styles.registration}>
      <View>
        <Text style={styles.header}>Join Us</Text>
        <Text style={styles.description}>
          You will be able to fully communicate
        </Text>
        <Controller
          control={methods.control}
          name="email"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              name="email"
              label="Email"
              placeholder="Enter your e-mail"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              isError={methods.formState.errors.email ? true : false}
              isPassword={false}
              isActive={
                methods.getValues('email') && !methods.formState.errors.email
                  ? true
                  : false
              }
            />
          )}
        />
        {methods.formState.errors.email && (
          <Text style={styles.errrorMesage}>Enter correct e-mail</Text>
        )}
        <Controller
          control={methods.control}
          name="password"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              isPassword={showPassword}
              isError={methods.formState.errors.password ? true : false}
              isActive={
                methods.getValues('password') &&
                !methods.formState.errors.password
                  ? true
                  : false
              }
              multiline={false}
              icon={
                <View style={styles.eye}>
                  <Eye
                    isError={methods.formState.errors.password ? true : false}
                    showPassword={showPassword}
                    onPress={handleShowingPassword}
                    isActive={
                      methods.getValues('password') &&
                      !methods.formState.errors.password
                        ? true
                        : false
                    }
                  />
                </View>
              }
            />
          )}
        />
        {methods.formState.errors.password && (
          <Text style={styles.errrorMesage}>
            Password field must be at leat 5 characters
          </Text>
        )}

        <Controller
          control={methods.control}
          name="confirmPassword"
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              name="confirmPassword"
              value={value}
              onBlur={onBlur}
              label="Confirm password"
              placeholder="Confirm your password"
              onChange={onChange}
              isError={methods.formState.errors.confirmPassword ? true : false}
              isActive={
                methods.getValues('confirmPassword') &&
                !methods.formState.errors.confirmPassword
                  ? true
                  : false
              }
              isPassword={showPassword}
              multiline={false}
              icon={
                <View style={styles.eye}>
                  <Eye
                    isError={
                      methods.formState.errors.confirmPassword ? true : false
                    }
                    showPassword={showPassword}
                    onPress={handleShowingPassword}
                    isActive={
                      methods.getValues('confirmPassword') &&
                      !methods.formState.errors.confirmPassword
                        ? true
                        : false
                    }
                  />
                </View>
              }
            />
          )}
        />
        {methods.formState.errors.confirmPassword && (
          <Text style={styles.errrorMesage}>Both passwords must match</Text>
        )}
      </View>
      <View style={styles.bottomPart}>
        <View style={styles.bottomText}>
          <Text style={styles.bottomTextAlready}>
            Already have an account?{' '}
          </Text>
          <GreenLink text={'Log In'} onPress={toLogIn} />
        </View>
        <View style={styles.continueBtn}>
          <BigButton
            name={'Continue'}
            onPress={methods.handleSubmit(onSubmit)}
            disabled={!methods.formState.isValid}
          />
        </View>
      </View>
    </View>
  );
}
