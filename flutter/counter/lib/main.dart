import 'package:flutter/material.dart';

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
      home: Scaffold(
        appBar: AppBar(
          leading: IconButton(icon: Icon(Icons.menu), onPressed: null),
          title: Text('Counter demo'),
          actions: <Widget>[
            IconButton(icon: Icon(Icons.search), onPressed: null,)
          ],),
        body: Center(
          child: Counter(),
        ),
      ),
    );
  }
}

class CounterDisplay extends StatelessWidget{
  final int count;

  CounterDisplay({this.count});

  @override
  Widget build(BuildContext context){
    return Text('Count: $count');
  }
}

class CounterIncrementor extends StatelessWidget{
  final VoidCallback onPressed;

  CounterIncrementor({this.onPressed});

  @override
  Widget build(BuildContext context){
    return RaisedButton(
      onPressed: onPressed,
      child: Text('Increment'),
    );
  }
}

class Counter extends StatefulWidget{

  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter>{
  int _counter = 0;

  void _increment(){
    setState(() {
      ++_counter;
    });
  }

  Widget build(BuildContext context){
    return Column(
      children: <Widget>[
        CounterDisplay(count: _counter,),
        CounterIncrementor(onPressed: _increment,),
      ],
    );
  }

}
