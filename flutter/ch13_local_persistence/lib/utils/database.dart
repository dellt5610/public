import 'package:path_provider/path_provider.dart';
import 'dart:io';
import 'dart:convert';

import 'package:ch13_local_persistence/models/journal.dart';

class DatabaseFileRoutines {
  Future<String> _localPath() async {
    final directory = await getApplicationDocumentsDirectory();
    return directory.path;
  }

  Future<File> _localFile() async {
    final String path = await _localPath();
    return File('$path/local_persistence.json');
  }

  Future<String> readJournals() async {
    try{
      final file = await _localFile();
      if (!file.existsSync()){
        print('File does not exist: ${file.absolute}');
        await writeJournals('{"journals": []}');
      }

      //read the file
      print('read the file');
      String contents = await file.readAsString();
      print('file\'content: ${contents}');
      return contents;
    }catch(e){
      print('error readJournals: $e');
      return "";
    }
  }

  Future<File> writeJournals(String json) async{
    final file = await _localFile();
    print('write the file');
    return file.writeAsString(json);
  }

  //to read and parse from JSON data
  Database databaseFromJson(String str){
    //parse the JSON string and return a JSON object
    final Map<String, dynamic> jsonObject = json.decode(str);
    return Database.fromJson(jsonObject);
  }

  //to save and parse to JSON data
  String databaseToJson(Database data){
    final Map<String, dynamic> jsonObject = data.toJson();
    return json.encode(jsonObject);
  }
}

class Database{
  List<Journal>  journals;

  Database({this.journals});

  factory Database.fromJson(Map<String, dynamic> json) {
    return Database(journals: List<Journal>.from(json["journals"].map((x) => Journal.fromJson(x))));
  }

  //to convert List<Journal> to JSON objects
  Map<String, dynamic> toJson() => {
    "journals" : List<dynamic>.from(journals.map((x) => x.toJson())),
  };
}