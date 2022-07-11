import 'dart:async';
import 'package:dms_esculape/models/Todo.dart';
import 'package:flutter/material.dart';
import 'package:firebase_database/firebase_database.dart';

class TodoPage extends StatefulWidget{
  final String userId;

  TodoPage({this.userId});

  @override
  _TodoState createState() {
    return _TodoState();
  }
}

class _TodoState extends State<TodoPage>{

  List<Todo> _todoList;
  List<Todo> _searchList;
  final FirebaseDatabase _db = FirebaseDatabase.instance;
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _searchEditingController = TextEditingController();
  final TextEditingController _textEditingController = TextEditingController();
  Query _todoQuery;
  StreamSubscription<Event> _onTodoAddedSubscription;
  StreamSubscription<Event> _onTodoChangedSubscription;

  @override
  void initState() {
    super.initState();
    _searchEditingController.addListener((){
      print("is calling _searchEditingController.addListener");
      setState(() {
        //the build method will be called automatically.
      });
    });
    _todoList = List<Todo>();
    _todoQuery = _db
        .reference()
        .child("todo")
        .orderByChild("userId")
        .equalTo(widget.userId);
    _onTodoAddedSubscription = _todoQuery.onChildAdded.listen(_onItemAdded);
    _onTodoChangedSubscription = _todoQuery.onChildChanged.listen(_onItemChanged);
  }

  @override
  void dispose() {
    _onTodoAddedSubscription.cancel();
    _onTodoChangedSubscription.cancel();
    _searchEditingController.dispose();
    _textEditingController.dispose();
    super.dispose();
  }

  List<Todo> _getSearchResults() {
    print('is calling _getSearchResults');
    final query = _searchEditingController.text;
    List<Todo> result = List<Todo>();
    if (query.isNotEmpty){
      _todoList.forEach((todo){
        String subject = todo.subject;
        if (subject.toUpperCase().contains(query.toUpperCase())){
          result.add(todo);
        }
      });
    }else{
      result.addAll(_todoList);
    }
    return result;
  }

  _onItemAdded(Event event){
    if (mounted){
      setState(() {
        _todoList.add(Todo.fromSnapshot(event.snapshot));
      });
    }
  }

  _onItemChanged(Event event){
    var oldItem = _todoList.singleWhere((item){
      return item.key == event.snapshot.key;
    });
    setState(() {
      _todoList[_todoList.indexOf(oldItem)] = Todo.fromSnapshot(event.snapshot);
    });
  }

  DatabaseReference getTodoTable(){
    return _db.reference().child("todo");
  }

  _addNewItem(String subject){
    if (subject != null && subject.length > 0){
      Todo todo = Todo(subject, widget.userId, false);
      getTodoTable().push().set(todo.toJson());
    }
  }

  _updateItem(Todo todo){
    todo.completed = !todo.completed;
    getTodoTable().child(todo.key).set(todo.toJson());
  }

  _deleteItem(Todo todo, int index){
    String key = todo.key;
    getTodoTable().child(key).remove().then((_){
      print("Deleted $key successful");
      _todoList.removeAt(index);
      if (mounted == false){
        setState(() {
          print('is calling setState');
        });
      }

    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Todo'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.add),
            onPressed: (){
              _showDialog(context);
            },
          ),
        ],
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8),
              child: _showSearchBox(_searchEditingController),
            ),
            Expanded(
              child: _showTodoList(),
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          _showDialog(context);
        },
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }

  Widget _showSearchBox(TextEditingController tec){
    return TextField(
      decoration: InputDecoration(
          labelText: 'Search',
          hintText: 'Search',
          prefixIcon: Icon(Icons.search),
          border: OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(25))
          )
      ),
      controller: tec,
    );
  }

  Widget _showTodoList(){
    if (_todoList == null || _todoList.length == 0){
      return Center(
        child: Text(
            "Welcome. Your list is empty",
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 30.0),
        ),
      );
    }
    List<Todo> items = _getSearchResults();
    return ListView.builder(
      shrinkWrap: true,
      itemCount: items.length,
      itemBuilder: (BuildContext context, int index){
        String key = items[index].key;
        String subject = items[index].subject;
        bool completed = items[index].completed;
        String userId = items[index].userId;
        return Dismissible(
          direction: DismissDirection.endToStart,
          key: Key(key),
          background: Container(
            color: Colors.red,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                Icon(
                  Icons.delete,
                )
              ],
            ),
          ),
          onDismissed: (direction) async{
            await _deleteItem(items[index], index);
            Scaffold.of(context)
                .showSnackBar(SnackBar(content: Text("$subject dismissed")));
          },
          child: Container(
            decoration: BoxDecoration(
              border: Border(
                bottom: BorderSide(color: Colors.grey),
              ),
            ),
            child: Column(
              children: <Widget>[
                ListTile(
                  title: Text(
                    subject,
                    style: TextStyle(fontSize: 20.0),
                  ),
                  trailing: IconButton(
                    icon: completed
                        ? Icon(Icons.done, color: Colors.green, size: 20.0,)
                        : Icon(Icons.done, color: Colors.grey, size: 20.0),
                    onPressed: () async{
                      await _updateItem(items[index]);
                      setState(() {

                      });
                    },
                  ),
                ),
              ],
            ),
          ),

        );
      },
    );
  }

  _showDialog(BuildContext context) async{
    _textEditingController.clear();
    await showDialog<String>(
      context: context,
      builder: (BuildContext context){
        return AlertDialog(
          content: Row(
            children: <Widget>[
              Expanded(
                child: TextField(
                  controller: _textEditingController,
                  autofocus: true,
                  decoration: InputDecoration(
                    labelText: 'Add new todo',
                  ),
                ),
              ),
            ],
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('Save'),
              onPressed: (){
                _addNewItem(_textEditingController.text.toString());
                Navigator.pop(context);
              },
            ),
            FlatButton(
              child: Text('Cancel'),
              onPressed: (){
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      }
    );
  }
}