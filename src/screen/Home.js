import React, { Component } from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,StyleSheet} from 'react-native';

class Home extends Component{
    state={
        menu:true,
        list:null
    }
    _klik(){
        return this.props.navigation.navigate('Layar2')
    }
    _klik2(){
        return this.props.navigation.navigate('Layar3')
    }
    _klik3(){
        return this.props.navigation.navigate('Layar4')
    }
    _menu(){
        if(this.state.menu){
            return(
                <TouchableOpacity onPress={()=>this.setState({list:this._list(),menu:!this.state.menu})}>
                    <Image source={require('../image/menu.png')}
                    style={styles.Menu}/>
                </TouchableOpacity>
            )
        }
        else{
            return(
                <TouchableOpacity onPress={()=>this.setState({list:null,menu:!this.state.menu})}>
                    <Image source={require('../image/menu.png')}
                    style={styles.Menu}/>
                </TouchableOpacity>
            )
        }
    }
    _list(){
        return(
            <View style={styles.Footer}>
                <TouchableOpacity style={styles.List} onPress={()=>this._klik()}>
                    <View >
                        <Text style={styles.TextList}>Aplikasi To Do List</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.List} onPress={()=>this._klik3()}>
                    <View >
                        <Text style={styles.TextList}>Aplikasi Berita</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.List} onPress={()=>this._klik2()}>
                    <View >
                        <Text style={styles.TextList}>Permainan Suit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render(){
        return(
            <View style={styles.Container}>
                <ImageBackground source={require('../image/141514.jpg')}style={styles.BackgroundImage}>
                    <View style={styles.Container2}>
                        <Image
                        source={require('../image/logo.png')}
                        style={styles.Logo}/>
                        <View style={styles.Header}>
                            <Text style={styles.TextHeader}>Ujian React Native</Text>
                            {this._menu()}
                        </View>
                    </View>
                    {this.state.list}
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    Container:{
        flex:1
    },
    Container2:{
        marginBottom:50
    },
    BackgroundImage:{
        width:'100%',
        height:'100%'
    },
    Logo:{
        height:150,
        width:'100%'   
    },
    Header:{
        height:60,
        backgroundColor:'black',
        borderWidth:3,
        borderColor:'aqua',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    TextHeader:{
        fontFamily:'serif',
        fontWeight:'bold',
        color:'aqua',
        fontSize:25
    },
    Menu:{
        height:40,
        width:40,
        left:10
    },
    List:{
        height:50,
        width:250,
        borderWidth:2,
        borderColor:'aqua',
        backgroundColor:'black',
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50

    },
    TextList:{
        fontSize:20,
        color:'aqua',
        fontFamily:'serif'
    },
    Footer:{
        justifyContent:'center',
        alignItems:'center'
    }
    
})

export default Home;
