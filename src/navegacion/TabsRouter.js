import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../vistas/App/Home';
import Activity from '../vistas/App/Activity';
import Ubicacion from '../vistas/App/Ubication';
import Perfil from '../vistas/App/Perfil';

const Tab = new createBottomTabNavigator();
const TabScreen = () => {
    const color = '#000000';
    return (
        <Tab.Navigator initialRouteName="Home"
            activeTintColor={{color:"#ffffff"}} 
            inactiveTintColor={{color:"#E0F2F1"}}
            tabBarBadgeStyle={{ backgroundColor: '#000000' }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarBadgeStyle: '#ffffff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Activity" component={Activity}
                options={{
                    tabBarLabel: 'Actividades',
                    tabBarColor: '#ffffff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="book-online" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Servicio" component={Ubicacion}
                options={{
                    tabBarLabel: 'Galeria',
                    tabBarBadgeStyle: {backgroundColor:'#000000'},
                    style:{backgroundColor:'#000000'},
                    tabBarIcon: ({ color }) => (
                        <Icon name="dns" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarColor: '#000000',
                    tabBarIcon: ({ color='#fff' }) => (
                        <Icon name="person" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default TabScreen;
