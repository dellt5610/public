
class Journal{
  String id;
  String date;
  String mood;
  String note;

  Journal({this.id, this.date, this.mood, this.note});

  //to retrieve and convert the JSON object to a Journal class
  factory Journal.fromJson(Map<String, dynamic> json) =>
      Journal(
        id: json["id"],
        date: json["date"],
        mood: json["mood"],
        note: json["note"],
      );

  //to convert Journal class to JSON object.
  Map<String, dynamic> toJson() => {
    "id": id,
    "date": date,
    "mood": mood,
    "note": note,
  };
}