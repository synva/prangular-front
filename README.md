# prangular - frontend

> prangular - フロントエンド

## 1. install softwares

- install git

- install node.js(version >= 8.4)

- install yarn

- npm install -g eslint

- install visual studio code(install plugins: TSLint)

- install jdk(for e2e test)

## 2. download source code

``` bash
cd /your/path/like/desktop
git clone https://your-git-account@github.com/synva/prangular-front.git
```

## 3. install dependencies

``` bash
cd /your/path/like/desktop/prangular-front
yarn install
```

## 4. boot frontend

``` bash
cd /your/path/like/desktop/prangular-front
ng serve
```

this only boots frontend, you also need to boot backend even development enviroment.

## 5. development

## 6. deploy to production enviroment

``` bash
cd /your/path/like/desktop/prangular-front
ng build
```

then dist folder will be created. move it to prangular-back.
