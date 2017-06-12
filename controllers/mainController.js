 let mainview = angular.module("demo",['ngRoute'])
        mainview.controller("maincontroller",function($scope){

            $scope.welcomePage = function() {

               $scope.value = "None"
            }
        })


        