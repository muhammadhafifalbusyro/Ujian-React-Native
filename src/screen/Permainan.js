import React from 'react'
import {View,TouchableOpacity,Text,Image,Alert,ImageBackground,StyleSheet} from 'react-native'

export default class Layar extends React.Component{
    state={
        user:null,
        komputer:null,
       
    }
    _ImageGunting(){
        return(
            <Image source={require('../image/cut.png')}
            style={styles.Versus}/>
        )
    }
    _ImageBatu(){
        return(
            <Image source={require('../image/stone.png')}
            style={styles.Versus}/>
        )
    }
    _ImageKertas(){
        return(
            <Image source={require('../image/checklist.png')}
            style={styles.Versus}/>
        )
    }
    Gunting(){
        let kom= Math.random()
        let gunting=this._ImageGunting()
        let batu=this._ImageBatu()
        let kertas=this._ImageKertas()

        if (kom<0.34){
            kom=gunting
        }else if(kom>=0.34 &&kom<0.67){
            kom=batu
        }else{
            kom=kertas
        }
        let hasil=''
        if(kom==gunting){
            hasil='seri'
        }else if (kom==kertas){
            hasil='menang'
        }else{
            hasil='kalah'
        }
        this.setState({user:this._ImageGunting(),komputer:kom})
        return(
            Alert.alert('hasilnya:kamu '+hasil)
        )
    }
    Batu(){
        let kom= Math.random()
        let gunting=this._ImageGunting()
        let batu=this._ImageBatu()
        let kertas=this._ImageKertas()

        if (kom<0.34){
            kom=gunting
        }else if(kom>=0.34 &&kom<0.67){
            kom=batu
        }else{
            kom=kertas
        }
        let hasil=''
        if(kom==batu){
            hasil='seri'
        }else if (kom==gunting){
            hasil='menang'
        }else{
            hasil='kalah'
        }
        this.setState({user:this._ImageBatu(),komputer:kom})
        return(
            Alert.alert('hasilnya:kamu '+hasil)
        )
    }
    Kertas(){
        let kom= Math.random()
        let gunting=this._ImageGunting()
        let batu=this._ImageBatu()
        let kertas=this._ImageKertas()

        if (kom<0.34){
            kom=gunting
        }else if(kom>=0.34 &&kom<0.67){
            kom=batu
        }else{
            kom=kertas
        }
        let hasil=''
        if(kom==kertas){
            hasil='seri'
        }else if (kom==batu){
            hasil='menang'
        }else{
            hasil='kalah'
        }
        this.setState({user:this._ImageKertas(),komputer:kom})
        return(
            Alert.alert(' hasilnya:kamu '+hasil)
        )
    }
   
    render(){
        return(
            <View style={styles.Container}>
                <ImageBackground source={require('../image/141514.jpg')}style={styles.ImageBackground}>
                    <View style={styles.Header}>
                        <Text style={styles.TextHeader}>Permainan Suit</Text>
                    </View>
                    <View style={styles.Body}>
                        {this.state.komputer}
                        <Image source={require('../image/versus.png')}
                        style={styles.Versus}/>
                        {this.state.user}
                    </View>
                    <View style={styles.Footer}>
                        <TouchableOpacity onPress={()=>this.Gunting()}>
                            <View style={styles.Box}>
                                <Text style={styles.TextBox}>Gunting</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.Batu()}>
                            <View  style={styles.Box}>
                                <Text style={styles.TextBox}>Batu</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.Kertas()}>
                            <View  style={styles.Box}>
                                <Text style={styles.TextBox}>Kertas</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'space-between'
    },
    ImageBackground:{
        height:'100%',
        width:'100%',
        justifyContent:'space-between'
    },
    Header:{
        height:60,
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
    },
    TextHeader:{
        fontSize:25,
        color:'aqua',
        fontWeight:'bold'
    },
    Box:{
        height:50,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'aqua',
        borderRadius:10
    },
    Footer:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10,
        marginBottom:30
    },
    TextBox:{
        fontSize:15,
        color:'aqua'
    },
    Versus:{
        height:150,
        width:150
    },
    Body:{
        alignItems:'center',
        justifyContent:'center'
    }
})