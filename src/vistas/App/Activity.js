import React from 'react';
import { StyleSheet, View, ImageBackground, FlatList, Image, SafeAreaView, ScrollView, Text } from 'react-native';
import Title from '../../Components/Text/Title';
import TitleDes from '../../Components/Text/TitleDescription';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import Section from '../../Components/Text/SeparadorSection';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

const ImageArreglo = [{ Image: Images.ACTIVITY }, { Image: Images.ACTIVITY }]

const Activity = () => {
    return (
        <ImageBackground source={Images.FONDO_WHITE} style={{ width: '100%', height: '100%' }}>
            <View style={{ paddingTop: 0, flexDirection: 'column' }}>

                <SafeAreaView>
                    <ScrollView>
                        <Image source={Images.ACTIVITY_IMAGE} style={{ width: '100%', height: 272, resizeMode: 'stretch', position: 'absolute' }} />
                        <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }} >
                            <View style={styles.boton}>
                                <ButtonNav
                                    ColorText={Colors.white}
                                    Accion={Constans.STRING.FE_IGUAL_AMOR}
                                //onPress={() => { navigation.navigate('Login') }}
                                />
                            </View>
                            <View style={{ height: 100 }} />
                            <TitleDes
                                Titulo={Constans.STRING.ACTIVIDAD}
                                AlineacionTitle={'center'}
                                ColorTitle={Colors.white}
                                FontSize={26}
                                Contenido={Constans.STRING.ACT_DES}
                                AlineacionCon={'center'}
                                ColorCon={Colors.white}
                            />
                            <View style={{ height: 80 }} />

                            {
                                global.iglesia.Actividades.map((a,i) => {
                                    var fechaactual = new Date();
                                    
                                    var fecha = new Date(a.Inicio);
                                    fecha.setDate(fecha.getDate()+2);
                                    console.log(fechaactual, fecha, fechaactual<fecha)
                                    if(fechaactual<=fecha)
                                    {
                                        return (
                                            <View key = {i}>
                                                <View style={{ backgroundColor: 'white', borderRadius: 13, elevation: 5 }}>
                                                    <Image source={{ uri: "http://138.128.243.212:7000/fotos/Iglesias/Actividad/" + a.FotoActividad }} style={{ width: '100%', height: 450, resizeMode: 'stretch', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                                    <View style={{ borderBottomRightRadius: 13, borderBottomLeftRadius: 13 }} >
                                                        <View style={{ height: 15 }} />
                                                        <View style={{ marginLeft: 30, marginRight: 30 }}>
                                                            <TitleDes
                                                                Titulo={a.Titulo}
                                                                AlineacionTitle={'left'}
                                                                ColorTitle={Colors.primary}
                                                                FontSize={26}
                                                                Contenido={a.Descripcion}
                                                                AlineacionCon={'left'}
                                                                ColorCon={Colors.description}
                                                            />
                                                        </View>
                                                        <View style={{ height: 20 }} />
                                                    </View>
                                                </View>
                                                <View style={{ height: 20 }} />
                                            </View>
                                        )
    
                                    }

                                })
                            }





                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titlle: {
        //marginBottom: 50, //ver en Mockup
        //backgroundColor: '#eaeaea',
        //alignItems: 'center',

    },
    boton: {
        alignItems: 'flex-start',
        //marginLeft: 30,
    },
});
export default Activity;

/*
<Image source={Images.ACTIVITY_IMAGE} style={{ width: '100%', height: 272 }}>

                    </Image>


                    <FlatList data={ImageArreglo}
                                showsVerticalScrollIndicator
                                renderItem={({ item }) => (<Image source={item.Image} style={{ width: '100%', height:450,  resizeMode: 'stretch', borderRadius: 13 }} />)}
                            />

                            borderColor: '#aeaeae', borderBottomWidth:1, borderLeftWidth:1, borderRightWidth:1,
*/