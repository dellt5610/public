import 'package:flutter/material.dart';
import 'package:dms_esculape/pages/home_page.dart';
import 'package:dms_esculape/pages/login_signup_page.dart';
import 'package:dms_esculape/services/authen.dart';

enum AuthStatus{
  NOT_DETERMINED,
  NOT_LOGGED_IN,
  LOGGED_IN
}
class RootPage extends StatefulWidget{

  final BaseAuth auth;

  RootPage({this.auth});

  @override
  RootPageState createState() {
    return RootPageState();
  }
}

class RootPageState extends State<RootPage>{
  AuthStatus authStatus = AuthStatus.NOT_DETERMINED;
  String _userId = "";

  @override
  void initState() {
    super.initState();
    widget.auth.getCurrentUser().then((user){
      setState(() {
        if (user != null){
          _userId = user.uid;
        }
        authStatus = user?.uid == null ? AuthStatus.NOT_LOGGED_IN : AuthStatus.LOGGED_IN;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    switch(authStatus){
      case AuthStatus.NOT_DETERMINED:
        return _buildWaittingScreen();
        break;
      case AuthStatus.NOT_LOGGED_IN:
        return LoginSignupPage(
          auth: widget.auth,
          onSignedIn: _onLoggedIn,
        );
        break;
      case AuthStatus.LOGGED_IN:
        return HomePage(
          auth: widget.auth,
          onSignedOut: _onSignedOut,
        );
        break;
      default:
        return _buildWaittingScreen();
    }
  }

  Widget _buildWaittingScreen(){
    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        child: CircularProgressIndicator()
      ),
    );
  }

  void _onLoggedIn(){
    print("_onLoggedIn");
    setState(() {
      authStatus = AuthStatus.LOGGED_IN;
    });
  }

  void _onSignedOut(){
    print("_onSignedOut");
    setState(() {
      authStatus = AuthStatus.NOT_LOGGED_IN;
    });
  }
}