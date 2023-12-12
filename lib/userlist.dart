import 'package:flutter/material.dart';
import 'package:flutter_app/userdata.dart';
import 'package:flutter_app/useritem.dart';
import 'dart:developer';

class UserList extends StatefulWidget {
  @override
   State<UserList> createState() => _UserListState();
}

class _UserListState extends State<UserList> {
  TextEditingController Nama = TextEditingController();
  TextEditingController Umur = TextEditingController();
  TextEditingController Email = TextEditingController();

  List<UserData> daftarUser = [
    UserData("Andini", 21, "andiniyuli15@gmail.com"),
    UserData("Risma", 21, "rismarisma2727@gmail.com"),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Container(
                padding: EdgeInsets.all(5),
                child: TextField(
                  controller: Nama,
                  decoration: InputDecoration(
                    labelText: "Nama",
                    border: OutlineInputBorder(),
                  ),
                ),
              ),
              Container(
                padding: EdgeInsets.all(5),
                child: TextField(
                  controller: Umur,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                    labelText: "Umur",
                    border: OutlineInputBorder(),
                  ),
                ),
              ),
              Container(
                padding: EdgeInsets.all(5),
                child: TextField(
                  controller: Email,
                  decoration: InputDecoration(
                    labelText: "Email",
                    border: OutlineInputBorder(),
                  ),
                ),
              ),
              Container(
                padding: EdgeInsets.all(5),
                child: ElevatedButton(
                  onPressed: () {
                    int jumlahUmur = int.parse(Umur.text);

                    // Menambah record sebanyak jumlah umur yang dimasukkan
                    for (int i = 0; i < jumlahUmur; i++) {
                      daftarUser.add(UserData("${daftarUser.length + 1}. ${Nama.text}", int.parse(Umur.text), Email.text));
                    }

                    setState(() {
                      UserData;
                    });
                    inspect(daftarUser);
                  },
                  child: Text("Simpan"),
                  style: ElevatedButton.styleFrom(minimumSize: Size(150, 75)),
                ),
              ),
              Expanded(
                child: SingleChildScrollView(
                  child: ListView.separated(
                    scrollDirection: Axis.vertical,
                    shrinkWrap: true,
                    itemBuilder: (context, index) {
                      return Dismissible(
                        key: ValueKey(daftarUser[index]),
                        child: InkWell(
                          child: UserItem(daftarUser[index]),
                          onTap: () {
                            Nama.text = daftarUser[index].getNamaWithoutIndex(); // Menghapus indeks di depan nama
                            Umur.text = daftarUser[index].umur.toString();
                            Email.text = daftarUser[index].email;
                          },
                        ),
                        background: Container(
                          padding: EdgeInsets.only(left: 10),
                          color: Colors.red,
                          child: Align(
                            alignment: Alignment.centerLeft,
                            child: Icon(
                              Icons.delete,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        secondaryBackground: Container(
                          padding: EdgeInsets.only(left: 10),
                          color: Colors.white,
                          child: Align(
                            alignment: Alignment.centerLeft,
                            child: Icon(
                              Icons.delete,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        onDismissed: (direction) {
                          if (direction == DismissDirection.startToEnd) {
                            daftarUser.removeAt(index);

                            setState(() {
                              daftarUser;
                            });
                          }
                        },
                        confirmDismiss: (direction) async {
                          if (direction == DismissDirection.startToEnd) {
                            return await showDialog(
                              context: context,
                              builder: (BuildContext context) {
                                return AlertDialog(
                                  title: const Text("Confirm"),
                                  content:
                                      const Text("Apakah yakin akan menghapus"),
                                  actions: [
                                    ElevatedButton(
                                        onPressed: () =>
                                            Navigator.of(context).pop(true),
                                        child: const Text("Hapus")),
                                    ElevatedButton(
                                        onPressed: () =>
                                            Navigator.of(context).pop(false),
                                        child: const Text("Batal")),
                                  ],
                                );
                              },
                            );
                          } else {
                            return false;
                          }
                        },
                      );
                    },
                    separatorBuilder: (context, index) => Divider(),
                    itemCount: daftarUser.length,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}