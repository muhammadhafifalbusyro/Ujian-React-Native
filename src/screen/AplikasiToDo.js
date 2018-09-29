import React from 'react'
import {View,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,ScrollView} from 'react-native'

class AplikasiToDo extends React.Component{
    state={
        text:'',
        list:[]
    }
    create(){
        if(this.state.text==''){
            return null
        }
        else{
            this.state.list.push(this.state.text)
            this.setState({list:this.state.list,text:''})
        }
    }
    delete(value){
        let newDelete= this.state.list.filter((cek)=>{
            return value!=cek
        })
        this.setState({list:newDelete})
    }
    render(){
        let item=this.state.list.map((val,key)=>{
            return(
                <View key={key} style={styles.ListHeader}>
                    <View style={styles.ListBox}>
                        <Text style={styles.TextInput}>{val}</Text>
                    </View>
                    <TouchableOpacity onPress={this.delete.bind(this,val)}>
                        <View style={styles.DeleteBox}>
                            <Text style={styles.TextDelete}>X</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        })
        return(
            <View style={styles.Container}>
                <ImageBackground source={require('../image/141514.jpg')}
                style={styles.ImageBackground}>
                    <View style={styles.Header}>
                        <Text style={styles.TextHeader}>Note</Text>
                    </View>
                    <View style={styles.Footer}>
                        <View style={styles.Box}>
                            <TextInput
                            value={this.state.text}
                            maxLength={50}
                            multiline={true}
                            placeholder='Tulis'
                            placeholderTextColor='aqua'
                            style={styles.TextInput}
                            onChangeText={(text)=>this.setState({text:text})}/>
                        </View>
                        <TouchableOpacity onPress={this.create.bind(this)}>
                            <View style={styles.Circle}>
                                <Text style={styles.Plus}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                    {item}
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    Container:{
        flex:1
    },
    ImageBackground:{
        height:'100%',
        width:'100%',
       
    },
    Header:{
        height:60,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'aqua',
        
    },
    TextHeader:{
        fontSize:25,
        fontFamily:'serif',
        color:'aqua',
    },
    Box:{
        height:50,
        width:'80%',
        backgroundColor:'black',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'aqua',
        borderRadius:50,
        top:10
        
    },
    TextInput:{
        fontSize:20,
        color:'aqua'
    },
    Circle:{
        height:50,
        width:50,
        borderRadius:50,
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'aqua',
        alignItems:'center',
        justifyContent:'center',
        top:10
       
    },
    Plus:{
        color:'aqua',
        fontSize:50,
        fontWeight:'bold',
        bottom:3
    },
    Footer:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'black',
        height:70,
        marginBottom:10
    },
    ListHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:5

    },
    ListBox:{
        height:90,
        borderWidth:2,
        borderColor:'aqua',
        backgroundColor:'black',
        width:300,
        justifyContent:'center',
        borderRadius:20,
        marginBottom:10,

    },
    DeleteBox:{
        height:30,
        width:30,
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'aqua',
        justifyContent:'center',
        alignItems:'center'
    },
    TextDelete:{
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    }
   
})
export default AplikasiToDo