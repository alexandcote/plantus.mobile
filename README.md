# SpareFindr Mobile App

Prérequis
=========
* yarn
* Un éditeur de texte ou IDE comme :
  * VSCode
  * Atom
  * WebStorm
* Android Studio pour Android
* XCode pour iOS

Comment se setupper
==================

1. Cloner le repo
2. Ouvrir un terminal et aller au root repo
3. Faire `yarn install`

### Android Studio
1. Ouvrir le dossier `android` du projet dans Android Studio
2. Installer tous les outils et sdk proposés par Android Studio (Devrait être __23.x.x__)
3. Ouvrir Android AVD
4. Créer un émulateur avec la dernière version d'Android

### Visual Studio Code
1. Installer les extensions suivante :
  1. dbaeumer.vscode-eslint
  2. vsmobile.vscode-react-native
  3. flowtype.flow-for-vscode
2. Modifier les settings du workspace pour avoir au moins les propriétés suivante :

    ```json
    {
        "flow.useNPMPackagedFlow": true,
        "javascript.validate.enable": false
    }
    ```
    
3. Reloader VSCode

#### Déboguer dans VSCode
1. Sélectionner le mode de débogage React Native Android/iOS
2. Faire __Play__...
3. Il se peut que l'app Android crash dans l'émulateur la première fois. Simplement la repartir dans l'émulateur.

### Déboguer avec le débogueur de Chrome
* Pour Android : 
  1. Partir un émulateur
  2. `react-native run-android`

* Pour iOS :
  1. `react-native run-ios`

### General Tips
* Dans l'émulateur Android, faire `cmd + m` pour ouvrir le menu du développeur. (Utile pour activer le __Hot Reloading__)
* Faire `R + R` pour forcer le reload de l'app

