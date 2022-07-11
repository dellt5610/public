import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart' show debugPaintSizeEnabled;

void main(){
  debugPaintSizeEnabled = true;
  runApp(MyApp());
}

class MyApp extends StatelessWidget{

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sizing Images',
      home: Scaffold(
        appBar: AppBar(
          leading: IconButton(icon: Icon(Icons.menu), onPressed: null),
          title: Text('Sizing Images'),
          actions: <Widget>[
            IconButton(icon: Icon(Icons.search), onPressed: null,)
          ],
        ),
        body: Center(
          child: buildExpandedImagesWithFlex(),
        ),
      ),
    );
  }

  Widget buildOverflowingRow(){
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        Image.asset('images/pic1.jpg'),
        Image.asset('images/pic2.jpg'),
        Image.asset('images/pic3.jpg')
      ],
    );
  }

  Widget buildExpandedImages(){
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Expanded(
          child: Image.asset('images/pic1.jpg'),
        ),
        Expanded(
          child: Image.asset('images/pic2.jpg'),
        ),
        Expanded(
          child: Image.asset('images/pic3.jpg')
        )
      ],
    );
  }

  Widget buildExpandedImagesWithFlex() => Row(
    crossAxisAlignment: CrossAxisAlignment.center,
    children: <Widget>[
      Expanded(
        child: Image.asset('images/pic1.jpg'),
      ),
      Expanded(
        flex: 2,
        child: Image.asset('images/pic2.jpg')
      ),
      Expanded(
        child: Image.asset('images/pic3.jpg')
      )
    ],
  );
}
