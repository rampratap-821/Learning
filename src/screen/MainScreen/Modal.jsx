import React, { useState } from "react";
import{ View, StyleSheet, Button, Modal, Text }from 'react-native';
const ModalData = ()=>{
    const[showModal,setshowModal] =useState(false)
    return(
        <View style={StyleSheet.main}>
            <Modal 
            transparent={true}
            visible={showModal}
            animationType="slide"
            >
                <View style={styles.centerView}>
                    <View style={styles.modal}>
                        <Text style={styles.madalText}>Code Step By Step</Text>
                        <Button title="close Madal"onPress={()=>setshowModal(false)}/>
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonView}>
            <Button color={"red"}title="Open madals"onPress={()=>setshowModal(true)}/>
            </View>
        </View>
    )
}
  const styles = StyleSheet.create({
    main:{
        flex:1,

    },
    buttonView:{
        marginTop:650,
        margin:15,
        borderRadius:10,
        color:"black",
    },
    centerView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    modal:{
        backgroundColor:"white",
        padding:60,
        borderRadius:10,
        shadowColor:"black",
        elevation:10
    },
    madalText:{
        marginBottom:20
    }
  }) 
export default ModalData;