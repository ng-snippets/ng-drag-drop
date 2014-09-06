'use strict';

angular
    .module('ngDragDropApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .directive('drg', function() {
        return {
            restrict: 'AED',
            link: function(scope, elem, attrs) {
                elem[0].setAttribute('draggable','true');
                elem[0].ondragstart = function(event) {
                    event.dataTransfer.setData('text/html', elem[0].outerHTML);
                    event.dataTransfer.effectAllowed = 'copy';
                };
            }
        };
    })
    .directive('drp', function() {
        return {
            restrict: 'AED',
            link: function(scope, elem, attrs) {
                elem[0].ondrop = function(event) {
                    if (event.stopPropagation) {
                        event.stopPropagation();
                    }
                    var s = event.dataTransfer.getData('text/html');
                    elem[0].innerHTML += s;
                };
                elem[0].ondragover= function(e){
                    if(e.preventDefault){
                        e.preventDefault();
                    }
                }
            }
        };
    });
