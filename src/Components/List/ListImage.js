import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../Config/Colors';


export const ListImage = ({ ColorFondo, BordeTopRight, BordeTopLeft, BorderBottomLef, BorderBottonRight, FotoActividad, Titulo, AlineacionTitle, ColorTitle, Contenido, AlineacionCon, ColorCon}) => {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: 12,
                paddingRight: 12,
                height: 120,
                backgroundColor: ColorFondo,
                borderTopRightRadius: BordeTopRight,
                borderTopLeftRadius: BordeTopLeft,
                borderBottomLeftRadius: BorderBottomLef,
                borderBottomRightRadius: BorderBottonRight,
                // backgroundColor: '#eaeaea'
            }}>
                <Image
                    source={FotoActividad}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 13
                    }}
                />
                {/* <View style={{ width: 5, backgroundColor: '#eaeaea' }} /> */}
                <View style={{ width: ' 65%',  }} >
                    <Text
                        style={{
                            width: '100%',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            backgroundColor: 'transparent',
                            fontSize: 18,
                            fontFamily: "Montserrat",
                            textAlign: AlineacionTitle,
                            color: ColorTitle,
                            // backgroundColor: '#eaeaea'
                        }}
                    >{Titulo}
                    </Text>

                    <Text style={{
                        backgroundColor: 'transparent',
                        fontSize: 11,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: "Montserrat",
                        width: '100%',
                        textAlign: AlineacionCon,
                        color: ColorCon,
                        // backgroundColor: 'black'
                    }}>{Contenido}</Text>
                </View>
            </View>
        </>
    )
}
