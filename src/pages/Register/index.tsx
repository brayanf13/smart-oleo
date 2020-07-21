import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, Text, ImageBackground, Modal, Alert } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import MaskedInput from 'react-native-masked-input-text';
import { useForm, Controller } from 'react-hook-form';

import stylesGlobal from '../../public/stylesGlobal';
import styles from './styles';
import { type } from 'os';

interface FormStyle {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  latitude: string;
  longitude: string;
  complement: string;
}

const Register: React.FC = () => {

  const [visible, setVisible] = useState(false);
  const [visibleLocal, setVisibleLocal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [position, setPosition] = useState(false);
  const { register, handleSubmit, setValue, control, errors } = useForm<FormStyle[]>();

  function handleLocChange() {
    setVisibleLocal(true)
    setValue('latitude', initialPosition[0])
    setValue('longitude', initialPosition[1])
  }

  const onSubmit = (data: FormStyle) => {
    
    // api.post('register', form);

    // Alert.alert(`${form.name}`);
    console.log(data)
    Alert.alert(`${data.name} ${data.email} ${data.phone} ${data.password} ${data.confirmPassword} ${initialPosition} ${data.complement}`);
  }

  useEffect(() => {
    register("name");
    register("email");
    register("phone");
    register("password");
    register("confirmPassword");
    register("latitude");
    register("longitude");
    register("complement");
  }, [register])

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Oooops...', 'Precisamos de sua permissão para obter a localização.');
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([
        latitude,
        longitude
      ]);

    }

    loadPosition();
  }, []);

  function closeTerm() {
    setChecked(true);
    setVisible(false);
  }

  return (
    <SafeAreaView style={stylesGlobal.container}>
      <ImageBackground source={require('../../assets/Background.png')} style={stylesGlobal.container}>

        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
        >
          <View style={styles.centeredView}>
            <View style={[styles.containerModal, styles.modal]}>
              <Text style={[stylesGlobal.textTitle, styles.textTitleModal]}>
                Termos de uso da aplicação
              </Text>
              <ScrollView
                style={stylesGlobal.scrollViewModal}
              >
                <Text style={[stylesGlobal.textDescription, styles.textDescription]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sed imperdiet orci egestas massa, ullamcorper massa. Vivamus ornare venenatis, ornare ac ultrices suscipit {"\n"}

                  posuere. Et gravida diam egestas id quisque amet. Molestie consequat senectus eu eu. Urna iaculis nisi, at volutpat suspendisse scelerisque vestibulum pretium nibh. Nulla id vestibulum tellus enim fringilla vivamus rhoncus. {"\n"}

                  Fringilla maecenas justo, sit lectus vel tincidunt non nisl, bibendum. Fames purus id pellentesque at tortor mi id. In commodo nisi commodo donec venenatis. Vivamus sed felis elit accumsan ornare ut vel id vitae. Malesuada amet, maecenas risus hendrerit consectetur egestas sagittis est

                </Text>
              </ScrollView>

              <TouchableOpacity
                style={[stylesGlobal.primaryButton, styles.primaryButton]}
                onPress={() => closeTerm()}
              >
                <Text style={stylesGlobal.primaryButtonText}>ACEITAR TERMOS DE USO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Segundo Modal */}

        <Modal
          animationType="fade"
          transparent={true}
          visible={visibleLocal}
        >
          <View style={styles.centeredView}>
            <View style={[styles.containerModal, styles.modal]}>
              <ScrollView
                style={stylesGlobal.scrollViewModal}
              >

                <MapView
                  style={styles.map}
                  loadingEnabled={initialPosition[0] === 0}
                  initialRegion={{
                    latitude: initialPosition[0],
                    longitude: initialPosition[1],
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014,
                  }}
                >
                  {position && (
                    <Marker
                      style={styles.mapMarker}
                      coordinate={{
                        latitude: initialPosition[0],
                        longitude: initialPosition[1],
                      }}
                    >
                      <FontAwesome5 name="map-marker-alt" size={24} color="#138A3E" />
                    </Marker>
                  )}
                </MapView>
                <TouchableOpacity
                  style={stylesGlobal.secondaryButtonModal}
                  onPress={() => setPosition(!position)}
                >
                  <Text style={stylesGlobal.secondaryButtonTextModal}>ENVIAR LOCALIZAÇÃO ATUAL</Text>
                  <MaterialIcons name="my-location" size={18} color="#138A3E" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[stylesGlobal.primaryButton, styles.primaryButton]}
                  onPress={() => setVisibleLocal(false)}
                >
                  <Text style={stylesGlobal.primaryButtonText}>SELECIONAR</Text>
                </TouchableOpacity>

              </ScrollView>
            </View>
          </View>
        </Modal>



        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={stylesGlobal.scrollView}
          >

            <Text style={stylesGlobal.inputLabelText}>Nome completo</Text>

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                keyboardType="default"
                placeholder="ex: José Vinícius"
                style={stylesGlobal.inputText}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                />
              )}
              name="name"
              rules={{ required: true }}
              defaultValue=""
            />
            {/* {errors.name && <Text>This is required.</Text>} */}

            <Text style={stylesGlobal.inputLabelText}>E-mail (opcional)</Text>

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                keyboardType="email-address"
                placeholder="ex: email@email.com"
                style={stylesGlobal.inputText}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                />
              )}
              name="email"
              rules={{ required: true }}
              defaultValue=""
            />
            {/* {errors.name && <Text>This is required.</Text>} */}

            <Text style={stylesGlobal.inputLabelText}>Telefone</Text>
            
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <MaskedInput
                  keyboardType="phone-pad"
                  style={stylesGlobal.inputText}
                  onBlur={onBlur}
                  placeholder="ex: (00) 0 0000-0000"
                  mask={"+55 (00) 0 0000-0000"}
                  maxLength={20}
                  returnKeyType="next"
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="phone"
              rules={{ required: true }}
              defaultValue=""
            />
            {/* {errors.name && <Text>This is required.</Text>} */}

            <Text style={stylesGlobal.inputLabelText}>Senha*</Text>

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                keyboardType="default"
                placeholder="********"
                style={stylesGlobal.inputText}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                />
              )}
              name="password"
              rules={{ required: true }}
              defaultValue=""
            />
            {/* {errors.name && <Text>This is required.</Text>} */}


            <Text style={stylesGlobal.inputLabelText}>Confirmar senha*</Text>

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                keyboardType="default"
                placeholder="********"
                style={stylesGlobal.inputText}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                />
              )}
              name="confirmPassword"
              rules={{ required: true }}
              defaultValue=""
            />
            {/* {errors.name && <Text>This is required.</Text>} */}


            <Text style={stylesGlobal.inputLabelText}>Endereço</Text>

            <TouchableOpacity
              style={stylesGlobal.secondaryButton}
              onPress={handleLocChange}
            >
              <Text style={stylesGlobal.secondaryButtonText}>Selecionar Localização</Text>
              <FontAwesome name="map-marker" size={24} color="#138A3E" />
            </TouchableOpacity>

            <Text style={stylesGlobal.inputLabelText}>Complemento</Text>

            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <TextInput
                keyboardType="default"
                placeholder="ex: Ponto de referência, nº apartamento"
                style={stylesGlobal.inputText}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                />
              )}
              name="complement"
              rules={{ required: true }}
              defaultValue=""
            />
            {/* {errors.name && <Text>This is required.</Text>} */}


            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxText}>Li e aceito os</Text>
              <TouchableOpacity
                onPress={() => setVisible(true)}
              >
                <Text style={styles.checkBoxTermo}> termos de uso </Text>
              </TouchableOpacity>
              <Text style={styles.checkBoxText}>da aplicação</Text>
              <CheckBox
                checked={checked ? true : false}
                onPress={() => {
                  setChecked(!checked);
                }}
                size={24}
                uncheckedColor="#138A3E"
                checkedColor="#138A3E" />
            </View>

            <TouchableOpacity
              style={[stylesGlobal.primaryButton, styles.primaryButton]}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={stylesGlobal.primaryButtonText}>FINALIZAR CADASTRO</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Register;