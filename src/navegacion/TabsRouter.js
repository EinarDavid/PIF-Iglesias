import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../vistas/App/Home';
import Activity from '../vistas/App/Activity';
import Ubicacion from '../vistas/App/Ubication';
import Perfil from '../vistas/App/Perfil';

const Tab = new createBottomTabNavigator();
const TabScreen = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
            activeColor="#fff" inactiveColor="#E0F2F1"
            barStyle={{ backgroundColor: '#00695C' }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Activity" component={Activity}
                options={{
                    tabBarLabel: 'Actividades',
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="calendar-today" color={color} size={26} />
                    ),
                }}
            />
             <Tab.Screen name="Ubicacion" component={Ubicacion}
                options={{
                    tabBarLabel: 'Ubicacion',
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="location-on" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default TabScreen;
