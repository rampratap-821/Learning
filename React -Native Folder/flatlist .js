const App = ()=>{
    const User =[
        {
            id:1,
            name:"Omveer"
        },
        {
            id:2,
            name:"Upendra"
        }, {
            id:3,
            name:"Pushpendra"
        }, {
            id:4,
            name:"Rampratap"
        },
    ]
    return(
        <View>
            <Text style ={{fontSize:30,textAlign:"center",marginTop:20,color:"green"}}>BROTHER</Text>
            <FlatList
            data={User}
            renderItem={({item})=><Text style={instyle.item}>{item.name}</Text>}
            />
        </View>
    )
  };
  const instyle =StyleSheet.create({
        item:{
            fontSize:30,
            color:"red",
            backgroundColor:"black",
            margin:20,
            textAlign:"center",
            borderRadius:10,
            borderColor:"red",
            borderWidth:5
        }
  })