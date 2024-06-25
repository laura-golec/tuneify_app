import React from 'react';
import { Tabs } from 'expo-router';
import { Icon, Icons, Sizes, darkTheme } from '@constants';

function TabBarIcon(props: {
    icon: Icon;
    colour: string;
    fillRule: 'evenodd' | 'nonzero';
  }){
    const IconComponent = Icons[props.icon];
    return <IconComponent width={Sizes['extraLarge']} height={Sizes['extraLarge']} fill={props.colour} fillRule={props.fillRule}></IconComponent>
}

export default function TabLayout() {

  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: darkTheme.tabIconSelected,
        tabBarInactiveTintColor: darkTheme.tabIconDefault,
        tabBarStyle: {borderTopWidth: 0}
        }}
        >
        
      <Tabs.Screen
        name="index"
        options={{ 
            title: 'Home',
            tabBarIcon: ({ color, focused }) => <TabBarIcon icon="Home" colour={color} fillRule={focused? 'nonzero' : 'evenodd'}/>,
          }}
      />
      <Tabs.Screen
        name="search"
        options={{ 
            title: 'Search',
            tabBarIcon: ({ color, focused }) => <TabBarIcon icon="Search" colour={color} fillRule={focused? 'nonzero' : 'evenodd'}/>,
          }}
      />
      <Tabs.Screen
        name="library"
        options={{
            title: 'Library',
            tabBarIcon: ({ color, focused }) => <TabBarIcon icon="Library" colour={color} fillRule={focused? 'nonzero' : 'evenodd'}/>,
          }}
      />
    </Tabs>
  );
}