import{StackNavigator} from 'react-navigation'
import Home from '../screen/Home'
import AplikasiToDo from '../screen/AplikasiToDo'
import Permainan from '../screen/Permainan'
import AplikasiBerita from '../screen/AplikasiBerita';

export const Stack=StackNavigator({
    Layar1:{
       screen:Home ,
       navigationOptions:{
        header:null,
    }
    },
    Layar2:{
        screen:AplikasiToDo,
        navigationOptions:{
            header:null,
        }
    },
    Layar3:{
        screen:Permainan,
        navigationOptions:{
            header:null,
        }
    },
    Layar4:{
        screen:AplikasiBerita,
        navigationOptions:{
            header:null,
        }
    }
})