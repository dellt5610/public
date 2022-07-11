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
      home: _buildHomepage('Demo ListView'),
    );
  }

  _buildHomepage(String title){
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: _buildListView(),
      ),
    );
  }

  _buildListView(){
    return ListView(
      children: <Widget>[
        _buildListTile('CineArts at the Empire', '85 W Portal Ave', Icons.theaters),
        _buildListTile('The Castro Theater', '429 Castro St', Icons.theaters),
        _buildListTile('Alamo Drafthouse Cinema', '2550 Mission St', Icons.theaters),
        _buildListTile('Roxie Theater', '3117 16th St', Icons.theaters),
        _buildListTile('United Artists Stonestown Twin', '501 Buckingham Way',
            Icons.theaters),
        _buildListTile('AMC Metreon 16', '135 4th St #3000', Icons.theaters),
        Divider(),
        _buildListTile('Kescaped_code#39;s Kitchen', '757 Monterey Blvd', Icons.restaurant),
        _buildListTile('Emmyescaped_code#39;s Restaurant', '1923 Ocean Ave', Icons.restaurant),
        _buildListTile(
            'Chaiya Thai Restaurant', '272 Claremont Blvd', Icons.restaurant),
        _buildListTile('La Ciccia', '291 30th St', Icons.restaurant),
      ],
    );
  }

  _buildListTile(String title, String subtitle, IconData icon) => ListTile(
    title: Text(
      title,
      style: TextStyle(
        fontWeight: FontWeight.w500,
      ),
    ),
    subtitle: Text(subtitle),
    leading: Icon(
      icon, color: Colors.blue[500],
    ),
  );
}
