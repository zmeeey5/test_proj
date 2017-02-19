README file
---------------------------------

Content
---------------------------------

* System Requirements
* Settings
* Public's file tree

### Public's file tree

    /public/
        /css/
            - main.css          ---> [file is generated]
        /fonts/
            /font-awesome/      ---> [default icons font]
            /lato/              ---> [default project font]
        /img/
        /js/
            /includes/          ---> [for js project scripts ]
            /libs/              ---> [for lib`s files like jquery.js or bootstrap.js]
            main.js             ---> [file is generated]
        /sass/
            /base/              ---> [base stylesheets (can use only tags)]
                - _base.scss
                - _fonts.scss
                - _normalize.scss or _reset.scss
                - _typography.scss
            /general/           ---> []
                - _alert.scss
                - _button.scss
                - _forms.scss
                - _general.scss
                - _image.scss
                - _popup.scss
                - _table.scss
            /include/           ---> [for css files like font-awesome.css or bootstrap.css]
                - _font-awesome.scss
            /layouts/           ---> [grid system, frame site]
                - _container.scss
                - _grid.scss
            /modules/           ---> []
            /state/             ---> [classes for states, use to control on js]
                - _state.scss
            /utilities/         ---> [mixins, variables etc.]
                - _color.scss
                - _mixins.scss
                - _placeholder.scss
                - _variables.scss
                - _vendor.scss
            - main.scss
        - gulpfile.js
        - index.html
        - packege.json