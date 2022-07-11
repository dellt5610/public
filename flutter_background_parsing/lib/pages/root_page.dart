import 'package:flutter/material.dart';
import 'package:flutter_background_parsing/models/photo_model.dart';
import 'package:flutter_background_parsing/services/photo_service.dart';
import 'package:http/http.dart' as http;

class RootPage extends StatefulWidget {
  @override
  _RootPageState createState() => _RootPageState();
}

class _RootPageState extends State<RootPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _getAppBar(),
      body: _getBody(),
    );
  }

  Widget _getAppBar(){
    return AppBar(
      title: Text('Background Parsing'),
    );
  }

  Widget _getBody(){
    final PhotoService photoService = PhotoService();
    return FutureBuilder<List<PhotoModel>>(
        future: photoService.fetchPhotos(http.Client()),
        builder: (context, snapshot) {
          if (snapshot.hasError) print(snapshot.error);

          return snapshot.hasData
              ? PhotosList(photos: snapshot.data)
              : Center(child: CircularProgressIndicator());
        },
      );
  }
}

class PhotosList extends StatelessWidget {
  final List<PhotoModel> photos;

  PhotosList({Key key, this.photos}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
      ),
      itemCount: photos.length,
      itemBuilder: (context, index) {
        return Image.network(photos[index].thumbnailUrl);
      },
    );
  }
}