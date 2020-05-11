import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ImageBackground, TextInput } from 'react-native';
import UserSnippet from '../components/UserSnippet';
import { typo, color, COLOR, align } from '../styles'
// Redux
import { connect } from 'react-redux';
import { logInUser } from '../actions/user';


class SettingsScreen extends Component {
state = {
  title: '',
  username: '',
  user_description: 'Дизайнер из Москвы'
}

componentDidMount(){
  this.getProfileUser()
}
getProfileUser = () => {
  return fetch('http://localhost:3000/v1/users/1.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        usersIsLoading: false,
        title: responseJson.title,
        username: responseJson.username,
        avatar: responseJson.avatar
      }, function(){
      });
    })
    .catch((error) =>{
      console.error(error);
    })
}

inputTitleChangeHandler = (value) => {this.setState({title: value})}
inputUsernameChangeHandler = (value) => {this.setState({username: value})}
inputUserdescriptionChangeHandler = (value) => {this.setState({user_description: value})}

render() {
  console.log(this.state.user);
  return (
    <View style = { styles.container }>
      <View style = { styles.container }>
        <Text style = { [typo.t24, color.black80, align.center] }>Настройки</Text>
        <View style = { styles.imageContainer }>
          <ImageBackground source={{ uri: this.state.avatar }} style={styles.image} imageStyle={{ borderRadius: 60 }}></ImageBackground>
        </View>
        <View style = { styles.inputsContainer }>
          <View style = { styles.inputContainer }>
            <Text style = { [styles.label, typo.t16, color.black30] }>Имя</Text>
            <TextInput
              style = { [styles.textInput, typo.t24, color.black80] }
              placeholder = "Введите название..."
              value = { this.state.title }
              onChangeText = { this.inputTitleChangeHandler }
            ></TextInput>
          </View>
          <View style = { styles.inputContainer }>
            <Text style = { [styles.label, typo.t16, color.black30] }>Ссылка</Text>
            <View style = { styles.horizontalContainer }>
              <Text style = { [styles.textInputLink, typo.t24, color.black30] }>places.io/</Text>
              <TextInput
                style = { [styles.textInput, typo.t24, color.black80] }
                placeholder = "Введите название..."
                value = { this.state.username }
                onChangeText = { this.inputUsernameChangeHandler }
              ></TextInput>
            </View>
          </View>
          <View style = { styles.inputContainer }>
            <Text style = { [styles.label, typo.t16, color.black30] }>Описание</Text>
            <TextInput
              style = { [styles.textInput, typo.t20, color.black80] }
              placeholder = "Введите название..."
              value = { this.state.user_description }
              onChangeText = { this.inputUserdescriptionChangeHandler }
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
    );
  }
}
// <Text style = { [typo.t24, color.black80, align.center] }>{this.props.user.title}</Text>

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  horizontalContainer: {
    flexDirection: 'row'
  },
  smallHeading: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080"
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 24
  },
  image: {
    width: 120,
    height: 120
  },
  inputsContainer: {
    padding: 16,
    width: '100%'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.black10,
  },
  textInput: {
    paddingBottom: 16,
    width: '100%'
  },
  textInputLink: {
    paddingBottom: 20
  },
  label: {
    marginBottom: 8
  }
})

const mapStateToProps = state => {
  return {
    user: state.users.byId[1]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // logInUser: (id) => {
    //   dispatch(logInUser(id))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
