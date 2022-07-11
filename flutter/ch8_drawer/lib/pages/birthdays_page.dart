import 'package:flutter/material.dart';

class BirthdaysPage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Birthdays'),
      ),
      body: Center(
        child: Icon(
          Icons.cake,
          color: Colors.orange,
          size: 120.0
        ),
      ),
    );
  }

}