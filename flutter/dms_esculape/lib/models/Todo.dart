import 'dart:core';
import 'package:firebase_database/firebase_database.dart';

class Todo{
  String key;
  String subject;
  bool completed;
  String userId;

  Todo(this.subject, this.userId, this.completed);

  Todo.fromSnapshot(DataSnapshot snapshot){
    this.key = snapshot.key;
    this.subject = snapshot.value["subject"];
    this.completed = snapshot.value["completed"];
    this.userId = snapshot.value["userId"];
  }

  toJson(){
    return{
      "userId": this.userId,
      "subject": this.subject,
      "completed": completed
    };
  }
}