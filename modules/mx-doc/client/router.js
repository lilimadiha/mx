Router.route('/', {
    controller: 'BaseController',
    template: 'indexLayout'
});

Router.route('/ui/button', {
    controller: 'BaseController',
    template: 'uiButtonLayout'
});

Router.route('/ui/icon-toggle', {
    controller: 'BaseController',
    template: 'uiIconToggleLayout'
});

Router.route('/ui/color', {
    controller: 'BaseController',
    template: 'uiColorLayout'
});

Router.route('/ui/sheet', {
    controller: 'BaseController',
    template: 'uiSheetLayout'
});

Router.route('/ui/cards', {
    controller: 'BaseController',
    template: 'uiCardsLayout'
});

Router.route('/ui/toggles', {
    controller: 'BaseController',
    template: 'uiTogglesLayout'
});

Router.route('/ui/table', {
    controller: 'BaseController',
    template: 'uiTableLayout'
});

Router.route('/ui/textfield', {
    controller: 'BaseController',
    template: 'uiTextfieldLayout'
});

Router.route('/ui/select', {
    controller: 'BaseController',
    template: 'uiSelectLayout'
});

Router.route('/ui/lists', {
    controller: 'BaseController',
    template: 'uiListLayout'
});