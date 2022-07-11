import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:flutter_background_parsing/models/photo_model.dart';

class PhotoService{
  final String url = 'https://jsonplaceholder.typicode.com/photos';

  Future<List<PhotoModel>> fetchPhotos(http.Client client) async{
    final response = await client.get(url);
    return parsePhotos(response.body);
  }

  List<PhotoModel> parsePhotos(String json){
    final List parsed = jsonDecode(json);
    return parsed.map((json) => PhotoModel.fromJson(json)).toList();
  }
}