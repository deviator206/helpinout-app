
import React ,{useState} from 'react';
import { TextInput,Picker, View, Image, Text, TouchableOpacity } from 'react-native';
import AppStorage from '../storage/AppStorage';
import AppConstant from '../misc/AppConstant';
import commonStyling from '../styling/commonStyle';



function RegisterMobile({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("key0");

    return (
        <View style={{ flexDirection: "column" }}>
            <View style={{ alignItems: "center", marginVertical: 60 }}>
                <Image
                    style={commonStyling.splashSmallImage}
                    source={require('../images/logo.png')}
                />
                <View style={commonStyling.appLabelView}>
                    <Text style={commonStyling.appLabelHelp}>Helpin</Text>
                    <Text style={commonStyling.appLabelInout}>Out</Text>
                </View>
            </View>
            <View style={{ alignItems: "center" , marginVertical: 30}}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={selectedValue}
              onValueChange={(val)=>{setSelectedValue(val)}}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
                <Text> Enter your mobile number </Text>
            </View>
            <View style={{ alignItems: "center" }} >
                
            </View>

            <View style={{ alignItems: "center" ,  marginVertical: 30}} >

                <TouchableOpacity
                    style={{
                        marginVertical: 30,
                        alignItems: "center",
                        backgroundColor: "#4F5065",
                        height: 56,
                        width: "92%",
                        shadowOpacity: 0.9,
                        shadowOffset: { height: 3 },
                        shadowColor: '#2328321F',

                    }}
                    onPress={() =>
                        console.log('AAA')
                    }>
                    <Text
                        style={{

                            textAlign: "center",
                            fontFamily: "Roboto-Medium",
                            fontSize: 20,
                            lineHeight: 56,
                            color: "#FFFFFF"

                        }}
                    >Login / Signup</Text>
                </TouchableOpacity>


            </View>

        </View>
    );
}

export default RegisterMobile;
