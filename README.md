## Levantar el proyecto

1. [Node.js](https://nodejs.org/es/ "Node.js").
2. `npm install` Sobre el origen del proyecto.
3. `npm start`

## Creación del proyecto

#### Prettier

Se configura desde los complementos del Visual Studio Code.

1.  Se tiene que habilitar la opción **Format On Save** en `File -> Preferences -> Settings -> Text editor -> Formatting`.
2.  Presionar `CTRL + SHIFT + P` , escribir **settings.json** y agregar :

```
 "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
```

> Prettier: No es necesario para la creacion ni para la ejecucion, pero si para mantener una convención.

#### Interprete para crear templates

`expo init SiempreBella` y seleccionar la opción de Blank (typescript)

#### Navigation

`npm install @react-navigation/native`
`npm install react-native-screens react-native-safe-area-context`
`npm install @react-navigation/stack`
`expo install react-native-gesture-handler react-native-reanimated`
`npm install @react-navigation/drawer`

#### Redux

#### Modal (Componente externo)

`npm i react-native-modal`
