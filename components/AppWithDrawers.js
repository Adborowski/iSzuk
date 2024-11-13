const AppWithDrawers = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: PlatformColor("systemOrange"),
          },

          drawerIcon: ({ focused, color, size }) => {
            // todo add tiszuk-jesus
            return (
              <Ionicons name="accessibility-outline" size={32} color="white" />
            );
          },
          headerStyle: {
            backgroundColor: PlatformColor("systemOrange"),
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Basteleur",
          },
          drawerActiveBackgroundColor: PlatformColor("systemOrange"),
          headerTintColor: "white",
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "black",
          drawerItemStyle: {
            marginHorizontal: 12,
            marginBottom: 6,
            borderRadius: 6,
          },
          drawerLabelStyle: {
            fontSize: 20,
            fontFamily: "Basteleur",
          },
        }}
      >
        <Drawer.Screen
          name={"SamplesScreen"}
          component={SamplesScreen}
          options={{
            title: "Sample",
          }}
        />
        <Drawer.Screen
          name={"WelcomeScreen"}
          component={WelcomeScreen}
          drawerStyle={{
            backgroundColor: PlatformColor("systemTealColor"),
          }}
          options={{ title: "iSzuk" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppWithDrawers;
