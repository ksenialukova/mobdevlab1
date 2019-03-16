import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checkbox1: false,
            checkbox2: false,
            radiobutton: 'triangle',
            output: ''
        };
    }

    handlePress = (event) => {
        let output = '';

        if (this.state.checkbox1) {
            output += 'square ';
        }

        if (this.state.checkbox2) {
            output += 'perimetr ';
        }

        output += this.state.radiobutton;

        this.setState({output: output})
    };

  render() {
        return (
            <View style={styles.container}>
                <Text>Choose figure and options</Text>
                <CheckBox
                    title='Square'
                    checked={this.state.checkbox1}
                    onPress={() => this.setState({checkbox1: !this.state.checkbox1})}
                />
                <CheckBox
                    title='Perimetr'
                    checked={this.state.checkbox2}
                    onPress={() => this.setState({checkbox2: !this.state.checkbox2})}
                />
                <Text>Triangle</Text>
                <RadioButton
                    value='Triangle'
                    status={this.state.radiobutton === 'triangle' ? 'checked' : 'unchecked'}
                    onPress={() => this.setState({radiobutton: 'triangle'})}
                />
                <Text>Rectangle</Text>
                <RadioButton
                    value='Rectangle'
                    status={this.state.radiobutton === 'rectangle' ? 'checked' : 'unchecked'}
                    onPress={() => this.setState({radiobutton: 'rectangle'})}
                />
                <Text>Circle</Text>
                <RadioButton
                    value='Circle'
                    status={this.state.radiobutton === 'circle' ? 'checked' : 'unchecked'}
                    onPress={() => this.setState({radiobutton: 'circle'})}
                />
                <Button
                    title='Submit'
                    onPress={this.handlePress}
                />
                <Text>{this.state.output}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
