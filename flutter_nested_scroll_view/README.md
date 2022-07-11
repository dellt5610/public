# flutter_nested_scroll_view

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## App Analysis
### NestedScrollView widget
References:
- https://api.flutter.dev/flutter/widgets/NestedScrollView-class.html

NestedScrollView is a scrolling view that inside of which can be nested other scrolling views, with their scroll positions being intrinsically linked.

Use case 1: a scrollable view with a a flexible SliverAppBar containing a TabBar in the header (built by headerSliverBuilder), and with a TabBarView in the body, such that the scrolable view's contents vary based on which tab is visible.

### SliverAppBar widget
References:
- https://api.flutter.dev/flutter/material/SliverAppBar-class.html

SliverAppBar widget is a extendable and contractable app bar. It is opposite of AppBar widget - a fixed-height app bar that is used by Scafford.appBar.

Use case 1: SliverAppBar is typically used as the first child of CustomScrollView, which lets the app bar integrate with the scroll view so that it can vary in height according to the scroll ofset or float above the other content in the scroll view

### Tab

To display tabs in Flutter, use the combination of DefaultTabController, TabBar, and TabBarView widgets.

Example 1:
return MaterialApp(
    home: DefaultTabController(
        length: 3,
        child: Scafford(
            appBar: AppBar(
                bottom: TabBar(
                    tabs: [
                        Tab(text: "Cat"),
                        Tab(text: "Dog"),
                        Tab(text: "Rabbit"),
                    ]
                ),
            ),//appBar
            body: TabBarView(
                children: [
                    Image(image: AssetImage('assets/cat.jpg')),
                    Image(image: AssetImage('assets/dog.jpg')),
                    Image(image: AssetImage('assets/rabbit.jpg'))
                ],
            ),//body

        )
    )
)
### DefaultTabController widget
References:
- https://api.flutter.dev/flutter/material/DefaultTabController-class.html

DefaultTabController is an inherited widget that is used to share a TabController with a TabBar and TabBarView.

#### TabBar widget
References:
- https://api.flutter.dev/flutter/material/TabBar-class.html

A material design widget that displays a horizontal row of tabs.
TabBar widget is typically placed in the bottom slot of the AppBar if the screen has multi pages arranged in tabs.

#### TabBarView widget
References:
- https://api.flutter.dev/flutter/material/TabBarView-class.html

TabBarView is a page view of each tab.

### SafeArea widget

### CustomScrollView widget
