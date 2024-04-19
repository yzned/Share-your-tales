import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {getStyles} from './styles';
import GreenLink from '../../../7_shared/UI/greenLink/GreenLink';
import {useForm, Controller} from 'react-hook-form';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {BigButton} from '../../../7_shared/UI/buttons/bigButton/BigButton';
import {useTheme} from '../../../7_shared/hooks/useTheme';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {tokenPersistedVar} from '../../../7_shared/api/apollo/variable';
import {changeIsLoginStatus} from '../../../1_app/redux/duck/acccountData/slice';
import {useAppDispatch} from '../../../7_shared/hooks/reduxHoooks';
import {Input} from '../../../7_shared/UI/TextInput/TextIntput';
import {Eye} from '../../../7_shared/UI/Eye/Eye';
import {useSignIn} from '../../../__generated__/UserSignIn';

type FormValues = {
  email: string;
  password: string;
};
export default function LogIn() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(5, 'min'),
  });
  const dispatch = useAppDispatch();
  const {...methods} = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });
  const styles = useTheme(getStyles);
  const [signIn, {data}] = useSignIn();

  const goToRegister = () => {
    navigation.navigate('registration');
  };
  const [showPassword, setShowPassword] = useState(true);

  const handleShowingPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };
  const onSubmit = ({email, password}: FormValues) => {
    signIn({
      variables: {
        input: {
          email,
          password,
        },
      },
      onCompleted: ({userSignIn}) => {
        tokenPersistedVar.setReactiveValue(userSignIn.token);
        dispatch(changeIsLoginStatus());
      },
    });
  };

  return (
    <View style={styles.login}>
      <View>
        <Text style={styles.header}>Log In</Text>
        <Text style={styles.description}>
          You will be able to fully communicate
        </Text>
      </View>
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
            isError={methods.formState.errors.password ? true : false}
            isPassword={showPassword}
            isActive={
              methods.getValues('password') &&
              !methods.formState.errors.password
                ? true
                : false
            }
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
      <View style={styles.bottomPart}>
        <View style={styles.bottomText}>
          <Text style={styles.bottomTextAlready}>No account? </Text>
          <GreenLink text={'Register'} onPress={goToRegister} />
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
