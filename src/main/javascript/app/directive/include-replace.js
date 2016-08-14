angular.module('directives', []).directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        link: function (scope, el) {
            el.replaceWith(el.children());
        }
    };
});