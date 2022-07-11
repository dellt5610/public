import 'package:ch6_form_validation/models/order.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget{

  final GlobalKey<FormState> _formStateKey = GlobalKey<FormState>();
  OrderModel _order = OrderModel();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: <Widget>[
              Form(
                key: _formStateKey,
                autovalidate: true,
                child: Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Column(
                    children: <Widget>[
                      TextFormField(
                        decoration: InputDecoration(
                          hintText: 'Espresso',
                          labelText: 'Item',
                        ),
                        validator: (value) => _validateItemRequired(value),
                        onSaved: (value) => _order.item = value,
                      ),
                      Divider(),
                      TextFormField(
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                          hintText: '0',
                          labelText: 'Quantity',
                        ),
                        validator: (value) => _validateItemCount(value),
                        onSaved: (value) => _order.quantity = value as int,
                      ),
                      RaisedButton(
                        child: Text('Save'),
                        color: Colors.lightGreen,
                        onPressed: () => _submitOrder(),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  String _validateItemRequired(String value){
    return value.isEmpty ? "Item Required" : null;
  }

  String _validateItemCount(String value){
    int _valueAsInteger = value.isEmpty ? 0 : int.tryParse(value);
    return _valueAsInteger == 0 ? 'At least one Item is Required' : null;
  }

  void _submitOrder(){
    if (_formStateKey.currentState.validate()){
      _formStateKey.currentState.save();
      print('Order Item: ${_order.item}');
      print('Order Quantity: ${_order.quantity}');
    }
  }
}