import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:demo_json/models/user.dart';
import 'package:demo_json/models/address.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: HomePage(title: 'JSON serialization demo'),
    );
  }
}

class HomePage extends StatefulWidget{
  final String title;

  HomePage({this.title});

  @override
  HomePageState createState() {
    // TODO: implement createState
    return HomePageState();
  }
}

class HomePageState extends State<HomePage>{
  static String jsonString = '''
{
  "name": "John Smith",
  "email": "john@example.com"
}    
    ''';
  static Map<String, dynamic> json = jsonDecode(jsonString);
  User user = User.fromJson(json);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(jsonString),
            Divider(height: 4,),
            Text('Username: ${user.name}'),
            Text('Email: ${user.email}'),
            FlatButton(
              onPressed: _addAddress,
              child: Text('Add Address'),
            ),
            Text('json string:\n${user.toJson()}'),
          ],
        ),
      ),
    );
  }

  void _addAddress(){
    setState(() {
      Address address = Address("Le Duan", "Ho Chi Minh City");
      user.address = address;
    });
  }
}

