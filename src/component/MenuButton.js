import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import ActionButton from 'react-native-action-button';
import * as globalStyle from '../style/globalStyle.js';

const actionIc = [
    require('@Assets/ic-us.png'),
    require('@Assets/ic-id.png'),
    require('@Assets/ic-my.png'),
    require('@Assets/ic-sg.png'),
    require('@Assets/ic-cn.png')
]

class MenuButton extends Component {
    constructor(props){
        super(props);
        this.state={
            country:"id",
            selected: 1
        }
    }

    changeCountry(country, id){
        const{onChange}=this.props;
        this.setState({
            country: country,
            selected: id
        }, ()=>{
            onChange && onChange(country)
        })
    }

    render() {
        return (
            <ActionButton
                renderIcon={()=>{
                    return(
                        <Image style={styles.actionButtonIcon} source={actionIc[this.state.selected]}/>
                    )
                }}
            >
                <ActionButton.Item title="United States" onPress={() => {this.changeCountry('us', 0)}}>
                    <Image style={styles.actionButtonIcon} source={actionIc[0]}/>
                </ActionButton.Item>
                <ActionButton.Item title="Indonesia" onPress={() => {this.changeCountry('id', 1)}}>
                    <Image style={styles.actionButtonIcon} source={actionIc[1]}/>
                </ActionButton.Item>
                <ActionButton.Item title="Malaysia" onPress={() => {this.changeCountry('my', 2)}}>
                    <Image style={styles.actionButtonIcon} source={actionIc[2]}/>
                </ActionButton.Item>
                <ActionButton.Item title="Singapore" onPress={() => {this.changeCountry('sg', 3)}}>
                    <Image style={styles.actionButtonIcon} source={actionIc[3]}/>
                </ActionButton.Item>
                <ActionButton.Item title="China" onPress={() => {this.changeCountry('cn', 4)}}>
                    <Image style={styles.actionButtonIcon} source={actionIc[4]}/>
                </ActionButton.Item>
            </ActionButton>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: 50*globalStyle.WIDTH,
    width: globalStyle.windowWidth-40*globalStyle.WIDTH,
    backgroundColor:'white',
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  actionButtonIcon: {
    width: 58,
    height: 58,
  },
});

export default MenuButton
