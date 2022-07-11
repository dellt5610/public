import 'package:flutter/material.dart';

import 'models/trip.dart';

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
      home: MyHomePage(title: 'Dismissible'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  List<Trip> _trips = List<Trip>();

  @override
  void initState() {
    super.initState();
    _trips..add(Trip(id: '0', tripName: 'Rome', tripLocation: 'Italy'))
          ..add(Trip(id: '1', tripName: 'Paris', tripLocation: 'France'))
          ..add(Trip(id: '2', tripName: 'New York', tripLocation: 'USA - New York'))
          ..add(Trip(id: '3', tripName: 'Cancun', tripLocation: 'Mexico'))
          ..add(Trip(id: '4', tripName: 'London', tripLocation: 'England'))
          ..add(Trip(id: '5', tripName: 'Sydney', tripLocation: 'Australia'))
          ..add(Trip(id: '6', tripName: 'Miami', tripLocation: 'USA - Florida'))
          ..add(Trip(id: '7', tripName: 'Rio de Janeiro', tripLocation: 'Brazil'))
          ..add(Trip(id: '8', tripName: 'Cusco', tripLocation: 'Peru'))
          ..add(Trip(id: '9', tripName: 'New Delhi', tripLocation: 'India'))
          ..add(Trip(id: '10', tripName: 'Tokyo', tripLocation: 'Japan'));
  }

  void _incrementCounter(){
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: ListView.builder(
        itemCount: _trips.length,
        itemBuilder: (BuildContext context, int index) {
          return Column(
            children: <Widget>[
              Dismissible(
                key: Key(_trips[index].id),
                child: _buildListTile(index),
                background: _buildCompleteTrip(),
                secondaryBackground: _buildRemoveTrip(),
                onDismissed: (DismissDirection direction) {
                  direction == DismissDirection.startToEnd
                      ? _markTripCompleted()
                      : _deleteTrip();
                  setState(() {
                    _trips.removeAt(index);
                  });
                },
              ),
              Divider(),
            ],
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }

  Widget _buildRemoveTrip(){
    return Container(
      color: Colors.red,
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[
            Icon(Icons.delete, color: Colors.white),
          ],
        ),
      ),
    );
  }

  Widget _buildCompleteTrip(){
    return Container(
      color: Colors.green,
      padding: EdgeInsets.all(16.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Icon(Icons.done, color: Colors.white,),
        ],
      ),
    );
  }

  Widget _buildListTile(int index){
    return ListTile(
      leading: Icon(Icons.flight),
      trailing: Icon(Icons.fastfood),
      title: Text(_trips[index].tripName),
      subtitle: Text(_trips[index].tripLocation),
    );
  }
  void _markTripCompleted(){
    //mark trip completed in Database or Web Service
  }

  void _deleteTrip(){
    //delete trip from Database or Web Service
  }
}
