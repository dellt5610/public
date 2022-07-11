import 'package:dms_esculape/pages/todo_page.dart';
import 'package:flutter/material.dart';
import 'package:dms_esculape/services/authen.dart';

class HomePage extends StatefulWidget {
  final BaseAuth auth;
  final VoidCallback onSignedOut;

  HomePage({this.auth, this.onSignedOut});

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  bool _isEmailVerified = false;
  String _userId = "";

  @override
  void initState() {
    super.initState();
    _checkEmailVerification();
    widget.auth.getCurrentUser().then((user){
      if (user != null){
        _userId = user.uid;
      }
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Domisu World!"),
        actions: <Widget>[
          FlatButton(
            child: Text("Logout"),
            onPressed: _signOut,
          ),
        ],
      ),
      body: _showBody(),
    );
  }

  void _checkEmailVerification() async{
    _isEmailVerified = await widget.auth.isEmailVerified();
    if (!_isEmailVerified){
      _showVerifyEmailDialog();
    }
  }

  void _showVerifyEmailDialog(){
    showDialog(
      context: context,
      builder: (BuildContext context){
        return AlertDialog(
          title: Text("Verify your account"),
          content: Text("Please verify account in the link sent to email"),
          actions: <Widget>[
            FlatButton(
              child: Text("Resend link"),
              onPressed: (){
                Navigator.of(context).pop();
                _resendVerifyEmail();
              },
            ),
            FlatButton(
              child: Text("Dismiss"),
              onPressed: (){
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      }
    );
  }

  void _resendVerifyEmail(){
    widget.auth.sendEmailVerification();
    _showVerifyEmailSentDialog();
  }
  
  void _showVerifyEmailSentDialog(){
    showDialog(
      context: context,
      builder: (BuildContext context){
        return AlertDialog(
          title: Text("Verify your account"),
          content: Text("Link to verify account has been sent to your email"),
          actions: <Widget>[
            FlatButton(
              child: Text("Dismiss"),
              onPressed: (){
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  void _signOut() async{
    try{
      await widget.auth.signOut();
      widget.onSignedOut();
    }catch(e){
      print(e);
    }
  }

  Widget _showBody(){
    return Center(
      child: new SizedBox(
        height: 40.0,
        width: 200,
        child: new RaisedButton(
            child: new Text("TO DO"),
            color: Colors.blue,
            shape: new RoundedRectangleBorder(borderRadius: new BorderRadius.circular(30.0)),
            onPressed: (){
              _navigateToSubPage(context);
            }
        ),
      ),
    );
  }

  _navigateToSubPage(BuildContext context){
    Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => TodoPage(userId: _userId,)
        ));
  }
}