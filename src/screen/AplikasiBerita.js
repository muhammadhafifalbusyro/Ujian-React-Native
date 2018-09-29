import React from 'react'
import {View,Text,TouchableOpacity,ScrollView,StyleSheet,FlatList,Image,Dimensions,ActivityIndicator} from 'react-native'

let window=Dimensions.get('window')
class AplikasiBerita extends React.Component{
    state={
        isLoading:true
    }
    componentDidMount(){
        return fetch(' https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2Findex.php%2Fsepakbola')
        .then((respon)=>respon.json())
        .then((responjson)=>{
            this.setState({
                isLoading:false,
                dataSource:responjson.items
            })
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    _renderItem=({item,index})=>{
        return(
            <View>
                <View style={styles.ListHeader}>
                    <Image
                    source={{uri:item.enclosure.link}}
                    style={styles.ImageList}/>
                    <View style={{padding:10}}>
                        <Text style={styles.TextList}>{item.title}</Text>
                    </View>
                </View>
            </View>
        )
    }
    
    render(){
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }
        return(
            <View style= {styles.Container}>
                <View style={styles.Header}>
                    <Text style={styles.TextHeader}>Aplikasi Berita</Text>
                </View>
                <Text style={styles.Title}>
                    Berita Terbaru
                </Text>
                <FlatList
                data={this.state.dataSource}
                keyExtractor={(item,index)=>item.toString()}
                renderItem={this._renderItem}/>
            </View>
        )
    }
}
styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'black'
    },
    Header:{
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        borderWidth:2,
        borderColor:'aqua'
    },
    TextHeader:{
        color:'aqua',
        fontSize:30,
        fontFamily:'serif',
        fontWeight:'bold'
    },
    Title:{
        fontSize:25,
        color:'aqua'
    },
    ListHeader:{
        flexDirection:'row',
        padding:10,
        width:window.width-100,
    },
    ImageList:{
        height:90,
        width:100
    },
    TextList:{
        color:'aqua',
        fontSize:15
    }
})
export default AplikasiBerita