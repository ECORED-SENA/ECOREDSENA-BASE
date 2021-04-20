# **sena-base-2021 v1.2.4**

## **Enlace GitHubPages**

[https://ecored-sena.github.io/ECORED-BASE-2021](https://ecored-sena.github.io/ECORED-BASE-2021)

#

## **Configuración del proyecto**

### 1. Se recomienda trabajar con [vs-code](https://code.visualstudio.com/)

### 2. Instalar extención [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### 3. Instalación de dependencias

```
npm install
```
#
## **Desarrollo**

### Montaje de servidor local

```
npm run serve
```

### Compilación para la producción

```
npm run build
```

### Linteo y arreglo de sintaxis de archivos

```
npm run lint
```

#

## **Despues del primer Push**

### **Creación de subtree para GitHub Pages**

#### 1. Entrar al repositorion en GitHub

#### 2. Entrar a la pestaña "Actions"

#### 3. Seleccionar "Primera acción" en "workflows"

#### 4. Hacer clik en "Run workflow"

#### 5. Asegurar que "branch" sea master

#### 6. Hacer clik "Run workflow

![instrucciones despues del primer push](src/assets/template/pasos.jpg 'Title')

#

## **Asignar nuevo subtree a GitHub Pages**

#### 1. Entrar al repositorion en GitHub

#### 2. Entrar a la pestaña "Settings"

#### 3. En la seccion "GitHub Pages", en "Source" seleccionamos "gh-pages" y hacer clik en "Save"

#### 4. Copiar y pegar el link en el README.md

#

## **Actualizar dist en GitHub Pages**

#### Seguir los pasos anteriores pero en el paso 3 seleccionar "Crear Dist" en lugar de "Primera acción"

#
