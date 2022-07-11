import 'package:flutter/material.dart';

class ImagesAndIconWidget extends StatelessWidget{

  const ImagesAndIconWidget({Key key}): super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        Image(
          image: AssetImage('assets/images/rose-flower.png'),
          fit: BoxFit.cover,
          width: MediaQuery.of(context).size.width / 3,
        ),
        Image(
          image: NetworkImage('https://flutter.io/images/catalog-widget-placeholder.png'),
          width: MediaQuery.of(context).size.width / 3,
        ),
        Icon(
          Icons.brush,
          color: Colors.lightBlue,
          size: 48.0,
        ),
      ],
    );
  }

}