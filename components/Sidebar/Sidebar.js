import React, {Component} from 'react';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

const Title = styled.Text`
    font-Size:15;
    margin-Left:10;
`;

const Container = styled.View`
    background-Color: white;
    padding-Top: 40;
    align-Items: center;
    flex: 1;
`;

const ProfileImage = styled.Image`
    width:80;
    height: 80;
    border-Radius: 40;
    margin-Top:20px;
`;

const ProfileText = styled.Text`
    font-Weight: bold;
    font-Size: 16;
    margin-Top: 10;

`;

const ProfileEmail = styled.Text`
    color: gray;
    margin-Bottom:10;
`;

const SidebarDivider = styled.View`
    height:1;
    width: 100%;
    background-Color: lightgray;
    margin-Left: 10;
    margin-Right: 10;
`;

const TouchableView = styled.TouchableOpacity`
    height: 60;
    align-Items: center;
    flex-Direction: row;

`;

const ListFlat = styled.FlatList`
    width: 100%;
    margin-Left:30;
    flex-direction: column;

`;


function Item({ item, navigate }) {
    return (
         
      
        <TouchableView onPress={()=>navigate(item.name)}>
            <Ionicons name={item.icon} size={24} />
            <Title>{item.name}</Title>
        </TouchableView>
    );
  }


class Sidebar extends Component {
    state = {
        routes:[
            {
                name:"Home",
                icon:"ios-home"
            },
            {
                name:"Profile",
                icon:"ios-contact"
            },
            {
                name:"Settings",
                icon:"ios-settings"
            },
        ]
    }
  
    render(){
        return (
            <Container>
                <ProfileImage source={require("./assets/profile.jpg")}/>
                <ProfileText>Janna Doe</ProfileText>
                <ProfileEmail>janna@doe.com</ProfileEmail>
                <SidebarDivider></SidebarDivider>
                <ListFlat
                    data={this.state.routes}
                    renderItem={({ item }) => <Item  item={item} navigate={this.props.navigation.navigate}/>}
                    keyExtractor={item => item.name}
                />
            </Container>
        )
    }
  }
  
  
  export default Sidebar;