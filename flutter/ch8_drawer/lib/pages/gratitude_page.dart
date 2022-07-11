import 'package:flutter/material.dart';

class GratitudePage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Gratitude'),
      ),
      body: Center(
        child: Icon(
            Icons.sentiment_satisfied,
            color: Colors.lightGreen,
            size: 120.0
        ),
      ),
    );
  }

}