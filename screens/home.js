import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Modal, Switch } from 'react-native';
import React, { useState } from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function App() {

  const [scouterTeamNum, setScouterTeamNum] = useState(0);
  const [scouterName, setScouterName] = useState("");
  const [compName, setCompName] = useState("");
  const [compNameVisible, setCompNameVisible] = useSate(false);

  return (
    <SafeAreaView style={styles.container}>
        {/* Scouter names input */}
        <Text style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 10,}}> Scouter names: </Text>
            <TextInput
              placeholder="Insert your names..."
              style={{
                borderWidth: 1,
                borderRadius: 8,
                padding: 20,
                flex: 1,
                alignSelf: 'stretch',
                margin: 20,
                backgroundColor: 'white',
              }}
              onChangeText={(value) => setScouterName(value)}
              value={scouterName}
            />
        <Text style={{fontWeight: 'bold', fontSize: 15, marginHorizontal: 10,}}> Scouter team: </Text>
            <TextInput
              placeholder="Insert your team number..."
              style={{
                borderWidth: 1,
                borderRadius: 8,
                padding: 20,
                flex: 1,
                alignSelf: 'stretch',
                margin: 20,
                backgroundColor: 'white',
              }}
              keyboardType='number-pad'
              onChangeText={(value) => setScouterTeamNum(value)}
              value={scouterTeamNum}
            />
        <View style ={{ height: 50, flexDirection: 'row', marginVertical: 10, }}>
          {/* Drivetrain dropdown */}
          <Text style={{flex: 1, padding: 10, color: 'black', fontSize: 15, fontWeight: 'bold'}}>Competition: </Text>
          <Modal
            animationType='slide'
            transparent={true}
            visible={compNameVisible}
            onRequestClose = {() => setCompNameVisible(false)}
          >
            <View
              style={{
                alignItems: 'center',
                backgroundColor: 'lightgray',
                flex: 1,
                marginVertical: 200,
                marginHorizontal: 10,
                borderRadius: 15,
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: 'darkred',
                  borderRadius: 8,
                  alignItems: 'center',
                  height: 60,
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  margin: 10,
                  flex: 1,
                }}
                onPress={() => setCompName('Centennial College')}
              >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,}}>Centennial College</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'darkred',
                  borderRadius: 8,
                  alignItems: 'center',
                  height: 60,
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  margin: 10,
                  flex: 1,
                }}
                onPress={() => setCompName('Humber College')}
              >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,}}>Humber College</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'darkred',
                  borderRadius: 8,
                  alignItems: 'center',
                  height: 60,
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  margin: 10,
                  flex: 1,
                }}
                onPress={() => setCompName('McMaster University')}
              >
                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 15,}}>McMaster University</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'darkred',
                  borderRadius: 8,
                  alignItems: 'center',
                  height: 60,
                  alignSelf: 'stretch',
                  justifyContent: 'center',
                  margin: 10,
                  flex: 1,
                }}
                onPress={() => setCompName('Provincial Championship')}
              >
                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 15,}}>Provincial Championship</Text>
              </TouchableOpacity>
              </View>
            </Modal>
          </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemsContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'darkred',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  penaltyText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conePoint: {
    flex: 1,
    padding: 3,
    backgroundColor: 'orange',
    height: 50,
    width: 100,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cubePoint: {
    flex: 1,
    padding: 3,
    backgroundColor: 'blue',
    height: 50,
    width: 100,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fumblePoint: {
    flex: 1,
    padding: 3,
    backgroundColor: 'gray',
    height: 50,
    width: 100,
    borderColor: 'black',
  },
  lowPoint: {
    flex: 1,
    padding: 3,
    backgroundColor: 'dimgray',
    height: 50,
    width: 100,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridChange: {
    backgroundColor: 'darkred',
    height: 40,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  }
});