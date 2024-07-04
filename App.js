import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, Platform, TextInput, KeyboardAvoidingView, StyleSheet, Text, View, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {

const [task, setTask]= useState();
const [taskItems, setTaskItems]= useState([]);
const handleAddTask = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems,task])
  setTask(null);
};
const completeTask = (index) => {
  let itemsCopy=[...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
};
  return (
    <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>

          <View style={styles.item}>
            {
              taskItems.map((item, index) =>{
                return(
                  <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                    <Task  text={item}/>
                  </TouchableOpacity>
                ) 
              
            })
            }
             {/* <Task text={' Task 1'}/>
             <Task text={' Task 2'}/>
             <Task text={' Task 3'}/> */}


          </View>
        </View>
        
        <KeyboardAvoidingView behavior={Platform.os === 'Android'? "padding": "height"}
        style={styles.writetaskWrapper}>
         <TextInput style={styles.input} placeholder={'Write here'} value={task} onChangeText={text => setTask(text)}></TextInput>

         <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}>
             <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>

       


    </View>
  );
}

const styles = StyleSheet.create({

  writetaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor: '#FFF',
    borderRadius:60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    height: 60,
    width: 60,
    backgroundColor: '#FFF',
    borderRadius:60,
    justifyContent: 'center',
    alignContent: 'center',
    borderBlockColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  taskWrapper:{
          paddingTop: 80,
          paddingHorizontal:20,

  },
  sectionTitle:
  {
       fontSize:24,
       fontWeight: 'bold',
  },
  item:
  {
    marginTop: 30,
    textAlign: 'center',
  },
  
});
