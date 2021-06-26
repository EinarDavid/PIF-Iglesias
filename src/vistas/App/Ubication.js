import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, FlatList, ScrollView, SafeAreaView } from 'react-native';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import TitleDes from '../../Components/Text/TitleDescription';
import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

const Ubicacion = () => {
    return (
        <ImageBackground source={Images.FONDOAPP} style={{ width: '100%', height: '100%' }}>
            <View style={{ paddingTop: 0, flexDirection: 'column' }}>
                <SafeAreaView>
                    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }} >
                        <View style={styles.boton}>
                            <ButtonNav
                                ColorText={Colors.primary}
                                Accion={Constans.STRING.FE_IGUAL_AMOR}
                            //onPress={() => { navigation.navigate('Login') }}
                            />
                        </View>
                        <View style={{height:20}} />
                        <TitleDes
                            Titulo={'Ubicación'}
                            Contenido={'Encuentranos mediante la App si aun no sabes como llegar'}
                            AlineacionTitle={'left'}
                            AlineacionCon={'left'}
                            ColorTitle={Colors.Tittle}
                            ColorCon={Colors.description}
                            FontSize={30}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    boton: {
        alignItems: 'flex-start',
        //marginLeft: 20,
    },
});
export default Ubicacion;