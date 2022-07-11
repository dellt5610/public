import 'package:ch13_local_persistence/models/journal.dart';
import 'package:ch13_local_persistence/models/journal_edit.dart';
import 'package:flutter/material.dart';
import 'dart:math'; //Random() numbers
import 'package:intl/intl.dart'; //format dates
import 'package:ch13_local_persistence/utils/database.dart';

class EditEntry extends StatefulWidget {

  bool add;
  int index;
  Journal journal;

  EditEntry({Key key, bool add, int index, Journal journal}) : super(key: key);
  @override
  _EditEntryState createState() => _EditEntryState();
}

class _EditEntryState extends State<EditEntry> {
  String _title;
  DateTime _selectedDate;
  JournalEdit _journalEdit;

  TextEditingController _moodController;
  TextEditingController _noteController;

  FocusNode _moodFocus;
  FocusNode _noteFocus;

  @override
  void initState() {
    super.initState();
    _title = widget.add == true ? 'Add Entry' : 'Edit Entry';
    _journalEdit = JournalEdit(action: 'Cancel', journal: widget.journal);

    _selectedDate = widget.add ? DateTime.now() : DateTime.parse(_journalEdit.journal.date);

    _moodController = widget.add
        ? TextEditingController(text: '')
        : TextEditingController(text: _journalEdit.journal.mood);
    _noteController = widget.add
        ? TextEditingController(text: '')
        : TextEditingController(text: _journalEdit.journal.note);

    _moodFocus = FocusNode();
    _noteFocus = FocusNode();
  }

  @override
  void dispose() {
    _moodController.dispose();
    _noteController.dispose();
    _moodFocus.dispose();
    _noteFocus.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('$_title'),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: <Widget>[
              FlatButton(
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.calendar_today,
                      size: 22.0,
                      color: Colors.black54,
                    ),
                    SizedBox(width: 16.0,),
                    Text(
                      DateFormat.yMMMEd().format(_selectedDate),
                      style: TextStyle(
                        color: Colors.black54,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Icon(
                      Icons.arrow_drop_down,
                      color: Colors.black54,
                    ),
                  ],
                ),
                onPressed: () async{
                  //to dismiss they keyboard if any of TextField has focus.
                  FocusScope.of(context).requestFocus(FocusNode());
                  DateTime _pickedDate = await _selectDate(context, _selectedDate);
                  setState(() {
                    _selectedDate = _pickedDate;
                  });
                },
              ),
              TextField(
                controller: _moodController,
                decoration: InputDecoration(
                    icon: Icon(Icons.mood),
                    labelText: 'Mood',
                ),
                autofocus: true,
                textInputAction: TextInputAction.next,
                textCapitalization: TextCapitalization.words,
                focusNode: _moodFocus,
                onSubmitted: (submitted){
                  //to have the keyboard action button change the focus to the TextField note.
                  FocusScope.of(context).requestFocus(_noteFocus);
                },
              ),
              TextField(
                controller: _noteController,
                decoration: InputDecoration(
                    icon: Icon(Icons.subject),
                    labelText: 'Note',
                ),
                autofocus: true,
                textInputAction: TextInputAction.newline,
                textCapitalization: TextCapitalization.sentences,
                focusNode: _noteFocus,
                maxLines: null,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: <Widget>[
                  FlatButton(
                    child: Text('Cancel'),
                    color: Colors.grey.shade100,
                    onPressed: (){
                      _journalEdit.action = 'Cancel';
                      Navigator.pop(context, _journalEdit);
                    },
                  ),
                  SizedBox(width: 8.0,),
                  FlatButton(
                    child: Text('Save'),
                    color: Colors.green.shade300,
                    onPressed: (){
                      _journalEdit.action = 'Save';
                      String _id = widget.add
                        ? Random().nextInt(9999999).toString()
                        : _journalEdit.journal.id;
                      _journalEdit.journal = Journal(
                        id: _id,
                        date: _selectedDate.toString(),
                        mood: _moodController.text,
                        note: _noteController.text,
                      );
                      Navigator.pop(context, _journalEdit);
                    },
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<DateTime> _selectDate(BuildContext context, DateTime selectedDate) async{
    final DateTime _pickedDate = await showDatePicker(
      context: context,
      initialDate: selectedDate,
      firstDate: selectedDate.subtract(Duration(days: 365)),
      lastDate: selectedDate.add(Duration(days: 365)));
    if (_pickedDate != null){
      selectedDate = DateTime(
        _pickedDate.year,
        _pickedDate.month,
        _pickedDate.day,
        selectedDate.hour,
        selectedDate.minute,
        selectedDate.second,
        selectedDate.millisecond,
        selectedDate.microsecond,
      );
    }
    return selectedDate;
  }
}
