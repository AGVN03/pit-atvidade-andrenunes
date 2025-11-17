import 'package:flutter/material.dart';

void main() {
  runApp(const CupcakesApp());
}

class CupcakesApp extends StatelessWidget {
  const CupcakesApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text("Cupcakes App")),
        body: const Center(
          child: Text("Lista de cupcakes será exibida aqui"),
        ),
      ),
    );
  }
}
