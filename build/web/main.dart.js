// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const developer = dart_sdk.developer;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = flutter_sdk.src__widgets__binding;
  const framework = flutter_sdk.src__widgets__framework;
  const container = flutter_sdk.src__widgets__container;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const basic = flutter_sdk.src__widgets__basic;
  const circle_avatar = flutter_sdk.src__material__circle_avatar;
  const colors = flutter_sdk.src__material__colors;
  const text = flutter_sdk.src__widgets__text;
  const text_style = flutter_sdk.src__painting__text_style;
  const flex = flutter_sdk.src__rendering__flex;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const app = flutter_sdk.src__material__app;
  const scaffold = flutter_sdk.src__material__scaffold;
  const text_field = flutter_sdk.src__material__text_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const input_border = flutter_sdk.src__material__input_border;
  const text_input = flutter_sdk.src__services__text_input;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const single_child_scroll_view = flutter_sdk.src__widgets__single_child_scroll_view;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const basic_types = flutter_sdk.src__painting__basic_types;
  const dismissible = flutter_sdk.src__widgets__dismissible;
  const key = flutter_sdk.src__foundation__key;
  const ink_well = flutter_sdk.src__material__ink_well;
  const alignment = flutter_sdk.src__painting__alignment;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const dialog = flutter_sdk.src__material__dialog;
  const navigator = flutter_sdk.src__widgets__navigator;
  const divider = flutter_sdk.src__material__divider;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var userdata = Object.create(dart.library);
  var useritem = Object.create(dart.library);
  var userlist = Object.create(dart.library);
  var $toString = dartx.toString;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  var $_get = dartx._get;
  var $toUpperCase = dartx.toUpperCase;
  var $length = dartx.length;
  var $add = dartx.add;
  var $removeAt = dartx.removeAt;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    JSArrayOfUserData: () => (T.JSArrayOfUserData = dart.constFn(_interceptors.JSArray$(userdata.UserData)))(),
    ValueKeyOfUserData: () => (T.ValueKeyOfUserData = dart.constFn(key.ValueKey$(userdata.UserData)))(),
    DismissDirectionTovoid: () => (T.DismissDirectionTovoid = dart.constFn(dart.fnType(dart.void, [dismissible.DismissDirection])))(),
    BuildContextToAlertDialog: () => (T.BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    FutureOfboolN: () => (T.FutureOfboolN = dart.constFn(async.Future$(T.boolN())))(),
    DismissDirectionToFutureOfboolN: () => (T.DismissDirectionToFutureOfboolN = dart.constFn(dart.fnType(T.FutureOfboolN(), [dismissible.DismissDirection])))(),
    BuildContextAndintToDismissible: () => (T.BuildContextAndintToDismissible = dart.constFn(dart.fnType(dismissible.Dismissible, [framework.BuildContext, core.int])))(),
    BuildContextAndintToDivider: () => (T.BuildContextAndintToDivider = dart.constFn(dart.fnType(divider.Divider, [framework.BuildContext, core.int])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Confirm"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Apakah yakin akan menghapus"
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Hapus"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Batal"
      });
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "package:flutter_app/userdata.dart",
    "package:flutter_app/useritem.dart",
    "package:flutter_app/userlist.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.main = function main$0() {
    binding.runApp(new userlist.UserList.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  var nama$ = dart.privateName(userdata, "UserData.nama");
  var umur$ = dart.privateName(userdata, "UserData.umur");
  var email$ = dart.privateName(userdata, "UserData.email");
  userdata.UserData = class UserData extends core.Object {
    get nama() {
      return this[nama$];
    }
    set nama(value) {
      this[nama$] = value;
    }
    get umur() {
      return this[umur$];
    }
    set umur(value) {
      this[umur$] = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      this[email$] = value;
    }
    static ['_#new#tearOff'](nama, umur, email) {
      return new userdata.UserData.new(nama, umur, email);
    }
    getNamaWithoutIndex() {
      return this.nama[$substring](this.nama[$indexOf](".") + 2);
    }
  };
  (userdata.UserData.new = function(nama, umur, email) {
    this[nama$] = nama;
    this[umur$] = umur;
    this[email$] = email;
    ;
  }).prototype = userdata.UserData.prototype;
  dart.addTypeTests(userdata.UserData);
  dart.addTypeCaches(userdata.UserData);
  dart.setMethodSignature(userdata.UserData, () => ({
    __proto__: dart.getMethods(userdata.UserData.__proto__),
    getNamaWithoutIndex: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(userdata.UserData, I[0]);
  dart.setFieldSignature(userdata.UserData, () => ({
    __proto__: dart.getFields(userdata.UserData.__proto__),
    nama: dart.fieldType(core.String),
    umur: dart.fieldType(core.int),
    email: dart.fieldType(core.String)
  }));
  var userData$ = dart.privateName(useritem, "UserItem.userData");
  useritem.UserItem = class UserItem extends framework.StatefulWidget {
    get userData() {
      return this[userData$];
    }
    set userData(value) {
      this[userData$] = value;
    }
    static ['_#new#tearOff'](userData) {
      return new useritem.UserItem.new(userData);
    }
    createState() {
      return new useritem._UserItemState.new();
    }
  };
  (useritem.UserItem.new = function(userData) {
    this[userData$] = userData;
    useritem.UserItem.__proto__.new.call(this);
    ;
  }).prototype = useritem.UserItem.prototype;
  dart.addTypeTests(useritem.UserItem);
  dart.addTypeCaches(useritem.UserItem);
  dart.setMethodSignature(useritem.UserItem, () => ({
    __proto__: dart.getMethods(useritem.UserItem.__proto__),
    createState: dart.fnType(framework.State$(useritem.UserItem), [])
  }));
  dart.setLibraryUri(useritem.UserItem, I[1]);
  dart.setFieldSignature(useritem.UserItem, () => ({
    __proto__: dart.getFields(useritem.UserItem.__proto__),
    userData: dart.fieldType(userdata.UserData)
  }));
  useritem._UserItemState = class _UserItemState extends framework.State$(useritem.UserItem) {
    build(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(5), child: new basic.Row.new({children: T.JSArrayOfWidget().of([new circle_avatar.CircleAvatar.new({backgroundColor: colors.Colors.lightBlue, child: new text.Text.new(this.widget.userData.nama[$_get](0)[$toUpperCase](), {style: new text_style.TextStyle.new({color: colors.Colors.white})})}), new container.Container.new({padding: new edge_insets.EdgeInsets.all(5), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: T.JSArrayOfWidget().of([new text.Text.new(this.widget.userData.nama, {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold})}), new text.Text.new("Umur:" + this.widget.userData.umur[$toString]() + "Email : " + this.widget.userData.email)])})})])})});
    }
    static ['_#new#tearOff']() {
      return new useritem._UserItemState.new();
    }
  };
  (useritem._UserItemState.new = function() {
    useritem._UserItemState.__proto__.new.call(this);
    ;
  }).prototype = useritem._UserItemState.prototype;
  dart.addTypeTests(useritem._UserItemState);
  dart.addTypeCaches(useritem._UserItemState);
  dart.setMethodSignature(useritem._UserItemState, () => ({
    __proto__: dart.getMethods(useritem._UserItemState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(useritem._UserItemState, I[1]);
  userlist.UserList = class UserList extends framework.StatefulWidget {
    createState() {
      return new userlist._UserListState.new();
    }
    static ['_#new#tearOff']() {
      return new userlist.UserList.new();
    }
  };
  (userlist.UserList.new = function() {
    userlist.UserList.__proto__.new.call(this);
    ;
  }).prototype = userlist.UserList.prototype;
  dart.addTypeTests(userlist.UserList);
  dart.addTypeCaches(userlist.UserList);
  dart.setMethodSignature(userlist.UserList, () => ({
    __proto__: dart.getMethods(userlist.UserList.__proto__),
    createState: dart.fnType(framework.State$(userlist.UserList), [])
  }));
  dart.setLibraryUri(userlist.UserList, I[2]);
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  userlist._UserListState = class _UserListState extends framework.State$(userlist.UserList) {
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({body: new container.Container.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: T.JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.all(5), child: new text_field.TextField.new({controller: this.Nama, decoration: new input_decorator.InputDecoration.new({labelText: "Nama", border: new input_border.OutlineInputBorder.new()})})}), new container.Container.new({padding: new edge_insets.EdgeInsets.all(5), child: new text_field.TextField.new({controller: this.Umur, keyboardType: text_input.TextInputType.number, decoration: new input_decorator.InputDecoration.new({labelText: "Umur", border: new input_border.OutlineInputBorder.new()})})}), new container.Container.new({padding: new edge_insets.EdgeInsets.all(5), child: new text_field.TextField.new({controller: this.Email, decoration: new input_decorator.InputDecoration.new({labelText: "Email", border: new input_border.OutlineInputBorder.new()})})}), new container.Container.new({padding: new edge_insets.EdgeInsets.all(5), child: new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                      let jumlahUmur = core.int.parse(this.Umur.text);
                      for (let i = 0; i < jumlahUmur; i = i + 1) {
                        this.daftarUser[$add](new userdata.UserData.new(dart.str(this.daftarUser[$length] + 1) + ". " + this.Nama.text, core.int.parse(this.Umur.text), this.Email.text));
                      }
                      this.setState(dart.fn(() => {
                        dart.wrapType(userdata.UserData);
                      }, T.VoidTovoid()));
                      developer.inspect(this.daftarUser);
                    }, T.VoidTovoid()), child: new text.Text.new("Simpan"), style: elevated_button.ElevatedButton.styleFrom({minimumSize: new ui.Size.new(150, 75)})})}), new basic.Expanded.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new scroll_view.ListView.separated({scrollDirection: basic_types.Axis.vertical, shrinkWrap: true, itemBuilder: dart.fn((context, index) => new dismissible.Dismissible.new({key: new (T.ValueKeyOfUserData()).new(this.daftarUser[$_get](index)), child: new ink_well.InkWell.new({child: new useritem.UserItem.new(this.daftarUser[$_get](index)), onTap: dart.fn(() => {
                            this.Nama.text = this.daftarUser[$_get](index).getNamaWithoutIndex();
                            this.Umur.text = this.daftarUser[$_get](index).umur[$toString]();
                            this.Email.text = this.daftarUser[$_get](index).email;
                          }, T.VoidTovoid())}), background: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 10}), color: colors.Colors.red, child: new basic.Align.new({alignment: alignment.Alignment.centerLeft, child: new icon.Icon.new(icons.Icons.delete, {color: colors.Colors.white})})}), secondaryBackground: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 10}), color: colors.Colors.white, child: new basic.Align.new({alignment: alignment.Alignment.centerLeft, child: new icon.Icon.new(icons.Icons.delete, {color: colors.Colors.white})})}), onDismissed: dart.fn(direction => {
                          if (direction === dismissible.DismissDirection.startToEnd) {
                            this.daftarUser[$removeAt](index);
                            this.setState(dart.fn(() => {
                              this.daftarUser;
                            }, T.VoidTovoid()));
                          }
                        }, T.DismissDirectionTovoid()), confirmDismiss: dart.fn(direction => async.async(T.boolN(), function*() {
                          if (direction === dismissible.DismissDirection.startToEnd) {
                            return yield dialog.showDialog(core.bool, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({title: C[1] || CT.C1, content: C[2] || CT.C2, actions: T.JSArrayOfWidget().of([new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => navigator.Navigator.of(context).pop(core.bool, true), T.VoidTovoid()), child: C[3] || CT.C3}), new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => navigator.Navigator.of(context).pop(core.bool, false), T.VoidTovoid()), child: C[4] || CT.C4})])}), T.BuildContextToAlertDialog())});
                          } else {
                            return false;
                          }
                        }), T.DismissDirectionToFutureOfboolN())}), T.BuildContextAndintToDismissible()), separatorBuilder: dart.fn((context, index) => new divider.Divider.new(), T.BuildContextAndintToDivider()), itemCount: this.daftarUser[$length]})})})])})})})});
    }
    static ['_#new#tearOff']() {
      return new userlist._UserListState.new();
    }
  };
  (userlist._UserListState.new = function() {
    this.Nama = new editable_text.TextEditingController.new();
    this.Umur = new editable_text.TextEditingController.new();
    this.Email = new editable_text.TextEditingController.new();
    this.daftarUser = T.JSArrayOfUserData().of([new userdata.UserData.new("Andini", 21, "andiniyuli15@gmail.com"), new userdata.UserData.new("Risma", 21, "rismarisma2727@gmail.com")]);
    userlist._UserListState.__proto__.new.call(this);
    ;
  }).prototype = userlist._UserListState.prototype;
  dart.addTypeTests(userlist._UserListState);
  dart.addTypeCaches(userlist._UserListState);
  dart.setMethodSignature(userlist._UserListState, () => ({
    __proto__: dart.getMethods(userlist._UserListState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(userlist._UserListState, I[2]);
  dart.setFieldSignature(userlist._UserListState, () => ({
    __proto__: dart.getFields(userlist._UserListState.__proto__),
    Nama: dart.fieldType(editable_text.TextEditingController),
    Umur: dart.fieldType(editable_text.TextEditingController),
    Email: dart.fieldType(editable_text.TextEditingController),
    daftarUser: dart.fieldType(core.List$(userdata.UserData))
  }));
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "package:flutter_app/userdata.dart": userdata,
    "package:flutter_app/useritem.dart": useritem,
    "package:flutter_app/userlist.dart": userlist
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/userdata.dart","/zapp/project/lib/useritem.dart","/zapp/project/lib/userlist.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    userdata: userdata,
    useritem: useritem,
    userlist: userlist
  };
}));

//# sourceMappingURL=main.js.map
