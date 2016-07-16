/**
 * Created by cdimizas on 16/7/2016.
 */

'use strict';
angular.module('lorawanMapApp')
    .controller('LorawanNetMapCtrl',
        ['$scope',
            function($scope) {

                $scope.$watch('full_address', function(v){
                    $scope.userDetails.address = v;
                });

                $scope.users = [];

                $scope.userDetails = {
                    nickname       : "",
                    address        : "",
                    nodeDetails    : "",
                    gatewayDetails : ""
                };

                $scope.userDetailsSubmit = function(){
                    console.log("USER", $scope.userDetails);
                };


                //   ************* WHAT MUST BE DONE ****************   //

                // search location on map by input field

                // create a function that

                // create function that receives a forms action

                // create function that saves input info to xml format

                // create function that appends map point according to input info (including on hover information)

                // create function that displays the range of a gateway
            }]);